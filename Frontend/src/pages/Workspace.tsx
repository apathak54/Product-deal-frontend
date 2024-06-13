import React, { useState } from 'react';
import WorkspaceCard from './WorkspaceCard';

interface Workspace {
  id: number;
  title: string;
  description?: string;
  dateCreated: string;
}

const WorkspaceList: React.FC = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    { id: 1, title: 'Tria', description: 'No description', dateCreated: '06/07/2024 07:16:40' },
  ]);

  const handleAddWorkspace = () => {
    const newWorkspace: Workspace = {
      id: workspaces.length + 1,
      title: `New Workspace ${workspaces.length + 1}`,
      dateCreated: new Date().toLocaleString(),
    };
    setWorkspaces([...workspaces, newWorkspace]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Workspaces</h1>
      <div className="text-gray-600 mb-4">Sort: Alphabetically</div>
      <div className="flex flex-wrap">
        {workspaces.map(workspace => (
          <WorkspaceCard
            key={workspace.id}
            title={workspace.title}
            description={workspace.description}
            dateCreated={workspace.dateCreated}
          />
        ))}
        <WorkspaceCard isAddNew onAddNew={handleAddWorkspace} title="" dateCreated="" />
      </div>
    </div>
  );
};

export default WorkspaceList;
