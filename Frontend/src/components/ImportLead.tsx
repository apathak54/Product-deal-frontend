import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImportLead: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle the uploaded files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    }
  });

  return (
    <div
      {...getRootProps()}
      className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 bg-white cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the files here ...</p>
      ) : (
        <p className="text-gray-600">
          Drag and drop an Excel sheet here, or click to browse
        </p>
      )}
    </div>
  );
};

export default ImportLead;
