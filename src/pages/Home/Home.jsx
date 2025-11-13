import React from 'react';
import Banner from './Banner/Banner';
import TopRatedMovies from './Top Rated Movies/TopRatedMovies';
import ActionMovies from './Action Movies/ActionMovies';
import DramaMovies from './Drama Movies/DramaMovies';
import AdventureMovies from './Adventure Movies/AdventureMovies';
import AboutPlatform from './About/AboutPlatform';
import Animation from './Animation/Animation';
import LatestMovies from './Latest Movie/LatestMovies';
import Statistics from './Statistics/Statistics';

const topMoviePromise=fetch('http://localhost:3000/topMovies').then(res=>res.json());

const Home = () => {
    return (
        <div>
           <div className='w-[95%] mx-auto'>
             <Banner></Banner>
            <Statistics></Statistics>
            <TopRatedMovies topMoviePromise={topMoviePromise}></TopRatedMovies>
            <LatestMovies></LatestMovies>
            <ActionMovies></ActionMovies>
            <AdventureMovies></AdventureMovies>
            <DramaMovies></DramaMovies>
            <AboutPlatform></AboutPlatform>
           </div>
            <Animation></Animation>
        </div>
    );
};

export default Home;