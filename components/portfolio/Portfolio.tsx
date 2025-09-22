'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { portfolioData } from '../../lib/data/portfolioData';
import Modal from './modal/Modal';

const Portfolio: React.FC = () => {
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

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>LARAVEL</Tab>
            <Tab>REACT</Tab>
            <Tab>VUE</Tab>
            <Tab>MOCKUP</Tab>
          </TabList>

          <div className="container">
            {/* All Projects */}
            <TabPanel>
              <div className="tab-container">
                {portfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt="portfolio project demo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* Laravel Projects */}
            <TabPanel>
              <div className="tab-container">
                {filterByTag('laravel').map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt="portfolio project demo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* React Projects */}
            <TabPanel>
              <div className="tab-container">
                {filterByTag('react').map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt="portfolio project demo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* Vue Projects */}
            <TabPanel>
              <div className="tab-container">
                {filterByTag('vue').map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt="portfolio project demo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* Mockup Projects */}
            <TabPanel>
              <div className="tab-container">
                {filterByTag('mockup').map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt="portfolio project demo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>

      {/* Modal */}
      {getModal && (
        <Modal modalId={modalId} setGetModal={setGetModal} />
      )}
    </>
  );
};

export default Portfolio;