'use client';

import React from 'react';
import Image from 'next/image';
import PersonalInfo from './PersonalInfo';

const AboutHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-8">
      {/* Profile Image */}
      <div className="relative w-80 h-80 mx-auto lg:mx-0">
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-2">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
            <Image
              src="/images/hero/sumon.webp"
              alt="Rayhanul Sumon"
              width={320}
              height={320}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 dark:bg-blue-900/40 rounded-full blur-xl opacity-80"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-200 dark:bg-cyan-900/40 rounded-full blur-xl opacity-80"></div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Available for Work
        </div>
      </div>

      {/* Personal Information Card */}
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
          Personal Information
        </h3>
        <PersonalInfo />

        {/* Download CV Button */}
        <div className="mt-6">
          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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