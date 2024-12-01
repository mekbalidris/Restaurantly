import React from 'react';

// Food component to display a food item with picture, price, title, and description
export default function Food({ image, title, description, price }) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-4 rounded-lg mb-4">

      <img src={image} alt={title} className="w-20 h-20 rounded-full mr-4" />

      <div className="flex-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      <div className="text-right">
        <span className="text-xl font-bold text-yellow-400">${price}</span>
      </div>
    </div>
  );
}
