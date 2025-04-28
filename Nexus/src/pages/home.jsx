import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-satoshi font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to Nexus
          </h1>
          <p className="text-xl text-gray-300 font-montserrat mb-8 max-w-2xl mx-auto">
            The Official Tech Club of Srinivas Institute of Technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition">
              Join Us
            </Link>
            <Link to="/events" className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg transition">
              Explore Events
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-satoshi font-bold text-blue-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-4">
                Empowering students through technology and innovation, creating a community of future tech leaders and entrepreneurs.
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Foster technical excellence and creativity
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Bridge the gap between academia and industry
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Create real-world project opportunities
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img 
                src="/mission-image.jpg" 
                alt="Students collaborating" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Technical Workshops",
                description: "Hands-on learning experiences with cutting-edge technologies",
                icon: "🚀"
              },
              {
                title: "Hackathons",
                description: "Competitive coding events to showcase your skills",
                icon: "💻"
              },
              {
                title: "Industry Connect",
                description: "Network with professionals and industry experts",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-satoshi font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">Latest Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Workshop 2025",
                date: "May 15, 2025",
                image: "/event1.jpg",
                description: "Deep dive into artificial intelligence and machine learning"
              },
              {
                title: "Hackathon 5.0",
                date: "June 1-2, 2025",
                image: "/event2.jpg",
                description: "48-hour coding challenge with amazing prizes"
              },
              {
                title: "Tech Talk Series",
                date: "Weekly",
                image: "/event3.jpg",
                description: "Industry experts sharing their experiences"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-400 text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-satoshi font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <Link to="/events" className="text-blue-400 hover:text-blue-300 transition">
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[ 
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Events Conducted" },
              { number: "20+", label: "Industry Partners" },
              { number: "100%", label: "Learning Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Kumar",
                role: "Final Year CSE",
                quote: "Joining Nexus was the best decision of my college life. The exposure and learning opportunities are incredible.",
                image: "/testimonial1.jpg"
              },
              {
                name: "Rahul Sharma",
                role: "Third Year ECE",
                quote: "The mentorship and guidance from seniors and industry experts helped me land my dream internship.",
                image: "/testimonial2.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-satoshi font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-gray-300 mb-8">Be part of the most vibrant tech community at SIT</p>
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg inline-block transition"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

