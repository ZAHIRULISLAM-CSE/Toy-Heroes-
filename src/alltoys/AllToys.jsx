import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [status,setStatus]=useState("")
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setStatus("")
        setAllToys(data)

      });
  }, []);

    const handleSearch=(event)=>{
            event.preventDefault();
            const text=event.target.search.value;
            fetch(`http://localhost:5000/searchToys/${text}`)
            .then(res => res .json())
            .then(data =>{
                setAllToys(data);
                const length=data.length;
                if(length==0){
                    setStatus("No matching result found")
                }
                else{
                    setStatus(`${length} matching result found`)
                }
            })
    }





  return (
    <div className="w-[85%] mx-auto ">
      <h1 className="text-center text-3xl font-bold mb-6  mt-12">All Toys</h1>
      <form onSubmit={handleSearch} className="flex items-center">
        <label className="sr-only">
          Search by toy name
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
               clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search By Toy Name"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="mt-3">
        <p className="text-center  text-green-600 text-xl font-semibold">{status}</p>
        </div>
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
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {allToys &&
                allToys.map((singleToy) => (
                  <tr
                    key={singleToy._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user?.displayName}
                    </th>
                    <td className="px-6 py-4">{singleToy.toyName}</td>
                    <td className="px-6 py-4">{singleToy.toyCatagory}</td>
                    <td className="px-6 py-4">{singleToy.toyPrice}</td>
                    <td className="px-6 py-4">{singleToy.toyQuantity}</td>
                    <td>
                      <Link to={`/toy/${singleToy._id}`}>
                      <button className="bg-blue-600 font-sm lg:font-normal p-1 lg:px-3 lg:py-1 rounded-xl text-lg font-semibold text-white ">
                        View Details
                      </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
