import { motion } from 'motion/react'
import React from 'react'
import { fadeInTrainingTitle } from '../../utils/animations'

const ContentFeatures = ({item, index}) => {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInTrainingTitle(index)}
                className="content-features-block" key={index}>
                <figure>
                    <img src={item.img} alt={item.alt} />
                </figure>
                <div className="features-block-discript">
                    <span className="features-block-number">{item.number}</span>
                    <span className="features-block-text">{item.text}</span>
                </div>
            </motion.div>
        </>
    )
}

export default ContentFeatures