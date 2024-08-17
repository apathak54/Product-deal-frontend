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
        className="flex flex-col items-center justify-center w-64 mt-2 h-64 text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-gray-800"
      >
        <FaPlus size={80} />
        <span className=" text-2xl font-semibold">Add Workspace</span>
      </button>
    );
  }

  return (
    <div
      className="relative  m-4 w-64 h-64  flex flex-col items-center  shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v6VSTmKfoifOj-LG9fq0EgHaE8%26pid%3DApi&f=1&ipt=352f964fc220b969ee6d00ad14ddb6ee6677269aa6c9750e2e4599bf2a4a39c5&ipo=images"
        alt="Workspace Logo"
        className="w-full h-full rounded-xl bg-black "
      />
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 group overflow-hidden">
        <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="text-xl text-white text-center font-bold ">{title}</div>
          {description && <div className="text-whit text-center mt-4">{description}</div>}
          <div className="text-white text-center text-sm mt-4 ">{new Date(createdAt!).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;
