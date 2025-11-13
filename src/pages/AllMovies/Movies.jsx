// Movies.jsx
import React from "react";
import Movie from "./Movie";

const Movies = ({ allMovies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
      {allMovies.map((movie) => (
        <Movie key={movie._id} movie={movie}></Movie>
      ))}
    </div>
  );
};

export default Movies;
