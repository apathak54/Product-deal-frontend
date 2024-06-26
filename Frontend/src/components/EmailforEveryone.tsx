import React, { useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import axiosInstance from '../config/axios';

interface EmailPreviewProps {
  onClose: () => void;
  workspaceId? : string 
}

const EmailforEveryOne: React.FC<EmailPreviewProps> = ({ onClose , workspaceId }) => {

  const [template, setTemplate] = useState(''); 
  const [saving , setSaving] = useState(false)
  useEffect(() => {
    const saveTemplate = async () => {
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
        
      }
    };

    if (saving) {
      saveTemplate();
    }
  }, [saving, template]);

  const handleSave = () => {
    setSaving(true); // Trigger useEffect to save template
    onClose();
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
          onClick={handleSave}
          className="px-4 py-2 border border-blue-500 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EmailforEveryOne;