import React from 'react';
import { logo } from "../../assets"

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 px-6 py-3 bg-black/80 border border-gray-300 rounded-full shadow-lg backdrop-blur-sm">
      <ul className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-lg font-semibold text-white">
        <li><img src={logo} className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 min-w-[2rem]" alt="Logo"/></li>
        <li><a href="#about" className="inline-block transform transition-transform duration-200 hover:scale-120 hover:underline">About</a></li>
        <li><a href="#projects" className="inline-block transform transition-transform duration-200 hover:scale-120 hover:underline">Projects</a></li>
        <li><a href="#contact" className="inline-block transform transition-transform duration-200 hover:scale-120 hover:underline ">Contact</a></li>
      </ul>
    </nav>
  );
}
