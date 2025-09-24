import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Portfolio from '../../components/portfolio/Portfolio';


export const metadata: Metadata = {
  title: 'Portfolio - Rayhanul Sumon | Full Stack Developer',
  description: 'Explore my latest projects and creative work as a Full Stack Web Developer',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Portfolio Content */}
      <main className="pt-32">
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                My Portfolio
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my latest projects and creative work
              </p>
            </div>
            <Portfolio />
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
}