import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyCollection from "./MyCollection";
import Swal from "sweetalert2";
import LoaderPage from "../../components/Spinner/LoaderPage";

const MyCollections = () => {
  const { user } = useContext(AuthContext);
  const [myColl, setMyColl] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://cineverse-server-rosy.vercel.app/myCollection?addedBy=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyColl(data))
        .catch((err) => console.error("Error loading collections:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  const handleDeleteMovie = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      background: "#111",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cineverse-server-rosy.vercel.app/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyColl((prev) => prev.filter((movie) => movie._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: `"${title}" has been removed.`,
                icon: "success",
                background: "#111",
                color: "#fff",
                confirmButtonColor: "#d33",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  if (loading) return <LoaderPage />;

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-25 text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left border-l-3 border-red-600 pl-2">
        My Collection:
      </h2>

      {myColl.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-gray-400 gap-4">
          <p className="text-lg">🎬 You haven't added any movies yet.</p>
          <a
            href="/addMovies"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
          >
            Add Your First Movie
          </a>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {myColl.map((movie) => (
            <MyCollection
              key={movie._id}
              movie={movie}
              onDelete={handleDeleteMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollections;
