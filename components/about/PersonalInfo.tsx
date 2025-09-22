'use client';

import React from 'react';

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
}

const personalInfoContent: PersonalInfoItem[] = [
  { meta: 'first name', metaInfo: 'Rayhanul' },
  { meta: 'last name', metaInfo: 'Sumon' },
  { meta: 'Nationality', metaInfo: 'Bangladeshi' },
  { meta: 'Freelance', metaInfo: 'Available' },
  { meta: 'Address', metaInfo: 'Dhanmondi, Dhaka' },
  { meta: 'phone', metaInfo: '+8801710138034' },
  { meta: 'Email', metaInfo: 'rayhanulsumon@gmail.com' },
];

const PersonalInfo: React.FC = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;