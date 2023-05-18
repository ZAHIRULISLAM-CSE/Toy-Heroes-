import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const {user}=useContext(AuthContext)

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys)
  return (
    <div className="w-[85%] mx-auto ">
      <h1 className="text-center text-3xl font-bold  mt-12">All Toys</h1>
      <div className=" mt-12 lg:mt-16">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                Seller
                </th>
                <th scope="col" className="px-6 py-3">
                  Toy Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allToys &&
                allToys.map(singleToy=>
                <tr key={singleToy._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user?.displayName}
                </th>
                <td className="px-6 py-4">{singleToy.toyName}</td>
                <td className="px-6 py-4">{singleToy.toyCatagory}</td>
                <td className="px-6 py-4">{singleToy.toyPrice}</td>
                <td className="px-6 py-4">
                {
                    singleToy.toyQuantity
                }
                </td>
                <td>
                    <button className="bg-blue-600 px-3 py-1 rounded-xl text-lg font-semibold text-white ">View Details</button>
                </td>
              </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
