import React from "react";
import { FaStar, FaPlay, FaHeart, FaListUl } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPlatform = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20 mt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image with animation */}
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-red-600 rounded-2xl blur-3xl opacity-20"></div>

          {/* Motion Image */}
          <motion.img
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/ea/63/fa/ea63fa76-f6e9-f627-6098-7e7f459bc908/source/512x512bb.jpg"
            alt="MovieMaster UI"
            className="relative rounded-2xl shadow-2xl w-[85%] h-[85%] object-cover "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-justify">
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-red-600 pl-1.5">
            About <span className="text-red-600">CineVerse-</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            CineVerse is your ultimate movie companion — explore top-rated
            films, discover hidden gems, and track your favorites effortlessly.
            Designed for movie lovers who value simplicity, speed, and style.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <FaStar className="text-red-600" /> Personalized Suggestions
            </li>
            <li className="flex items-center gap-3">
              <FaPlay className="text-red-600" /> Watch Trailers Instantly
            </li>
            <li className="flex items-center gap-3">
              <FaHeart className="text-red-600" /> Rate & Review
            </li>
            <li className="flex items-center gap-3">
              <FaListUl className="text-red-600" /> Organize Favorites
            </li>
          </ul>

          <button className="mt-8 bg-red-600 hover:bg-red-800 px-6 py-2 rounded-lg font-semibold transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
