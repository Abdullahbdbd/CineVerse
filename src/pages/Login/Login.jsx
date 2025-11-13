import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import LoaderPage from "../../components/Spinner/LoaderPage";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      toast.success("Login Successful");
      e.target.reset();
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      toast.success("Google Login Successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderPage />;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 mb-10 pt-25">
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
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white text-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <FaSpinner className={`animate-spin ${loading ? "inline-block" : "hidden"}`} />
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
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-md"
          >
            <FaGoogle className="w-5 h-5" />
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
