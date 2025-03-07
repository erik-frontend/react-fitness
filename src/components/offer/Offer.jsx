import React from 'react'
import OfferBlock from './OfferBlock'
import { offers } from '../../data/offers'
import "./offer.scss"
import { motion } from 'motion/react';
import { slideInFromTop } from '../../utils/animations';

const Offer = () => {

    return (
        <>
            <section className="offer">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="container">
                        
                    <motion.h2
                          variants={slideInFromTop()}
                         className="offer-title">
                        We offer something for everybody</motion.h2>

                    {offers.map((offer, index) => (
                        <OfferBlock key={index} {...offer} index={index}/>
                    ))}
                </motion.div>
            </section>
        </>

    )
}

export default Offer