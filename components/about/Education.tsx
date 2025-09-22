'use client';

import React from 'react';

interface EducationItem {
  degree: string;
  institute: string;
  details: string;
}

const educationContent: EducationItem[] = [
  {
    degree: 'BACHELOR in C.S.E',
    institute: 'Daffodil International University',
    details: 'At Daffodil International University, students get the opportunity to think, learn and grow',
  },
  {
    degree: 'Diploma in Computer Engineer',
    institute: 'Naogaon Polytechnic Institute',
    details: 'One of the best government polytechnic in Bangladesh',
  },
  {
    degree: 'S.S.C',
    institute: 'Narayanpur 2nd high school',
    details: 'Fantastic School for moral lesson',
  },
];

const Education: React.FC = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;