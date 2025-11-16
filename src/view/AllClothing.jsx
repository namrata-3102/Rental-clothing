import React, { useMemo, useState } from "react";
import Navbar from "../components/navbar";
import { Search, Filter } from "lucide-react";

import Heading from "../components/heading";
import { CLOTHING_CONFIG } from "../configs/clothing";
import ClothingCard from "../components/ClothingCard";

function AllClothing() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set();
    CLOTHING_CONFIG.forEach((c) => set.add(c.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let list = CLOTHING_CONFIG;
    if (selectedCategory !== "all") list = list.filter((c) => c.category === selectedCategory);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    }
    return list;
  }, [selectedCategory, query]);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src="https://im.whatshot.in/img/2020/Jul/rent-in-store-cropped-1575969268-1596001512.jpg"
          alt="Clothing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-black drop-shadow-lg mb-3">
            Explore Collections
          </h1>
          <p className="text-slate-200 text-lg md:text-xl drop-shadow">Curated styles for every moment</p>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-10 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 flex-col lg:flex-row mb-8">
            {/* Search Input */}
            <div className="w-full lg:flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clothing by name or description..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-slate-200 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold mr-2">
              <Filter size={18} />
              Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30"
                    : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-400 hover:text-teal-600"
                }`}
              >
                {cat === "all" ? "All Items" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="text-center text-sm text-slate-500 mt-6 font-semibold">
            Showing <span className="text-teal-600 font-bold">{filtered.length}</span> items
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((clothingData) => {
              const {
                id,
                name,
                description,
                rentalPrice,
                rating,
                category,
                imageUrl,
              } = clothingData;
              return (
                <ClothingCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  rentalPrice={rentalPrice}
                  rating={rating}
                  category={category}
                  imageUrl={imageUrl}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-500 font-semibold">No items found</p>
            <p className="text-slate-400 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllClothing;
