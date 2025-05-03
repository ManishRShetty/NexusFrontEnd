import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/navbar';
export default function Resources() {
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'documents', label: 'Documents' },
    { id: 'templates', label: 'Templates' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'tools', label: 'Tools' }
  ];

  const resources = [
    {
      title: "Nexus Club Brochure 2025",
      description: "Complete guide about Nexus Tech Club, its activities, and opportunities",
      type: "PDF",
      category: "documents",
      size: "2.5 MB",
      downloadUrl: "/resources/nexus-brochure-2025.pdf",
      requiresAuth: false,
      featured: true
    },
    {
      title: "Workshop Materials",
      description: "Resources from our technical workshops",
      type: "ZIP",
      category: "tutorials",
      size: "156 MB",
      downloadUrl: "/resources/workshop-materials.zip",
      requiresAuth: true
    },
    {
      title: "Project Templates",
      description: "Starter templates for various tech projects",
      type: "ZIP",
      category: "templates",
      size: "85 MB",
      downloadUrl: "/resources/project-templates.zip",
      requiresAuth: true
    },
    {
      title: "Learning Roadmaps",
      description: "Curated learning paths for different technologies",
      type: "PDF",
      category: "documents",
      size: "12 MB",
      downloadUrl: "/resources/learning-roadmaps.pdf",
      requiresAuth: true
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = async (resource) => {
    if (resource.requiresAuth && !isAuthenticated) return;

    try {
      setIsLoading(true);
      // Add download logic here
      const response = await fetch(resource.downloadUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = resource.title;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download resource. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-950 py-20">
        
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">Resources</h1>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Resource */}
          {resources.find(r => r.featured) && (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-blue-500/20 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Download Our Club Brochure
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Get detailed insights about Nexus Tech Club, our activities, achievements, 
                    and how you can be part of our journey.
                  </p>
                  <button
                    onClick={() => handleDownload(resources.find(r => r.featured))}
                    disabled={isLoading}
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition disabled:opacity-50"
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    )}
                    Download Brochure
                  </button>
                </div>
                <div className="w-full md:w-1/3">
                  <img 
                    src="/src/assets/brochure-preview.png" 
                    alt="Brochure Preview"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.filter(resource => !resource.featured).map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                  </div>
                  <span className="text-blue-400 text-sm font-mono px-2 py-1 bg-blue-500/10 rounded">
                    {resource.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{resource.size}</span>
                  {resource.requiresAuth && !isAuthenticated ? (
                    <Link
                      to="/auth"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Login to Download
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDownload(resource)}
                      disabled={isLoading}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition disabled:opacity-50"
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                      Download
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}