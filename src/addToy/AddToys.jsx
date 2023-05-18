import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const AddToys = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const { user } = useContext(AuthContext);


  const handleAddToys=(event)=>{
            
  }
  

  return (
    <div className="w-[85%] mx-auto">
      <h1 className="text-center mt-12 text-3xl font-bold">
        Add Your Toys Here
      </h1>
      <form onSubmit={handleAddToys}>
        <div className="grid mt-12 gap-6 lg:grid-cols-2">
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Name
            </label>
            <input
             name="toy-name"
              type="text"
              id="toy-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Photo Url
            </label>
            <input
              name="toy-photo"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Email
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              name="toy-photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Catagory
            </label>
            <select
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="option1">Avengers</option>
              <option value="option2">Star Wars</option>
              <option value="option3">Transformars</option>
            </select>
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Price
            </label>
            <input
              name="toy-price"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
          
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Ratings
            </label>
            <input
                name="toy-ratings"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Avaliable Quantity
            </label>
            <input
            name="toy-quantity"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Description
            </label>
            <input
             name="toy-description"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          

        </div>
      </form>
    </div>
  );
};

export default AddToys;
