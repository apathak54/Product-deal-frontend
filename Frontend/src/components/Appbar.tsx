

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
        <div className="rounded-full">U</div>
      </div>
    </div>
  );
};

export default Appbar;
