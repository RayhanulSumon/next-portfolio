'use client';

import React from 'react';
import Skills from './Skills';

const AboutSkills: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Skills
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default AboutSkills;