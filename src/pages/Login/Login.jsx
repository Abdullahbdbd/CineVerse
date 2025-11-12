import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" flex items-center justify-center px-4 mb-10">
      {/* Smaller card */}
      <div className="w-full max-w-sm bg-[#1b1b1b] shadow-2xl rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-50 h-50 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wide text-red-500 drop-shadow-lg">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
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
              placeholder="Your password"
              required
              className="w-full px-3 py-2 rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white text-lg shadow-lg transition-all"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center text-gray-500 mb-3">
            <span className="border-b border-gray-600 w-full mr-2"></span>
            <span className="text-sm">or</span>
            <span className="border-b border-gray-600 w-full ml-2"></span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-md"
          >
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>

            Login with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-gray-400 text-sm">
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
