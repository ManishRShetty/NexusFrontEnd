// src/components/ui/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo.png" alt="Nexus Logo" className="h-10 w-auto p-1" />
          <span className="text-xl font-bold text-blue-400">NEXUS</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-satoshi">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/events" className="hover:text-blue-400 transition">Events</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/blog" className="hover:text-blue-400 transition">Blog</Link>
          <Link to="/join" className="hover:text-blue-400 transition">Join Us</Link>
          <Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button (optional - future) */}
        {/* You can add a hamburger menu here later */}
      </div>
    </nav>
  );
}
