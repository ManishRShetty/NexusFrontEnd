import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Navbar from '../components/navbar';
import logo from '../assets/logo.png'; // Make sure logo exists in assets folder
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    usn: '',
    gender: '', // Add this line
    branch: '',
    year: '',
    github: '',
    linkedin: '',
    instagram: '',
    interests: [],
    bio: ''
  });

  const [newInterest, setNewInterest] = useState('');
  const newInterestRef = useRef(null);
  const navigate = useNavigate();

  const techInterests = [
    // Frontend
    "React", "Angular", "Vue.js", "Next.js", "TypeScript",
    // Backend
    "Node.js", "Python", "Java", "Spring Boot", "Django",
    // Mobile
    "Flutter", "React Native", "Android", "iOS", "Kotlin",
    // Data & AI
    "Machine Learning", "Data Science", "Deep Learning", "NLP", "Computer Vision",
    // Cloud & DevOps
    "AWS", "Azure", "Docker", "Kubernetes", "CI/CD",
    // Other
    "Blockchain", "UI/UX Design", "Web3", "IoT", "Cybersecurity"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your authentication logic here
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleAddNewInterest = (e) => {
    e.preventDefault();
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
      newInterestRef.current?.focus();
    }
  };

  const handleJoinClick = () => {
    navigate('/memberships'); // Redirect to membership tiers page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-xl p-8 border border-gray-700"
        >
          {/* Add Logo */}
          <div className="flex justify-center mb-6">
            <motion.img
              src={logo}
              alt="Nexus Logo"
              className="h-20 w-auto"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back!' : 'Join Nexus'}
            </h1>
            <p className="text-gray-400">
              {isLogin 
                ? 'Sign in to continue your journey'
                : 'Begin your tech journey with us'
              }
            </p>
          </div>

          {isLogin ? (
            // Sign In Form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
              >
                Sign In
              </button>
            </form>
          ) : (
            // Join Options
            <div className="space-y-8">
              <p className="text-gray-300 text-center">
                Choose how you want to join Nexus:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={handleJoinClick}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white hover:scale-105 transition"
                >
                  <h3 className="text-xl font-bold mb-2">Join as New Member</h3>
                  <p className="text-sm opacity-90">
                    Explore our membership tiers and become part of our community
                  </p>
                </button>

                <button
                  onClick={() => setIsLogin(true)}
                  className="p-6 bg-gray-700 rounded-xl text-white hover:bg-gray-600 transition"
                >
                  <h3 className="text-xl font-bold mb-2">Already a Member?</h3>
                  <p className="text-sm opacity-90">
                    Sign in to access your account
                  </p>
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {isLogin 
                ? "New to Nexus? Join us" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}