import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Background Animated Circles */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-600/20 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-900/10 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-red-700/30 rounded-full blur-[2px]"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[9rem] font-extrabold tracking-widest bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent select-none"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-gray-400 text-lg mb-10 text-center max-w-xl"
      >
        The page you’re looking for seems lost in the cinematic void.
      </motion.p>

      {/* Home Button */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(220,38,38,0.6)" }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/"
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold tracking-wide shadow-md hover:shadow-red-500/40"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Floating Tagline */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-gray-400 text-sm"
      >
        🎬 CineVerse — Where Every Frame Tells a Story
      </motion.div>
    </section>
  );
};

export default ErrorPage;
