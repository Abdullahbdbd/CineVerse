import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

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
            {user ? (
              <>
                <li className="mt-2">
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-2 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white transition-all"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
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
      <div className="navbar-end flex items-center gap-3 ml-auto relative">
        <label className="toggle text-base-content">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            value="synthwave"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {loading && (
          <span className="loading loading-spinner text-error"></span>
        )}

        {!loading && user && (
          <div className="relative">
            {/* Avatar Button */}
            <button
              onClick={() => setOpen(!open)}
              className="w-[35px] h-[35px] rounded-full overflow-hidden border-2 border-red-600 focus:outline-none"
            >
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/3fJbMmp/default-avatar.png"
                }
                alt={user?.displayName || "User"}
                className="w-full h-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <ul className="absolute right-0 mt-2 w-44 bg-[#1a1a1a] rounded-lg shadow-lg z-50 overflow-hidden">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-white hover:bg-red-600 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myCollection"
                    className="block px-4 py-2 text-white hover:bg-red-600 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    My Collection
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogOut();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-red-600 transition-all"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {!loading && !user && (
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
