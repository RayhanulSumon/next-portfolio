import { Metadata } from 'next';
import Portfolio from '../../components/portfolio/Portfolio';


export const metadata: Metadata = {
  title: 'Portfolio - Rayhanul Sumon | Full Stack Developer',
  description: 'Explore my latest projects and creative work as a Full Stack Web Developer',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Portfolio Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-60"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Page Title */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-green-600 to-blue-500 bg-clip-text text-transparent tracking-tight">
                  My Portfolio
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-green-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-6 font-medium">
                Explore my latest projects and creative work
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
                Showcasing innovative solutions built with modern technologies
              </p>
            </div>

            {/* Portfolio Component */}
            <Portfolio />
          </div>
        </section>
      </main>
    </div>
  );
}