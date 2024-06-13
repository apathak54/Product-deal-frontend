import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface WorkspaceCardProps {
  title: string;
  description?: string;
  dateCreated: string;
  isAddNew?: boolean;
  onAddNew?: () => void;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ title, description, dateCreated, isAddNew, onAddNew }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-48 bg-white shadow-lg rounded-lg p-4 m-2">
      {isAddNew ? (
        <button onClick={onAddNew} className="flex flex-col items-center justify-center w-full h-full text-gray-400">
          <FaPlus size={40} />
          <span className="mt-2">Add Workspace</span>
        </button>
      ) : (
        <>
          <img src="/path/to/logo.png" alt="Workspace Logo" className="w-16 h-16" />
          <h2 className="mt-4 text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{description || "No description"}</p>
          <p className="text-xs text-gray-400 mt-2">Created {dateCreated}</p>
        </>
      )}
    </div>
  );
};

export default WorkspaceCard;
