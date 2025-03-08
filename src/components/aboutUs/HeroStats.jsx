import React from 'react'
import { heroStats } from '../../data/heroStats'
import { motion } from 'motion/react'

const HeroStats = () => {

    const rateVariants = (delay = 0) => ({
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay, ease: "easeOut" }
        }
      })


    return (
        <>
            <div
                className="hero-stats-container">
                <div className="rate">
                    {heroStats.map((state) => (
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        variants={rateVariants(state.id)}
                        className={`rate-${state.id === 1 ? "muscle" : "heart"}`} 
                        key={state.id}>
                            <img src={state.img} alt={state.text} />
                            <div>
                                <span className="title">{state.title}</span>
                                <span className="text">{state.text}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HeroStats