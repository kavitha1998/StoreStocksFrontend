import React, { useState, useEffect } from 'react';
import './home.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import newproduct from './newproduct.jpg';
import helppeople from'./helppeople.png';
import phm from './phm.jpg';

const slides = [
  { id: 1, imageUrl: slide1, caption: 'Slide 1' },
  { id: 2, imageUrl: slide2, caption: 'Slide 2' },
  { id: 3, imageUrl: slide3, caption: 'Slide 3' }
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    
    <div className="home-slider">
         {/* Welcome message */}
      <h1 className="welcome-message">Welcome to Tesco Store Stocks</h1>
      <div className="arrow left-arrow" onClick={prevSlide}>{'🢔'}</div>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
      <div className="arrow right-arrow" onClick={nextSlide}>{'🢖'}</div>
        {/* Explore message */}
        <h2 className="explore-message">Explore more about Tesco</h2>
        <div className='container1'>
        <div className="half-image">
  <img src={newproduct} alt="Half 1" />
  <h2>New product,new favorites</h2>
  <p>
    Keep up to date with our latest products and see what's trending
  </p>
</div>
</div>
<div className='container2'>
<div className="half-image">
  <img src={helppeople} alt="Half 2" />
  <h2>Help give lot to millions of people</h2>
  <p>
    Round up your shot to the nearest at self-service tills or donate online to help people living with or at risk of diabets,cancer or heart disease
  </p>
</div>
</div>
<div className='container3'>
<div className="half-image">
  <img src={phm} alt="Half 3" />
  <h2>NHS Pharmacy First Service</h2>
  <p>
    Get confidential advice and NHS treatements for 7 common coditons at your local Tesco Pharmacy
  </p>
</div>
</div>
      
    </div>
  );
}

export default Home;
