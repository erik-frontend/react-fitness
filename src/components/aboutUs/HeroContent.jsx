import { motion } from 'motion/react'
import React from 'react'

const HeroContent = () => {

    const textVariants = (delay = 0) => ({
        hidden: { opacity: 0, y: -80 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: "easeOut" } }
    })

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="hero-content">
                <div className="about-me-hero">
                    <motion.span
                        variants={textVariants()}
                        className="hero-subtitle">About Me</motion.span>
                    <motion.h1
                        variants={textVariants()}
                        className="hero-title">Hi, I'm <span>Adison,</span>your <span>personal</span>trainner
                    </motion.h1>
                </div>
                <motion.div
                    variants={textVariants()}
                    className="hero-story">
                    <span>What's my story?</span>
                    <p>Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id pulvinar enim
                        volutpat tellus. Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
                        imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                </motion.div>
            </motion.div>

            
        </>
    )
}

export default HeroContent