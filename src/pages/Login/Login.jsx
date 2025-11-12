import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // email & password login
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Complete");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  // Google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successful Google Login");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#111] px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] shadow-2xl rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-red-500 hover:underline text-sm">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white transition-all"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-2 text-gray-500">
            <span className="border-b border-gray-600 w-full mr-2"></span>
            <span className="text-sm">or</span>
            <span className="border-b border-gray-600 w-full ml-2"></span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all"
          >
            <FaGoogle className="text-red-600" /> Login with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
