import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [error,setError]=useState(null);
    const {creatUserWithEmailPassword,logOut}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photo=event.target.photo.value;

        if(name.length==0 || email.length==0 || password.length==0 || photo.length==0 ){
            setError('Unsuccessfull,Provide all the input field value and try again.');
            return;
        }

        if(password.length < 6){
            setError('Password Length must be minimum 6 character.');
            return;
        }


        creatUserWithEmailPassword(email,password)
        .then((user) => {
            update(user,name,photo);
            setError(null);
            logOut()
            navigate("/login")  
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorMessage)
          })
        
    }

    const update=(user,name,photo)=>{
        updateProfile(user.user, {
          displayName:name, photoURL:photo
        }).then(() => {
        }).catch((error) => {
        });
      }

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-1/2 mt-12 mx-auto">
        <div className="mb-6 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Your  Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Your  Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Your  Password
          </label>
          <input
            type="photo"
            id="password"
            name="password"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Your  Photo Url
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <p className=" mt-3 text-lg">Already have an account?<Link to='/login' className="text-blue-700 underline  cursor-pointer ">Login</Link></p>
        {
            error ? <div className="mt-4 flex items-center gap-3">
            <BsFillExclamationDiamondFill className="text-red-600"></BsFillExclamationDiamondFill>
            <p className=" text-sm  md:text-xl lg:text-2xl text-rose-700">{error}</p>
            </div> : ""
        }
      </form>
    </div>
  );
}

export default Register;
