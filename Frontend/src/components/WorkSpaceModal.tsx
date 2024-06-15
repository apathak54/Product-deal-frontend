import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
}

const WorkSpaceModal: React.FC<ModalProps> = ({ showModal, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
 

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave(title, description );
    onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Workspace</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
         
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkSpaceModal;
