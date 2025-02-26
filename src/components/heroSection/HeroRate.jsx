import React from 'react'
import { arm, health } from '../../assets/img/index';
import { motion } from 'motion/react';
import { delay } from 'motion';


const HeroRate = () => {

  const rateVariants = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay, ease: "easeOut" }
    }
  })

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="rate">
      <motion.div
        variants={rateVariants(0.2)}
        className="rate-muscle">
        <img src={arm} alt="arm" />
        <span className="title">Muscle Rate</span>
        <span className="text">2.861</span>
      </motion.div>
      <motion.div
        variants={rateVariants(0.6)}
        className="rate-heart">
        <img src={health} alt="health" />
        <span className="title">Heart Rate</span>
        <span className="text">9281 bpm</span>
      </motion.div>
    </motion.div>
  )
}

export default HeroRate