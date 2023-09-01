
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import './App.css';
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
  
]);

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
