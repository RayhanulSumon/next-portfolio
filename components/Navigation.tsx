'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import {
  HomeIcon,
  UserCircleIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const navigationItems = [
  { href: '/', icon: HomeIcon, label: 'Home', color: 'from-purple-500 to-purple-600' },
  { href: '/about', icon: UserCircleIcon, label: 'About', color: 'from-blue-500 to-blue-600' },
  { href: '/portfolio', icon: BriefcaseIcon, label: 'Portfolio', color: 'from-green-500 to-green-600' },
  { href: '/blog', icon: PencilSquareIcon, label: 'Blog', color: 'from-orange-500 to-orange-600' },
  { href: '/contact', icon: EnvelopeIcon, label: 'Contact', color: 'from-pink-500 to-pink-600' },
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


        {/* Mobile Navigation Menu - Dropdown Under Navbar */}
        <div className={`md:hidden absolute left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`} style={{
          top: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 60%, rgba(100,116,139,0.12) 100%)',
          backdropFilter: 'blur(8px)'
        }}>
          <div className="relative w-full bg-white dark:bg-gray-900 shadow-2xl border-b border-blue-200/40 dark:border-gray-700/60 rounded-b-3xl transition-transform duration-500">
            <div className="px-6 pb-8 pt-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-4 rounded-2xl font-semibold transition-all duration-500 group shadow-sm ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 shadow-lg scale-105'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:scale-105'
                      }`}
                      style={{
                        animation: isMobileMenuOpen ? `fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
                        animationDelay: `${isMobileMenuOpen ? index * 80 + 120 : 0}ms`,
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)'
                      }}
                    >
                      <Icon className={`transition-transform duration-300 ${isActive ? 'w-5 h-5 scale-110 text-blue-600 dark:text-blue-400' : 'w-6 h-6 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300'}`} aria-hidden="true" />
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
        </div>

        <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}</style>
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