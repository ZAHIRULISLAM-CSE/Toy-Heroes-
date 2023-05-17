import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../main/Main';
import Register from '../register/Register';
import Home from '../home/home/Home';
import Login from '../login/Login';

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
      ]
    },
  ]);

export default router;