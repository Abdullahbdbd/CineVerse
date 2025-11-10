import React, { use } from 'react';
import ActionMovie from './ActionMovie';

const ActionMovies = ({actionMoviesPromise}) => {
    const actionMovie = use(actionMoviesPromise);
    return (
       <div className='mb-10'>
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl">Action Movies</h2>
      </div>

      <ActionMovie movies={actionMovie} />
    </div>
    );
};

export default ActionMovies;