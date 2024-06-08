import React from 'react';

const LeadDetails: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">DETAILS</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Contact Person</label>
        <input
          type="text"
          value="ROBERT DSOUZA"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Company</label>
        <input
          type="text"
          value="INFOTECH"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          value="sales@infotech.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Commodity</label>
        <input
          type="text"
          value="STEEL, IRON & METAL"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          readOnly
        />
      </div>
    </div>
  );
};

export default LeadDetails;
