import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../config/axios';
import { useParams } from 'react-router-dom';
import ImportLead from './ImportLead'; //to add leads through csv file
import Modal from './Modal'; //model structure
import EmailPreview from './EmailPreview';
import AddLead from './AddLead'; // to add leads and clients one at a time
import EmailforEveryOne from './AddEmailforEveryone';

interface RowData {
  _id: string;
  companyName: string;
  clientName: string;
  email: string;
  template: string;
  createdAt: string;
  emailCnt: number;
  status: string;
}

const Box: React.FC = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showModal, setShowAddModal] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [selectedClient, setSelectedClient] = useState<RowData | null>(null);
  const [data, setData] = useState<RowData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const [email, setEmail] = useState(false);


  const [sending, setSending] = useState(false);

  const handleSendEmailForEveryone = async () => {
    const confirm = window.confirm('Are you sure you want to send email for everyone , You have the option to send individually, we r sending your email in batch of 5 check once what email you wrote in edit section')
    if (!confirm) {
      return;
    }
    setSending(true);
    try {
      await axiosInstance.get(`/clients/send-emails/${workspaceId}`);
      console.log('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
    } finally {
      setSending(false);
    }
  };

  const rowsPerPage = 10;

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
      const confirmDelete = window.confirm('Are you sure you want to delete this client?');
      if (!confirmDelete) {
        return; // Cancel deletion if user clicks cancel in the confirmation dialog
      }
      const response = await axiosInstance.delete(`/clients/deletleOneclient/${workspaceId}/${row._id}`);
      console.log('Client deleted:', response.data);
      // Update the data state to reflect the deletion
      setData(data.filter(client => client._id !== row._id));
      alert('Client deleted successfully');
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Failed to delete client. Please try again.');
    }
  };

  const handleImportClick = () => {
    setShowImportModal(true);
  };


  const handleAddClick = () => {
    setShowAddModal(true);
  };
  const handleAddEmailforEveryone = () => {
    alert('if u save ur email in {{clientName}} this format eg.. Dear {{clientName}} then it will get replace by actual name')
    setEmail(true)
  }


  const closeModal = () => {
    setShowAddModal(false);
    setShowImportModal(false);
    setEmail(false)
  };

  const closeEmailPreview = () => {
    setShowEmailPreview(false);
  };

  const handleEditEmail = async (template: string) => {
    if (!selectedClient) return;

    const data = {
      template: template,
      clientId: selectedClient._id,
    };
    console.log(data);

    try {
      const response = await axiosInstance.post(`/clients/${workspaceId}/${selectedClient._id}/saveDraft`, data);
      console.log('Email saved successfully:', response.data);
      alert('Email saved successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to save email. Please try again.');
    }

    setShowEmailPreview(false);
  };

  const handleSendClick = (client: RowData) => {
    setSelectedClient(client);
    setShowEmailPreview(true);
  };
  const handleSend = async (row: RowData) => {
    try {

      const response = await axiosInstance.get(`/clients/${workspaceId}/${row._id}/sendEmail`);
      console.log('Email Sent ', response.data);
      // Update the data state to reflect the deletion

      alert('Email Sent Successfully');

    } catch (error) {
      console.error('Error Sending email', error);
      alert('Failed to send email. Please try again.');
    }
  }

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  //Filter data functionality
  const filteredData = data.filter((client: RowData) =>
    (client.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedStatus === '' ||
      (selectedStatus === 'open' && client.status) ||
      (selectedStatus === 'closed' && client.status === 'sent') ||
      (selectedStatus === 'pending' && client.status === 'pending')) &&
    ((selectedDate === '' || client.createdAt.includes(selectedDate)))
  );


  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  useEffect(() => {
    fetchWorkspaceClient();
  }, [workspaceId]);

  return (
    <div className="relative mt-8 bg-white w-[90%] mx-auto flex flex-col p-4 border-sm-gray">
      {data.length > 0 ? (
        <>
          <div className="w-[100%] p-2 pt-4 mt-2 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-200">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery} // bind input value to state
                onChange={handleSearchChange}
              />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="pending">Pending</option>
              </select>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="p-2 border border-gray-300 w-full md:w-[30%] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Date"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleSendEmailForEveryone}
                className="px-4 py-2 border border-blue-500 rounded text-white bg-blue-500 hover:bg-blue-600"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Emails'}
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleAddEmailforEveryone}
              >
                AddEmail
              </button>
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
          <Modal show={email} onClose={closeModal}>
            <div>
              <EmailforEveryOne onClose={closeModal} workspaceId={workspaceId} htmlContent={data[0].template} />
            </div>
          </Modal>
          <Modal show={showImportModal} onClose={closeModal}>
            <div>
              <ImportLead onClose={closeModal} />
            </div>
          </Modal>


          <Modal show={showModal} onClose={closeModal}>
            <div>
              <AddLead onClose={closeModal} />
            </div>
          </Modal>

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
                {currentRows.map((row, index) => (
                  <tr key={row._id}>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md font-medium text-gray-900">
                      {(currentPage - 1) * rowsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-gray-500">{row.clientName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.companyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{row.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-500">{`${row.clientName} ${row.companyName}`}</td>
                    <td className="px-6 py-4 space-x-4 whitespace-nowrap font-semibold text-md text-gray-500 ">
                      <button onClick={() => handleSendClick(row)} className="text-yellow-500 text-center">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(row)} className="text-center text-yellow-500">
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">{row.createdAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                      <div className={`w-3 h-3 ml-4 flex justify-center rounded-full ${row.status === 'sent' ? 'bg-green-500' : 'bg-red-500'}`} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleSend(row)}
                        className="w-16 h-7 text-black text-center flex items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                      >
                        <span className="mr-2">
                          {row.status === 'sent' ? 'Sent' : 'Send'}
                        </span>
                        <span className="  hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                          ({row.emailCnt})
                        </span>
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
              <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-2 ml-2 py-2 text-gray-700 font-bold">
                &lt;
              </button>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-2 py-2 text-black font-bold">
                &gt;
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center bg-white w-[90%] mx-auto flex flex-col p-6 border border-gray-300 rounded-lg shadow-md h-[75vh]">
          <div className="flex flex-col space-y-4">
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
              onClick={handleAddClick}
            >
              +
            </button>
            <button
              onClick={handleImportClick}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Import Leads
            </button>
          </div>
          <Modal show={showImportModal} onClose={closeModal}>
            <div className="p-4">
              <ImportLead onClose={closeModal} />
            </div>
          </Modal>
          <Modal show={showModal} onClose={closeModal}>
            <div className="p-4">
              <AddLead onClose={closeModal} />
            </div>
          </Modal>
        </div>

      )}

      <Modal show={showEmailPreview} onClose={closeEmailPreview}>
        <div>
          {selectedClient && (
            <EmailPreview
              htmlContent={selectedClient.template}
              onClose={closeEmailPreview}
              onSend={handleEditEmail}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Box;