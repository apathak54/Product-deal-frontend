import React, { useState, useRef } from 'react';
import axios from 'axios'; // Import axios for sending HTTP requests

const EmailForm: React.FC = () => {
  const [emailContent, setEmailContent] = useState('');
  const emailInputRef = useRef<HTMLDivElement>(null);
  const [isRichTextMode, setIsRichTextMode] = useState(true); // Track whether rich text mode is enabled

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text/html');
    document.execCommand('insertHTML', false, pastedData);
  };

  const handleSendEmail = async () => {
    try {
      // Replace with your API endpoint for sending emails
      const response = await axios.post('/api/send-email', {
        emailContent,
      });
      console.log('Email sent successfully:', response.data);
      // Optionally, you can show a success message or reset the form
      setEmailContent('');
      if (emailInputRef.current) {
        emailInputRef.current.textContent = '';
      }
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error states or display error message to user
      alert('Failed to send email. Please try again later.');
    }
  };

  const toggleRichTextMode = () => {
    setIsRichTextMode(!isRichTextMode);
    if (!isRichTextMode && emailInputRef.current) {
      // Clear plain text content when switching to rich text mode
      emailInputRef.current.textContent = '';
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Compose Email</h2>
      {isRichTextMode ? (
        <div
          className="w-full h-64 bg-white border border-gray-300 rounded-md shadow-sm overflow-y-auto"
          contentEditable
          onPaste={handlePaste}
          ref={emailInputRef}
        ></div>
      ) : (
        <textarea
          className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Type your email here..."
        ></textarea>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={toggleRichTextMode}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isRichTextMode ? 'Switch to Plain Text' : 'Switch to Rich Text'}
        </button>
        <button
          type="button"
          onClick={handleSendEmail}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
