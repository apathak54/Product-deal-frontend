import React, { useState } from 'react';
import axiosInstance from '../config/axios';
import { useParams } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

const ImportLead = ({ onClose  }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { workspaceId } = useParams<{ workspaceId: string }>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAlertMessage('File selected successfully!');
      setTimeout(() => setAlertMessage(null), 3000);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setAlertMessage(null);
    onClose();
  };

  const handleImport = async () => {
    if (file) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('csvfile', file); // Use 'upload-csv' instead of 'file'
  
      try {
        const response = await axiosInstance.post(`/clients/${workspaceId}/upload-csv`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
        setAlertMessage('File imported successfully!');
        setFile(null);

        onClose();
       
      } catch (error) {
        console.error('Error uploading file:', error);
        setAlertMessage('Failed to upload file. Please try again.');
      } finally {
        setIsLoading(false);
        setTimeout(() => setAlertMessage(null), 3000);
      }
    }
  };
  

  return (
    <div className="import-lead-container">
      <h1 className="font-semibold text-xl mb-4">Import Leads</h1>
      {alertMessage && (
        <div className="mb-4 p-4 border border-green-300 bg-green-100 text-green-800 rounded-md">
          {alertMessage}
        </div>
      )}
      <div className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 bg-white cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload-input"
        />
        <label htmlFor="file-upload-input" className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-gray-600">
            Click to select a CSV or Excel file
          </p>
        </label>
      </div>
      {file && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-white shadow-sm">
          <p className="text-gray-600">File selected:</p>
          <p className="text-gray-800 font-semibold">{file.name}</p>
        </div>
      )}
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={handleCancel}
          className="px-4 py-2  rounded-md text-gray-900 font-medium text-2xl bg-white hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleImport}
          className={`px-4 py-2 border border-blue-500 rounded-xl text-white bg-[#6F00FF] hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!file || isLoading}
        >
          {isLoading ? 'Importing...' : 'Import'}
        </button>
      </div>
    </div>
  );
};

export default ImportLead;