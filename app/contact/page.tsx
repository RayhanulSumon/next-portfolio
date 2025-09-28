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
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-8 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Title */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                Get In Touch
              </h1>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Let&apos;s discuss your next project or collaboration opportunity
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Contact Information Cards */}
              <div className="lg:col-span-1 space-y-4">
                {/* Contact Details */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Contact Information
                    </h3>
                  </div>
                  <Address />
                </div>

                {/* Social Media */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Follow Me
                    </h3>
                  </div>
                  <Social />
                </div>

                {/* Availability Status */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-base font-semibold text-gray-900 dark:text-white">
                      Available for Projects
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Currently accepting new freelance projects and collaborations.
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">24h</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Response Time</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Send Me a Message
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Contact />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-10">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Why Work With Me?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Quick turnaround times without compromising quality
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Code</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Clean, maintainable, and well-documented code
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Great Support</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Ongoing support and clear communication throughout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}