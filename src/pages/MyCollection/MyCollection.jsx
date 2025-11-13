import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const MyCollection = ({ movie, onDelete }) => {
  const {
    _id,
    posterUrl,
    title,
    genre,
    rating,
    releaseYear,
    duration,
    cast,
    director,
    country,
  } = movie;

  return (
    <div className="text-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center sm:items-stretch justify-between overflow-hidden hover:scale-[1.01] transition-transform duration-300 p-3 sm:p-4 gap-4">
      {/* Poster */}
      <div className="w-full sm:w-1/5 flex-shrink-0">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1 sm:pl-5 mt-3 sm:mt-0 text-sm sm:text-base">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-gray-300 flex flex-wrap items-center gap-x-3 mt-1">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" size={14} /> {rating}
          </span>
          <span>{duration}min</span>
        </p>
        <div className="text-gray-400 mt-2 space-y-1 text-xs sm:text-sm">
          <p>
            <span className="text-gray-500">Genre:</span> {genre}
          </p>
          <p>
            <span className="text-gray-500">Release:</span> {releaseYear}
          </p>
          <p>
            <span className="text-gray-500">Director:</span> {director}
          </p>
          <p>
            <span className="text-gray-500">Cast:</span> {cast}
          </p>
          <p>
            <span className="text-gray-500">Country:</span> {country}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row sm:flex-col gap-2 mt-3 sm:mt-0 sm:ml-4">
        <Link
          to={`/movies/update/${_id}`}
          className="bg-gray-700 hover:bg-gray-500 text-xs sm:text-sm px-4 py-2 rounded-lg transition font-medium text-center"
        >
          Update
        </Link>
        <button
          onClick={() => onDelete(_id, title)}
          className="bg-red-600 hover:bg-red-900 text-xs sm:text-sm px-4 py-2 rounded-lg transition font-medium text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyCollection;
