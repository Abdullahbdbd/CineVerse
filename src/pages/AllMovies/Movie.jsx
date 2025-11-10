import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Movie = ({ movie }) => {
  const { _id, title, posterUrl, rating, releaseYear, genre } = movie;

  return (
      <div className="">
        <div className="bg-[#111] text-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
          {/* Poster */}
          <div className="relative">
            <img
              src={posterUrl}
              alt={title}
              className="w-full h-60 object-cover"
            />
            {/* Optional tag */}
            <span className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded">
             {genre}
            </span>
            {/* Rating */}
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded flex items-center gap-1 text-yellow-400 text-xs ">
              <FaStar size={14} fill="currentColor" />
              {rating}
            </div>
          </div>

          {/* Info */}
          <div className="p-3">
            <h3 className="font-semibold text-sm truncate">{title}</h3>
            <p className="text-gray-500 text-xs mt-1">
              Released: {releaseYear}
            </p>

            {/* Details Button */}
            <Link
              to={`/movies/${_id}`}
              className="w-full mt-3 inline-block text-center bg-red-600 hover:bg-red-900 text-white text-xs font-medium px-3 py-1.5 rounded transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Movie;
