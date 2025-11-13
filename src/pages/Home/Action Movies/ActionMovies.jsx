import React, { useEffect, useState } from "react";
import ActionMovie from "./ActionMovie";

const ActionMovies = () => {
  const [actionMovie, setActionMovie]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/actionMovies')
    .then(res=>res.json())
    .then(data=> setActionMovie(data))
  },[])

  return (
    <div className="mb-10 px-4">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl text-white">Action Movies</h2>
      </div>

      <ActionMovie movies={actionMovie} />
    </div>
  );
};

export default ActionMovies;
