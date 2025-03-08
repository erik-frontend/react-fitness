import { motion } from 'motion/react'
import React from 'react'
import { slideInReverse } from '../../utils/animations'

const OfferContent = ({ item, index }) => {
    return (
        <>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideInReverse(0, index)}
            className="offer-content">
                <figure className="offer-icon">
                    <img src={item.icon} alt={item.alt} />
                </figure>
                <span className="title">{item.title}</span>
                <p className="offer-content-text">{item.text}</p>
            </motion.div>
        </>
    )
}

export default OfferContent