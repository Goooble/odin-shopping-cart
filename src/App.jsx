// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer"

import { useState } from "react";
import { Outlet } from "react-router";
function App() {
  const [cart, setCart] = useState({})
  console.log(cart)
  return (
        
        <div className="bg-stone-950">
          <Navbar cart={cart}/>
          <Outlet context={[cart, setCart]}></Outlet>
          <Footer></Footer>
          
        </div>
    )
}

export default App;
