'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

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
  { name: 'TypeScript', level: 80, icon: '📘', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨', category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, icon: '🌐', category: 'Frontend' },

  // Backend
  { name: 'PHP', level: 90, icon: '🐘', category: 'Backend' },
  { name: 'Laravel', level: 85, icon: '🔥', category: 'Backend' },
  { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },

  // Database & Tools
  { name: 'MySQL', level: 85, icon: '🗄️', category: 'Database' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsContent
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <Card
                  key={index}
                  className="relative p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] border rounded-xl shadow-xl backdrop-blur-2xl
                    bg-white/20 border-white/20
                    dark:bg-black/30 dark:border-white/10 dark:shadow-black/70"
                >
                  {/* Subtle overlay for glass effect, toned down for readability */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl z-0
                    bg-gradient-to-br from-white/30 via-white/5 to-transparent
                    dark:from-white/5 dark:via-black/10 dark:to-transparent" />
                  <div className="relative z-10 flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-slate-100 text-sm">
                        {skill.name}
                      </span>
                      <Badge className="ml-2 bg-blue-100 text-blue-700 dark:bg-black/40 dark:text-blue-200 dark:border dark:border-white/10">{category}</Badge>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-slate-200">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative z-10">
                    <Slider
                      value={[skill.level]}
                      max={100}
                      disabled
                      className="w-full"
                    />
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;