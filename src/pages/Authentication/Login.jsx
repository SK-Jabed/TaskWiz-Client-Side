import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { loginUser, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location?.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace={true} />;
  if (loading) return <LoadingSpinner />;

  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      // Perform Google sign-in
      const result = await signInWithGoogle();
      const { displayName: name, email, photoURL, uid } = result.user;

      // Prepare user data
      const userInfo = {
        name,
        email,
        image: photoURL,
        UserID: uid,
        timestamp: Date.now(),
      };

      // Save user data to the database
      const dbResponse = await axiosPublic.post("/users", userInfo);

      if (dbResponse.data.insertedId) {
        // New user added to the database
        toast.success("You are logged in successfully. Welcome!");
        navigate(from, { replace: true });
      } else if (dbResponse.data.message === "User already exists") {
        // User already exists in the database
        toast.success("Welcome back! You are logged in.");
        navigate(from, { replace: true });
      } else {
        // Handle unexpected cases
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Google Sign-in Error:", err);
      toast.error("Google Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Glass-morphism Card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white/70 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
        {/* Gradient Text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Welcome! Sign In
          </h1>
          <p className="mt-2 text-gray-600">Sign in to access your account</p>
        </div>

        {/* Google Sign-In Button */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 cursor-pointer"
        >
          <FcGoogle size={24} />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 hover:text-pink-600 font-semibold transition-colors duration-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;