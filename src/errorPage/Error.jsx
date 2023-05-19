import React from "react";
import img from "/images/error.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen bg-black">
      <img className="w-full h-[60vh] " src={img} alt="" />
      <div className="text-center">
        <Link to="/">
          <button className="bg-blue-600 p-3 rounded-xl text-white text-3xl">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
