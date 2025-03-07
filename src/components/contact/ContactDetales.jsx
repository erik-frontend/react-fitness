import React from 'react'
import { reserveItems } from '../../data/contactData'
import { motion } from 'motion/react'
import { slideInReverse } from '../../utils/animations'


const ContactDetales = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideInReverse()}>
                <span className="reserve-title">Contact Details</span>
                <p className="reserve-subtitle">Fill up the form and our team will get back to you with in 24 hours.
                </p></motion.div>
            <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={slideInReverse()}
                className="reserve-list">
                {reserveItems.map((item, index) => (
                    <li className="reserve-item" key={index}>
                        <a href={item.href} className="reserve-link">{item.text}</a>
                    </li>
                ))}
            </motion.ul>
        </>
    )
}

export default ContactDetales