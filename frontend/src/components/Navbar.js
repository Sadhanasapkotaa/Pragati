import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800">Pragati</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-700 hover:text-gray-900">Read</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">Listen</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">Play</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Watch</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Settings</a>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className=" pt-2 pb-2 space-y-1 sm:px-3">
          <a href="#home" className="px-4 py-2 block text-gray-700 hover:text-gray-900 hover:bg-gray-300">Read</a>
          <a href="#about" className="px-4 py-2 block text-gray-700 hover:text-gray-900 hover:bg-gray-300">Listen</a>
          <a href="#services" className="px-4 py-2 block text-gray-700 hover:text-gray-900 hover:bg-gray-300">Play</a>
          <a href="#contact" className="px-4 py-2 block text-gray-700 hover:text-gray-900 hover:bg-gray-300">Watch</a>
          <a href="#contact" className="px-4 py-2 block text-gray-700 hover:text-gray-900 hover:bg-gray-300">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;