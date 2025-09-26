import Link from 'next/link';
import SwitchDark from './switch/SwitchDark';
import React from 'react';

interface DesktopNavBarProps {
  isScrolled: boolean;
  pathname: string;
  navigationItems: { href: string; icon: string; label: string; color: string }[];
}

const DesktopNavBarComponent: React.FC<DesktopNavBarProps> = ({ isScrolled, pathname, navigationItems }) => (
  <nav className="hidden md:flex items-center gap-8 px-4 py-2 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg">
    {/* Navigation links */}
    <div className="flex items-center gap-2">
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300
              ${isActive
                ? 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-blue-300 shadow-lg scale-105'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105'}
            `}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className={`text-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`}>{item.icon}</span>
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
    <div className="ml-4 flex items-center">
      <SwitchDark />
    </div>
  </nav>
);

const DesktopNavBar = React.memo(DesktopNavBarComponent);
export default DesktopNavBar;