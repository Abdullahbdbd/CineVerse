import React, { useContext } from "react";
import { FaStar, FaRegBookmark } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
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
    addedBy,
  } = useLoaderData();

  const handleDeleteMovie = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      background: "#111",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cineverse-server-rosy.vercel.app/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: `"${title}" has been removed.`,
                icon: "success",
                background: "#111",
                color: "#fff",
                confirmButtonColor: "#d33",
              });
              navigate("/movies");
            }
          });
      }
    });
  };

  const handleAddToWatchlist = async () => {
    if (!user) {
      return Swal.fire({
        title: "Login Required",
        text: "Please log in to add movies to your watchlist.",
        icon: "info",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#3085d6",
      });
    }

    const movieData = {
      email: user.email,
      movie: {
        _id,
        title,
        posterUrl,
        genre,
        rating,
        releaseYear,
      },
    };

    const res = await fetch(
      "https://cineverse-server-rosy.vercel.app/watchlist",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieData),
      }
    );

    const data = await res.json();
    if (res.ok) {
      Swal.fire({
        title: "Added!",
        text: `"${title}" has been added to your Watchlist.`,
        icon: "success",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#10b981",
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: data.message || "Something went wrong.",
        icon: "error",
        background: "#111",
        color: "#fff",
      });
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col py-20 px-4">
      <div className="w-full">
        {/* Movie Info Section */}
        <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={posterUrl}
              alt={title}
              className="rounded-xl shadow-lg w-[80%] md:w-[75%] md:h-[350px] object-cover"
            />
          </div>

          {/* Movie Info */}
          <div className="space-y-3 h-[350px]">
            {/* Title + Watchlist Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-2xl font-semibold">{title}</h1>
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>{releaseYear}</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar className="w-4 h-4 fill-yellow-400" /> {rating}
              </span>
              <span>{duration} min</span>
            </div>
            <p className="text-gray-400 text-sm">{genre}</p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Director:</span>{" "}
              {director}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Cast:</span> {cast}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Country:</span>{" "}
              {country}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">Language:</span>{" "}
              {language}
            </p>

            <button
              onClick={handleAddToWatchlist}
              className="bg-red-600 text-xs sm:text-sm px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition hover:bg-red-700"
            >
              <FaRegBookmark className="w-4 h-4" /> Add to Watchlist
            </button>

            {/* Update & Delete (only for added user) */}
            {addedBy === user?.email && (
              <div className="flex flex-row gap-2 mt-3">
                <Link
                  to={`/movies/update/${_id}`}
                  className="bg-gray-700 hover:bg-gray-500 text-xs sm:text-sm px-4 py-2 rounded-lg transition font-medium"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDeleteMovie(_id, title)}
                  className="bg-red-600 hover:bg-red-900 text-xs sm:text-sm px-4 py-2 rounded-lg transition font-medium text-center"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Plot Summary Section */}
        <div className="mt-10 text-gray-300 leading-relaxed border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Plot Summary
          </h2>
          <p className="text-sm">{plotSummary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
