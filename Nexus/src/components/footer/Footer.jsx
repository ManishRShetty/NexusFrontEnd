import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Events", path: "/events" },
        { name: "Projects", path: "/projects" },
        { name: "Join Us", path: "/join" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Gallery", path: "/gallery" },
        { name: "FAQ", path: "/faq" },
        { name: "Terms", path: "/terms" },
        { name: "Privacy", path: "/privacy" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Email: nexus@sit.ac.in", path: "mailto:nexus@sit.ac.in" },
        { name: "Phone: +91 1234567890", path: "tel:+911234567890" },
        { name: "Location: SIT Campus", path: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "github", url: "https://github.com/nexus-sit" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/company/nexus-sit" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/nexus.sit" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com/nexus_sit" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img src="/src/assets/logo.png" alt="Nexus Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-blue-400">NEXUS</span>
            </div>
            <p className="text-gray-400 text-sm">
              The Official Tech Club of Srinivas Institute of Technology
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-blue-400">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Nexus. All rights reserved.</p>
            <p className="mt-2">
              Made with <span className="text-red-500">♥</span> by Nexus Team
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;