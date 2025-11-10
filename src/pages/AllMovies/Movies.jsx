import React, { use } from "react";
import Movie from "./Movie";

const Movies = ({ promise }) => {
  const allMovies = use(promise);

  return (
    <div className="grid grid-cols-6 gap-3">
      {allMovies.map((movie) => <Movie key={movie._id} movie={movie}></Movie>)}
    </div>
  );
};

export default Movies;
