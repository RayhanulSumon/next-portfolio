'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../../../lib/data/portfolioData';

interface ModalProps {
  modalId: number;
  setGetModal: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalId, setGetModal }) => {

  const currentItem = portfolioData.find((item) => item.id === modalId);

  if (!currentItem) return null;

  return (
    <div className="modal_portfolio">
      <div
        className="modal__outside"
        onClick={() => setGetModal(false)}
      ></div>
      <div className="modal__content">
        <div data-aos="fade">
          <h2 className="heading mb-2">{currentItem.type}</h2>
          <div className="modal__details">
            {currentItem.modalDetails.map((details, i) => {
              return (
                <div key={i} className="row open-sans-font">
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-file-text-o pr-2"></i>
                    Project:{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.project}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-user-o pr-2"></i>
                    Client:{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.client}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-code pr-2"></i>
                    Language:{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.language}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-external-link pr-2"></i>
                    Preview:{' '}
                    <a
                      className="preview-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={details.link}
                    >
                      {details.preview}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <figure className="modal__img">
            <Image
              src={currentItem.image}
              alt="Portfolio project"
              width={800}
              height={600}
              className="img-fluid"
            />
          </figure>

          <button
            className="close-modal"
            onClick={() => setGetModal(false)}
          >
            <Image
              src="/images/cancel.svg"
              alt="Close"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;