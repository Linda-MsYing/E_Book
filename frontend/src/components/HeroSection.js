import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/girlReading.mp4' autoPlay loop muted />
      <h1>E-book Store</h1>
      <p>Welcome!</p>
      <div className='hero-btns'>
        {/*<Button*/}
        {/*  className='btns'*/}
        {/*  buttonStyle='btn--outline'*/}
        {/*  buttonSize='btn--large'*/}
        {/*  buttonLink='/Login'*/}
        {/*>*/}
        {/*  LOG IN / REGISTER*/}
        {/*</Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
