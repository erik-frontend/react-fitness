import React from 'react'
import "./aboutUs.scss"
import HeroContent from './HeroContent'
import HeroStats from './HeroStats'
import { offerWrapper } from '../../data/offer-wrapper'
import Header from '../header/Header'
import Review from '../review/Review'
import OfferBlock from './OfferBlock'

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
                        <OfferBlock item={item} index={index} key={index}/>
                    ))}
                </div>
            </section>
            <Review/>
        </>
    )
}

export default AboutUs