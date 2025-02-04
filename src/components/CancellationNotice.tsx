import React from 'react';
import { Plane, ChevronRight, ArrowLeft } from 'lucide-react';

interface CancellationNoticeProps {
  character: string;
  onViewCompensation: () => void;
  selectedUpgrade: string;
  upgradePrice?: number;
  onBack: () => void;
}

export function CancellationNotice({ 
  character, 
  onViewCompensation, 
  selectedUpgrade, 
  upgradePrice = 0,
  onBack
}: CancellationNoticeProps) {
  const buttonText = character === "Ms. Samantha Jones" ? 
    "View my compensation" : 
    "View my compensation";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to the main menu
        </button>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-blue-50 rounded-full">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Dear {character},</h2>
              <p className="text-gray-600 mt-2">
              We regret to inform you that due to operational constraints, <b>your flight 6X123 from Montreal to Vancouver scheduled for this evening has unfortunately been cancelled</b>.
              </p>
              <p className="text-gray-600 mt-2">
              We understand the inconvenience this may cause and <b>we have automatically rebooked you on tomorrow's flight 6X122. To ensure your comfort, we have arranged a comprehensive care package, including hotel accommodation and meals that you'll find hereafter.</b> Additionally, we have curated a selection of local experiences to make the best of your time in Montreal.
              </p>
              <p className="text-gray-600 mt-2">
                Thank you for your understanding and patience. If you have any questions or need further assistance, please do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={onViewCompensation}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          {buttonText}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}