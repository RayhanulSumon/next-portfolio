'use client';

import React, { createContext, useContext, ReactNode } from 'react';

// Blog data interface
interface BlogPost {
  id: number;
  img: string;
  title: string;
  commentor: string;
  date: string;
  tag: string;
  description1: string;
  description2: string;
  description3: string;
  link?: string;
}

interface ContextValue {
  blogsData: BlogPost[];
}

const PortfolioContext = createContext<ContextValue | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  // Blog data - will be moved to a separate file
  const blogsData: BlogPost[] = [
    {
      id: 1,
      img: '/images/blog/blog-post-1.jpg',
      title: 'How to overcome the difficulty',
      commentor: 'Rayhanul Sumon',
      date: '21 March 2022',
      tag: 'Mental health, Change Management',
      description1: 'Life is difficult, indeed. Nothing is easy to earn, why I am alone? why this is only with me?! this kind of thinking takes the presidency in our mind. Most of the time we are just acting like let it go rather than not thinking about what should be done?',
      description2: 'Consider yourself; why I am just me not someone else? because you are unique to this world and yes often time you failed to realize that!',
      description3: 'why I am alone? You are not alone you have many things in your memory, you can make things interesting, you can love someone, you can make the change, you can be an artist, everything you can do so why do you think you are alone; you have many characters with your kingdom.',
      link: 'https://www.researchgate.net/publication/359203109_How_to_overcome_the_difficulty',
    },
    {
      id: 2,
      img: '/images/blog/blog-post-2.jpg',
      title: 'Change management strategy to manage change in the education sector',
      commentor: 'Rayhanul Sumon',
      date: 'Aug 2021',
      tag: 'Change Management',
      description1: 'Change is constant, everyday change happened in person, organization, culture.',
      description2: 'If you do not change direction, you may end up where you are heading. – Lao Tzu',
      description3: 'Introduction: Change is constant, everyday change happened in person, organization, culture. But becoming change is not simple, we fear to change. The educational sector, just like any other organization changes regularly. During COVID 19 situation change happened in each sector especially in the education sector, because of this problem we implement online classes and activities.',
      link: 'https://www.researchgate.net/publication/359244275_Change_management_strategy_to_manage_change_in_the_education_sector',
    },
    {
      id: 3,
      img: '/images/blog/blog-post-3.jpg',
      title: 'How to Be a Successful Entrepreneur',
      commentor: 'steve',
      date: '9 January 2020',
      tag: 'wordpress, business, economy, design',
      description1: 'Often time people find a good idea to start up their business. But most of the time they never find any best idea. This is why most of the startup businesses fall because the market does not accept that idea. So rather than finding the best idea, we should try to find the solution for the existing problem.',
      description2: 'Finding a proper solution is no easy task, it requires some fundamentals. Such as- Know your Skill & Ability: First thing you should acknowledge is your potential skills and ability. Because no matter how great an idea is you could not fulfillment that idea unless you have related skill and some particular ability.',
      description3: 'If we tried to think of a good idea, we wouldn\'t have been able to think of a good idea. You just have to find the solution for a problem in your own life. – Brian Chesky',
    },
  ];

  const value: ContextValue = {
    blogsData,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};