import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import React from 'react'


function App() {
  const router = createBrowserRouter([{
    path:'/',element:<Home></Home>
  } ]);

  return (
   <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
