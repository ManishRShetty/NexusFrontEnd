import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const coreTeam = [
  {
    name: "Nikshith B Rao",
    role: "President",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF0c1mpWYheLw/profile-displayphoto-shrink_800_800/B4DZYVa.dBHIAo-/0/1744116116456?e=1751500800&v=beta&t=ETWxauAsM1lxasAeN8I5BXN74iTi7b4FoRF1oz89yq8",
    linkedin: "https://www.linkedin.com/in/nikshith-b-rao",
    github: "https://github.com/nikshithbr",
    about: "Leading Nexus towards innovation and excellence"
  },
  {
    name: "Mohammed Manies",
    role: "Vice President",
    image: "/team/manies.jpg",
    linkedin: "https://www.linkedin.com/in/mohammed-manies",
    github: "https://github.com/manies",
    about: "Coordinating club activities and technical initiatives"
  },
  {
    name: "Dhanush A",
    role: "Technical Head",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFosh7_Y5e3ig/profile-displayphoto-shrink_800_800/0/1719014767316?e=1751500800&v=beta&t=K2iCgrluQuZ3IPOuvjK-SJghuQVKK2d1xOSfc564WzQ",
    linkedin: "https://www.linkedin.com/in/dhanush-a",
    github: "https://github.com/dhanush",
    about: "Overseeing technical projects and workshops"
  },
  // Add more core team members as needed
];

export default function About() {
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
            About Nexus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
          >
            Empowering students through technology and innovation at Srinivas Institute of Technology
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-satoshi font-bold text-blue-400 mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To create a thriving ecosystem of tech innovators and leaders who drive positive change through technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-satoshi font-bold text-blue-400 mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To foster technical excellence, promote innovation, and build a strong community of skilled developers ready for industry challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">
            Meet Our Core Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-satoshi font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-blue-400 font-medium mb-2">{member.role}</div>
                  <p className="text-gray-400 mb-4">{member.about}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Encouraging creative solutions and cutting-edge technology exploration",
                icon: "💡"
              },
              {
                title: "Community",
                description: "Building a supportive environment for learning and growth",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in everything we do",
                icon: "⭐"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-satoshi font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}