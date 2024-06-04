import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselLogos = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="logo-carousel ">
      <Slider {...settings}>
        {/* Insert your company or sponsor logos here */}
        <div className="mx-4">
  <img src="/images/logonms.png" alt="Company Logo 1" className="h-12 w-auto" />
</div>
<div className="mx-4">
  <img src="/images/logochekkee.png" alt="Company Logo 2" className="h-12 w-auto" />
</div>
<div className="mx-4">
  <img src="/images/logonoa.png" alt="Company Logo 3" className="h-12 w-auto" />
</div>
<div className="mx-4">
  <img src="/images/logomaha.png" alt="Company Logo 4" className="h-12 w-auto" />
</div>
<div className="mx-4">
  <img src="/images/logolcf.png" alt="Company Logo 5" className="h-12 w-auto" />
</div>
<div className="mx-4">
  <img src="/images/logotxt.png" alt="Company Logo 6" className="h-12 w-auto" />
</div>
        {/* Add more logos as needed */}
      </Slider>
    </div>
  );
};


export default CarouselLogos;