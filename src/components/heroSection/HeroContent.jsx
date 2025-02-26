import React from 'react'
import { nike, esprit, appleWatch, newBalance } from '../../assets/img/index';
import { motion } from "motion/react"
import { delay } from 'motion';

const HeroContent = () => {

  const textVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: "easeOut" } }
  })

  const imageVariants = (index) => ({
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.6, ease: "easeOut" }
    }
  })


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="hero-content" >
      <motion.h1
        variants={textVariants(0)}
        className="hero-title">For Your <span>Health</span> and <span>Fitness Goals</span> in No Time</motion.h1>
      <motion.p
        variants={textVariants(0.3)}
        className="hero-text">It doesn’t matter if your goal is to get stronger, burn fat, or to just stay
        fit
        our world class coaches will guide you every step of the way.</motion.p>
      <motion.a
        variants={textVariants(0.6)}
        href="" className="hero-link">Book a Class</motion.a>
      <div className="hero-brand">
        <span>Supported by:</span>
        <div className="hero-brend-img">
          {[nike, esprit, appleWatch, newBalance].map((src, index) => (
            <motion.img
              variants={imageVariants(index)}
              src={src} key={index} alt={`brand ${src}`} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HeroContent