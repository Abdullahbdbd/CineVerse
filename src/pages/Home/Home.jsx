import React from 'react';
import Banner from './Banner';
import TopRatedMovies from './Top Rated Movies/TopRatedMovies';

const topMoviePromise=fetch('http://localhost:3000/topMovies').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRatedMovies topMoviePromise={topMoviePromise}></TopRatedMovies>
        </div>
    );
};

export default Home;