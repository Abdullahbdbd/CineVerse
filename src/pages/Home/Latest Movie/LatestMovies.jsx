import React, { useEffect, useState } from "react";
import LatestMovie from "./LatestMovie";

const LatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    fetch("https://cineverse-server-rosy.vercel.app/latestMovie")
      .then((res) => res.json())
      .then((data) => setLatestMovies(data));
  }, []);

  return (
    <div className="my-20 px-4">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl text-white">Latest Movies</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        {latestMovies.map((movie) => (
          <LatestMovie key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
