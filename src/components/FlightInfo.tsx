import React from 'react';

export function FlightInfo() {
  return (
    <header className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Flight 6X123 - Cancelled</h1>
          <p className="text-sm text-red-600">❌ Original Flight: 6X123 - Today 19:30 - 22:45</p>
          <p className="text-sm text-green-600">✔️ New Flight : 6X122 - Tomorrow 16:00 - 19:15</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-600">Montreal</p>
          <p className="text-xl font-bold text-gray-800">→</p>
          <p className="text-sm font-medium text-gray-600">Vancouver</p>
        </div>
      </div>
    </header>
  );
}