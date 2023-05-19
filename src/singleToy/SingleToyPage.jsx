import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyPage = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(data[0].toyPhoto);
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex mt-12 flex-col items-center bg-[#E5E7EB]  rounded-lg shadow md:flex-row md:max-w-9xl">
        <div className="flex flex-1 items-center flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#1A365D]">
            Toy Name: {data[0].toyName}
          </h5>
          <p className="mb-3 mt-3 font-medium  text-pink-600  ">
            Seller Name:{data[0].sellerName}
          </p>
          <p className=" inline-flex text-pink-600  font-medium items-center gap-3 ">
          Seller Email:{data[0].sellerEmail}
          </p>
          <p className="  text-pink-600   inline-flex font-medium mt-3 items-center gap-3">
          Toy Price:{data[0].toyPrice}
          </p>
          <p className=" text-pink-600   mt-3 font-medium inline-flex items-center gap-3">
           Ratings:{data[0].toyRatings}
          </p>
          <p className=" text-pink-600  mt-3 font-medium inline-flex items-center gap-3">
           Quantity Avliable:{data[0].toyQuantity}
          </p>
          <p className=" mb-8 text-pink-600  mt-3 font-medium inline-flex items-center gap-3">
           Description:{data[0].toyDescription}
          </p>
        </div>
        <img
          className=" flex-1 w-full h-370px  md:h-[450px]  md:w-96 lg:w-[500px] md:rounded-none"
          src={data[0].toyPhoto}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleToyPage;
