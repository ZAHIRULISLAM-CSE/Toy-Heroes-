import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const Login = () => {
  const [error, setError] = useState(null);
  const { signInWithEp,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  console.log(location);
  const state=location?.state || "/"


  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(state);
      })
      .catch((error) => {
        setError("Please Provide Valid Email and Password");
      });
  };

  //googleSignIn
  const handleGoogleSignIn=()=>{
            signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(state);
              }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
              });
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="w-1/2 mt-12 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Password
          </label>
          <input
            type="photo"
            id="password"
            name="password"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <p className=" mt-3 text-lg">
          Don't have an account yet??
          <Link
            to="/register"
            className="text-blue-700 underline  cursor-pointer "
          >
            Register
          </Link>
        </p>
        {error ? (
          <div className="mt-4 flex items-center gap-3">
            <BsFillExclamationDiamondFill className="text-red-600"></BsFillExclamationDiamondFill>
            <p className=" text-sm  md:text-xl lg:text-2xl text-rose-700">
              {error}
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
      <h1 className="text-3xl text-[#225ab3] mt-8 text-center">OR!!!!!!!!!</h1>
      <div className="text-center mt-8">
        <button
        onClick={handleGoogleSignIn}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
