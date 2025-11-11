import React from 'react';
import Banner from './Banner/Banner';
import TopRatedMovies from './Top Rated Movies/TopRatedMovies';
import ActionMovies from './Action Movies/ActionMovies';
import DramaMovies from './Drama Movies/DramaMovies';
import AdventureMovies from './Adventure Movies/AdventureMovies';
import AboutPlatform from './About/AboutPlatform';
import Animation from './Animation/Animation';
import LatestMovies from './Latest Movie/LatestMovies';

const topMoviePromise=fetch('http://localhost:3000/topMovies').then(res=>res.json());
const actionMoviesPromise=fetch('http://localhost:3000/actionMovies').then(res=>res.json());
const dramaMoviesPromise=fetch('http://localhost:3000/dramaMovies').then(res=>res.json());
const adventureMoviesPromise=fetch('http://localhost:3000/adventureMovies').then(res=>res.json());

const Home = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <Banner></Banner>
            <TopRatedMovies topMoviePromise={topMoviePromise}></TopRatedMovies>
            <LatestMovies></LatestMovies>
            <ActionMovies actionMoviesPromise={actionMoviesPromise}></ActionMovies>
            <AdventureMovies adventureMoviesPromise={adventureMoviesPromise}></AdventureMovies>
            <DramaMovies dramaMoviesPromise={dramaMoviesPromise}></DramaMovies>
            <AboutPlatform></AboutPlatform>
            <Animation></Animation>
        </div>
    );
};

export default Home;