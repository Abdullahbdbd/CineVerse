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
    <div className="bg-[#111] text-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center sm:items-stretch justify-between overflow-hidden hover:scale-[1.01] transition-transform duration-300 mb-4 p-3 sm:p-4">
      {/* Poster */}
      <div className="w-full sm:w-1/5 flex-shrink-0">
        <img
          src={posterUrl}
          alt={title}
          className="w-[150px] h-44 sm:h-48 object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1 sm:pl-5 mt-3 sm:mt-0">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm flex items-center gap-x-5 mt-1">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" size={14} /> {rating}
          </span>
          {duration}min
        </p>
        <div className="text-gray-400 text-sm mt-2 space-y-1">
          <p><span className="text-gray-500">Genre:</span> {genre}</p>
          <p><span className="text-gray-500">Release:</span> {releaseYear}</p>
          <p><span className="text-gray-500">Director:</span> {director}</p>
          <p><span className="text-gray-500">Cast:</span> {cast}</p>
          <p><span className="text-gray-500">Country:</span> {country}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row sm:flex-col gap-2 mt-3 sm:mt-0 sm:ml-4">
        <Link
          to={`/movies/update/${_id}`}
          className="bg-gray-700 hover:bg-gray-500 text-xs sm:text-sm px-4 py-2 rounded-lg transition font-medium"
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
