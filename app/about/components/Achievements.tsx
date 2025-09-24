'use client';

import React from 'react';

interface AchievementItem {
  title: string;
  subTitle1: string;
  subTitle2: string;
  icon: string;
  color: string;
}

const achievementsContent: AchievementItem[] = [
  {
    title: '7+',
    subTitle1: 'Years of',
    subTitle2: 'Experience',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: '35+',
    subTitle1: 'Completed',
    subTitle2: 'Projects',
    icon: '🚀',
    color: 'from-green-500 to-green-600'
  },
  {
    title: '40+',
    subTitle1: 'Happy',
    subTitle2: 'Customers',
    icon: '😊',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: '5+',
    subTitle1: 'Awards',
    subTitle2: 'Won',
    icon: '🏆',
    color: 'from-orange-500 to-orange-600'
  },
];

const Achievements: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {achievementsContent.map((achievement, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl shadow-lg`}>
              {achievement.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
              {achievement.subTitle1}
              <br />
              <span className="font-semibold">{achievement.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;