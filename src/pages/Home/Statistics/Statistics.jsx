import React, { useEffect, useState } from "react";
import { FaFilm, FaUsers, FaRegCommentDots } from "react-icons/fa";

const Statistics = () => {
//   const allUser = React.use(statisticsPromise);
//   const allMovies = React.use(allMoviesPromise);
  const [allUser, setAllUser]=useState([])
  const [allMovies, setAllMovies]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data =>setAllUser(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(res=>res.json())
    .then(data =>setAllMovies(data))
  },[])

  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Platform <span className="text-red-600">Statistics</span>
        </h2>

        {/* Statistics Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {/* Total Movies */}
          <div className="relative bg-black border border-red-600 p-6 rounded-3xl shadow-xl w-64 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black p-3 rounded-full shadow-lg">
              <FaFilm className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-gray-300 text-sm mb-4 uppercase tracking-widest">
              Total Movies
            </h3>
            <p className="text-white text-4xl font-extrabold">
              {allMovies.length}
            </p>
          </div>

          {/* Total Users */}
          <div className="relative bg-black border border-red-600 p-6 rounded-3xl shadow-xl w-64 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black p-3 rounded-full shadow-lg">
              <FaUsers className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-gray-300 text-sm mb-4 uppercase tracking-widest">
              Total Users
            </h3>
            <p className="text-white text-4xl font-extrabold">
              {allUser.length}
            </p>
          </div>

          {/* Total Reviews (Static/Fake) */}
          <div className="relative bg-black border border-red-600 p-6 rounded-3xl shadow-xl w-64 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black p-3 rounded-full shadow-lg">
              <FaRegCommentDots className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-gray-300 text-sm mb-4 uppercase tracking-widest">
              Total Reviews
            </h3>
            <p className="text-white text-4xl font-extrabold">128</p> {/* Static value */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
