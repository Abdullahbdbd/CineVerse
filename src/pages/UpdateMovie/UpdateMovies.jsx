import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateMovies = () => {
  const {
    _id,
    posterUrl,
    title,
    genre,
    rating,
    releaseYear,
    duration,
    cast,
    director,
    language,
    country,
    plotSummary,
    addedBy,
    created_at,
  } = useLoaderData();

  const handleUpdateMovies = (e) => {
    e.preventDefault();
    const form = e.target;

    const newMovie = {
      title: form.title.value,
      genre: form.genre.value,
      releaseYear: parseInt(form.releaseYear.value),
      director: form.director.value,
      cast: form.cast.value,
      rating: parseFloat(form.rating.value),
      duration: parseInt(form.duration.value),
      posterUrl: form.posterUrl.value,
      language: form.language.value,
      country: form.country.value,
      plotSummary: form.plotSummary.value,
      created_at: created_at,
      addedBy: form.addedBy.value,
    };

    fetch(`https://cineverse-server-rosy.vercel.app/movies/update/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Movie:", data);

        Swal.fire({
          position: "center",
          title: "Updated!",
          text: `'${form.title.value}' has been updated`,
          icon: "success",
          background: "#111",
          color: "#fff",
          confirmButtonColor: "#d33",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex justify-center items-center py-10">
      <form
        onSubmit={handleUpdateMovies}
        className="bg-[#1a1a1a] p-8 rounded-2xl w-[90%] max-w-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Movie</h2>

        {/* Inputs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={title}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={genre}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Release Year</label>
            <input
              type="number"
              name="releaseYear"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={parseInt(releaseYear)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Director</label>
            <input
              type="text"
              name="director"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={director}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Cast</label>
            <input
              type="text"
              name="cast"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={cast}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={rating}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Duration (min)</label>
            <input
              type="number"
              name="duration"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={duration}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Poster URL</label>
            <input
              type="url"
              name="posterUrl"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={posterUrl}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Language</label>
            <input
              type="text"
              name="language"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={language}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Country</label>
            <input
              type="text"
              name="country"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
              required
              defaultValue={country}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Added By</label>
            <input
              type="email"
              name="addedBy"
              className="w-full bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none"
              required
              defaultValue={addedBy}
              readOnly
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
            required
            defaultValue={plotSummary}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-800 px-6 py-2 rounded-lg font-semibold text-white transition"
          >
            Update Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMovies;
