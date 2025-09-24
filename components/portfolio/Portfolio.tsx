'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data/portfolioData';
import Modal from './modal/Modal';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id: number) => {
    setGetModal(true);
    setModalId(id);
  };

  // Filter portfolio items by tag
  const filterByTag = (tag: string) => {
    if (tag === 'all') return portfolioData;
    return portfolioData.filter(item =>
      item.tag.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  };

  const filteredProjects = filterByTag(activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: portfolioData.length, color: 'from-blue-500 to-purple-500' },
    { id: 'laravel', label: 'Laravel', count: filterByTag('laravel').length, color: 'from-red-500 to-orange-500' },
    { id: 'react', label: 'React', count: filterByTag('react').length, color: 'from-cyan-500 to-blue-500' },
    { id: 'vue', label: 'Vue', count: filterByTag('vue').length, color: 'from-green-500 to-emerald-500' },
    { id: 'mockup', label: 'Mockup', count: filterByTag('mockup').length, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <>
      <div className="space-y-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`group relative px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === tab.id
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg scale-105'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {/* Active indicator */}
              {activeFilter === tab.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-10 rounded-2xl`}></div>
              )}

              <span className="relative z-10 flex items-center gap-2">
                {tab.label}
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activeFilter === tab.id
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </span>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.type}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => handleModal(item.id)}
                    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Project
                    </span>
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.type}
                  </h3>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Preview Info */}
                {item.modalDetails && item.modalDetails.length > 0 && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="truncate">
                      <span className="font-medium">Client:</span> {item.modalDetails[0].client}
                    </p>
                    {item.modalDetails[0].preview && (
                      <p className="truncate mt-1">
                        <span className="font-medium">Preview:</span> {item.modalDetails[0].preview}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {getModal && (
        <Modal
          setGetModal={setGetModal}
          modalId={modalId}
        />
      )}
    </>
  );
};

export default Portfolio;