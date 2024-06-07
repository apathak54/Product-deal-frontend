

const Appbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-center space-x-4">
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
      <div className="flex items-center space-x-6">
        <a href="#home" className="relative text-gray-600 hover:text-gray-900 group">
          Home
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </a>
        <a href="#features" className="relative text-gray-600 hover:text-gray-900 group">
          Features
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="relative text-gray-600 hover:text-gray-900 group">
          Pricing
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="relative text-gray-600 hover:text-gray-900 group">
          Contact
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
};

export default Appbar;
