import React from 'react'
import OfferBlock from './OfferBlock'
import { offers } from '../../data/offers'
import "./offer.scss"
import { motion } from 'motion/react';
import { delay } from 'motion';

const Offer = () => {

    const offerVariations = () => ({
        hidden: { opacity: 0, x: 0, },
        visible: { opacity: 1, x: 50, transition: { duration: 0.9, ease: "easeOut" } },
    })

    const offerTitleVariations = () => ({
        hidden: { opacity: 0, y: 0, },
        visible: { opacity: 1, y: 50, transition: { duration: 0.6, ease: "easeOut" } },
    })

    return (
        <>
            <section className="offer">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={offerVariations()}
                    className="container">
                        
                    <motion.h2
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          variants={offerTitleVariations()}
                         className="offer-title">
                        We offer something for everybody</motion.h2>

                    {offers.map((offer, index) => (
                        <OfferBlock key={index} {...offer} />
                    ))}
                </motion.div>
            </section>
        </>

    )
}

export default Offer