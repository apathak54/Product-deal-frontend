import { useState } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axiosInstance from '../config/axios';

interface Props {
  onClose: () => void;
}

const AddLead = ({ onClose }: Props) => {
  const { workspaceId } = useParams();
  const [contactPerson, setContactPerson] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [commodity, setCommodity] = useState('');
  const [template, setTemplate] = useState('');

  const handleAddLead = async () => {
    if (!contactPerson) {
      alert('Contact Person is required');
      return;
    }
    if (!companyName) {
      alert('Company Name is required');
      return;
    }
    if (!email) {
      alert('Email is required');
      return;
    }
    if (!commodity) {
      alert('Commodity is required');
      return;
    }
    if (!template) {
      alert('Template is required');
      return;
    }

    const data = {
      clientName: contactPerson,
      companyName,
      email,
      commodity,
      template,
    };

    try {
      const response = await axiosInstance.post(`http://localhost:8080/api/clients/addOneClient/${workspaceId}`, data);
      console.log('Lead added successfully:', response.data);
      alert('Lead added successfully!');
      window.location.reload()
      onClose()
    } catch (error) {
      console.error('Error adding lead:', error);
      alert('Failed to add lead. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold text-xl mb-4">Add Lead</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Contact Person</label>
        <input
          type="text"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Commodity</label>
        <input
          type="text"
          value={commodity}
          onChange={(e) => setCommodity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Template</label>
        <JoditEditor
          value={template}
          onChange={(newContent) => setTemplate(newContent)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => {
            setContactPerson('');
            setCompanyName('');
            setEmail('');
            setCommodity('');
            setTemplate('');
            onClose();
          }}
          className="px-4 py-2 border border-gray-300 rounded text-gray-600 bg-white hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAddLead}
          className="px-4 py-2 border border-blue-500 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLead;
