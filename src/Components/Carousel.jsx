import React from 'react';
import useDeviceType from '../Hooks/useDevideType';

import styles from './Carousel.module.css';

import Slide1Desktop from '../assets/Desktop/Banner-carousel-1.png';
import Slide1Mobile from '../assets/Mobile/Banner-carousel-1.png';
import Slide1Tablet from '../assets/Tablet/Banner-carousel-1.png';

import Slide2Desktop from '../assets/Desktop/Banner-carousel-2.png';
import Slide2Mobile from '../assets/Mobile/Banner-carousel-2.png';
import Slide2Tablet from '../assets/Tablet/Banner-carousel-2.png';

import Slide3Desktop from '../assets/Desktop/Banner-carousel-3.png';
import Slide3Mobile from '../assets/Mobile/Banner-carousel-3.png';
import Slide3Tablet from '../assets/Tablet/Banner-carousel-3.png';

import { ArrowLeft, ArrowRight } from 'phosphor-react';


export function Carousel()  {
  const deviceType = useDeviceType();
  const [position, setPosition] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width*active));

  }, [active])
  
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

  function prevSlide() {
    if (active > 0) setActive(active - 1);
    else setActive(slides.length - 1);
  }

  function nextSlide() {
    if (active < slides.length - 1) setActive(active + 1);
    else setActive(0);
  }

  function handleClick(slide) {
    setActive(slide);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content} ref={contentRef} style={{transform: `translateX(${position}px)`}}>
        {slides.map(slide => {
          return (
            <div key={slide.id} className={styles.item}>
              <img src={slide.img}/>
              <div className={`${styles.description} ${slide.id === 2 ? styles.second : styles.third}`}>
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
      <nav className={styles.arrowNav}>
        <button onClick={prevSlide}><ArrowLeft size={20} /></button>
        <button onClick={nextSlide}><ArrowRight size={20} /></button>
      </nav>
      <nav className={styles.buttonNav}>
        {slides.map(slide => {
          return <button key={slide.id} onClick={() => handleClick(slides.indexOf(slide))} className={`${active === slides.indexOf(slide) ? styles.currentButton : ''}`}></button>
        })}
      </nav>
    </section>
  );
}