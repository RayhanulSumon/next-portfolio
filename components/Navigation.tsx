'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigationItems = [
  { href: '/', icon: '🏠', label: 'Home', color: 'from-purple-500 to-purple-600' },
  { href: '/about', icon: '👨‍💻', label: 'About', color: 'from-blue-500 to-blue-600' },
  { href: '/portfolio', icon: '💼', label: 'Portfolio', color: 'from-green-500 to-green-600' },
  { href: '/blog', icon: '📝', label: 'Blog', color: 'from-orange-500 to-orange-600' },
  { href: '/contact', icon: '📧', label: 'Contact', color: 'from-pink-500 to-pink-600' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'w-full max-w-6xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl' 
          : 'w-full max-w-7xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border border-gray-200/40 dark:border-gray-700/40 rounded-3xl'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo/Brand - Enhanced */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-white font-bold text-lg">RS</span>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Rayhanul Sumon
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Full Stack Developer
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Ultra Modern */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-2xl p-2 backdrop-blur-sm shadow-inner border border-gray-200/50 dark:border-gray-600/50">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2 group overflow-hidden ${
                        isActive
                          ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg scale-105'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-700/80 hover:text-gray-900 dark:hover:text-white hover:scale-105'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Magnetic hover effect background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>

                      <span className={`text-lg transition-all duration-300 relative z-10 ${
                        isActive ? 'scale-110 animate-pulse' : 'group-hover:scale-110 group-hover:rotate-12'
                      }`}>
                        {item.icon}
                      </span>

                      <span className="relative z-10 transition-all duration-300">
                        {item.label}
                        {isActive && (
                          <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} rounded-full animate-pulse`}></div>
                        )}
                      </span>

                      {/* Ripple effect on hover */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-0 group-hover:scale-100 rounded-xl`}></div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full my-1 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 overflow-hidden transform -translate-y-4'
        }`}>
          <div className="px-6 pb-6 bg-gradient-to-b from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-2xl border-t border-gray-200/60 dark:border-gray-700/60 rounded-b-2xl">
            <div className="space-y-2 pt-4">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 shadow-lg scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:scale-105'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} ${
                      isActive ? 'shadow-lg' : 'opacity-80 group-hover:opacity-100'
                    } transition-all duration-300`}>
                      <span className="text-white text-lg">{item.icon}</span>
                    </div>
                    <span className="font-semibold text-lg flex-1">{item.label}</span>
                    {isActive && (
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Enhanced */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/20 via-blue-900/10 to-purple-900/10 backdrop-blur-md z-40 md:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Floating cursor effect (subtle) */}
      <div
        className="fixed pointer-events-none z-30 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
    </>
  );
}