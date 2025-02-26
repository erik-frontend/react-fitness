import React from 'react'
import "./aboutUs.scss"
import HeroContent from './HeroContent'
import HeroStats from './HeroStats'
import { offerWrapper } from '../../data/offer-wrapper'
import Header from '../header/Header'

const AboutUs = () => {
    return (
        <>
            <section className='hero about-me'>
                <Header />
                <div className="container">
                    <div className="hero-midle">
                        <HeroContent />
                        <HeroStats />
                    </div>
                </div>
            </section>
            <section className="offer about-me">
                <div className="container">
                    <h2 className="offer-title">My Core Work Values</h2>
                    <p className="offer-subtitle">Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id
                        pulvinar enim volutpat tellus. </p>
                    {offerWrapper.map((item, index) => (
                        <div className={`offer-wrapper ${item.id % 2 === 0 ? "reverse" : ""}`} key={index}>
                            <div className="offer-content">
                                <figure className="offer-icon">
                                    <img src={item.icon} alt={item.alt} />
                                </figure>
                                <span className="title">{item.title}</span>
                                <p className="offer-content-text">{item.text}</p>
                            </div>
                            <figure className="offer-img">
                                <img src={item.image} alt={item.imgAlt} />
                            </figure>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AboutUs