import React from 'react'
import "./contact.scss"
import ContactForm from './ContactForm'
import ContactDetales from './ContactDetales'
import { fadeInTrainingTitle, slideInReverse } from '../../utils/animations'
import { motion } from 'motion/react'

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInTrainingTitle(0.3)}
                        className="contact-title">Let's get <span>in touch!</span></motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInTrainingTitle(0.6)}
                        className="contact-subtitle">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
                        imperdiet non malesuada.</motion.p>
                    <div className="contact-wrapper">
                        <ContactForm />
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={slideInReverse()}
                            className="reserve">
                            <ContactDetales />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact