import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBatch from './CategoryBatch';

function ClothingCard({
  id,
  name,
  description,
  rentalPrice,
  rating,
  category,
  imageUrl,
}) {
  const [styleIndex, setStyleIndex] = useState(0);

  const showPreviousImg = () => {
    if (styleIndex === 0) {
      setStyleIndex(imageUrl.length - 1);
    } else {
      setStyleIndex(styleIndex - 1);
    }
  };

  const showNextImg = () => {
    if (styleIndex === imageUrl.length - 1) {
      setStyleIndex(0);
    } else {
      setStyleIndex(styleIndex + 1);
    }
  };

  return (
    <div
      className="border border-gray-200 rounded-xl p-4 m-4 max-w-sm w-[220px] bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative"
      key={id}
    >
      <CategoryBatch category={category} />

      <span className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {rentalPrice}
      </span>

     
  <div className="shadow rounded-lg relative overflow-hidden w-full h-48">
        {styleIndex > 0 && (
          <ChevronLeft
            className="absolute text-white left-0 top-1/2 -translate-y-1/2 h-[40px] w-[40px] cursor-pointer"
            onClick={showPreviousImg}
          />
        )}

        {imageUrl.length > 1 && styleIndex < imageUrl.length - 1 && (
          <ChevronRight
            className="absolute text-white right-0 top-1/2 -translate-y-1/2 h-[40px] w-[40px] cursor-pointer"
            onClick={showNextImg}
          />
        )}

        
        <img
          src={imageUrl[styleIndex]}
          alt={`${name} - view ${styleIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <h2 className="text-xl md:text-xl text-gray-800 font-semibold mt-3">{name}</h2>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center text-yellow-400">
          {Array.from({ length: Math.round(rating) }).map((_, i) => (
            <Star key={i} className="w-4 h-4" />
          ))}
        </div>
        <div className="text-gray-500 text-sm">{rating} / 5</div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="text-gray-500 text-sm">Category: <span className="text-gray-800">{category}</span></div>
        <Link
          to={`/clothing-details?id=${id}`}
          className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition"
        >
          Rent Now
        </Link>
      </div>

      {imageUrl.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {imageUrl.map((thumb, idx) => (
            <button
              key={idx}
              onClick={() => setStyleIndex(idx)}
              className={`w-14 h-14 rounded-md overflow-hidden border ${idx === styleIndex ? 'border-violet-600' : 'border-gray-200'}`}
            >
              <img src={thumb} alt={`${name} thumbnail ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClothingCard;
