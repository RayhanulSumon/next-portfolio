'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import About from '../about/About';

interface HeroContent {
  heroImage: string;
  heroMobileImage: string;
  heroTitleName: string;
  heroDesignation: string;
  heroDescriptions: string;
  heroBtn: string;
}

const heroContent: HeroContent = {
  heroImage: '/images/hero/sumon.webp',
  heroMobileImage: '/images/hero/sumon-mobile.webp',
  heroTitleName: 'Rayhanul Sumon',
  heroDesignation: 'Web Developer',
  heroDescriptions: `Hello! I'm Rayhanul Sumon. I'm a full stack web developer who is passionate about Web Application,
   building great user experiences, fighting for simplicity over complexity and constantly learning.`,
  heroBtn: 'more about me',
};

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
          }}
        />
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              alt="hero man"
              width={400}
              height={400}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              priority
            />
            <h1 className="text-uppercase poppins-font">
              I&apos;m {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for About */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="About Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              src="/images/cancel.svg"
              alt="close"
              width={20}
              height={20}
            />
          </button>
          <About />
        </div>
      </Modal>
    </>
  );
};

export default Hero;