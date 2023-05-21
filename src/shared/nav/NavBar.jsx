import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/icon.png";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  //signOut
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <nav className="bg-black p-8 text-white py-5">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span
              data-aos="fade-up"
              className="self-center text- text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              Toy <span className="text-pink-600">H</span>
              <span className="text-red-600">E</span>
              <span className="text-orange-600">R</span>
              <span className="text-yellow-400">O</span>
              <span className="text-lime-400">S</span>
            </span>
          </Link>
          <div className=" w-full md:block md:w-auto" id="navbar-default">
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
                    to="/blogs"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Blogs
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
                <div className="group  p-4 md:p-0 flex relative">
                  <span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </span>
                  <span
                    className="group-hover:opacity-100 transition-opacity bg-red-600 px-1 text-xs text-white rounded-md absolute left-1/2 
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
                    to="/blogs"
                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                    aria-current="page"
                  >
                    Blogs
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
