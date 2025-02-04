import React from 'react';
import { Clock } from 'lucide-react';

interface CompensationCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  time?: string;
  children?: React.ReactNode;
}

export function CompensationCard({ icon: Icon, title, description, time, children }: CompensationCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <div className="p-2 bg-blue-50 rounded-lg h-fit">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          {time && (
            <div className="flex items-center gap-1 mt-1 text-xs text-blue-600">
              <Clock className="w-3 h-3" />
              <span>{time}</span>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}