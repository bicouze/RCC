import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricsCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
}

export function MetricsCard({ icon: Icon, title, value, change, isPositive, subtext }: MetricsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <span className="text-sm font-medium text-gray-600">{title}</span>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change && (
          <div className="flex items-center gap-1 mt-1">
            {isPositive ? (
              <ArrowDownRight className="w-4 h-4 text-green-500" />
            ) : (
              <ArrowUpRight className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
          </div>
        )}
        {subtext && (
          <span className="block text-sm text-gray-600 mt-1">{subtext}</span>
        )}
      </div>
    </div>
  );
}