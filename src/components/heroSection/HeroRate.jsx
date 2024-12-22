import React from 'react'
import { arm, health } from '../../assets/img/index';


const HeroRate = () => {
  return (
    <div className="rate">
      <div className="rate-muscle">
        <img src={arm} alt="arm" />
        <span className="title">Muscle Rate</span>
        <span className="text">2.861</span>
      </div>
      <div className="rate-heart">
        <img src={health} alt="health" />
        <span className="title">Heart Rate</span>
        <span className="text">9281 bpm</span>
      </div>
    </div>
  )
}

export default HeroRate