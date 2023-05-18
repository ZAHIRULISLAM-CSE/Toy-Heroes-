import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../main/Main';
import Register from '../register/Register';
import Home from '../home/home/Home';
import Login from '../login/Login';
import AddToys from '../addToy/AddToys';
import AllToys from '../alltoys/AllToys';

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
      ]
    },
  ]);

export default router;