import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/icon.png";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate=useNavigate();

  //signOut
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/")
      })
      .catch((error) => {});
  };

  return (
    <div>
      <nav className="bg-black p-8 text-white py-5">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text- text-2xl font-semibold whitespace-nowrap dark:text-white">
              Toy <span className="text-pink-600">H</span>
              <span className="text-red-600">E</span>
              <span className="text-orange-600">R</span>
              <span className="text-yellow-400">O</span>
              <span className="text-lime-400">S</span>
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {user ? (
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alltoys"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    All Toys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mytoys"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    My Toys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addtoys"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Add a Toy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Blogs
                  </Link>
                </li>
                <div className="group flex relative">
                  <span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </span>
                  <span
                    className="group-hover:opacity-100 transition-opacity bg-violet-600 px-1 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                  >
                    {user.displayName}
                  </span>
                </div>
                <button onClick={handleSignOut}>SignOut</button>
              </ul>
            ) : (
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alltoys"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    All Toys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
