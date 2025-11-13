import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" text-gray-300 border-t border-red-700/30">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo & About */}
        <div>
           <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wide ml-2"
        >
          <img
            src="https://img.icons8.com/?size=100&id=wd93opJhF4VC&format=png&color=ff0000"
            alt="CineVerse Logo"
            className="w-8 h-8"
          />
          <span className="text-red-600 hover:drop-shadow-[0_0_10px_#ef4444] transition-all">
            Cine<span className="text-white">Verse</span>
          </span>
        </Link>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Dive into a universe of movies. Discover, review, and enjoy
            cinematic experiences like never before.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-l-3 border-red-600 pl-1 w-fit">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/movies"
                className="hover:text-red-500 transition-colors"
              >
                Movies
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-l-3 border-red-600 pl-1 w-fit">
            Support
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-l-3 border-red-600 pl-1 w-fit">
            Follow Us
          </h3>
          <div className="flex space-x-5 mt-4">
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M18.244 2h3.349l-7.305 8.367L22 22h-6.558l-5.141-6.705L4.514 22H1.163l7.78-8.912L2 2h6.71l4.713 6.169L18.244 2zM17.1 19.805h1.853L7.045 4.11H5.056L17.1 19.805z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700/50 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-600 font-semibold">CineVerse</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
