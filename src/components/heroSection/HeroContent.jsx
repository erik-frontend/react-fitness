import React from 'react'
import { nike, esprit, appleWatch, newBalance } from '../../assets/img/index';

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-title">For Your <span>Health</span> and <span>Fitness Goals</span> in No Time</h1>
      <p className="hero-text">It doesn’t matter if your goal is to get stronger, burn fat, or to just stay
        fit
        our world class coaches will guide you every step of the way.</p>
      <a href="" className="hero-link">Book a Class</a>
      <div className="hero-brand">
        <span>Supported by:</span>
        <div className="hero-brend-img">
          <img src={nike} alt="" />
          <img src={esprit} alt="" />
          <img src={appleWatch} alt="" />
          <img src={newBalance} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroContent