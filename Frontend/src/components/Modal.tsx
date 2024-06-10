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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '90%', maxWidth: '1000px' }}>
        {children }
       
      </div>
    </div>,
    document.body
  );
};

export default Modal;
