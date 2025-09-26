'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

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
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out transform ${
        scrollDirection === 'down' && isScrolled 
          ? '-translate-y-1' 
          : 'translate-y-0'
      } ${
        isScrolled 
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-3xl shadow-2xl' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          <div className="flex items-center w-full">
            {/* Logo/Brand - Always visible */}
            <div className={`flex items-center flex-shrink-0 px-2 py-1 sm:px-3 sm:py-2 transition-all duration-300 ${isScrolled ? 'gap-1 sm:gap-2' : 'gap-2 sm:gap-3'}`}>
              <Link href="/" className="flex items-center gap-2 sm:gap-3 w-full group">
                <div className="relative flex items-center">
                  <div className={`bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-10 h-10 sm:w-12 sm:h-12'
                  }`}>
                    <span className={`text-white font-bold transition-all duration-300 ${
                      isScrolled ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'
                    }`}>RS</span>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                  {/* Scroll indicator ring */}
                  <div className={`absolute -inset-1 border-2 border-blue-400/30 rounded-2xl transition-all duration-500 ${
                    isScrolled ? 'opacity-100 animate-pulse' : 'opacity-0'
                  }`}></div>
                </div>
                {/* Brand text always visible, responsive and compact on mobile */}
                <div className="flex flex-col justify-center leading-none">
                  <span className={`font-bold transition-all duration-300 ${isScrolled ? 'text-xs sm:text-lg' : 'text-sm sm:text-xl'} bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent`}>
                    Rayhanul Sumon
                  </span>
                  <span className={`transition-all duration-300 ${isScrolled ? 'text-[9px] sm:text-xs' : 'text-[11px] sm:text-xs'} text-gray-500 dark:text-gray-400 font-medium mt-0.5 sm:mt-0`}>
                    Full Stack Developer
                  </span>
                </div>
              </Link>
            </div>
            {/* Spacer to push menu/toggle right */}
            <div className="flex-1" />
            {/* Desktop and Mobile Navbars */}
            <DesktopNavBar isScrolled={isScrolled} pathname={pathname} navigationItems={navigationItems} />
            <MobileNavBar isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>
        </div>


        {/* Mobile Navigation Menu - Enhanced */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 overflow-hidden transform -translate-y-4'
        }`}>
          <div className="px-6 pb-6 bg-gradient-to-b from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-2xl border-t border-gray-200/60 dark:border-gray-700/60">
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

      {/* Enhanced floating cursor effect */}
      <div
        className={`fixed pointer-events-none z-30 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm transition-all duration-300 ease-out ${
          isScrolled ? 'w-4 h-4 opacity-30' : 'w-6 h-6 opacity-20'
        }`}
        style={{
          left: mousePosition.x - (isScrolled ? 8 : 12),
          top: mousePosition.y - (isScrolled ? 8 : 12),
        }}
      />
    </>
  );
}