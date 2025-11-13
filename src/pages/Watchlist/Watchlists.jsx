import React, { useContext, useEffect, useState } from "react";
import LoaderPage from "../../components/Spinner/LoaderPage";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";

const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetch(`https://cineverse-server-rosy.vercel.app/watchlist/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <LoaderPage />;

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-400">
        <p className="text-lg">⚠️ Please log in to view your Watchlist.</p>
        <Link
          to="/login"
          className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto py-20">
      <h2 className="text-2xl font-semibold text-white my-6 border-l-3 border-red-600 pl-2">
        My Watchlist
      </h2>

      {movies.length === 0 ? (
        <div className="text-gray-400 text-center py-10">
          You haven't added any movies yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div className="bg-[#111] text-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              {/* Poster */}
              <div className="relative">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-60 object-cover"
                />
                {/* Optional tag */}
                <span className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded">
                  {movie.genre}
                </span>
                {/* Rating */}
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded flex items-center gap-1 text-yellow-400 text-xs ">
                  <FaStar size={14} fill="currentColor" />
                  {movie.rating}
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="font-semibold text-sm truncate">
                  {movie.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  Released: {movie.releaseYear}
                </p>

                {/* Details Button */}
                <Link
                  to={`/movies/${movie._id}`}
                  className="w-full mt-3 inline-block text-center bg-red-600 hover:bg-red-900 text-white text-xs font-medium px-3 py-1.5 rounded transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
