'use client';

import React from 'react';

interface ExperienceItem {
  year: string;
  position: string;
  companyName: string;
  details: string;
  type: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: '2023 - Present',
    position: 'Full Stack Developer',
    companyName: 'Soft Park',
    details: 'Leading full-stack development projects using React, Next.js, and Laravel. Responsible for architecting scalable web applications and mentoring junior developers.',
    type: 'Full-time'
  },
  {
    year: '2023',
    position: 'Software Developer',
    companyName: 'MMIT Soft Ltd',
    details: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    type: 'Full-time'
  },
  {
    year: '2022 - 2023',
    position: 'Software Developer',
    companyName: 'IGL Web Ltd',
    details: 'Built responsive web applications and e-commerce platforms. Implemented RESTful APIs and optimized database performance for better user experience.',
    type: 'Full-time'
  },
  {
    year: '2021 - 2022',
    position: 'Junior Web Developer',
    companyName: 'Freelance',
    details: 'Worked on various client projects including business websites, portfolio sites, and small e-commerce platforms using PHP, Laravel, and modern frontend frameworks.',
    type: 'Freelance'
  },
];

const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      {experienceContent.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 last:pb-0">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-500 last:bg-none"></div>

          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full shadow-lg"></div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-wrap items-center justify-between mb-3">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                {item.year}
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
                {item.type}
              </span>
            </div>

            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {item.position}
            </h4>

            <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {item.companyName}
            </h5>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;