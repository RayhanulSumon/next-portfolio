import Link from 'next/link';
import SwitchDark from './switch/SwitchDark';
import React from 'react';

interface DesktopNavBarProps {
  isScrolled: boolean;
  pathname: string;
  navigationItems: { href: string; icon: string; label: string; color: string }[];
}

const DesktopNavBarComponent: React.FC<DesktopNavBarProps> = ({ isScrolled, pathname, navigationItems }) => (
  <div className="hidden md:flex items-center space-x-6">
    {/* Navigation links */}
    <div className={`flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-2xl backdrop-blur-sm shadow-inner border border-gray-200/50 dark:border-gray-600/50 transition-all duration-500 ${
      isScrolled ? 'p-1 sm:p-1.5' : 'p-1.5 sm:p-2'
    }`}>
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative rounded-xl transition-all duration-500 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 group overflow-hidden ${
              isScrolled 
                ? 'px-2 py-1 sm:px-3 sm:py-2' 
                : 'px-2.5 py-1.5 sm:px-4 sm:py-2.5'
            } ${
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
            <span className={`transition-all duration-300 relative z-10 ${
              isScrolled ? 'text-base' : 'text-lg'
            } ${
              isActive ? 'scale-110 animate-pulse' : 'group-hover:scale-110 group-hover:rotate-12'
            }`}>
              {item.icon}
            </span>
            <span className={`relative z-10 transition-all duration-300 ${
              isScrolled && !isActive ? 'opacity-80' : 'opacity-100'
            }`}>
              {item.label}
              {isActive && (
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} rounded-full animate-pulse`}></div>
              )}
            </span>
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-0 group-hover:scale-100 rounded-xl`}></div>
            </div>
            {/* Scroll indicator for active item */}
            {isActive && isScrolled && (
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
            )}
          </Link>
        );
      })}
    </div>
    {/* Gap between menu and toggle */}
    <div className="ml-2 sm:ml-4">
      <SwitchDark />
    </div>
  </div>
);

const DesktopNavBar = React.memo(DesktopNavBarComponent);
export default DesktopNavBar;