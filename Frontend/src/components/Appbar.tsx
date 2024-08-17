import  { useState } from 'react';

const Appbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Remove the user's authentication token from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    window.location.href = '/';
};

  return (
    <div className="w-[90%] flex justify-between items-center px-6 py-4 bg-white rounded-2xl shadow-md">
      <div className="flex items-center justify-center space-x-4 h-[20%]">
        <button className="p-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
        <span className="text-xl font-semibold">Leads</span>
      </div>
      <div className="relative">
        <button className="rounded-full overflow-hidden" onClick={toggleDropdown}>
          <div className="flex items-center space-x-2 p-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              U
            </div>
            <svg
              className={`w-4 h-4 text-gray-600 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;
