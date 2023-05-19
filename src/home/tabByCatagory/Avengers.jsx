import React, { useContext } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Avengers = (props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  console.log(location)

  const handleViweDetails = (id) => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",
        text: "Press Login to Continue!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
            navigate(`/toy/${id}`)
        }
      });
    }
    else{
        navigate(`/toy/${id}`)
    }
  };

  const { toyPhoto, toyName, toyPrice, toyRatings, _id } = props.data;
  return (
    <div>
      <div>
        <figure className="relative mt-12  lg:mt-16 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className=" h-[350px] w-full md:h-[400px]  lg:h-[450px]  rounded-lg"
            src={toyPhoto}
            alt="image description"
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>{toyName}</p>
            <p>Price:${toyPrice}</p>
            <p>Ratings:{toyRatings}</p>
              <button
                onClick={() => handleViweDetails(_id)}
                className="bg-blue-600 mt-1 text-sm rounded-xl px-1 py-2"
              >
                View Details
              </button>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Avengers;
