'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 my-6">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies and creative solutions
            </p>
          </div>

          {/* Personal Info + Achievements Row */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
            <AboutHero />
            <AboutIntro />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSkills />
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <AboutExperience />
            <AboutEducation />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;