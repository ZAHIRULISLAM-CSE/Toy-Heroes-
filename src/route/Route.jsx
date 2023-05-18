import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../main/Main';
import Register from '../register/Register';
import Home from '../home/home/Home';
import Login from '../login/Login';
import AddToys from '../addToy/AddToys';
import AllToys from '../alltoys/AllToys';
import SingleToyPage from '../singleToy/SingleToyPage';
import PrivateRoute from './PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/addtoys",
          element:<AddToys></AddToys>
        },
        {
          path: "/alltoys",
          element:<AllToys></AllToys>
        },
        {
          path: "/toy/:id",
          element:<PrivateRoute><SingleToyPage></SingleToyPage></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
      ]
    },
  ]);

export default router;