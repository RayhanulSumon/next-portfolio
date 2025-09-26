import Link from 'next/link';
import SwitchDark from './switch/SwitchDark';
import React from 'react';

interface DesktopNavBarProps {
  isScrolled: boolean;
  pathname: string;
  navigationItems: { href: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string; color: string }[];
}

const DesktopNavBarComponent: React.FC<DesktopNavBarProps> = ({ isScrolled, pathname, navigationItems }) => (
  <nav className={`hidden md:flex items-center gap-8 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
    {/* Navigation links */}
    <div className="flex items-center gap-2">
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex items-center gap-2 rounded-xl font-semibold transition-all duration-300
              ${isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-base'}
              ${isActive
                ? 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-blue-300 shadow-lg scale-105'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105'}
            `}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Icon className={`transition-transform duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'} ${isActive ? 'scale-110 text-blue-600 dark:text-blue-400' : 'text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300'}`} aria-hidden="true" />
            <span className="relative z-10">
              {item.label}
              {isActive && (
                <span className="block absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              )}
            </span>
          </Link>
        );
      })}
    </div>
    {/* Modern dark mode toggle */}
    <div className={`ml-2 flex items-center transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
      <SwitchDark />
    </div>
  </nav>
);

const DesktopNavBar = React.memo(DesktopNavBarComponent);
export default DesktopNavBar;