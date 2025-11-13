import React, { useEffect, useState } from "react";
import AdventureMovie from "./AdventureMovie";

const AdventureMovies = () => {
  const [adventureMovies, setAdventureMovies] = useState([]);

  useEffect(() => {
    fetch("https://cineverse-server-rosy.vercel.app/adventureMovies")
      .then((res) => res.json())
      .then((data) => setAdventureMovies(data));
  }, []);

  return (
    <div className="mb-10 px-4">
      <div className="mb-5 border-l-3 border-red-600">
        <h2 className="pl-2 font-medium text-xl text-white">
          Adventure Movies
        </h2>
      </div>

      <AdventureMovie movies={adventureMovies} />
    </div>
  );
};

export default AdventureMovies;
