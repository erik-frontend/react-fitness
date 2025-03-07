import { motion } from 'motion/react'
import React from 'react'
import { programAnimate } from '../../utils/animations'

const TrainingText = ({ item, index }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={programAnimate(index)}
        >
            <h2>{item.title}</h2>
            <p className="trainning-text">{item.text}</p>
        </motion.div>
    )
}

export default TrainingText