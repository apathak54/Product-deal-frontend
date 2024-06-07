import React, { useState } from 'react';

interface ColumnOption {
  value: string;
  label: string;
}

const LeadForms: React.FC = () => {
  const [contactPerson, setContactPerson] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');

  const columnOptions: ColumnOption[] = [
    { value: 'contactPerson', label: 'Contact Person' },
    { value: 'company', label: 'Company' },
    { value: 'jobTitle', label: 'Job Title' },
    { value: 'industry', label: 'Industry' },
    { value: 'employeeCount', label: 'Employee Count' },
  ];

  const handleImport = () => {
    // Handle the import logic here
    console.log('Importing leads with the following mapping:');
    console.log({ contactPerson, company, jobTitle, industry, employeeCount });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Import Leads</h2>
      <p className="mb-4">You are about to import 25 leads.</p>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="contactPerson">
          Contact Person
        </label>
        <select
          id="contactPerson"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {columnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="company">
          Company
        </label>
        <select
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {columnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="jobTitle">
          Job Title
        </label>
        <select
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {columnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="industry">
          Industry
        </label>
        <select
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {columnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="employeeCount">
          Employee Count
        </label>
        <select
          id="employeeCount"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {columnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            // Reset all fields
            setContactPerson('');
            setCompany('');
            setJobTitle('');
            setIndustry('');
            setEmployeeCount('');
          }}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleImport}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default LeadForms;
