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
    <>

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

    </>
  );
}