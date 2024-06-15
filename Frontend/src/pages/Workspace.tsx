import React, { useState, useEffect } from 'react';
import WorkspaceCard from '../components/WorkspaceCard';
import Modal from '../components/WorkSpaceModal';
import Appbar from '../components/Appbar';
import axiosInstance from '../config/axios'; // Ensure correct import path
import { useNavigate } from 'react-router-dom'; // Ensure correct import path

interface Workspace {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
}

const WorkspaceList: React.FC = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [originalWorkspaces, setOriginalWorkspaces] = useState<Workspace[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [sortOption, setSortOption] = useState('none');
  const navigate = useNavigate();

  const fetchWorkspaces = async () => {
    try {
      const response = await axiosInstance.get('/workspaces');
      setWorkspaces(response.data.workspace);
      setOriginalWorkspaces(response.data.workspace); // Store the original order
      console.log(response.data.workspace);
    } catch (error) {
      console.error('Error fetching workspaces:', error);
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const handleAddWorkspace = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveWorkspace = async (title: string, description?: string) => {
    try {
      const response = await axiosInstance.post('/workspaces/create', { workspaceName: title, description });
      if (response) {
        console.log('Workspace saved successfully');
        fetchWorkspaces(); // Fetch the updated list of workspaces
      }
      setShowModal(false); // Close modal after saving
    } catch (error) {
      console.error('Error saving workspace:', error);
    }
  };

  const handleWorkspaceClick = (id: string) => {
    navigate(`/deals/${id}`);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    if (selectedOption === 'alphabetically') {
      const sortedWorkspaces = [...workspaces].sort((a, b) => a.name.localeCompare(b.name));
      setWorkspaces(sortedWorkspaces);
    } else if (selectedOption === 'none') {
      setWorkspaces(originalWorkspaces);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Appbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Workspaces</h1>
        <div className="mb-4">
          <label className="text-gray-600 mr-2">Sort:</label>
          <select
            className="text-blue-600 underline"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="none">None</option>
            <option value="alphabetically">Alphabetically</option>
          </select>
        </div>
        <div className="flex flex-wrap  justify-center items-center gap-4">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace._id}
              title={workspace.name}
              description={workspace.description}
              createdAt={workspace.createdAt}
              onClick={() => handleWorkspaceClick(workspace._id)}
            />
          ))}
          
          <WorkspaceCard  isAddNew onAddNew={handleAddWorkspace} />

      
        </div>
        <Modal showModal={showModal} onClose={handleCloseModal} onSave={handleSaveWorkspace} />
      </div>
    </div>
  );
};

export default WorkspaceList;
