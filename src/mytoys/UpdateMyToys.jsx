import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useTitle from "../customHooks/useTitle";

const UpdateMyToys = () => {

  useTitle("Toy Heroes | Update")

  const data = useLoaderData();
  const id =data[0]._id;

    const handleUpdate=(event)=>{
        event.preventDefault();
        const toyPrice=event.target.toyPrice.value;
        const toyQuantity=event.target.toyQuantity.value;
        const toyDescription=event.target.toyDescription.value;
        const updatedData={
            toyPrice,toyQuantity,toyDescription,id
        }

        fetch("https://toy-heros-server.vercel.app/update",{
            method:"PATCH",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount==0){    
                 Swal.fire('Not Updated Anything,Price Quantity,Description same as previous,Made some changes')
            }
            else{
              Swal.fire(
                'Done!',
                'Successfully Updated!',
                'success'
              )
            }
        })

    }





  return (
    <div className="w-[85%] mx-auto">
      <h1 className="text-3xl mb-20 mt-12 text-center ">
        Update Toy Information Here!!!!!!
      </h1>
      <form onSubmit={handleUpdate} className="flex items-center flex-col">
        <div className="mb-6 w-1/2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Toy Price
          </label>
          <input
            name="toyPrice"
            type="number"
            min={1}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={data[0].toyPrice}
          />
        </div>
        <div className="mb-6 w-1/2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
          >
          Avaliable Quantity
          </label>
          <input
            name="toyQuantity"
            type="number"
            min={0}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={data[0].toyQuantity}
          />
        </div>
        <div className="mb-6 w-1/2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
          >
          Description
          </label>
          <input
            name="toyDescription"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={data[0].toyDescription}
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Update</button>
      </form>
    </div>
  );
};

export default UpdateMyToys;
