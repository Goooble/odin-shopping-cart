// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Error404 from "./Error404";
import Navbar from "./Navbar";
import Footer from "./Footer"

import { Outlet } from "react-router";
function App() {
  return (
        
        <div className="bg-stone-950">
          <Navbar/>
          <Outlet></Outlet>
          <Footer></Footer>
          
        </div>
    )
}

export default App;
