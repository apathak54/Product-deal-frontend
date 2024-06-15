import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../config/axios';
import { useParams } from 'react-router-dom';

interface RowData {
  _id: string;
  companyName: string;
  clientName: string;
  email: string;
  createdAt: string;
  STATUS: boolean;
}


const Box: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {workspaceId } = useParams();
  const rowsPerPage = 10;
  let  i= 1 ;
  
  const fetchWorkspaceClient = async () => {
    try {
      const response = await axiosInstance.get(`/clients/${workspaceId}`);
      setData(response.data.clients);
      console.log(response.data.clients);
    } catch (error) {
      console.error('Error fetching workspaces:', error);
    }
  };

  const handleEdit = (row: RowData) => {
    console.log('Edit row:', row);
    // Add your edit logic here
  };

  const handleDelete = (row: RowData) => {
    console.log('Delete row:', row);
    // Add your delete logic here
  };

  const handleImportLeads = () => {
    console.log('Import leads');
    // Add your import leads logic here
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  useEffect(() => {

   fetchWorkspaceClient();
  }, [workspaceId]);

  return (
    <div className="bg-white w-[90%] mx-auto flex flex-col justify-center p-4 border-sm-gray">
      {data.length > 0 ? (
        <>
          <div className="overflow-x-auto w-full  mx-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    COMMODITY
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    TEMPLATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    SEND
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRows.map((row) => (
                  <tr key={row._id}>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md font-medium text-gray-900">{i++}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-gray-500">{row.clientName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold  text-md text-gray-500">{row.companyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{`${row.clientName} ${row.companyName}`}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500 ">
                      <button onClick={() => handleEdit(row)} className="text-yellow-500  ml-2  ">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(row)} className="ml-4 text-yellow-500">
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">{row.createdAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                      <div className={`w-3 h-3 ml-4 flex justify-center rounded-full ${row.STATUS ? 'bg-green-500' : 'bg-red-500'}`} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => console.log(row)} className="w-14 h-7 text-black text-center flex items-center justify-center rounded bg-yellow-500">
                        SEND
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-center  mt-4">
           
            <div className="text-sm text-gray-700">
              {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, data.length)} of {data.length}
            </div>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-2 ml-2 py-2  text-gray-700 font-bold"
            >
              &lt;
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-2 py-2  text-black font-bold "
            >
              &gt;
            </button>
          </div>
          </div>
          
        </>
      ) : (
        <div className="flex justify-center items-center h-64">
          <button onClick={handleImportLeads} className="px-4 py-2 bg-blue-500 text-white rounded">
            Import Leads
          </button>
        </div>
      )}
    </div>
  );
};

export default Box;
