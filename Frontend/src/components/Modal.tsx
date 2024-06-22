import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, children }) => {
  if (!show) {
    return null;
  }
 

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl mx-auto rounded p-4 overflow-y-auto max-h-[90vh]" >
        {children }
       
      </div>
    </div>,
    document.body
  );
};

export default Modal;
