'use client';

import React from 'react';

interface EducationItem {
  year: string;
  degree: string;
  institute: string;
  details: string;
  grade?: string;
}

const educationContent: EducationItem[] = [
  {
    year: '2019 - 2023',
    degree: 'Bachelor in Computer Science & Engineering',
    institute: 'Daffodil International University',
    details: 'Specialized in software engineering, web development, and database management. Completed various projects using modern technologies and frameworks.',
    grade: 'CGPA: 3.8/4.0'
  },
  {
    year: '2015 - 2019',
    degree: 'Diploma in Computer Engineering',
    institute: 'Naogaon Polytechnic Institute',
    details: 'Focused on computer hardware, software development, and network systems. Gained hands-on experience with programming languages and system administration.',
    grade: 'CGPA: 3.9/4.0'
  },
  {
    year: '2013 - 2015',
    degree: 'Secondary School Certificate (S.S.C)',
    institute: 'Narayanpur 2nd High School',
    details: 'Completed secondary education with focus on science subjects. Developed strong foundation in mathematics and logical thinking.',
    grade: 'GPA: 4.5/5.0'
  },
];

const Education: React.FC = () => {
  return (
    <div className="space-y-6">
      {educationContent.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 last:pb-0">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-500 last:bg-none"></div>

          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-cyan-500 rounded-full shadow-lg"></div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-wrap items-center justify-between mb-3">
              <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 rounded-full">
                {item.year}
              </span>
              {item.grade && (
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
                  {item.grade}
                </span>
              )}
            </div>

            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {item.degree}
            </h4>

            <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {item.institute}
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

export default Education;