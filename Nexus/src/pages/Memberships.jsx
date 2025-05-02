import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import seekerIcon from '../assets/seeker-icon.png';
import learnerIcon from '../assets/learner-icon.png';
import mastermindIcon from '../assets/mastermind-icon.png';

const tiers = [
  {
    name: "Seeker",
    price: "Free",
    description: "Start your tech journey with guidance and support from our community.",
    longDescription: "Perfect for beginners and students who are taking their first steps into technology. Get mentored by experienced members and access fundamental learning resources.",
    icon: seekerIcon,
    benefits: [
      "Access to community Discord server",
      "Basic workshop participation",
      "Learning resource library access",
      "Community forum participation",
      "Guidance from Learner tier members",
      "Weekly tech newsletters",
      "Basic project participation"
    ],
    requirements: [
      "Be a student at SIT",
      "Enthusiasm to learn",
      "Commitment to participate in basic activities"
    ],
    color: "from-green-400 to-green-600"
  },
  {
    name: "Learner",
    price: "₹100/year",
    description: "Accelerate your growth with hands-on experience and exclusive opportunities.",
    longDescription: "For dedicated members who want to take their skills to the next level through practical experience and deeper involvement in club activities.",
    icon: learnerIcon,
    benefits: [
      "All Seeker benefits",
      "Paid project opportunities",
      "Priority workshop registration",
      "50% discount on paid events",
      "One-on-one mentorship sessions",
      "Access to exclusive workshops",
      "Certificate of participation",
      "Resume building assistance",
      "Industry expert networking"
    ],
    requirements: [
      "Complete 3 months as Seeker",
      "Participate in at least 2 club events",
      "Demonstrate basic technical skills",
      "Regular community contribution"
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Mastermind",
    price: "Free",
    description: "Lead, mentor, and shape the future of technology at SIT.",
    longDescription: "Recognition for outstanding members who have demonstrated expertise in their domain and are ready to lead and mentor others.",
    icon: mastermindIcon,
    benefits: [
      "All Learner benefits",
      "Project leadership roles",
      "Workshop conducting opportunities",
      "Mentorship program leadership",
      "Industry connection privileges",
      "Special recognition at events",
      "Direct industry referrals",
      "Club leadership opportunities"
    ],
    requirements: [
      "Minimum 6 months as Learner",
      "Demonstrated expertise in specific domain",
      "Successful project completions",
      "Strong leadership qualities",
      "Active community contribution"
    ],
    color: "from-purple-400 to-purple-600"
  }
];

export default function Memberships() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-satoshi font-bold text-center text-white mb-6"
          >
            Membership Tiers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
          >
            Choose the membership level that matches your journey in technology
          </motion.p>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-20">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-8`}>
                  <div className="flex items-center gap-6">
                    <img 
                      src={tier.icon} 
                      alt={`${tier.name} tier`}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h2 className="text-3xl font-satoshi font-bold text-white mb-2">
                        {tier.name}
                      </h2>
                      <div className="text-xl text-white/90">
                        {tier.price}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 text-lg mb-8">
                    {tier.longDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-satoshi font-bold text-white mb-4">
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-satoshi font-bold text-white mb-4">
                        Requirements
                      </h3>
                      <ul className="space-y-3">
                        {tier.requirements.map((req, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <span className="text-blue-400 mr-2">→</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Link
                      to={`/join/${tier.name.toLowerCase()}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition"
                    >
                      Apply for {tier.name} Tier
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-satoshi font-bold text-center text-blue-400 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I progress between tiers?",
                a: "Progression is based on your activity, contributions, and time spent in the current tier. Regular participation and skill development are key factors."
              },
              {
                q: "Can I switch between tiers?",
                a: "You can progress to a higher tier when meeting the requirements. Downgrades are possible but rare and assessed case by case."
              },
              {
                q: "Is the Learner tier fee refundable?",
                a: "The yearly fee for Learner tier is non-refundable but provides access to premium benefits and opportunities."
              },
              {
                q: "How long does the application process take?",
                a: "Applications are typically reviewed within 1-2 weeks. You'll receive updates via email about your application status."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-satoshi font-bold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}