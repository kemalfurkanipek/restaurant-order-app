import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-extrabold tracking-tight">Restaurant</a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Ana Sayfa</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Menü</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Rezervasyon</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">İletişim</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Sepet</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#" className="block text-white py-2 hover:bg-gray-800 transition duration-300 ease-in-out">Ana Sayfa</a>
          <a href="#" className="block text-white py-2 hover:bg-gray-800 transition duration-300 ease-in-out">Menü</a>
          <a href="#" className="block text-white py-2 hover:bg-gray-800 transition duration-300 ease-in-out">Rezervasyon</a>
          <a href="#" className="block text-white py-2 hover:bg-gray-800 transition duration-300 ease-in-out">İletişim</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Sepet</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
