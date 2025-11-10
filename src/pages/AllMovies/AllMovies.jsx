import React from 'react';
import Movies from './Movies';

const promise = fetch('http://localhost:3000/movies').then(res=>res.json());

const AllMovies = () => {
    return (
        <div className='w-[95%] mx-auto'>
           <div>

           </div>

           <div>
            <Movies promise={promise}></Movies>
           </div>
        </div>
    );
};

export default AllMovies;