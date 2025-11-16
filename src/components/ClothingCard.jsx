import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingBag } from 'lucide-react';
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
  const [isFavorite, setIsFavorite] = useState(false);

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

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-72 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden group">
        <img
          src={imageUrl[styleIndex]}
          alt={`${name} - view ${styleIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Price Badge - Redesigned with Gradient */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          ₹{rentalPrice}
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'}
          />
        </button>

        {/* Navigation Buttons */}
        {imageUrl.length > 1 && (
          <>
            <button
              onClick={showPreviousImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <ChevronLeft size={20} className="text-slate-700" />
            </button>
            <button
              onClick={showNextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <ChevronRight size={20} className="text-slate-700" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {styleIndex + 1} / {imageUrl.length}
        </div>

        {/* Image Thumbnails */}
        {imageUrl.length > 1 && (
          <div className="absolute bottom-12 left-0 right-0 flex gap-2 justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {imageUrl.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setStyleIndex(idx)}
                className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === styleIndex
                    ? 'border-teal-500 scale-110'
                    : 'border-white/50 hover:border-white'
                }`}
              >
                <img src={thumb} alt={`${name} thumbnail ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        {/* Category Badge */}
        <div className="flex gap-2">
          <span className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full font-semibold">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 line-clamp-2 hover:text-teal-600 transition-colors">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">
            {rating}.0
          </span>
        </div>

        {/* CTA Button */}
        <Link
          to={`/clothing-details?id=${id}`}
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
        >
          <ShoppingBag size={18} />
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default ClothingCard;
