import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Dropdown } from "flowbite-react";
import useTitle from "../customHooks/useTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useTitle("Toy Heros | My Toys")

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
            const remainingToys = myToys.filter((toy) => toy._id != id);
            setMyToys(remainingToys);
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/toy/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [email]);

  const handleSort=(sortValue)=>{
    fetch(`http://localhost:5000/toy/${email}?price=${sortValue}`)
    .then((res) => res.json())
    .then((data) => {
      setMyToys(data);
    });
  }

       
  return (
    <div className="w-[95%] mx-auto">
      <div className="mt-16 flex justify-center">
        <Dropdown label="Sort By Price">
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">
            {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item   onClick={()=>handleSort("asc")} >Ascending</Dropdown.Item>
          <Dropdown.Item  onClick={()=>handleSort("des")}  >Decending</Dropdown.Item>
        </Dropdown>
      </div>
      <div className=" mt-12 lg:mt-16">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Toy Photo
                </th>
                <th scope="col" className="px-6 py-3">
                  Toy Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Catagory
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Ratings
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {myToys &&
                myToys.map((singleToy) => (
                  <tr
                    key={singleToy._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th scope="row" className="px-6 py-4">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={singleToy.toyPhoto}
                        alt=""
                      />
                    </th>
                    <td className="px-6 py-4">{singleToy.toyName}</td>
                    <td className="px-6 py-4">{user?.displayName}</td>
                    <td className="px-6 py-4">{user?.email}</td>
                    <td className="px-6 py-4">{singleToy.toyCatagory}</td>
                    <td className="px-6 py-4">{singleToy.toyPrice}</td>
                    <td className="px-6 py-4">{singleToy.toyRatings}</td>
                    <td className="px-6 py-4">{singleToy.toyQuantity}</td>
                    <td className="px-6 py-4">{singleToy.toyDescription}</td>
                    <td>
                      <Link to={`/update/${singleToy._id}`}>
                        <button className="bg-blue-600  px-2 lg:py-1 rounded-xl text-sm font-semibold text-white ">
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(singleToy._id)}
                        className="bg-blue-600  px-2 lg:py-1 rounded-xl text-sm font-semibold text-white "
                      >
                        Delete
                      </button>
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

export default MyToys;
