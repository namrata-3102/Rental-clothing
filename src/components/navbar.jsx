import React, { useState } from "react";
import imgLogo from "../assets/Furniture store-bro.png";
import { Link } from "react-router-dom"; 
import { Menu, X, ShoppingBag } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link className="flex items-center gap-3 hover:opacity-80 transition" to="/">
          <img 
            src={imgLogo} 
            alt="logo" 
            className="w-12 h-12 rounded-lg" 
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            RentStyle
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/explore" className="hover:text-teal-400 transition font-medium">Browse</Link>
          <Link to="/contact" className="hover:text-amber-400 transition font-medium">Contact</Link>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-teal-600 transition">
            <ShoppingBag size={18} />
            Rent Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-4 space-y-4 border-t border-slate-700">
          <Link to="/explore" className="block hover:text-teal-400 transition font-medium">Browse Clothing</Link>
          <Link to="/contact" className="block hover:text-amber-400 transition font-medium">Contact Us</Link>
          <button className="w-full bg-teal-500 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-teal-600 transition">
            <ShoppingBag size={18} />
            Rent Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
