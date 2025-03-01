import React, { useState } from 'react'
import { programs } from '../../data/programs'
import ProgramBlock from './ProgramBlock'
import "./programBlock.scss"
import { motion } from 'motion/react';
import { slideInFromTop } from '../../utils/animations';

const HeroPrograms = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleBlockClick = index => {
    setActiveIndex(index)
  }

  return (
    <div className="hero-bottom container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="hero-program">
        {programs.map((program, index) => (
            <ProgramBlock
              {...program}
              index={index}
              isActive={activeIndex === index}
              onClick={() => handleBlockClick(index)}
              key={index}
            />
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInFromTop()}
        className="program-descript">
        <span className="title">Training Program For You</span>
        <p className="text">Starting a fitness routine can be intimidating, but it helps to have an idea of whar to
          expect before joining any class.</p>
      </motion.div>
    </div>
  )
}

export default HeroPrograms