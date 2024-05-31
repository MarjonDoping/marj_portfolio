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
  { src: '/images/logo1.webp', alt: 'Partner 1' },
  { src:'/images/logo2.webp', alt: 'Partner 2' },
  { src: '/images/logo3.webp', alt: 'Partner 3' },
  { src: '/images/logo4.webp', alt: 'Partner 4' },
  { src: '/images/logo5.webp', alt: 'Partner 5' },
  { src: '/images/logo6.webp', alt: 'Partner 6' },
  { src: '/images/logo7.webp', alt: 'Partner 7' },
  { src: '/images/logo8.webp', alt: 'Partner 8' },
  { src: '/images/logo1.webp', alt: 'Partner 9' },
  { src: '/images/logo10.webp', alt: 'Partner 10' },
  { src: '/images/logo11.webp', alt: 'Partner 11' },
];

export default PartnersLogos;
