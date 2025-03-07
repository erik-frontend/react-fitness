import React from 'react'
import { motion } from 'motion/react';
import { slideInReverse } from '../../utils/animations';

const OfferContent = ({ icon, title, listItems, buttonText, checked, index }) => {
    // console.log(checked);

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={slideInReverse(0, index)}
                className="offer-content">
                <figure className="offer-icon">
                    <img src={icon} alt="arm" />
                </figure>
                <span className="title">{title}</span>
                <ul className="offer-list">
                    {listItems.map((item, index) => (
                        <li className="offer-item" key={index}>
                            <img src={checked} alt="CheckedIcon" className='offer-icon' />
                            {item}</li>
                    ))}
                </ul>
                <button className="btn offer-btn">{buttonText}</button>
            </motion.div>
        </>
    )
}

export default OfferContent