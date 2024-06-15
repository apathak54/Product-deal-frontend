import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface WorkspaceCardProps {
  title?: string;
  description?: string;
  createdAt?: string;
  isAddNew?: boolean;
  onAddNew?: () => void;
  onClick?: () => void;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ title, description, createdAt, isAddNew, onAddNew, onClick }) => {
  if (isAddNew) {
    return (
      <button
        onClick={onAddNew}
        className="flex flex-col items-center justify-center w-64 h-64 text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-gray-400"
      >
        <FaPlus size={40} />
        <span className="mt-2 text-lg font-semibold">Add Workspace</span>
      </button>
    );
  }

  return (
    <div
      className="p-4 m-4 w-64 h-64 bg-white flex flex-col items-center border border-gray-300 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v6VSTmKfoifOj-LG9fq0EgHaE8%26pid%3DApi&f=1&ipt=352f964fc220b969ee6d00ad14ddb6ee6677269aa6c9750e2e4599bf2a4a39c5&ipo=images"
        alt="Workspace Logo"
        className="w-32 h-32 bg-black rounded-full mb-4"
      />
      <div className="text-xl font-bold text-gray-800 mb-2">{title}</div>
      {description && <div className="text-gray-600 mb-2 text-center">{description}</div>}
      <div className="text-gray-500 text-sm mt-auto">{new Date(createdAt!).toLocaleString()}</div>
    </div>
  );
};

export default WorkspaceCard;
