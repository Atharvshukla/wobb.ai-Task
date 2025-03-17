import React from 'react';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Connect with <span className="text-primary dark:text-primary-dark">Leading Brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of influencers creating authentic content and earning through brand collaborations
          </p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary dark:bg-primary-dark rounded-full hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Star className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Premium Brands
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Collaborate with top-tier brands and create meaningful content
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Zap className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Quick Payments
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get paid quickly through various payment options including fixed pay and barter
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Users className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Growing Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join a thriving community of creators and grow your influence
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80"
            alt="Creators collaborating"
            className="w-full h-96 object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}