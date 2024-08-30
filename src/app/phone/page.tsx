// src/app/phone/[phone_id]/page.tsx
import React from 'react';
import { phoneServer } from '../data/phone-server';// Telefon ma'lumotlari

interface PhoneDetailProps {
  params: {
    phone_id: string;
  };
}

const PhoneDetail = ({ params }: PhoneDetailProps) => {
  const phoneId = parseInt(params.phone_id);
  const phone = phoneServer.find(p => p.id === phoneId) || null;

  if (!phone) {
    return <div>Telefon topilmadi</div>;
  }

  return (
    <div className="p-4">
      <img src={phone.img} alt={phone.title} className="w-[200px] h-[190px] mb-4" />
      <h3 className="text-lg font-semibold mb-2">{phone.title}</h3>
      <p className="text-sm text-gray-600 mb-1">RAM: {phone.rame}</p>
      <p className="text-sm text-gray-600 mb-1">Color: {phone.color}</p>
      <p className="text-sm text-gray-600 mb-1">Brand: {phone.brand}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">{phone.price} UZS</p>
    </div>
  );
};

export default PhoneDetail;
