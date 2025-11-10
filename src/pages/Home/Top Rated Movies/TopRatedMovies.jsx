import React, { use } from "react";
import TopRatedMovie from "./TopRatedMovie";

const TopRatedMovies = ({ topMoviePromise }) => {
  const allMovies = use(topMoviePromise);

  return (
    <div className="my-20">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl">Top Rated Movies</h2>
      </div>

      <div className="grid grid-cols-5 gap-10">
        {allMovies.map((movie) => (
          <TopRatedMovie key={movie._id} movie={movie}></TopRatedMovie>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
