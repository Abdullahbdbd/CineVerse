import React, { use } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AddMovies = () => {
  const { user } = use(AuthContext);

  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const newMovie = {
      title: form.title.value,
      genre: form.genre.value,
      releaseYear: form.releaseYear.value,
      director: form.director.value,
      cast: form.cast.value,
      rating: parseFloat(form.rating.value),
      duration: parseInt(form.duration.value),
      posterUrl: form.posterUrl.value,
      language: form.language.value,
      country: form.country.value,
      plotSummary: form.plotSummary.value,
      created_at: new Date(),
      addedBy: user?.email
    };

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();      });
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleAddMovies}
        className="bg-[#1a1a1a] p-8 rounded-2xl w-[90%] max-w-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Movie</h2>

        {/* Inputs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Movie Title"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Action, Drama"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Release Year</label>
            <input
              type="number"
              name="releaseYear"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Year"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Director</label>
            <input
              type="text"
              name="director"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Director Name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Cast</label>
            <input
              type="text"
              name="cast"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Main Actors"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Rating"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Duration (min)</label>
            <input
              type="number"
              name="duration"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Minute"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Poster URL</label>
            <input
              type="url"
              name="posterUrl"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Language</label>
            <input
              type="text"
              name="language"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Language"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Country</label>
            <input
              type="text"
              name="country"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              placeholder="Country Name"
            />
          </div>
        </div>

        {/* Plot Summary */}
        <div className="mt-5">
          <label className="block text-sm mb-1">Plot Summary</label>
          <textarea
            name="plotSummary"
            rows="4"
            className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
            placeholder="Short movie description..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-800 px-6 py-2 rounded-lg font-semibold text-white transition"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
