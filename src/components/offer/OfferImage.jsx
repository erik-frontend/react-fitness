import React from 'react'
import { motion } from 'motion/react';
import { slideIn } from '../../utils/animations';

const OfferImage = ({ image, index }) => {
  return (
    <>
      <motion.figure
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn(0, index)}
        className="offer-img">
        <img src={image} alt="traner" />
      </motion.figure>
    </>
  )
}

export default OfferImage