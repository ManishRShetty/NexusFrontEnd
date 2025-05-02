import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { FaGithub, FaLinkedin, FaInstagram, FaPen } from 'react-icons/fa';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Student",
    year: "2nd Year",
    branch: "CSBS",
    bio: "Passionate about web development and AI",
    tier: "Learner",
    technologies: [
      "React", "JavaScript", "Python", "TailwindCSS", "Node.js"
    ],
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe"
    },
    image: "/default-profile.jpg"
  });

  const [newImage, setNewImage] = useState(null);
  const [editData, setEditData] = useState({ name: "", bio: "", branch: "" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
      // Save changes
      setProfile(prev => ({
        ...prev,
        name: editData.name || prev.name,
        bio: editData.bio || prev.bio,
        branch: editData.branch || prev.branch,
        image: newImage || prev.image
      }));
      setNewImage(null);
    } else {
      // Load current data into edit fields
      setEditData({ name: profile.name, bio: profile.bio, branch: profile.branch });
    }
    setIsEditing(!isEditing);
  };

  const getTierColor = (tier) => {
    switch (tier.toLowerCase()) {
      case 'seeker': return 'bg-green-500';
      case 'learner': return 'bg-blue-500';
      case 'mastermind': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 bg-opacity-30 border border-gray-700 backdrop-blur-md rounded-xl p-8 shadow-2xl"
        >
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative group">
              <motion.img
                src={newImage || profile.image}
                alt={profile.name}
                className="w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity">
                  <span className="text-white">Change Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="text-3xl font-bold mb-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-400 w-full text-center md:text-left"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                  )}

                  <p className="text-gray-400">
                    {profile.role} • {profile.year} •{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.branch}
                        onChange={(e) => setEditData({ ...editData, branch: e.target.value })}
                        className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-400 w-36 text-center md:text-left"
                      />
                    ) : (
                      profile.branch
                    )}
                  </p>
                </div>

                <button
                  onClick={handleEditClick}
                  className="text-blue-500 hover:text-blue-300 text-xl p-2 transition"
                  title={isEditing ? "Save Changes" : "Edit Profile"}
                >
                  <FaPen />
                </button>
              </div>

              {/* Tier Badge */}
              <div className={`inline-flex items-center ${getTierColor(profile.tier)} px-4 py-1.5 rounded-full text-white text-sm mb-4 shadow-md transition-transform transform hover:scale-105`}>
                ⭐ {profile.tier} Tier
              </div>

              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                  className="text-gray-300 bg-transparent border border-gray-600 rounded-md w-full p-2 mb-4 focus:outline-none focus:border-blue-400"
                  rows="3"
                  placeholder="Update your bio..."
                />
              ) : (
                <p className="text-gray-300 mb-4">{profile.bio}</p>
              )}

              {/* Social Links */}
              <div className="flex gap-6 mb-6 justify-center md:justify-start">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
                >
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {profile.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm shadow-md hover:scale-105 transform transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
