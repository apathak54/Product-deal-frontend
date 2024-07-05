import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import axiosInstance from '../config/axios';

interface EmailPreviewProps {
  onClose: () => void;
  workspaceId?: string;
  htmlContent : string ;
}

const EmailforEveryOne: React.FC<EmailPreviewProps> = ({ onClose, workspaceId , htmlContent }) => {
  
  const [template, setTemplate] = useState(htmlContent);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!template.trim()) {
      return; // Don't save empty templates
    }

    setSaving(true);

    try {
      const response = await axiosInstance.post(`/clients/${workspaceId}`, { template });
      console.log('Template saved successfully:', response.data);
      // Optionally handle success response if needed
     
    } catch (error) {
      console.error('Error saving template:', error);
      // Handle error (e.g., show error message)
    } finally {
      setSaving(false);
      onClose()
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Email Preview</h2>
      <JoditEditor
        value={template}
        onChange={newContent => setTemplate(newContent)}
      />
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded text-gray-600 bg-white hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className={`px-4 py-2 border rounded text-white ${saving ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default EmailforEveryOne;
