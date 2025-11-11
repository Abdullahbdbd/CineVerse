import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyCollection from "./MyCollection";
import Swal from "sweetalert2";

const MyCollections = () => {
  const { user } = useContext(AuthContext);
  const [myColl, setMyColl] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myCollection?addedBy=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyColl(data);
        });
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
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-[70%] mx-auto mt-10">
      <h2 className="text-white text-2xl font-semibold mb-5">
        My Collection
      </h2>

      <div>
        {myColl.map((movie) => (
          <MyCollection
            key={movie._id}
            movie={movie}
            onDelete={handleDeleteMovie} 
          />
        ))}
      </div>
    </div>
  );
};

export default MyCollections;
