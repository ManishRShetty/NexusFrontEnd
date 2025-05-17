import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  TrophyIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline';

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/' },
  { name: 'Events', icon: CalendarIcon, path: '/events' },
  { name: 'Members', icon: UserGroupIcon, path: '/members' },
  { name: 'Achievements', icon: TrophyIcon, path: '/achievements' }
];

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Nexus Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-400">Admin</span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <nav className="px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 flex items-center h-16 bg-gray-900 shadow-md px-4">
          <button
            className="md:hidden mr-4"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon className="w-6 h-6 text-gray-400" />
          </button>
          <h1 className="text-xl font-semibold text-white">
            {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
          </h1>
        </div>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}