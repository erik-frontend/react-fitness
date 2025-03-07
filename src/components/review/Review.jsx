import React, { useState } from 'react'
import { reviews } from '../../data/reviewData'
import SliderBlock from './SliderBlock'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./review.scss"
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';
import { motion } from 'motion/react';
import { slideInFromTop } from '../../utils/animations';

const Review = () => {

    const [isNextActive, setIsNextActive] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow isNextActive={isNextActive} setIsNextActive={setIsNextActive} />,
        nextArrow: <CustomNextArrow isNextActive={isNextActive} setIsNextActive={setIsNextActive} />
    };

    return (
        <>
            <section className="review">
                <div className="container">
                    <span className="inner-subtitle">Review</span>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromTop()}
                        className="inner-title review-title">What Our Happy Clients Say</motion.h2>
                    <Slider className="slider-review" {...settings}>
                        {reviews.map((review, index) => (
                            <SliderBlock key={index} {...review} />
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Review