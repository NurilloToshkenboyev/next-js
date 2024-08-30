// src/components/PhoneCard.tsx

import React from 'react';
import Link from 'next/link';

interface PhoneCardProps {
   id: number;
   img: string;
   title: string;
   rame: string;
   color: string;
   brand: string;
   price: string;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ id, img, title, rame, color, brand, price }) => {
  return (
    <div className="w-[320px] h-[400px] px-16 py-6 rounded-xl shadow-gray-300 shadow-lg border-2 border-gray-300 hover:shadow-md hover:scale-110">
      <img src={img} alt={title} className="w-[200px] h-[190px] mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">RAM: {rame}</p>
      <p className="text-sm text-gray-600 mb-1">Color: {color}</p>
      <p className="text-sm text-gray-600 mb-1">Brand: {brand}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">{price} UZS</p>
      <Link href={`/phone/${id}`}>
        otish
      </Link>
    </div>
  );
};
