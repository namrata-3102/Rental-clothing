import React, { useMemo, useState } from "react";
import Navbar from "../components/navbar";

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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      
      <div className="relative w-full">
        <img
          src="https://im.whatshot.in/img/2020/Jul/rent-in-store-cropped-1575969268-1596001512.jpg"
          alt="Clothing"
          className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Clothing
          </h1>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4">
        <Heading heading={"Your adventure begins here"} />

        <p className="mt-4 px-2 md:px-16 text-gray-700 text-base md:text-lg leading-relaxed text-center">
          Rent high-quality clothing for every occasion — weddings, parties,
          corporate events, and casual outings. Browse by category or search
          for inspiration.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
          <div className="w-full max-w-lg">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clothing by name or description..."
              className="w-full p-3 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-violet-50"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 mt-3">Showing {filtered.length} items</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 md:p-12">
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
    </div>
  );
}

export default AllClothing;
