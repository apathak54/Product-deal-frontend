import React from 'react';

const EmailTemplate: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">TEMPLATE</h2>
      <textarea
        className="w-full h-96 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={`Dear {{CONTACT_PERSON}},
I hope this email finds you well. My name is Akash Singh, and I represent Adiray Global Trade Private Limited, an established import and export company specializing in a wide range of industrial products, including high-quality steel.
I am reaching out to your company today because we understand the importance of reliable and versatile steel for various industrial applications. At Adiray Global Trade, we take pride in providing a comprehensive selection of steel products to meet your specific needs.
Our extensive inventory encompasses a wide variety of steel grades, shapes, and sizes. Whether you require standard hot-rolled coils, pre-cut plates, or high-strength structural beams, we have the resources and expertise to fulfill your order promptly and efficiently. Additionally, we can accommodate custom specifications to ensure a perfect fit for your project requirements.
I would be delighted to discuss how our steel products can contribute to the success of your operations. We are confident that our competitive pricing, exceptional quality control, and efficient logistics solutions will make Adiray Global Trade your trusted partner for all your steel needs.
Please let me know a convenient time for a call or meeting to further explore our offerings. Alternatively, if you prefer, I can provide you with a detailed product catalog and pricing information via email.
Thank you for considering Adiray Global Trade Pvt. Ltd. as your steel supplier. We look forward to the possibility of working together and contributing to your continued success.
Best regards,
Akash Singh
Phone: +91-8765432091
Email: akash@adirayglobal.com
Web: www.adirayglobal.com
Address: Bengaluru, Karnataka`}
        readOnly
      />
    </div>
  );
};

export default EmailTemplate;
