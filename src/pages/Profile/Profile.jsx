import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#111] text-white flex justify-center items-center py-20 px-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || "https://i.ibb.co/3fJbMmp/default-avatar.png"}
            alt={user?.displayName || "User"}
            className="w-32 h-32 rounded-full object-cover border-4 border-red-600"
          />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-bold mb-2">
         Name: {user?.displayName || "Anonymous User"}
        </h2>

        {/* User Email */}
        <p className="text-gray-400 mb-6">Email: {user?.email || "No email provided"}</p>

        {/* Optional Edit Profile Button */}
        <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
