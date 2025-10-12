
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center w-full">
     
      <img
        src="https://as2.ftcdn.net/v2/jpg/05/96/62/65/1000_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg"
  alt="Clothing Showcase"
        className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
      />

      
      <div
        className="p-10 bg-oklch-98-0-247 flex flex-col items-center text-center rounded-b-xl"
        style={{ backgroundColor: "oklch(98.4% 0.003 247.858)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-violet-700 mb-4 pt-3">
          Buy Quality Clothing with Comfort & Style
        </h1>

        
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          Discover a wide range of stylish, durable, and affordable clothing for
          every occasion. From casual wear and formal outfits to accessories
          and seasonal collections, we bring you styles that combine comfort
          with good design.
        </p>

        
        <Link
          to="/explore"
          className="bg-violet-600 text-white w-[120px] p-3 text-lg rounded-lg hover:bg-violet-700 transition-colors duration-300 font-medium"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
