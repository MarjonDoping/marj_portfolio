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
  { src: '/images/logonms.png', alt: 'Partner 1' },
  { src:'/images/logochekkee.png', alt: 'Partner 2' },
  { src: '/images/logonoa.png', alt: 'Partner 3' },
  { src: '/images/logomaha.png', alt: 'Partner 4' },
  { src: '/images/logolcf.png', alt: 'Partner 5' },
  { src: '/images/logotxt.png', alt: 'Partner 6' },
  { src: '/images/logonms.png', alt: 'Partner 7' },
  { src: '/images/logochekkee.png', alt: 'Partner 8' },
  { src: '/images/logonoa.png', alt: 'Partner 9' },
  { src: '/images/logomaha.png', alt: 'Partner 10' },
  { src: '/images/logolcf.png', alt: 'Partner 11' },
];

export default PartnersLogos;
