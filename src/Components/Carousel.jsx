import React from 'react';
import useDeviceType from '../Hooks/useDevideType';

import Slide1Desktop from '../assets/Desktop/Banner-carousel-1.png';
import Slide1Mobile from '../assets/Mobile/Banner-carousel-1.png';
import Slide1Tablet from '../assets/Tablet/Banner-carousel-1.png';

import Slide2Desktop from '../assets/Desktop/Banner-carousel-2.png';
import Slide2Mobile from '../assets/Mobile/Banner-carousel-2.png';
import Slide2Tablet from '../assets/Tablet/Banner-carousel-2.png';

import Slide3Desktop from '../assets/Desktop/Banner-carousel-3.png';
import Slide3Mobile from '../assets/Mobile/Banner-carousel-3.png';
import Slide3Tablet from '../assets/Tablet/Banner-carousel-3.png';


const Carousel = () => {
  const deviceType = useDeviceType();
  
  const slides = [{
    id: 1,
    img: deviceType === 'mobile' ? Slide1Mobile : deviceType === 'tablet' ? Slide1Tablet : Slide1Desktop,
    title: ''
  }, {
    id: 2,
    img: deviceType === 'mobile' ? Slide2Mobile : deviceType === 'tablet' ? Slide2Tablet : Slide2Desktop,
    title: 'Timeless collection',
    subtitle: 'Quality and style to last.'
  }, {
    id: 3,
    img: deviceType === 'mobile' ? Slide3Mobile : deviceType === 'tablet' ? Slide3Tablet : Slide3Desktop,
    title: 'Timeless collection',
    subtitle: 'High visual impact, low environmental impact!'
  }];

  return (
    <section>
      <div>
        {slides.map(slide => {
          return (
            <div key={slide.id}>
              <img src={slide.img}/>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Carousel;