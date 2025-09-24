import { Metadata } from 'next';
import Blog from '../../components/blog/Blog';

import { PortfolioProvider } from '@/lib/context/PortfolioContext';

export const metadata: Metadata = {
  title: 'Blog - Rayhanul Sumon | Full Stack Developer',
  description: 'Read my thoughts on web development, technology, and more',
};

export default function BlogPage() {
  return (
    <PortfolioProvider>

      {/* Blog Content */}
      <main className="pt-32">
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                My Blog
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Read my thoughts on web development, technology, and more
              </p>
            </div>
            <Blog />
          </div>
        </section>
      </main>

    </PortfolioProvider>
  );
}