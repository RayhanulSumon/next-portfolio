'use client';

import React from 'react';
import Image from 'next/image';
import PersonalInfo from './PersonalInfo';

const AboutHero: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-1">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-100 dark:bg-cyan-900/30 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Personal Information Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Personal Information
        </h3>
        <PersonalInfo />

        {/* Download CV Button */}
        <div className="mt-8">
          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;