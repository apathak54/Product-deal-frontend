import  { useState } from 'react';
import Modal from './Modal';
import AddLead from './AddLead';
import ImportLead from './ImportLead';

const Filter = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleImportClick = () => {
    setShowImportModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowImportModal(false);
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="w-[90%] mt-4 mx-auto flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0 md:space-x-4 bg-gray-200">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
          <input
            type="date"
            className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Date"
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleImportClick}
          >
            Import
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleAddClick}
          >
            +
          </button>
        </div>
      </div>

      <Modal show={showImportModal} onClose={closeModal}>
        <div>
         
          {/* Add your import leads form or content here */}
          <ImportLead onClose={closeModal}/>
        </div>
      </Modal>

      <Modal show={showAddModal} onClose={closeModal}>
        <div>
          <AddLead onClose={closeModal}/>
        </div>

      </Modal>
    </div>
  );
};

export default Filter;
