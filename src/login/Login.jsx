import React, { useContext, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const Login = () => {
    const [error,setError]=useState(null);
    const {signInWithEp}=useContext(AuthContext)
    const navigate=useNavigate();

    const handleLogin=(event)=>{
            event.preventDefault();
            const email=event.target.email.value;
            const password=event.target.password.value;


            signInWithEp(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
              })
              .catch((error) => {
                setError("Please Provide Valid Email and Password")
              })
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
            to="/login"
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
    </div>
  );
};

export default Login;
