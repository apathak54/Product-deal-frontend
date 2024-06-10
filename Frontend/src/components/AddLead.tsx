import React from 'react';
import LeadDetails from './LeadDetails';
import EmailTemplate from './EmailTemplate';

const AddLead: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-center mb-6 bg-yellow-400 rounded-md w-full">ADD LEAD</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LeadDetails />
          <EmailTemplate />
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            CANCEL
          </button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLead;
