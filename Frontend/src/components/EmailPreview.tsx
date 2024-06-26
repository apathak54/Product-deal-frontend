import React, { useState } from 'react';
import JoditEditor from 'jodit-react';

interface EmailPreviewProps {
  onClose: () => void;
  onSend: (template: string) => void;
  htmlContent: string; // Assuming htmlContent is the HTML template string
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ onClose, onSend, htmlContent }) => {
  const [template, setTemplate] = useState(htmlContent); // Initialize template with htmlContent

  const handleSend = () => {
    onSend(template);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Email Preview</h2>
      <JoditEditor
        value={template}
        onChange={setTemplate}
      />
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded text-gray-600 bg-white hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 border border-blue-500 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EmailPreview;