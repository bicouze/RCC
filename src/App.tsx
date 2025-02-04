import React, { useState } from 'react';
import { CharacterSelection } from './components/CharacterSelection';
import { CancellationNotice } from './components/CancellationNotice';
import { CompensationDetails } from './components/CompensationDetails';
import { ActivitiesPage } from './components/ActivitiesPage';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [selectedUpgrade, setSelectedUpgrade] = useState<'standard' | 'deluxe' | 'suite'>('standard');
  const [showActivities, setShowActivities] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCompensation, setShowCompensation] = useState(false);
  
  const getUpgradeOptions = () => {

    const isJones = selectedCharacter === "Ms. Samantha Jones";
    const deluxePrice = isJones ? 0 : 50;
    const deluxeNote = isJones ? 'As a valued airline customer, you have been upgraded to the Deluxe Room at no extra cost.' : '';

    return {
      standard: { 
        price: 0, 
        features: [
          'Queen bed',
          'City view',
          'Standard check-in',
          'Checkout 11am'
        ],
        imageUrl: "/images/standard.jpg"
      },
      deluxe: { 
        price: deluxePrice, 
        features: [
          'King bed',
          'High floor',
          'Lounge access',
          'Late checkout 2pm'
        ],
        imageUrl: "/images/deluxe.jpg",
        note: deluxeNote
      },
      suite: { 
        price: 120, 
        features: [
          'Living area',
          'Executive lounge',
          'Welcome drink',
          'Late checkout 3pm'
        ],
        imageUrl: "/images/suite.jpg"
      },
    };
  };

  // Reset selected upgrade when character changes
  React.useEffect(() => {
    if (selectedCharacter === "Ms. Samantha Jones") {
      setSelectedUpgrade('deluxe');
    } else {
      setSelectedUpgrade('standard');
    }
  }, [selectedCharacter]);

  const upgrades = getUpgradeOptions();
  const currentUpgrade = upgrades[selectedUpgrade];

  if (showDashboard) {
    return <Dashboard onBack={() => setShowDashboard(false)} />;
  }

  if (!selectedCharacter) {
    return (
      <CharacterSelection 
        onSelect={setSelectedCharacter} 
        onDashboard={() => setShowDashboard(true)}
      />
    );
  }

  if (showActivities) {
    return <ActivitiesPage onBack={() => setShowActivities(false)} character={selectedCharacter} />;
  }

  if (!showCompensation) {
    return (
      <CancellationNotice
        character={selectedCharacter}
        onViewCompensation={() => setShowCompensation(true)}
        selectedUpgrade={selectedUpgrade}
        upgradePrice={currentUpgrade?.price ?? 0}
        onBack={() => setSelectedCharacter(null)}
      />
    );
  }

  return (
    <CompensationDetails
      character={selectedCharacter}
      selectedUpgrade={selectedUpgrade}
      onUpgradeSelect={setSelectedUpgrade}
      onShowActivities={() => setShowActivities(true)}
      onBack={() => setShowCompensation(false)}
      upgrades={upgrades}
    />
  );
}