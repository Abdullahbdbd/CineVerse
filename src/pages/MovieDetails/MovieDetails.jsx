import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const MovieDetails = () => {
  const {
    title,
    genre,
    releaseYear,
    director,
    cast,
    rating,
    duration,
    plotSummary,
    posterUrl,
    language,
    country,
  } = useLoaderData();

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col py-10 px-4">
      {/* Container width 60% */}
      <div className="w-full">
        {/* Movie Info Section */}
        <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={posterUrl}
              alt={title}
              className="rounded-xl shadow-lg w-[80%] md:w-[75%] object-cover"
            />
          </div>

          {/* Movie Info */}
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>{releaseYear}</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar className="w-4 h-4 fill-yellow-400" /> {rating}
              </span>
              <span>{duration} min</span>
            </div>

            <p className="text-gray-400 text-sm">{genre}</p>

            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Director:</span> {director}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Cast:</span> {cast}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Country:</span> {country}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">Language: </span> {language}
            </p>
          </div>
        </div>

        {/* Plot Summary Section */}
        <div className="mt-10 text-gray-300 leading-relaxed border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-3 text-white">Plot Summary</h2>
          <p className="text-sm">{plotSummary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
