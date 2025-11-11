import React from "react";
import { FaStar, FaPlay, FaHeart, FaListUl } from "react-icons/fa";

const AboutPlatform = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/14166248/media/6a02cbff7f464b3f44b7c3b9c43b7aa1.png"
            alt="MovieMaster UI"
            className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-justify">
          <h2 className="text-3xl font-bold mb-4">About CineVerse-</h2>
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
