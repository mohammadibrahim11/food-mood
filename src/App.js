import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
// import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Meals from "./Components/Meals/Meals";
import Menu from "./Components/Menu/Menu";
import Order from "./Components/Order/Order";
import './App.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
         
        },
        {
          path: "/home",
          element: <Home></Home>,
         
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
         
        },
        {
          path: "/order",
          element: <Order></Order>,
         
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/meals",
          element: <Meals></Meals>,
          loader: ()=>{
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
          }
        },
      ]
    },
  
  
    
  ]);
  return ( <div>
        <RouterProvider router={router}></RouterProvider>
  </div>);
};

export default App;
