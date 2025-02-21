import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location?.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace={true} />;
  if (loading) return <LoadingSpinner />;

  // Form submit handler
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       //User Login
//       await loginUser(email, password);

//       navigate(from, { replace: true });
//       toast.success("Login Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };

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
        toast.success("Welcome back! You are already logged in.");
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
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-lime-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form> */}
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;