'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section with Personal Info */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <AboutHero />
        <AboutIntro />
      </div>

      {/* Skills Section */}
      <AboutSkills />

      {/* Experience & Education Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <AboutExperience />
        <AboutEducation />
      </div>
    </div>
  );
};

export default About;