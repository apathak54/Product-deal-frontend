import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../config/axios';
import { useParams } from 'react-router-dom';
import ImportLead from './ImportLead';
import Modal from './Modal';
import EmailPreview from './EmailPreview';

interface RowData {
  _id: string;
  companyName: string;
  clientName: string;
  email: string;
  template:string ;
  createdAt: string;
  STATUS: boolean;
}

const Box: React.FC = () => {
  const [showModal, setShowAddModal] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [selectedClient, setSelectedClient] = useState<RowData | null>(null);
  const [data, setData] = useState<RowData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const { workspaceId } = useParams();
  const rowsPerPage = 10;
  let i = 1;
  
  const fetchWorkspaceClient = async () => {
    try {
      const response = await axiosInstance.get(`/clients/${workspaceId}`);
      setData(response.data.clients);
      console.log(response.data.clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

 

  const handleDelete = async (row: RowData) => {
    try {
      const response = await axiosInstance.delete(`/clients/deletleoneclient/${workspaceId}/${row._id}`);
      console.log('Client deleted:', response.data);
      // Update the data state to reflect the deletion
      setData(data.filter(client => client._id !== row._id));
      alert('Client deleted successfully');
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Failed to delete client. Please try again.');
    }
  };

  const handleImportLeads = () => {
    setShowAddModal(true);
    console.log('Import leads');
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  const closeEmailPreview = () => {
    setShowEmailPreview(false);
  };

  const handleSendEmail = async (template: string) => {
    if (!selectedClient) return;

    const data = {
      template,
      clientId: selectedClient._id,
    };

    try {
      const response = await axiosInstance.post('http://localhost:8080/api/clients/sendEmail', data);
      console.log('Email sent successfully:', response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }

    setShowEmailPreview(false);
  };

  const handleSendClick = (client: RowData) => {
    setSelectedClient(client);
    setShowEmailPreview(true);
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
    <div className="relative bg-white w-[90%] mx-auto flex flex-col p-4 border-sm-gray">
      {data.length > 0 ? (
        <>
          <div className="overflow-x-auto w-full h-[75vh] mx-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Client Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">COMMODITY</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ACTIONS</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">DATE</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">SEND</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRows.map((row) => (
                  <tr key={row._id}>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md font-medium text-gray-900">{i++}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-gray-500">{row.clientName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.companyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{`${row.clientName} ${row.companyName}`}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500 ">
                      <button onClick={() => handleSendClick(row)} className="text-yellow-500 ml-2">
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
                      <button onClick={() => handleSendClick(row)} className="w-14 h-7 text-black text-center flex items-center justify-center rounded bg-yellow-500">
                        SEND
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="absolute bottom-0 w-full mx-auto flex justify-end mt-4 pr-8">
              <div className="text-sm text-center text-gray-700">
                {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, data.length)} of {data.length}
              </div>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-2 ml-2 py-2 text-gray-700 font-bold"
              >
                &lt;
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-2 py-2 text-black font-bold"
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center bg-white w-[90%] mx-auto flex flex-col p-4 border-sm-gray h-[75vh]">
          <button onClick={handleImportLeads} className="px-4 py-2 bg-blue-500 text-white rounded">
            Import Leads
          </button>
          <Modal show={showModal} onClose={closeModal}>
            <div>
              <ImportLead onClose={closeModal} />
            </div>
          </Modal>
        </div>
      )}
      <Modal show={showEmailPreview} onClose={closeEmailPreview}>
        <div>
          {selectedClient && (
            <EmailPreview
              onClose={closeEmailPreview}
              onSend={handleSendEmail}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Box;
