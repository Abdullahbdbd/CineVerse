import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import LoaderPage from "../../components/Spinner/LoaderPage";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      let url = "http://localhost:3000/movies";

      const params = new URLSearchParams();
      if (selectedGenres.length > 0)
        params.append("genres", selectedGenres.join(","));
      if (minRating) params.append("minRating", minRating);
      if (maxRating) params.append("maxRating", maxRating);

      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setAllMovies(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleFilter = () => fetchMovies();

  // UI Starts
  if (loading) return <LoaderPage />;
  if (error)
    return (
      <div className="text-center text-red-500 py-10">
        ⚠️ {error}{" "}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  return (
    <div className="w-[95%] mx-auto py-20 text-white">
      {/* Filter Section */}
      <div className="bg-[#1a1a1a] p-4 rounded-lg mb-6 flex flex-wrap gap-4 justify-between">
        <div className="flex flex-wrap gap-3">
          {["Action", "Drama", "Comedy", "Horror", "Sci-Fi", "Adventure"].map(
            (genre) => (
              <label
                key={genre}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                />
                <span>{genre}</span>
              </label>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min Rating"
            className="input input-sm w-24 bg-black border border-gray-600"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Rating"
            className="input input-sm w-24 bg-black border border-gray-600"
            value={maxRating}
            onChange={(e) => setMaxRating(e.target.value)}
          />
          <button
            onClick={handleFilter}
            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Movies List */}
      {allMovies.length > 0 ? (
        <Movies allMovies={allMovies} />
      ) : (
        <p className="text-center text-gray-400 py-10">🎬 No movies found.</p>
      )}
    </div>
  );
};

export default AllMovies;
