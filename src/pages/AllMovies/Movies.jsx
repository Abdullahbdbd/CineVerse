import React, {  } from "react";
import Movie from "./Movie";

const Movies = ({ allMovies }) => {

  return (
    <div className="grid grid-cols-6 gap-x-3 gap-y-8">
      {allMovies.map((movie) => <Movie key={movie._id} movie={movie}></Movie>)}
    </div>
  );
};

export default Movies;
