import React from 'react';
import { motion } from 'framer-motion';

const testimonialData = [
  {
    name: "Dhanush A",
    role: "2nd Year CSBS",
    quote: "Joining Nexus was the best decision of my college life. The exposure and learning opportunities are incredible.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFosh7_Y5e3ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719014767316?e=1751500800&v=beta&t=K2iCgrluQuZ3IPOuvjK-SJghuQVKK2d1xOSfc564WzQ"
  },
  {
    name: "Allen Lobo",
    role: "2nd Year CSBS",
    quote: "Gained real-world project experience, advanced technical knowledge, and developed essential professional skills through practical learning",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFUu5BPX6N78w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718224507676?e=1751500800&v=beta&t=4DIj60TW9Mjs8wemEULn641D3sF4KZX5KS9pxG9HVTI"
  },
  {
    name: "Anush Kulal",
    role: "2nd Year CSBS",
    quote: "Being part of Nexus fuels my drive to innovate—join me in shaping the future!",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGnhL1bst8G4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701855883548?e=1751500800&v=beta&t=v1hs9OuddbCKwy8H171558U45lg3sbaeu7I5YZm0o0M"
  },
  {
    name: "Nikshith B Rao",
    role: "2nd Year CSBS",
    quote: "Nexus has not only enhanced my technical skills but also given me a sense of belonging. I'm genuinely excited for the experiences and growth that lie ahead.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF0c1mpWYheLw/profile-displayphoto-shrink_800_800/B4DZYVa.dBHIAo-/0/1744116116456?e=1751500800&v=beta&t=ETWxauAsM1lxasAeN8I5BXN74iTi7b4FoRF1oz89yq8"
  },
  {
    name: "Nishan",
    role: "2nd Year IS",
    quote: "Nexus is the place where ideas spark, friendships grow, and we turn fun projects into real achievements",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEwveEdc99tpw/profile-displayphoto-shrink_800_800/B4EZZ1JNrdHcAc-/0/1745722074167?e=1751500800&v=beta&t=gM7ANNW0BqGl__DliYZxEjAgZu3_pdmQcrAHjtgIFrk"
  },
  // {
  //   name: "Allen Lobo",
  //   role: "2nd Year CSBS",
  //   quote: "Gained real-world project experience, advanced technical knowledge, and developed essential professional skills through practical learning",
  //   image: "https://media.licdn.com/dms/image/v2/D5603AQFUu5BPX6N78w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718224507676?e=1751500800&v=beta&t=4DIj60TW9Mjs8wemEULn641D3sF4KZX5KS9pxG9HVTI"
  // },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
  >
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <div className="text-white font-bold font-satoshi">{testimonial.name}</div>
        <div className="text-gray-400 text-sm">{testimonial.role}</div>
      </div>
    </div>
    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-satoshi font-bold text-center text-blue-400 mb-12"
        >
          What Our Members Say
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;