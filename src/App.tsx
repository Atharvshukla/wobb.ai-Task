import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { CampaignCard } from './components/CampaignCard';
import { ThemeToggle } from './components/ThemeToggle';
import { LandingPage } from './components/LandingPage';
import { Pagination } from './components/Pagination';
import type { Campaign, Page } from './types';

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
  {
    id: '3',
    brandName: 'Apple',
    brandLogo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800',
    title: 'Tech Review Program',
    description: 'Share your experience with the latest Apple products.',
    payoutType: 'fixed',
    payoutAmount: 20000,
    totalSlots: 5,
    filledSlots: 2,
    category: 'Technology',
    requirements: ['Min 20k followers', 'Tech reviews', 'High engagement rate'],
  },
  {
    id: '4',
    brandName: 'Adidas',
    brandLogo: 'https://images.unsplash.com/photo-1543161949-1f9193588d8a?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800',
    title: 'Urban Style Campaign',
    description: 'Showcase urban fashion and streetwear culture with Adidas.',
    payoutType: 'fixed',
    payoutAmount: 12000,
    totalSlots: 8,
    filledSlots: 4,
    category: 'Fashion',
    requirements: ['Min 8k followers', 'Fashion content', 'Urban style'],
  },
  {
    id: '5',
    brandName: 'Samsung',
    brandLogo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800',
    title: 'Galaxy Lifestyle',
    description: 'Create content showcasing how Samsung enhances daily life.',
    payoutType: 'fixed',
    payoutAmount: 18000,
    totalSlots: 6,
    filledSlots: 1,
    category: 'Technology',
    requirements: ['Min 15k followers', 'Tech/Lifestyle content', 'Video creation'],
  },
  {
    id: '6',
    brandName: 'Starbucks',
    brandLogo: 'https://images.unsplash.com/photo-1577995216218-c0e0c26f7692?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    title: 'Coffee Culture',
    description: 'Share your Starbucks moments and coffee culture stories.',
    payoutType: 'barter',
    totalSlots: 20,
    filledSlots: 8,
    category: 'Food & Beverage',
    requirements: ['Min 5k followers', 'Food/Lifestyle content', 'Photography skills'],
  },
  {
    id: '7',
    brandName: 'Lululemon',
    brandLogo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800',
    title: 'Wellness Journey',
    description: 'Share your wellness and fitness journey with Lululemon.',
    payoutType: 'fixed',
    payoutAmount: 16000,
    totalSlots: 12,
    filledSlots: 5,
    category: 'Fitness',
    requirements: ['Min 10k followers', 'Fitness content', 'Yoga/Wellness focus'],
  },
  {
    id: '8',
    brandName: 'Sony',
    brandLogo: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800',
    title: 'Music Creation',
    description: 'Create content featuring Sony audio products and music creation.',
    payoutType: 'fixed',
    payoutAmount: 22000,
    totalSlots: 4,
    filledSlots: 1,
    category: 'Music',
    requirements: ['Min 25k followers', 'Music content', 'Audio expertise'],
  },
  {
    id: '9',
    brandName: 'Canon',
    brandLogo: 'https://images.unsplash.com/photo-1621319332247-ce870cdcabf0?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800',
    title: 'Photography Series',
    description: 'Share your photography journey using Canon equipment.',
    payoutType: 'fixed',
    payoutAmount: 25000,
    totalSlots: 3,
    filledSlots: 0,
    category: 'Photography',
    requirements: ['Min 20k followers', 'Photography portfolio', 'Technical expertise'],
  },
  {
    id: '10',
    brandName: 'HelloFresh',
    brandLogo: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=64&h=64&fit=crop',
    campaignImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800',
    title: 'Cooking Adventures',
    description: 'Create content around your HelloFresh cooking experiences.',
    payoutType: 'barter',
    totalSlots: 25,
    filledSlots: 10,
    category: 'Food & Beverage',
    requirements: ['Min 5k followers', 'Cooking content', 'Recipe creation'],
  },
];

const ITEMS_PER_PAGE = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState<Page>('landing');

  const filteredCampaigns = MOCK_CAMPAIGNS.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCampaigns.length / ITEMS_PER_PAGE);
  const currentCampaigns = filteredCampaigns.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (activePage === 'landing') {
    return (
      <>
        <LandingPage onGetStarted={() => setActivePage('campaigns')} />
        <ThemeToggle />
      </>
    );
  }

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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
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
          {currentCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      <ThemeToggle />
    </div>
  );
}

export default App;