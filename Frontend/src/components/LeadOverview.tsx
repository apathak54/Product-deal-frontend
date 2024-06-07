import React, { useState } from 'react';

interface LeadDetails {
  company: string;
  contactPerson: string;
  jobTitle: string;
  email: string;
  email2?: string;
  industry: string;
  employeeCount: number;
  languageSpoken: string;
  timeZone: string;
  date: string;
  notes: string;
  closedDeals: number;
  openDeals: number;
}

const LeadOverview: React.FC = () => {
  const [leadDetails, setLeadDetails] = useState<LeadDetails>({
    company: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    industry: "",
    employeeCount: 0,
    languageSpoken: "",
    timeZone: "",
    date: "",
    notes: "",
    closedDeals: 0,
    openDeals: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLeadDetails({
      ...leadDetails,
      [name]: value,
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">{leadDetails.contactPerson}</div>
          <div className="text-gray-500">{leadDetails.company}</div>
          <div className="text-gray-400 flex space-x-2 mt-1">
            <span className="cursor-pointer">LinkedIn</span>
            <span className="cursor-pointer">Twitter</span>
            <span className="cursor-pointer">Facebook</span>
            <span className="cursor-pointer">Edit</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-center">
          <div className="text-2xl">{leadDetails.closedDeals}</div>
          <div className="text-gray-500">Closed Deals</div>
        </div>
        <div className="text-center">
          <div className="text-2xl">{leadDetails.openDeals}</div>
          <div className="text-gray-500">Open Deals</div>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Create Deal</button>
      </div>

      <div className="space-y-2">
        <div>
          <label className="block text-gray-500">Job Title</label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="jobTitle"
            placeholder="Enter Job Title"
            value={leadDetails.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Email</label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="email"
            placeholder="Enter Email"
            value={leadDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Industry</label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="industry"
            placeholder="Enter Industry"
            value={leadDetails.industry}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Employee Count</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="employeeCount"
            placeholder="Enter Employee Count"
            value={leadDetails.employeeCount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Language Spoken</label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="languageSpoken"
            placeholder="Enter Language Spoken"
            value={leadDetails.languageSpoken}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Time Zone</label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="timeZone"
            placeholder="Enter Time Zone"
            value={leadDetails.timeZone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="date"
            value={leadDetails.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-gray-500">Notes</label>
          <textarea
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="notes"
            placeholder="Enter Notes"
            value={leadDetails.notes}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default LeadOverview;
