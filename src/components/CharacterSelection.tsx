import React from 'react';
import { User, BarChart } from 'lucide-react';

interface Character {
  name: string;
  title: string;
  description: string;
}

interface CharacterSelectionProps {
  onSelect: (character: string) => void;
  onDashboard: () => void;
}

export function CharacterSelection({ onSelect, onDashboard }: CharacterSelectionProps) {
  const characters: Character[] = [
    {
      name: "Ms. Alice Smith",
      title: "Returning from Vacation",
      description: "Travelling back after her holidays in Europe"
    },
    {
      name: "Ms. Samantha Jones",
      title: "Business Trip to Vancouver",
      description: "Travelling in business class for business meetings"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-amber-200 rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-amber-700">Welcome to the Non-Air Recovery Hub (NARH)</h1>
          <p className="text-amber-700 mt-2">
            Choose your experience to continue
          </p>
        </div>

        <div className="bg-emerald-600 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Customer Experience Demo</h2>
          <div className="grid gap-4">
            {characters.map((character) => (
              <button
                key={character.name}
                onClick={() => onSelect(character.name)}
                className="bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-left group hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-50 transition-colors">
                    <User className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{character.name}</h2>
                    <h3 className="text-md font-medium text-emerald-700 mt-1">{character.title}</h3>
                    <p className="text-emerald-600 mt-1">{character.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onDashboard}
          className="w-full bg-indigo-600 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-left group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors">
              <BarChart className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-white">
              <h2 className="text-lg font-semibold">Airline Dashboard</h2>
              <h3 className="text-md font-medium text-indigo-100">Compensation Analytics</h3>
              <p className="text-indigo-100 mt-1">Monitor and analyze compensation costs across different metrics</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}