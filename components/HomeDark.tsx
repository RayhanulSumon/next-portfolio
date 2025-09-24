'use client';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Hero from './hero/Hero';
import About from '../app/about/components/About';
import Address from './Address';
import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';
import Contact from './Contact';
import Social from './Social';
import SwitchDark from './switch/SwitchDark';

const menuItem = [
  { icon: '🏠', menuName: 'Home' },
  { icon: '👨‍💻', menuName: 'About' },
  { icon: '💼', menuName: 'Portfolio' },
  { icon: '📝', menuName: 'Blog' },
  { icon: '📧', menuName: 'Contact' },
];

const HomeDark: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SwitchDark />

      <Tabs>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
          <div className="container mx-auto px-4 py-4">
            <TabList className="react-tabs__tab-list">
              {menuItem.map((item, i) => (
                <Tab key={i} className="react-tabs__tab">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.menuName}</span>
                </Tab>
              ))}
            </TabList>
          </div>
        </header>

        <main className="pt-20">
          {/* Hero Content */}
          <TabPanel className="react-tabs__tab-panel">
            <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.1)_0%,transparent_50%)] pointer-events-none"></div>
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Hi, I&apos;m Rayhanul Sumon
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Full Stack Web Developer passionate about creating amazing digital experiences with React, Next.js, Laravel, and modern web technologies.
                  </p>
                  <Hero />
                </div>
              </div>
            </section>
          </TabPanel>

          {/* About Content */}
          <TabPanel className="react-tabs__tab-panel">
            <section className="py-24 relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    About Me
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Get to know more about my skills, experience, and background
                  </p>
                </div>
                <About />
              </div>
            </section>
          </TabPanel>

          {/* Portfolio Content */}
          <TabPanel className="react-tabs__tab-panel">
            <section className="py-24 relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    My Portfolio
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore my latest projects and creative work
                  </p>
                </div>
                <Portfolio />
              </div>
            </section>
          </TabPanel>

          {/* Blog Content */}
          <TabPanel className="react-tabs__tab-panel">
            <section className="py-24 relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    My Blog
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Read my thoughts on web development, technology, and more
                  </p>
                </div>
                <Blog />
              </div>
            </section>
          </TabPanel>

          {/* Contact Content */}
          <TabPanel className="react-tabs__tab-panel">
            <section className="py-24 relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Get In Touch
                  </h2>
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
          </TabPanel>
        </main>
      </Tabs>
    </div>
  );
};

export default HomeDark;