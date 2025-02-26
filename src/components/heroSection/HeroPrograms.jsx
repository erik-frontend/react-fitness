import React, { useState } from 'react'
import { programs } from '../../data/programs'
import ProgramBlock from './ProgramBlock'
import "./programBlock.scss"
import { motion } from 'motion/react';
import { delay } from 'motion';

const HeroPrograms = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleBlockClick = index => {
    setActiveIndex(index)
  }

  // Motion

  const ProgramsVariants = (index) => {
    if (index === 1) {
      return {
        hidden: { opacity: 0, y: -50 }, // Центральный блок появляется сверху вниз
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: index * 0.3, ease: "easeOut" } }
      };
    } else if (index === 0) {
      return {
        hidden: { opacity: 0, x: -100 }, // Левый блок появляется слева направо
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: index * 0.6, ease: "easeOut" } }
      };
    } else {
      return {
        hidden: { opacity: 0, x: 50 }, // Правый блок появляется справа налево
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: index * 0.4, ease: "easeOut" } }
      };
    }
  };

  const DescriptVariants = () => ({
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 50, transition: { duration: 1.6, ease: "easeOut" } }
  })

  return (
    <div className="hero-bottom container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={ProgramsVariants()}
        className="hero-program">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            variants={ProgramsVariants(index)} // Передаём индекс для анимации
          >
            <ProgramBlock
              {...program}
              isActive={activeIndex === index}
              onClick={() => handleBlockClick(index)}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={DescriptVariants()}
        className="program-descript">
        <span className="title">Training Program For You</span>
        <p className="text">Starting a fitness routine can be intimidating, but it helps to have an idea of whar to
          expect before joining any class.</p>
      </motion.div>
    </div>
  )
}

export default HeroPrograms