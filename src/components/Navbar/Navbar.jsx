import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="nav-link">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/myCollection" className="nav-link">
          My Collection
        </NavLink>
      </li>
      <li>
        <NavLink to="/addMovies" className="nav-link">
          Add Movies
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10 shadow-lg px-4">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2">
        {/* Hamburger menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black/80 rounded-box mt-3 p-2 shadow-lg w-52"
          >
            {links}
            {user && (
              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-2 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white transition-all"
                >
                  Log Out
                </button>
              </li>
            )}
            {!user && (
              <li className="flex gap-2 mt-2">
                <NavLink
                  to="/login"
                  className="flex-1 px-2 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white text-center transition-all"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="flex-1 px-2 py-1 text-sm rounded-md border border-red-600 hover:bg-red-600 hover:text-white text-red-500 text-center transition-all"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wide ml-2"
        >
          <img
            src="https://img.icons8.com/?size=100&id=wd93opJhF4VC&format=png&color=ff0000"
            alt="CineVerse Logo"
            className="w-8 h-8"
          />
          <span className="text-red-600 hover:drop-shadow-[0_0_10px_#ef4444] transition-all">
            Cine<span className="text-white">Verse</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center - Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3 ml-auto">
        {loading && (
          <span className="loading loading-spinner text-error"></span>
        )}
        {!loading && user && (
         <img
         className="w-[35px] h-[35px] rounded-full"
            src={user?.photoURL || user?.image || "https://i.ibb.co/3fJbMmp/default-avatar.png"}
            alt={'Not Found'}
            title={user?.displayName || user?.name || "User"}
          />
        )}

        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="hidden lg:inline-block px-4 py-1.5 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white transition-all"
            >
              Log Out
            </button>
          </>
        ) : (
          // Desktop logged-out buttons
          <div className="hidden lg:flex gap-2">
            <Link
              to="/login"
              className="px-4 py-1.5 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white transition-all"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 text-sm rounded-md border border-red-600 hover:bg-red-600 hover:text-white text-red-500 transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
