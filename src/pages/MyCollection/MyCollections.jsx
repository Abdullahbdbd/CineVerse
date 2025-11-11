import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyCollection from "./MyCollection";

const MyCollections = () => {
  const { user } = use(AuthContext);
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

  return (
    <div className="w-[70%] mx-auto mt-10">
        <h2>My Collection</h2>

        <div>
            {
                myColl.map(movie=><MyCollection key={movie._id} movie={movie}></MyCollection>)
            }
        </div>
    </div>
  );
};

export default MyCollections;
