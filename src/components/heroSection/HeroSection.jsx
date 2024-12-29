import React from 'react'
import Header from '../header/Header';
import HeroContent from './HeroContent';
import HeroRate from './HeroRate';
import HeroPrograms from './HeroPrograms';

const HeroSection = () => {
    return (
        <section className='hero'>
            <Header/>
            <div className="container">
                <div className="hero-midle">
                    <HeroContent/>
                    <HeroRate/>
                </div>
            </div>
            <HeroPrograms/>
        </section>
    )
}

export default HeroSection