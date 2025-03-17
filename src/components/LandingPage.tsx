import React from 'react';
import { ArrowRight, Star, Users, Zap, Bot, Sparkles, Target } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm font-medium mb-8">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Influencer Marketing Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            wobb<span className="text-primary dark:text-primary-dark">.ai</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-primary dark:text-primary-dark font-semibold">AI</span> meets influence. 
            Connect with premium brands, automate your collaborations, and maximize your earnings with our 
            intelligent matching system.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary dark:bg-primary-dark rounded-full hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              Learn More
              <Sparkles className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              10K+ Creators
            </div>
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              500+ Brands
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              1M+ Matches
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Bot className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              AI-Powered Matching
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI analyzes your content and audience to match you with the perfect brands
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Zap className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Smart Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automate campaign workflows, approvals, and payments with our intelligent system
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-primary/10 dark:bg-primary-dark/10 p-3 rounded-full w-fit mb-4">
              <Star className="w-6 h-6 text-primary dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Premium Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access exclusive campaigns from top brands with competitive payouts
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80"
            alt="Creators collaborating"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Future of Influencer Marketing</h2>
            <p className="text-lg text-gray-200 mb-6">
              Experience the power of AI-driven collaborations
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-primary dark:bg-primary-dark rounded-full hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-all duration-300"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}