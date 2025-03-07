import React from 'react'
import { heroStats } from '../../data/heroStats'
import { motion } from 'motion/react'
const HeroStats = () => {

    const imageVariants = (index) => ({
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.6, ease: "easeOut" }
        }
    })


    return (
        <>
            <div
                className="hero-stats-container">
                <div className="rate">
                    {heroStats.map((state) => (
                        <div className={`rate-${state.id === 1 ? "muscle" : "heart"}`} key={state.id}>
                            <img src={state.img} alt={state.text} />
                            <div>
                                <span className="title">{state.title}</span>
                                <span className="text">{state.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HeroStats