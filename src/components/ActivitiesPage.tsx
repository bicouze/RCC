import React from 'react';
import { ActivityCard } from './ActivityCard';
import { ArrowLeft } from 'lucide-react';

interface ActivitiesPageProps {
  onBack: () => void;
  character: string;
}

export function ActivitiesPage({ onBack, character }: ActivitiesPageProps) {
  const getActivities = () => {
    if (character === "Ms. Samantha Jones") {
      return [
        {
          title: "Executive Business Center",
          description: "24/7 access to our premium business center with private meeting rooms, video conferencing, and executive assistant services.",
          imageUrl: "/images/coworking.jpg",
          duration: "24 hours",
          location: "Marriott Hotel",
          price: 75,
          discount: 100,
          partnerName: "Marriott Business Services"
        },
        {
          title: "Corporate Networking Dinner",
          description: "Join Montreal's business leaders for an exclusive networking dinner at the award-winning Five Sails restaurant.",
          imageUrl: "/images/restaurant.jpg",
          duration: "3 hours",
          location: "Five Sails Restaurant",
          price: 200,
          discount: 50,
          partnerName: "Montreal Business Network"
        },
        {
          title: "Executive Spa Package",
          description: "Unwind with our premium spa package including massage, facial, and access to the wellness center.",
          imageUrl: "/images/spa.jpg",
          duration: "3 hours",
          location: "Marriott Spa",
          price: 250,
          discount: 40,
          partnerName: "Marriott Wellness"
        },
        {
          title: "Private City Tour",
          description: "Exclusive chauffeur-driven tour of Montreal's business district and cultural landmarks.",
          imageUrl: "/images/city_tour.jpg",
          duration: "4 hours",
          location: "Montreal",
          price: 180,
          discount: 30,
          partnerName: "Executive Tours Montreal"
        }
      ];
    }
    return [
      {
        title: "Old Montreal Walking Tour",
        description: "Discover the charm and history of Old Montreal with a guided walking tour through cobblestone streets, historic sites, and architectural landmarks.",
        imageUrl: "/images/walking_tour.jpg",
        duration: "2.5 hours",
        location: "Old Montreal",
        price: 45,
        discount: 20,
        partnerName: "Montreal Heritage Tours"
      },
      {
        title: "La Grande Roue Experience",
        description: "Enjoy breathtaking views of Montreal from Canada's tallest observation wheel, offering spectacular city and river vistas.",
        imageUrl: "/images/grande_roue.jpg",
        duration: "1 hour",
        location: "Old Port",
        price: 25,
        discount: 15,
        partnerName: "La Grande Roue de Montréal"
      },
      {
        title: "Mount Royal Park Adventure",
        description: "Explore Montreal's iconic mountain park with guided hiking, scenic lookouts, and stunning city views. Visit the famous Mount Royal Cross and Beaver Lake.",
        imageUrl: "/images/mount_royal.jpg",
        duration: "3 hours",
        location: "Mount Royal",
        price: 40,
        discount: 20,
        partnerName: "Montreal Nature Tours"
      },
      {
        title: "Museum of Fine Arts",
        description: "Explore one of Canada's most prestigious art institutions, featuring an extensive collection of international and Canadian art.",
        imageUrl: "/images/museum.jpeg",
        duration: "3 hours",
        location: "Downtown Montreal",
        price: 35,
        discount: 25,
        partnerName: "Montreal Museum of Fine Arts"
      },
      {
        title: "Food Tour: Flavors of Montreal",
        description: "Savor Montreal's culinary delights with tastings of iconic dishes including bagels, smoked meat, and local specialties.",
        imageUrl: "/images/restaurant.jpg",
        duration: "3 hours",
        location: "Various Locations",
        price: 75,
        discount: 20,
        partnerName: "Montreal Food Tours"
      },
      {
        title: "Botanical Garden & Biodome",
        description: "Visit Montreal's stunning botanical gardens and explore diverse ecosystems in the Biodome, from tropical rainforest to polar regions.",
        imageUrl: "/images/garden.jpg",
        duration: "4 hours",
        location: "East Montreal",
        price: 55,
        discount: 15,
        partnerName: "Space for Life Montreal"
      }
    ];
  };

  const activities = getActivities();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to your Compensation package
        </button>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {character === "Ms. Samantha Jones" ? "Executive Experiences" : "Discover Montreal"}
          </h1>
          <p className="text-gray-600 mt-2">
            {character === "Ms. Samantha Jones" 
              ? "Make the most of your stay with these premium business and relaxation experiences."
              : "Make the most of your extended stay with these exclusive Montreal experiences."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
}