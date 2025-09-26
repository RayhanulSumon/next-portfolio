'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        {/* Animated Background SVGs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute top-0 left-0 w-96 h-96 opacity-30 blur-2xl text-blue-300 dark:text-blue-900 animate-pulse" fill="currentColor" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="200" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-[32rem] h-[32rem] opacity-30 blur-2xl text-cyan-200 dark:text-cyan-900 animate-pulse" fill="currentColor" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="200" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Title - More Focused */}
          <div className="text-center mb-14">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg animate-gradient-x">
                About Me
              </h1>
              <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-8 font-semibold">
              Passionate Full Stack Developer crafting exceptional digital experiences
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Specializing in modern technologies and creative solutions that bring ideas to life
            </p>
          </div>
          {/* Personal Info + Achievements Row */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AboutHero />
            <AboutIntro />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSkills />
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 bg-gray-50/80 dark:bg-gray-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <AboutExperience />
            <AboutEducation />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;