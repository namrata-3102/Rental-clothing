
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp } from "lucide-react";

function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/96/62/65/1000_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg"
          alt="Clothing Showcase"
          className="w-full h-full object-cover"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-teal-500/20 border border-teal-400 rounded-full px-4 py-2 mb-6 backdrop-blur">
            <Sparkles size={16} className="text-teal-400" />
            <span className="text-teal-400 text-sm font-semibold">Trending Now</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            Rent Premium<br />
            <span className="bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 bg-clip-text text-transparent">
              Clothing Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow">
            Access thousands of designer outfits for every occasion. Rent, wear, and return with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Link
              to="/explore"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 text-lg rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Renting
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 text-lg rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">500+</div>
              <div className="text-sm text-slate-300">Premium Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">10K+</div>
              <div className="text-sm text-slate-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">48hrs</div>
              <div className="text-sm text-slate-300">Fast Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: "polygon(0 40%, 5% 35%, 10% 40%, 15% 35%, 20% 40%, 25% 35%, 30% 40%, 35% 35%, 40% 40%, 45% 35%, 50% 40%, 55% 35%, 60% 40%, 65% 35%, 70% 40%, 75% 35%, 80% 40%, 85% 35%, 90% 40%, 95% 35%, 100% 40%, 100% 100%, 0 100%)"
      }} />
    </div>
  );
}

export default HeroSection;
