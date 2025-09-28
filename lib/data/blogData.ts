export interface BlogPost {
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

export const blogsData: BlogPost[] = [
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
  {
    id: 4,
    img: '/images/blog/blog-post-4.jpg',
    title: 'Understanding Modern Web Development',
    commentor: 'Rayhanul Sumon',
    date: '15 September 2025',
    tag: 'Web Development, React, Next.js',
    description1: 'Modern web development has evolved significantly over the past few years. With the introduction of frameworks like React, Next.js, and various build tools, developers now have powerful tools at their disposal to create amazing user experiences.',
    description2: 'The key to successful modern web development lies in understanding the core concepts of component-based architecture, state management, and performance optimization. These fundamentals help create scalable and maintainable applications.',
    description3: 'As we move forward, staying updated with the latest trends and best practices is crucial. Continuous learning and adaptation to new technologies will help developers build better applications for the future.',
  },
  {
    id: 5,
    img: '/images/blog/blog-post-5.jpg',
    title: 'The Future of Full Stack Development',
    commentor: 'Rayhanul Sumon',
    date: '28 September 2025',
    tag: 'Full Stack, Technology Trends',
    description1: 'Full stack development continues to evolve with new technologies and methodologies. The integration of AI tools, improved development environments, and better deployment strategies are changing how we approach full stack projects.',
    description2: 'Modern full stack developers need to be proficient in multiple areas: frontend frameworks, backend technologies, databases, cloud services, and DevOps practices. This broad skill set enables them to build complete solutions.',
    description3: 'The future holds exciting possibilities with serverless architectures, edge computing, and AI-assisted development tools becoming more mainstream. Developers who adapt to these changes will thrive in the evolving landscape.',
  },
];