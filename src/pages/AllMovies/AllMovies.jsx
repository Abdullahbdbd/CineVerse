import React, { useEffect, useState } from 'react';
import Movies from './Movies';

const AllMovies = () => {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(res=>res.json())
        .then(data=>{
setAllMovies(data)
        })
    },[])
    return (
        <div className='w-[95%] mx-auto'>
           <div>

           </div>

           <div>
            <Movies allMovies={allMovies}></Movies>
           </div>
        </div>
    );
};

export default AllMovies;