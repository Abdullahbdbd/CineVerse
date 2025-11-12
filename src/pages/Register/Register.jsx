import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Email/password register
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /(?=.*[a-z])/;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    if (!upperCase.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowerCase.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((res) => {
        // Update Firebase profile
        updateUser({
          displayName: name,
          photoURL: photo,
        });

        // Set user in context
        setUser({ ...res.user, displayName: name, photoURL: photo });

        // Add user to database
        const newUser = {
          email: res.user.email,
          displayName: name, // use the name entered by user
          photoURL: photo,   // use the photo entered by user
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("User added:", data))
          .catch((err) => console.error(err));

        toast.success("Register Complete");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  // Google register
  const handleCreateGoogleUser = () => {
    googleSignIn()
      .then((res) => {
        setUser({
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
          email: res.user.email,
        });

        // Add user to database
        const newUser = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("Google user added:", data))
          .catch((err) => console.error(err));

        toast.success("Google Registration Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 mb-10">
      <div className="w-full max-w-sm bg-[#1b1b1b] shadow-2xl rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-50 h-50 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wide text-red-500 drop-shadow-lg">
          Register
        </h2>

        {/* Form */}
        <form onSubmit={handleCreateUser} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Your Photo URL"
              required
              className="w-full px-3 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              className="w-full px-3 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white text-lg shadow-lg transition-all"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center text-gray-500 mb-3">
            <span className="border-b border-gray-600 w-full mr-2"></span>
            <span className="text-sm">or</span>
            <span className="border-b border-gray-600 w-full ml-2"></span>
          </div>

          {/* Google Register */}
          <button
            type="button"
            onClick={handleCreateGoogleUser}
            className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-md"
          >
            <FaGoogle className="w-5 h-5" />
            Register with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
