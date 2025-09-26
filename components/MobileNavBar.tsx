import SwitchDark from './switch/SwitchDark';
import React from 'react';

interface MobileNavBarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <div className="flex md:hidden items-center gap-3">
    <div className={`flex items-center justify-center ${isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'}`}>
      <SwitchDark />
    </div>
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className={`relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 ${
        isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-10 sm:h-10'
      }`}
      aria-label="Toggle menu"
    >
      <div className={`flex flex-col justify-center items-center transition-all duration-300 ${
        isScrolled ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-5 h-5 sm:w-6 sm:h-6'
      }`}>
        <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 rounded-full ${
          isScrolled ? 'w-4 sm:w-5' : 'w-5 sm:w-6'
        } ${
          isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`}></span>
        <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 rounded-full my-0.5 ${
          isScrolled ? 'w-4 sm:w-5' : 'w-5 sm:w-6'
        } ${
          isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}></span>
        <span className={`bg-gray-700 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 rounded-full ${
          isScrolled ? 'w-4 sm:w-5' : 'w-5 sm:w-6'
        } ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`}></span>
      </div>
      {/* Scroll progress indicator */}
      {isScrolled && (
        <div className="absolute -inset-0.5 border border-blue-400/40 rounded-2xl animate-pulse"></div>
      )}
    </button>
  </div>
);

export default MobileNavBar;