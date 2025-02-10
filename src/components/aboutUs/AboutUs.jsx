import React from 'react'
import "./aboutUs.scss"
import HeroContent from './HeroContent'
import HeroStats from './HeroStats'

const AboutUs = () => {
    return (
        <>
            <section className='hero about-me'>
                <div className="container">
                    <div className="hero-midle">
                        <HeroContent/>
                        <HeroStats/>
                    </div>
                </div>
            </section>
            <section className="offer about-me">
                <div className="container">
                    <h2 className="offer-title">My Core Work Values</h2>
                    <p className="offer-subtitle">Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id
                        pulvinar enim volutpat tellus. </p>
                    <div className="offer-wrapper">
                        <div className="offer-content">
                            <figure className="offer-icon">
                                <img src="img/arm.svg" alt="arm"/>
                            </figure>
                            <span className="title">Commitment</span>
                            <p className="offer-content-text">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
                                viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                        </div>
                        <figure className="offer-img">
                            <img src="img/img-1.jpg" alt="traner"/>
                        </figure>
                    </div>
                    <div className="offer-wrapper reverse">
                        <div className="offer-content">
                            <figure className="offer-icon">
                                <img src="img/heart-checkmark.svg" alt="arm"/>
                            </figure>
                            <span className="title">Motivation</span>
                            <p className="offer-content-text">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
                                viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                        </div>
                        <figure className="offer-img">
                            <img src="img/img-2.jpg" alt="traner"/>
                        </figure>
                    </div>
                    <div className="offer-wrapper">
                        <div className="offer-content">
                            <figure className="offer-icon">
                                <img src="img/star-shining.svg" alt="arm"/>
                            </figure>
                            <span className="title">Motivation</span>
                            <p className="offer-content-text">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
                                viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                        </div>
                        <figure className="offer-img">
                            <img src="img/img-3.jpg" alt="traner"/>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs