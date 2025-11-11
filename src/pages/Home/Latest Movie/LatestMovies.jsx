import React, { use } from 'react';
import LatestMovie from './LatestMovie';

const LatestMovies = ({latestMoviesPromise}) => {
    const latestMovies = use(latestMoviesPromise);
    return (
         <div className="my-20">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl">Latest Movies</h2>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {latestMovies.map((movie) => (
          <LatestMovie key={movie._id} movie={movie}></LatestMovie>
        ))}
      </div>
    </div>
    );
};

export default LatestMovies;