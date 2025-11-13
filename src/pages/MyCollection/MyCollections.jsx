import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyCollection from "./MyCollection";
import Swal from "sweetalert2";
import LoaderPage from "../../components/Spinner/LoaderPage";

const MyCollections = () => {
  const { user } = useContext(AuthContext);
  const [myColl, setMyColl] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧩 Load user's added movies
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myCollection?addedBy=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyColl(data))
        .catch((err) => console.error("Error loading collections:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  // Delete movie function
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
        fetch(`http://localhost:3000/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = myColl.filter((movie) => movie._id !== id);
              setMyColl(remaining);

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

  // Loading
  if (loading) {
    return <LoaderPage />;
  }

  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-25 text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left border-l-3 border-red-600 pl-2">
        My Collection:
      </h2>

      {myColl.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-gray-400">
          <p className="text-lg mb-4">🎬 You haven't added any movies yet.</p>
          <a
            href="/addMovies"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
          >
            Add Your First Movie
          </a>
        </div>
      ) : (
        <div className="grid gap-5">
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
