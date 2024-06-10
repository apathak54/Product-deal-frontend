import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface RowData {
  id: number;
  CompanyName: string;
  Company: string;
  Email: string;
  DATE: string;
  STATUS: boolean;
}

const rows: RowData[] = [
  { id: 1, CompanyName: 'Snow', Company: 'Jon', Email: 'jon.snow@example.com', DATE: '2023-06-01', STATUS: true },
  { id: 2, CompanyName: 'Lannister', Company: 'Cersei', Email: 'cersei.lannister@example.com', DATE: '2023-06-02', STATUS: false },
  { id: 3, CompanyName: 'Lannister', Company: 'Jaime', Email: 'jaime.lannister@example.com', DATE: '2023-06-03', STATUS: true },
  { id: 4, CompanyName: 'Stark', Company: 'Arya', Email: 'arya.stark@example.com', DATE: '2023-06-04', STATUS: false },
  { id: 5, CompanyName: 'Targaryen', Company: 'Daenerys', Email: 'daenerys.targaryen@example.com', DATE: '2023-06-05', STATUS: true },
  { id: 6, CompanyName: 'Melisandre', Company: 'Melisandre', Email: 'melisandre@example.com', DATE: '2023-06-06', STATUS: false },
  { id: 7, CompanyName: 'Clifford', Company: 'Ferrara', Email: 'ferrara.clifford@example.com', DATE: '2023-06-07', STATUS: true },
  { id: 8, CompanyName: 'Frances', Company: 'Rossini', Email: 'rossini.frances@example.com', DATE: '2023-06-08', STATUS: false },
  { id: 9, CompanyName: 'Roxie', Company: 'Harvey', Email: 'harvey.roxie@example.com', DATE: '2023-06-09', STATUS: true },
  { id: 10, CompanyName: 'Greyjoy', Company: 'Theon', Email: 'theon.greyjoy@example.com', DATE: '2023-06-10', STATUS: false },
  { id: 11, CompanyName: 'Baratheon', Company: 'Stannis', Email: 'stannis.baratheon@example.com', DATE: '2023-06-11', STATUS: true },
  { id: 12, CompanyName: 'Tyrell', Company: 'Margaery', Email: 'margaery.tyrell@example.com', DATE: '2023-06-12', STATUS: false },
  { id: 13, CompanyName: 'Bolton', Company: 'Ramsay', Email: 'ramsay.bolton@example.com', DATE: '2023-06-13', STATUS: true },
  { id: 14, CompanyName: 'Martell', Company: 'Oberyn', Email: 'oberyn.martell@example.com', DATE: '2023-06-14', STATUS: false },
  { id: 15, CompanyName: 'Baelish', Company: 'Petyr', Email: 'petyr.baelish@example.com', DATE: '2023-06-15', STATUS: true },
  { id: 16, CompanyName: 'Tarly', Company: 'Samwell', Email: 'samwell.tarly@example.com', DATE: '2023-06-16', STATUS: false },
  { id: 17, CompanyName: 'Tarth', Company: 'Brienne', Email: 'brienne.tarth@example.com', DATE: '2023-06-17', STATUS: true },
  { id: 18, CompanyName: 'Sand', Company: 'Ellaria', Email: 'ellaria.sand@example.com', DATE: '2023-06-18', STATUS: false },
  { id: 19, CompanyName: 'Seaworth', Company: 'Davos', Email: 'davos.seaworth@example.com', DATE: '2023-06-19', STATUS: true },
  { id: 20, CompanyName: 'Mormont', Company: 'Jorah', Email: 'jorah.mormont@example.com', DATE: '2023-06-20', STATUS: false },
  // Add more rows as needed
];

const Box: React.FC = () => {
  const [data, setData] = useState<RowData[]>(rows);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

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
                    Company
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
                  <tr key={row.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md font-medium text-gray-900">{row.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-gray-500">{row.Company}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold  text-md text-gray-500">{row.CompanyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.Email}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{`${row.Company} ${row.CompanyName}`}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500 ">
                      <button onClick={() => handleEdit(row)} className="text-yellow-500  ml-2  ">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(row)} className="ml-4 text-yellow-500">
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">{row.DATE}</td>
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
