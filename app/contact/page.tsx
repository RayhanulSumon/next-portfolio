import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Contact from '../../components/Contact';
import Address from '../../components/Address';
import Social from '../../components/Social';
import SwitchDark from '../../components/switch/SwitchDark';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Rayhanul Sumon | Full Stack Developer',
  description: 'Get in touch for collaborations, opportunities, or just to say hello',
};

export default function ContactPage() {
  return (
    <>
      <SwitchDark />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 shadow-md">
            <Link href="/" className="px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400">
              <span className="text-lg">🏠</span>
              <span>Home</span>
            </Link>
            <Link href="/about" className="px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400">
              <span className="text-lg">👨‍💻</span>
              <span>About</span>
            </Link>
            <Link href="/portfolio" className="px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400">
              <span className="text-lg">💼</span>
              <span>Portfolio</span>
            </Link>
            <Link href="/blog" className="px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400">
              <span className="text-lg">📝</span>
              <span>Blog</span>
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 bg-blue-600 text-white shadow-sm">
              <span className="text-lg">📧</span>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <main className="pt-32">
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your ideas to life
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Let&apos;s Connect!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Feel free to reach out for collaborations, opportunities, or just to say hello.
                    I&apos;m always excited to work on new projects and meet fellow developers.
                  </p>
                  <Address />
                  <Social />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
}