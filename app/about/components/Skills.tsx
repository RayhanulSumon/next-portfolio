'use client';

import React from 'react';

interface SkillItem {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skillsContent: SkillItem[] = [
  // Frontend
  { name: 'React.js', level: 90, icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', level: 85, icon: '🚀', category: 'Frontend' },
  { name: 'Vue.js', level: 75, icon: '💚', category: 'Frontend' },
  { name: 'TypeScript', level: 80, icon: '📘', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨', category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, icon: '🌐', category: 'Frontend' },

  // Backend
  { name: 'PHP', level: 90, icon: '🐘', category: 'Backend' },
  { name: 'Laravel', level: 85, icon: '🔥', category: 'Backend' },
  { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
  { name: 'Python', level: 70, icon: '🐍', category: 'Backend' },

  // Database & Tools
  { name: 'MySQL', level: 85, icon: '🗄️', category: 'Database' },
  { name: 'MongoDB', level: 75, icon: '🍃', category: 'Database' },
  { name: 'Git', level: 90, icon: '📝', category: 'Tools' },
  { name: 'Docker', level: 70, icon: '🐳', category: 'Tools' },
];

const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools'];

const Skills: React.FC = () => {
  return (
    <div className="space-y-8">
      {skillCategories.map((category) => (
        <div key={category}>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></span>
            {category}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsContent
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;