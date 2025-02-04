import React from 'react';
import { Clock, MapPin, Tag } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  location: string;
  price: number;
  discount?: number;
  partnerName: string;
}

export function ActivityCard({
  title,
  description,
  imageUrl,
  duration,
  location,
  price,
  discount,
  partnerName,
}: ActivityCardProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        {discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">Partner: {partnerName}</span>
            </div>
            <div className="mt-1">
              {discount && (
                <span className="text-sm text-gray-500 line-through mr-2">${price}</span>
              )}
              <span className="text-lg font-semibold text-gray-900">${discountedPrice}</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}