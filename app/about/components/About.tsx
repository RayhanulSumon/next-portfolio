'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Title - More Focused */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                About Me
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-6 font-medium">
              Passionate Full Stack Developer crafting exceptional digital experiences
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
              Specializing in modern technologies and creative solutions that bring ideas to life
            </p>
          </div>

          {/* Personal Info + Achievements Row */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AboutHero />
            <AboutIntro />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSkills />
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AboutExperience />
            <AboutEducation />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;