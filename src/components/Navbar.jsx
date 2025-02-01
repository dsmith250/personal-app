import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">S1 Solutions</h1>
        <ul className="flex space-x-6 text-sm font-semibold">
          <li><a href="#header" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#developers" className="hover:text-blue-400 transition-colors">Developers</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
