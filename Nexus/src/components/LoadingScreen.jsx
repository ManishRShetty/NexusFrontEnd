import React from 'react'; 
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div 
          className="flex space-x-2 mb-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img
            src="/src/assets/Nexy.png"
            alt="Nexus Logo"
            className="w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          />
        </motion.div>
        
        <div className="flex space-x-2 justify-center mb-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                y: [-8, 0, -8],
                backgroundColor: ['#3B82F6', '#60A5FA', '#3B82F6']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        <motion.p
          className="text-blue-400 font-pixel text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Nexus...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;