import React from "react";
import { motion } from "framer-motion";

const LoaderPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white">
      {/* ---- Animated Background Gradient ---- */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(255,0,0,0.2), transparent 60%)",
            "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15), transparent 60%)",
            "radial-gradient(circle at 30% 30%, rgba(255,0,0,0.2), transparent 60%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* ---- LOGO / BRAND ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1
          animate={{ letterSpacing: ["0.1em", "0.25em", "0.1em"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl md:text-6xl font-bold tracking-wider"
        >
          <span className="text-red-600">Cine</span>
          <span className="text-white">Verse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-3 text-sm text-gray-400 tracking-widest"
        >
          Elevating your movie experience
        </motion.p>
      </motion.div>

      {/* ---- Progress Bar ---- */}
      <div className="z-10 mt-12 w-[220px] h-[4px] bg-gray-800 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="w-[50%] h-full bg-gradient-to-r from-red-600 via-white to-red-600 shadow-[0_0_20px_#ef4444]"
        />
      </div>

      {/* ---- Floating Particles (subtle effect) ---- */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-30"
            animate={{
              y: ["100vh", "-10vh"],
              x: ["0vw", "100vw"],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 6,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LoaderPage;
