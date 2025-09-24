'use client';

import React from 'react';
import Achievements from './Achievements';

const AboutIntro: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Turning Ideas Into
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {" "}Digital Reality
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I&apos;m a passionate full-stack developer with expertise in modern web technologies.
          I love creating beautiful, functional, and user-friendly digital experiences.
        </p>
      </div>
      <Achievements />
    </div>
  );
};

export default AboutIntro;