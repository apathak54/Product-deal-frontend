import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImportLead: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [visible , setVisible] = useState(true)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, []);

  const handleCancel = () => {
    setFile(null);
    setShowAlert(false);
    setVisible(false)
  };

  const handleImport = () => {
    if (file) {
      // Implement import logic here
      console.log(`Importing file: ${file.name}`);
      // Reset file after import
      setFile(null);
      setShowAlert(false);
      alert('File imported successfully!');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'application/pdf': ['.pdf']
    }
  });
  if(!visible){
    return null ;
  }
  return (
    <div className="">
      <h1 className='font-semibold text-xl mb-4'>Import Leads</h1>
      {showAlert && (
        <div className="mb-4 p-4 border border-green-300 bg-green-100 text-green-800 rounded-md">
          File successfully uploaded!
        </div>
      )}
      <div
        {...getRootProps()}
        className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 bg-white cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here ...</p>
        ) : (
          <p className="text-gray-600">
            Drag and drop an Excel sheet, image, or PDF here, or click to browse
          </p>
        )}
      </div>
      {file && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-white shadow-sm">
          <p className="text-gray-600">File uploaded:</p>
          <p className="text-gray-800 font-semibold">{file.name}</p>
        </div>
      )}
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleImport}
          className="px-4 py-2 border border-blue-500 rounded-md text-white bg-blue-500 hover:bg-blue-600"
          disabled={!file}
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default ImportLead;
