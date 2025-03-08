import { motion } from 'motion/react'
import React from 'react'
import { slideIn } from '../../utils/animations'

const OfferImg = ({item, index}) => {
    return (
        <>
            <motion.figure
            initial="hidden"
            whileInView="visible"
            variants={slideIn(0, index)}
            className="offer-img">
                <img src={item.image} alt={item.alt} />
            </motion.figure>
        </>
    )
}

export default OfferImg