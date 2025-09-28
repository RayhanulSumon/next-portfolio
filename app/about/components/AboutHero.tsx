'use client';

import React from 'react';
import Image from 'next/image';
import PersonalInfo from './PersonalInfo';

const AboutHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Profile Image */}
      <div className="relative">
        <div className="relative w-72 h-72 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl rotate-6 opacity-20"></div>
          <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50/70 to-cyan-50/70 dark:from-blue-900/40 dark:to-cyan-900/40 p-1 shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon - Full Stack Developer"
                width={288}
                height={288}
                className="w-full h-full object-cover object-center"
                priority
                unoptimized={true}
              />
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute -top-2 -right-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse border border-white dark:border-gray-800 transition-colors duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Available</span>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute -top-4 -right-12 w-6 h-6 bg-cyan-500 rounded-full opacity-30"></div>
      </div>

      {/* Personal Information Card */}
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Rayhanul Sumon
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer</p>
        </div>

        <PersonalInfo />
      </div>
    </div>
  );
};

export default AboutHero;