import { Clock, Users, BadgeCheck } from 'lucide-react';
import type { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.filledSlots / campaign.totalSlots) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={campaign.campaignImage}
          alt={campaign.title}
          className="w-full h-48 object-cover"
        />
        <img
          src={campaign.brandLogo}
          alt={campaign.brandName}
          className="absolute -bottom-6 left-4 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800"
        />
      </div>
      
      <div className="p-6 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {campaign.brandName}
          </h3>
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark">
            {campaign.category}
          </span>
        </div>

        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {campaign.title}
        </h4>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {campaign.description}
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary dark:text-primary-dark" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {campaign.filledSlots}/{campaign.totalSlots} Slots
              </span>
            </div>
            <div className="flex items-center gap-2">
              {campaign.payoutType === 'fixed' && (
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  ₹{campaign.payoutAmount}
                </span>
              )}
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                {campaign.payoutType.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-primary dark:bg-primary-dark rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button className="w-full py-2 px-4 bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-white rounded-lg transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}