

const Filter = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md space-x-4">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       
        <select
          className="p-2 border border-gray-300  w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="pending">Pending</option>
        </select>
        <input
          type="date"
          className="p-2 border border-gray-300 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Date"
        />
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Import
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          +
        </button>
      </div>
    </div>
  );
};

export default Filter;
