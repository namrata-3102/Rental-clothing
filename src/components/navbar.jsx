import React from "react";
import imgLogo from "../assets/Furniture store-bro.png";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <div
      className="w-full shadow-md text-white px-6 py-3 flex justify-between items-center"
      style={{ backgroundColor: "oklch(38.1% 0.176 304.987)" }} 
    >
      <Link className="flex items-center gap-3" to="/">
        <img 
          src={imgLogo} 
          alt="logo" 
          className="w-14 h-14" 
        />
        <span className="text-3xl font-bold">Clothing Store</span>
      </Link>
    </div>
  );
}

export default Navbar;
