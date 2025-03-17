import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { CampaignCard } from './components/CampaignCard';
import { ThemeToggle } from './components/ThemeToggle';
import type { Campaign } from './types';

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    brandName: 'Nike',
    brandLogo: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    title: 'Sport Lifestyle Campaign',
    description: 'Join Nike\'s latest campaign showcasing athletic lifestyle and sports culture.',
    payoutType: 'fixed',
    payoutAmount: 15000,
    totalSlots: 10,
    filledSlots: 6,
    category: 'Sports',
    requirements: ['Min 10k followers', 'Sports niche', 'Active lifestyle content'],
  },
  {
    id: '2',
    brandName: 'Sephora',
    brandLogo: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
    title: 'Beauty Influencer Program',
    description: 'Create stunning content featuring our latest beauty products.',
    payoutType: 'barter',
    totalSlots: 15,
    filledSlots: 3,
    category: 'Beauty',
    requirements: ['Min 5k followers', 'Beauty content', 'Makeup tutorials'],
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary dark:text-primary-dark">
                  Wobb
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search campaigns..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                  />
                </div>
                
                <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CAMPAIGNS.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </main>

      <ThemeToggle />
    </div>
  );
}

export default App;