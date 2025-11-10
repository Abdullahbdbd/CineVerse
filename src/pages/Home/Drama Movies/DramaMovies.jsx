import React, { use } from "react";
import DramaMovie from "./DramaMovie";

const DramaMovies = ({ dramaMoviesPromise }) => {
  const dramaMovie = use(dramaMoviesPromise);
  return (
    <div className='mb-10'>
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl">Drama Movies</h2>
      </div>

      <DramaMovie movies={dramaMovie} />
    </div>
  );
};

export default DramaMovies;
