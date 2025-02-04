import React from 'react';
import { Check } from 'lucide-react';

interface UpgradeOptionProps {
  title: string;
  price: number;
  features: string[];
  onSelect: () => void;
  selected: boolean;
  imageUrl: string;
  note?: string;
}

export function UpgradeOption({ title, price, features, onSelect, selected, imageUrl, note }: UpgradeOptionProps) {
  return (
    <div 
      className={`p-4 rounded-lg border cursor-pointer transition-all ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onSelect}
    >
      <div className="flex gap-4">
        <div className="relative w-40 h-32 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
              }`}>
                {selected && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="font-medium text-gray-900">{title}</span>
            </div>
            <span className="font-medium text-blue-500">{price > 0 ? `+$${price}` : `Included${note? ' - Specially for you':''}`}</span>
          </div>
          {note && (
            <div className="text-sm text-blue-500 mb-2">
              {note}
            </div>
          )}
          <div className="text-sm text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="text-blue-500">•</span> {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}