import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const projectsData = [
  {
    title: "Nexus Website",
    category: "Web Development",
    description: "Official website for the Nexus Tech Club built with React and TailwindCSS",
    image: "/projects/nexus-website.jpg",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/nexus/website",
    demo: "https://www.nexusclubs.in",
    status: "Completed"
  },
  {
    title: "Smart Campus App",
    category: "Mobile Development",
    description: "Mobile application for campus navigation and event updates",
    image: "/projects/campus-app.jpg",
    tech: ["Flutter", "Firebase", "Google Maps API"],
    github: "https://github.com/nexus/smart-campus",
    status: "In Progress"
  },
  {
    title: "AI Study Companion",
    category: "AI/ML",
    description: "AI-powered study assistant for personalized learning",
    image: "/projects/ai-companion.jpg",
    tech: ["Python", "TensorFlow", "OpenAI API"],
    github: "https://github.com/nexus/study-ai",
    status: "In Development"
  }
  // Add more projects as needed
];

const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "IoT", "Blockchain"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-950">
      
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-satoshi font-bold text-center text-white mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
          >
            Explore the innovative projects created by our talented members
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-satoshi font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-satoshi font-bold text-white mb-6">
            Want to Contribute?
          </h2>
          <p className="text-gray-400 mb-8">
            Join our community and work on exciting projects with other talented developers
          </p>
          <a 
            href="/join"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg inline-block transition"
          >
            Join Nexus
          </a>
        </div>
      </section>
    </div>
  );
}