import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import About from './components/About';

export const metadata: Metadata = {
  title: 'About - Rayhanul Sumon | Full Stack Developer',
  description: 'Learn about my skills, experience, and background as a Full Stack Web Developer',
};

export default function AboutPage() {
  return (
    <>

      {/* About Content */}
      <main className="pt-32 min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies and creative solutions
              </p>
            </div>
            
            <About />
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
}