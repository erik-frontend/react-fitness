import React, {useState} from 'react'
import { programs } from '../../data/programs'
import ProgramBlock from './ProgramBlock'

const HeroPrograms = () => {


  return (
    <div className="hero-bottom container">
      <div className="hero-program">
        {programs.map((program, index) => (
          <ProgramBlock key={index} {...program}/>
        ))}
        
      </div>
      <div className="program-descript">
        <span className="title">Training Program For You</span>
        <p className="text">Starting a fitness routine can be intimidating, but it helps to have an idea of whar to
          expect before joining any class.</p>
      </div>
    </div>
  )
}

export default HeroPrograms