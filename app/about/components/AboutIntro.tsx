"use client";

import React from "react";
import Achievements from "./Achievements";

const AboutIntro: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-8 h-full">
      {/* Introduction Text */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Turning Ideas Into
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          I&apos;m a passionate full-stack developer with expertise in modern web
          technologies. I love creating beautiful, functional, and user-friendly
          digital experiences that solve real-world problems.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Full-Stack Development
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Modern Technologies
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Problem Solving
            </span>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
          My Achievements
        </h3>
        <Achievements />
      </div>
    </div>
  );
};

export default AboutIntro;