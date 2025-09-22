'use client';

import React from 'react';

interface ExperienceItem {
  year: string;
  position: string;
  companyName: string;
  details: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: '2023 - Present',
    position: 'Full Stack Developer',
    companyName: 'Soft Park.',
    details: 'Software Company',
  },
  {
    year: '2023',
    position: 'Software Developer',
    companyName: 'MMIT Soft Ltd.',
    details: 'Software Company',
  },
  {
    year: '2022 - 2023',
    position: 'Software Developer',
    companyName: 'IGL Web Ltd.',
    details: 'Software/It Company',
  },
  {
    year: '2018 - 2019',
    position: 'Web Developer',
    companyName: 'Felix Tech Ltd.',
    details: 'Software Company',
  },
  {
    year: '2017 - 2018',
    position: 'Trainer',
    companyName: 'Engineer Institute',
    details: 'Training Institute',
  },
];

const Experience: React.FC = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;