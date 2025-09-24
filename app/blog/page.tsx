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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Blog Content */}
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Page Title */}
              <div className="text-center mb-16">
                <div className="inline-block">
                  <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-blue-600 to-purple-500 bg-clip-text text-transparent tracking-tight">
                    My Blog
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-blue-500 mx-auto rounded-full"></div>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-6 font-medium">
                  Read my thoughts on web development and technology
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
                  Sharing insights, tutorials, and experiences from my development journey
                </p>
              </div>

              {/* Blog Component */}
              <Blog />
            </div>
          </section>
        </main>
      </div>
    </PortfolioProvider>
  );
}