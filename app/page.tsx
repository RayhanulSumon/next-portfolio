import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import HeroSection from './page/HeroSection';
import RightNavBar from './page/RightNavBar';
import SkillsSection from './page/SkillsSection';
import AchievementsSection from './page/AchievementsSection';


export const metadata: Metadata = {
    title: 'Rayhanul Sumon - Full Stack Developer',
    description: 'Welcome to my personal portfolio website. I am a Full Stack Developer specializing in React, Next.js, and Laravel. Explore my skills, achievements, and projects.',
    keywords: ['Rayhanul Sumon', 'Full Stack Developer', 'React', 'Next.js', 'Laravel', 'Portfolio', 'Web Development'],
    authors: [{ name: 'Rayhanul Sumon', url: 'https://rayhanulsumon.com' }],
    creator: 'Rayhanul Sumon',
    publisher: 'Rayhanul Sumon',
    openGraph: {
        title: 'Rayhanul Sumon - Full Stack Developer',
        description: 'Welcome to my personal portfolio website. I am a Full Stack Developer specializing in React, Next.js, and Laravel. Explore my skills, achievements, and projects.',
        url: 'https://rayhanulsumon.com',
        siteName: 'Rayhanul Sumon Portfolio',
        images: [
            {
                url: 'https://rayhanulsumon.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Rayhanul Sumon Portfolio'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rayhanul Sumon - Full Stack Developer',
        description: 'Welcome to my personal portfolio website. I am a Full Stack Developer specializing in React, Next.js, and Laravel. Explore my skills, achievements, and projects.',
        images: ['https://rayhanulsumon.com/twitter-image.jpg'],
        creator: '@RayhanulSumon'
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
        other: [
            { rel: 'android-chrome', url: '/android-chrome-192x192.png' },
            { rel: 'android-chrome', url: '/android-chrome-512x512.png' }
        ]
    },
    manifest: '/site.webmanifest'
};

export default function Home() {
  return (
    <>
      <RightNavBar />
      <main className="pt-0">
        <HeroSection />
        <SkillsSection />
        <AchievementsSection />
      </main>

      <Analytics />
    </>
  );
}