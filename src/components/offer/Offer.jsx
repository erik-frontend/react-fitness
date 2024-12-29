import React from 'react'
import OfferBlock from './OfferBlock'
import { offers } from '../../data/offers'

const Offer = () => {
    return (
        <>
            <section className="offer">
                <div className="container">
                    <h2 className="offer-title">We offer something for everybody</h2>
                    {offers.map((offer, index) => (
                        <OfferBlock key={index} {...offer}/>
                    ))}
                </div>
            </section>
        </>

    )
}

export default Offer