import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const SubscribeAnimation = () => {
  return (
    <div className="mt-30">
        <section className="relative bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Moving Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-20"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Large Blurred Gradient Circles */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-red-900/10 blur-[170px] rounded-full"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-600/30 rounded-full"
          style={{
            width: `${15 + i * 5}px`,
            height: `${15 + i * 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Subscribe Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex justify-center mt-12"
      >
        <div className="relative w-full max-w-2xl flex flex-col sm:flex-row gap-4">
          {/* Glassmorphism Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 border border-white/20 transition-all shadow-lg hover:shadow-red-600/50"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 10px rgba(255,255,255,0.8)",
              boxShadow: "0 0 25px rgba(220,38,38,0.7)",
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-lg"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Film Icon Text */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm tracking-wide"
      >
        🎥 Crafted for a Seamless CineVerse Experience
      </motion.div>
    </section>
    </div>
  );
};

export default SubscribeAnimation;
