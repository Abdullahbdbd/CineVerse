import React, { useEffect, useState } from "react";
import DramaMovie from "./DramaMovie";

const DramaMovies = () => {
   const [dramaMovie, setDramaMovie] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/dramaMovies')
      .then(res=>res.json())
        .then((data) => setDramaMovie(data));
    }, []);

  return (
    <div className="mb-10 px-4">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl text-white">Drama Movies</h2>
      </div>

      <DramaMovie movies={dramaMovie} />
    </div>
  );
};

export default DramaMovies;
