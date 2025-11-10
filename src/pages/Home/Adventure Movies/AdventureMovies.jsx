import React, { use } from "react";
import AdventureMovie from "./AdventureMovie";

const AdventureMovies = ({ adventureMoviesPromise }) => {
  const adventureMovies = use(adventureMoviesPromise);

  return (
    <div className='mb-10'>
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl">Adventure Movies</h2>
      </div>

      <AdventureMovie movies={adventureMovies} />
    </div>
  );
};

export default AdventureMovies;
