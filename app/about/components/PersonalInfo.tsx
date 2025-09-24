'use client';

import React from 'react';

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
  icon: string;
}

const personalInfoContent: PersonalInfoItem[] = [
  { meta: 'First Name', metaInfo: 'Rayhanul', icon: '👤' },
  { meta: 'Last Name', metaInfo: 'Sumon', icon: '👤' },
  { meta: 'Nationality', metaInfo: 'Bangladeshi', icon: '🇧🇩' },
  { meta: 'Freelance', metaInfo: 'Available', icon: '💼' },
  { meta: 'Address', metaInfo: 'Dhanmondi, Dhaka', icon: '📍' },
  { meta: 'Phone', metaInfo: '+8801710138034', icon: '📞' },
  { meta: 'Email', metaInfo: 'rayhanulsumon@gmail.com', icon: '📧' },
  { meta: 'Languages', metaInfo: 'Bengali, English', icon: '🌐' },
];

const PersonalInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      {personalInfoContent.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
          <div className="flex items-center space-x-3">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {item.meta}:
            </span>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white text-right max-w-[60%]">
            {item.metaInfo}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;