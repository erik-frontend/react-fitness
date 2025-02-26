import React from 'react'
import { heroStats } from '../../data/heroStats'

const HeroStats = () => {
    return (
        <>
            <div className="hero-stats-container">
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