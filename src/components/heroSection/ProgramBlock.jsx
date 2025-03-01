import React from 'react'
import { motion } from 'motion/react';
import { programAnimate } from '../../utils/animations';

const ProgramBlock = ({title, description, link, isActive, icon, onClick, index}) => {
  return (
    <>
      <motion.div 
        variants={programAnimate(index)}
        className={`program-block ${isActive ? "active" : ""}`} onClick={onClick}>
        <div className="icon-plaseholder">
          <img src={icon} alt={title} />
        </div>
        <span className="program-title">{title}</span>
        <p className="program-text">{description}</p>
        <a href={link} className="program-link">Learn More</a>
      </motion.div>
    </>
  )
}

export default ProgramBlock