import React, { useState } from 'react';
import { Share2, MapPin, Clock, DollarSign, Calendar, Users, TrendingUp, Edit, Image, Award, Home, CreditCard, Heart, Star } from 'lucide-react';

export default function JobListing() {
  const [isApplied, setIsApplied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => setIsApplied(false), 3000);
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Social Media Assistant</h1>
              <p className="text-purple-100">Stripe • Paris, France • Full-Time</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <button 
                onClick={handleShare}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Share2 size={20} />
              </button>
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">Copy Link</button>
                  <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">Share on LinkedIn</button>
                  <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">Share on Twitter</button>
                </div>
              )}
            </div>
            <button 
              onClick={handleApply}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isApplied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-purple-600 hover:bg-gray-50'
              }`}
            >
              {isApplied ? 'Applied!' : 'Apply'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              We are looking for a talented Marketing expert to take responsibility for all aspects of marketing within an organization. You will be responsible for planning, monitoring our social media channels, creating content, finding effective ways to engage our consumers and creating a consistent voice for our brand online and in person on various channels.
            </p>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop, implement and manage our social media strategy and actively represent our brand
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Focus on social media content development and publication
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Monitoring and listening support
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Stay on top of trends on social media platforms, and suggest content ideas to the team
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Engage with other communities
              </li>
            </ul>
          </section>

          {/* Who You Are */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Who You Are</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You get things done, persistent but including the detail work environment
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You have a strong, big-hearted honesty and think self-consciously about the industry work patterns
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You're an early and enthusiastic adopter of social media
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You're detail-oriented and creative
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You're a growth marketer and know how to run campaigns
              </li>
            </ul>
          </section>

          {/* Nice-To-Haves */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Nice-To-Haves</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Expert in English
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Project management skills
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Data clearing skills
              </li>
            </ul>
          </section>

          {/* Perks & Benefits */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Perks & Benefits</h2>
            <p className="text-gray-600 mb-6">This position comes with several perks and benefits.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Full Healthcare</h3>
                <p className="text-sm text-gray-600">We believe in thriving communities and that starts with our team being happy and healthy.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Unlimited Vacation</h3>
                <p className="text-sm text-gray-600">We believe you should have a flexible schedule that makes space for family, wellness, and fun.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Skill Development</h3>
                <p className="text-sm text-gray-600">We believe in always learning whether it's a conference or online course.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="text-orange-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Team Summits</h3>
                <p className="text-sm text-gray-600">Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Home className="text-indigo-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Remote Working</h3>
                <p className="text-sm text-gray-600">You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="text-red-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Commuter Benefits</h3>
                <p className="text-sm text-gray-600">We're grateful for all of the time you put into the company. For RTO, we give a commuting stipend.</p>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Stripe</h3>
                <p className="text-gray-600">Financial Services • Large</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop" 
                   alt="Office" className="w-full h-20 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=120&fit=crop" 
                   alt="Team" className="w-full h-20 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=120&fit=crop" 
                   alt="Workspace" className="w-full h-20 object-cover rounded-lg" />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-gray-50 p-6">
          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-4">About this role</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Applied</span>
                <span className="font-medium">97 people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center">
                  <Clock size={16} className="mr-1" />
                  Apply Before
                </span>
                <span className="font-medium">July 31, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  Posted On
                </span>
                <span className="font-medium">July 1, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Job Type</span>
                <span className="font-medium">Full-Time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary</span>
                <span className="font-medium">$75,000 USD</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Design</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Marketing</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Social Media</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold mb-4">Required Skills</h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mr-2 mb-2">Project Management</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mr-2 mb-2">Copywriting</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mr-2 mb-2">Social Media Marketing</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mr-2 mb-2">Data Entry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}