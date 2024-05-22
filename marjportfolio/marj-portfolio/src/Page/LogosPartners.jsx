import React from 'react';

function PartnersLogos() {
  return (
    <div className="flex space-x-16 animate-scroll overflow-x-hidden p-10">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="w-[150px] overflow-hidden self-center max-w-full my-auto mx-4">
            <img loading="lazy" src={partner.src} alt={partner.alt} className="w-full" />
          </div>
        ))}
        {partners.map((partner, index) => (
          <div key={index + partners.length} className="w-[150px] overflow-hidden self-center max-w-full my-auto mx-4">
            <img loading="lazy" src={partner.src} alt={partner.alt} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

const partners = [
  { src: '/images/logo1.png', alt: 'Partner 1' },
  { src:'/images/logo2.png', alt: 'Partner 2' },
  { src: '/images/logo3.png', alt: 'Partner 3' },
  { src: '/images/logo4.png', alt: 'Partner 4' },
  { src: '/images/logo5.png', alt: 'Partner 5' },
  { src: '/images/logo6.png', alt: 'Partner 6' },
  { src: '/images/logo7.png', alt: 'Partner 7' },
  { src: '/images/logo8.png', alt: 'Partner 8' },
  { src: '/images/logo1.png', alt: 'Partner 9' },
  { src: '/images/logo10.png', alt: 'Partner 10' },
  { src: '/images/logo11.png', alt: 'Partner 11' },
];

export default PartnersLogos;
