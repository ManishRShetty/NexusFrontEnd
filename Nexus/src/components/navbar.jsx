// src/components/ui/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/projects", label: "Projects" },
    { to: "/join", label: "Join Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
    { to: "/auth", label: "Sign In" }
  ];

  return (
    <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo.png" alt="Nexus Logo" className="h-10 w-auto p-1" />
          <span className="text-xl font-bold text-blue-400">NEXUS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-satoshi">
          {menuItems.map(item => (
            <Link 
              key={item.to}
              to={item.to} 
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-gray-950 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <img src="src/assets/logo.png" alt="Nexus Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-blue-400">NEXUS</span>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="flex flex-col space-y-2">
                    {menuItems.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="px-6 py-3 text-lg hover:bg-gray-800 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t border-gray-800 p-4">
                  <Link
                    to="/register"
                    className="block w-full bg-blue-500 text-center py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
