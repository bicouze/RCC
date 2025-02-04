import React from 'react';
import { Hotel, Utensils, CreditCard, Clock, Bus, Plane, Car, ArrowLeft, Wifi } from 'lucide-react';
import { CompensationCard } from './CompensationCard';
import { UpgradeOption } from './UpgradeOption';
import { FlightInfo } from './FlightInfo';

interface CompensationDetailsProps {
  character: string;
  selectedUpgrade: 'standard' | 'deluxe' | 'suite';
  onUpgradeSelect: (upgrade: 'standard' | 'deluxe' | 'suite') => void;
  onShowActivities: () => void;
  onBack: () => void;
  upgrades: Record<string, { price: number; features: string[]; imageUrl: string; note?: string }>;
}

export function CompensationDetails({
  character,
  selectedUpgrade,
  onUpgradeSelect,
  onShowActivities,
  onBack,
  upgrades,
}: CompensationDetailsProps) {
  const isJones = character === "Ms. Samantha Jones";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to your flight cancellation
        </button>

        <FlightInfo />

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <CompensationCard
              icon={Hotel}
              title="Hotel Accommodation"
              description={isJones ? "Marriott Hotel Downtown" : "Hilton Airport Hotel"}
              time="Check-in now"
            >
              <div className="mt-3 space-y-2">
                {Object.entries(upgrades).map(([key, option]) => (
                  <UpgradeOption
                    key={key}
                    title={`${key.charAt(0).toUpperCase() + key.slice(1)} Room`}
                    price={option.price}
                    features={option.features}
                    note={option.note}
                    imageUrl={option.imageUrl}
                    selected={selectedUpgrade === key}
                    onSelect={() => onUpgradeSelect(key as 'standard' | 'deluxe' | 'suite')}
                  />
                ))}
              </div>
            </CompensationCard>
          </div>
          <CompensationCard
            icon={isJones ? Car : Bus}
            title="Complimentary Transportation"
            description={isJones ? "Private taxi service" : "Between airport and hotel"}
            time={isJones ? "Available on demand" : "24/7 service running every 30 mins"}
          />
          <CompensationCard
            icon={Utensils}
            title="Meal Vouchers"
            description={isJones ? "Dinner tonight + Breakfast tomorrow + Room service credit" : "Dinner tonight + Breakfast tomorrow"}
            time="Valid 24h"
          />
          <CompensationCard
            icon={CreditCard}
            title="Virtual Credit Card"
            description={isJones ? "$100 Credit" : "$50 Credit"}
            time="Instant access"
          />
          {isJones && (
            <CompensationCard
              icon={Wifi}
              title="Complimentary eSIM"
              description="5GB Data + Unlimited Calls"
              time="Valid 24h"
            />
          )}
        </div>

        <button 
          onClick={onShowActivities}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Accept Package {selectedUpgrade !== 'standard' && upgrades[selectedUpgrade].price > 0 && `(+$${upgrades[selectedUpgrade].price})`}
        </button>
      </div>
    </div>
  );
}