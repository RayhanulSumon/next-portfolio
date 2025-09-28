'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data/portfolioData';
import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useTheme } from 'next-themes';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Filter by tag
  const baseFilteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item =>
        item.tag.some(t => t.toLowerCase() === activeFilter.toLowerCase())
      );

  // Prioritize the last 3 projects to show first
  const priorityProjects = baseFilteredProjects.filter(item =>
    item.type === 'BestTutor.xyz' ||
    item.type === 'BDDTI.com' ||
    item.type === 'BDDTI Admin Panel'
  );

  const otherProjects = baseFilteredProjects.filter(item =>
    item.type !== 'BestTutor.xyz' &&
    item.type !== 'BDDTI.com' &&
    item.type !== 'BDDTI Admin Panel'
  );

  // Combine priority projects first, then others
  const filteredProjects = [...priorityProjects, ...otherProjects];

  // Helper to count projects by tag
  const filterByTag = (tag: string) =>
    portfolioData.filter(item =>
      item.tag.some(t => t.toLowerCase() === tag.toLowerCase())
    );

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
        {/* Filter Tabs using shadcn/ui Tabs */}
        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="flex flex-col items-center mb-12">
          <TabsList>
            {filterTabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="relative px-6 py-3 rounded-2xl font-medium text-sm">
                {tab.label}
                <Badge variant={activeFilter === tab.id ? 'default' : 'secondary'} className="ml-2">
                  {tab.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid using shadcn/ui Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => {
            // Use dark mode logic for both themes since dark mode is working
            let imageSrc;

            if (mounted && item.imageDark) {
              // Use dark image if available (works in dark mode)
              imageSrc = item.imageDark;
            } else if (mounted && item.imageLight) {
              // Fallback to light image if dark not available
              imageSrc = item.imageLight;
            } else {
              // Final fallback to base image
              imageSrc = item.image;
            }

            // Safety fallback
            if (!imageSrc) {
              imageSrc = '/images/portfolio/project-1.jpg';
            }


            return (
              <Dialog key={item.id}>
                <Card className="group relative shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={item.type}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="lg">
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Project
                          </span>
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.type}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tag.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                    {item.modalDetails && item.modalDetails.length > 0 && (
                      <CardDescription>
                        <p className="truncate">
                          <span className="font-medium">Client:</span> {item.modalDetails[0].client}
                        </p>
                        {item.modalDetails[0].preview && (
                          <p className="truncate mt-1">
                            <span className="font-medium">Preview:</span> {item.modalDetails[0].preview}
                          </p>
                        )}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {/* Modal Content using shadcn/ui Dialog */}
                  <DialogContent>
                    {/* Accessible DialogTitle for screen readers, visually hidden */}
                    <DialogTitle asChild>
                      <VisuallyHidden>
                        <h2>{item.type}</h2>
                      </VisuallyHidden>
                    </DialogTitle>
                    <DialogClose asChild>
                      <Button variant="outline" size="icon" className="absolute top-4 right-4">
                        <span className="sr-only">Close</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </DialogClose>
                    <div className="flex flex-col gap-4">
                      <Image
                        src={imageSrc}
                        alt={item.type}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h2 className="text-xl font-bold mb-2">{item.type}</h2>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tag.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                      {item.modalDetails && item.modalDetails.length > 0 && (
                        <div className="space-y-2">
                          <p><span className="font-medium">Project:</span> {item.modalDetails[0].project}</p>
                          <p><span className="font-medium">Client:</span> {item.modalDetails[0].client}</p>
                          <p><span className="font-medium">Language:</span> {item.modalDetails[0].language}</p>
                          {item.modalDetails[0].preview && (
                            <p><span className="font-medium">Preview:</span> {item.modalDetails[0].preview}</p>
                          )}
                          {item.modalDetails[0].link && (
                            <a href={item.modalDetails[0].link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit Site</a>
                          )}
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Card>
              </Dialog>
            );
          })}
        </div>

        {/* Empty State using shadcn/ui Card */}
        {filteredProjects.length === 0 && (
          <Card className="text-center py-20 flex flex-col items-center">
            <div className="w-24 h-24 mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <CardTitle>No projects found</CardTitle>
            <CardDescription>
              No projects match the selected filter. Try selecting a different category.
            </CardDescription>
          </Card>
        )}
      </div>
    </>
  );
};

export default Portfolio;