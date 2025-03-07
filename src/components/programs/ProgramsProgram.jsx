import React, { useState } from 'react'
import { programs } from '../../data/programs'
import ProgramBlock from '../heroSection/ProgramBlock'
import "../heroSection/programBlock.scss"
import { motion } from 'motion/react';
import { slideInFromTop } from '../../utils/animations';

const ProgramsProgram = () => {
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
    </div>
  )
}

export default ProgramsProgram