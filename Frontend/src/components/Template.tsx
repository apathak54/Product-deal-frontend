import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const Template: React.FC = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(`
    <p>Dear <span class="text-blue-500">{{CONTACT PERSON}}</span>,</p>
    <p>I hope this email finds you well. My name is <span class="text-blue-500">Akash Singh</span>, and I represent Adiray Global Trade Private Limited, an established import and export company specializing in a wide range of industrial products, including high-quality steel.</p>
    <p>I am reaching out to your company today because we understand the importance of reliable and versatile steel for various industrial applications. At Adiray Global Trade, we take pride in providing a comprehensive selection of steel products to meet your specific needs.</p>
    <p>Our extensive inventory encompasses a wide variety of steel grades, shapes, and sizes. Whether you require standard hot-rolled coils, pre-cut plates, or high-strength structural beams, we have the resources and expertise to fulfill your order promptly and efficiently. Additionally, we can accommodate custom specifications to ensure a perfect fit for your project requirements.</p>
    <p>I would be delighted to discuss how our steel products can contribute to the success of your operations. We are confident that our competitive pricing, exceptional quality control, and efficient logistics solutions will make Adiray Global Trade your trusted partner for all your steel needs.</p>
    <p>Please let me know a convenient time for a call or meeting to further explore our offerings. Alternatively, if you prefer, I can provide you with a detailed product catalog and pricing information via email.</p>
    <p>Thank you for considering Adiray Global Trade Pvt. Ltd. as your steel supplier. We look forward to the possibility of working together and contributing to your continued success.</p>
    <p>Best regards,</p>
    <p><span class="text-blue-500">Akash Singh</span><br>
    Marketing Executive<br>
    Phone: <span class="text-blue-500">+91 9877000921</span><br>
    Email: <a href="mailto:akash@adirayglobal.com" class="text-blue-500">akash@adirayglobal.com</a><br>
    Web: <a href="http://www.adirayglobal.com" target="_blank" class="text-blue-500">www.adirayglobal.com</a><br>
    Address: <span class="text-blue-500">Bengaluru, Karnataka</span></p>
  `);

  const handleSave = () => {
    // Implement the functionality to handle the form submission and send the email.
    console.log("Email content saved:", content);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">ENTER TEMPLATE</h1>
        <div className="border border-gray-300 rounded-md p-4">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
          />
        </div>
        <div className="flex justify-between mt-6">
          <button 
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded" 
            onClick={() => setContent('')}>
            CANCEL
          </button>
          <button 
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded" 
            onClick={handleSave}>
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
