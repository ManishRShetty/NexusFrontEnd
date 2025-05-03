import React, { useState } from "react"; // Add useState import
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from '../components/Testimonials';
import seekerIcon from '../assets/seeker-icon.png';
import learnerIcon from '../assets/learner-icon.png';
import mastermindIcon from '../assets/mastermind-icon.png';
import { useTypewriter } from '../hooks/useTypewriter';
import { useLoading } from '../contexts/LoadingContext';

function HomePage() {
  const [isPixelFont, setIsPixelFont] = useState(false);
  const [displayText, startTyping, isTyping] = useTypewriter(
    "Welcome to Nexus", 
    50
  );

  // Updated toggle font function
  const toggleFont = () => {
    setIsPixelFont(prev => !prev);
    startTyping('');
    
    // Update font family
    document.documentElement.style.fontFamily = isPixelFont 
      ? "Satoshi, system-ui, sans-serif"
      : "'Press Start 2P', cursive";
  };

  return (
    <div className={`min-h-screen bg-gray-950 ${isPixelFont ? 'font-pixel' : 'font-satoshi'}`}>
      
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden" 
        style={{ backgroundImage: "url('/src/assets/bgNew.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-full w-full px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-satoshi font-extrabold mb-6 bg-white bg-clip-text text-transparent min-h-[80px]">
            {isTyping ? displayText : "Welcome to Nexus"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-montserrat mb-8 max-w-2xl mx-auto">
            The Official Tech Club of Srinivas Institute of Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/join" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition text-center">
              Join Us
            </Link>
            <Link to="/events" className="w-full sm:w-auto border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg transition text-center">
              Explore Events
            </Link>
          </div>
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -bottom-10 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 cursor-pointer hover:scale-110 transition-transform group"
          onClick={toggleFont}
          title="Click me to change font!"
        >
          <img
            src="/src/assets/Nexy.png"
            alt="Tech character"
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500/80 px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Click to toggle pixel font!
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
                src="src/assets/student.jpeg" 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "AI Workshop 2025",
                date: "May 15, 2025",
                image: "https://img.freepik.com/premium-photo/rear-view-woman-using-mobile-phone_1048944-15361537.jpg?semt=ais_hybrid&w=740",
                description: "Deep dive into artificial intelligence and machine learning"
              },
              {
                title: "Hackathon 5.0",
                date: "June 1-2, 2025",
                image: "https://media.istockphoto.com/id/1213258486/vector/hackathon-banner-illustration-abstract-futuristic-background-with-glitch-effect-in-neon.jpg?s=612x612&w=0&k=20&c=coVk4_1Xe_GM2NmRVPAMemmreVs7NTo6PaRKe-g_Phk=",
                description: "48-hour coding challenge with amazing prizes"
              },
              {
                title: "Tech Talk Series",
                date: "Weekly",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSua60tQ-2e7gX5AgXwI7kn_Ym01QIAR9JA&s",
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">Technologies We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Web Development", icon: "🌐", tools: "React, Node.js, Next.js" },
              { name: "Mobile Development", icon: "📱", tools: "Flutter, React Native" },
              { name: "AI & ML", icon: "🤖", tools: "Python, TensorFlow, PyTorch" },
              { name: "Cloud Computing", icon: "☁️", tools: "AWS, Azure, GCP" },
              { name: "Cybersecurity", icon: "🔒", tools: "Ethical Hacking, Security+" },
              { name: "IoT", icon: "📡", tools: "Arduino, Raspberry Pi" },
              { name: "Blockchain", icon: "⛓️", tools: "Ethereum, Solidity" },
              { name: "UI/UX Design", icon: "🎨", tools: "Figma, Adobe XD" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-satoshi font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[ 
              { number: "20+", label: "Active Members" },
              { number: "3+", label: "Events Conducted" },
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

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Best Tech Club Award 2024",
                organization: "Karnataka Technical Institutions",
                description: "Recognized for outstanding contribution to technical education",
                icon: "🏆"
              },
              {
                title: "Smart India Hackathon Winners",
                organization: "Government of India",
                description: "First prize in Software Edition 2024",
                icon: "🥇"
              },
              {
                title: "Innovation Excellence",
                organization: "IEEE Student Branch",
                description: "Best Student Chapter in South India Region",
                icon: "⭐"
              },
              {
                title: "Industry Partnership Excellence",
                organization: "TechCorp India",
                description: "Best Industry-Academia Collaboration",
                icon: "🤝"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl border border-blue-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-satoshi font-bold text-white">{achievement.title}</h3>
                    <p className="text-blue-400">{achievement.organization}</p>
                  </div>
                </div>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Upcoming Activities Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12">Upcoming Activities</h2>
          <div className="space-y-6">
            { [
              {
                title: "Web3 Workshop Series",
                date: "Starting June 1, 2025",
                time: "Every Saturday, 2:00 PM",
                description: "Deep dive into blockchain, NFTs, and decentralized applications",
                tags: ["Blockchain", "Ethereum", "Smart Contracts"]
              },
              {
                title: "Summer of Code 2025",
                date: "June 15 - August 15, 2025",
                time: "Full-time program",
                description: "2-month intensive coding program with industry mentors",
                tags: ["Coding", "Mentorship", "Projects"]
              },
              {
                title: "Tech Leadership Summit",
                date: "July 10, 2025",
                time: "9:00 AM - 6:00 PM",
                description: "Annual leadership conference with industry leaders",
                tags: ["Leadership", "Networking", "Career"]
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-6 items-center"
              >
                <div className="w-full md:w-48 text-center md:text-left">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">{activity.date}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{activity.time}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-satoshi font-bold text-white mb-2 text-center md:text-left">{activity.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base text-center md:text-left">{activity.description}</p>
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {activity.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/activities/${activity.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full md:w-auto bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-6 py-2 rounded-lg transition text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier System Section */}
      <section className="py-20 bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-6">Membership Tiers</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Join our community at the level that fits your journey. Progress through the tiers as you grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            { [
              {
                name: "Seeker",
                price: "Free",
                description: "Perfect for beginners starting their tech journey",
                features: [
                  "Access to community forums",
                  "Guidance from Learner tier members",
                  "Basic workshop access",
                  "Community support",
                  "Learning resources"
                ],
                icon: seekerIcon,
                popular: false
              },
              {
                name: "Learner",
                price: "₹100/year",
                description: "For dedicated learners ready to contribute and grow",
                features: [
                  "All Seeker benefits",
                  "Paid project opportunities",
                  "Event discounts",
                  "Exclusive workshops",
                  "Mentorship sessions"
                ],
                icon: learnerIcon,
                popular: true
              },
              {
                name: "Mastermind",
                price: "Free",
                description: "Recognition for domain experts and achievers",
                features: [
                  "All Learner benefits",
                  "Project leadership roles",
                  "Mentorship opportunities",
                  "Speaker opportunities",
                  "Industry connections"
                ],
                icon: mastermindIcon,
                popular: false
              }
            ].map((tier, index) => (
              <Link 
                to={`/join/${tier.name.toLowerCase()}`} 
                key={index}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`bg-gray-800 rounded-xl p-4 sm:p-6 border ${
                    tier.popular 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30' 
                      : 'border-gray-700 hover:border-gray-600'
                  } relative transition-all hover:transform hover:scale-105`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <img 
                      src={tier.icon} 
                      alt={`${tier.name} tier`}
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-2xl font-satoshi font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-blue-400 text-xl font-bold mb-2">{tier.price}</div>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <span
                      className={`inline-block px-6 py-2 rounded-lg ${
                        tier.popular
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      Get Started
                    </span>
                  </div>
                </motion.div>
              </Link>
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

