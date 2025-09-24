import { Metadata } from 'next';
import Contact from '../../components/Contact';
import Address from '../../components/Address';
import Social from '../../components/Social';


export const metadata: Metadata = {
  title: 'Contact - Rayhanul Sumon | Full Stack Developer',
  description: 'Get in touch for collaborations, opportunities, or just to say hello',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Contact Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-60"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Page Title */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent tracking-tight">
                  Get In Touch
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-cyan-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-6 font-medium">
                Let&apos;s collaborate and bring your ideas to life
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
                Ready to work together? Drop me a message and let&apos;s create something amazing
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Introduction Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-2-4h6a2 2 0 012 2v6a2 2 0 01-2 2H9l-4 4V8a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Let&apos;s Connect!
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                    I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Whether you&apos;re looking for a developer, have a question, or just want to say hello, I&apos;d love to hear from you.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">24h</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <Address />
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Follow Me
                      </h4>
                      <Social />
                    </div>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-gradient-to-br from-pink-50 to-cyan-50 dark:from-pink-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-800">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    I&apos;m currently accepting new freelance projects and collaborations. Let&apos;s discuss how we can work together!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send Me a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}