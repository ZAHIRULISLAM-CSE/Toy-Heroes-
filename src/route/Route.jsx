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
import MyToys from '../mytoys/MyToys';
import UpdateMyToys from '../mytoys/UpdateMyToys';
import Error from '../errorPage/Error';
import Blogs from '../blog/Blogs';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
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
          loader:({params})=>fetch(`https://toy-heros-server.vercel.app/toys/${params.id}`)
        },
        {
          path: "/mytoys",
          element:<MyToys></MyToys>
        },
        {
          path: "/update/:id",
          element:<UpdateMyToys></UpdateMyToys>,
          loader:({params})=>fetch(`https://toy-heros-server.vercel.app/toys/${params.id}`)
        },
        {
          path: "/blogs",
          element:<Blogs></Blogs>
        },
      ]
    },
  ]);

export default router;