import React from 'react'
import { reviews } from '../../data/reviewData'
import SliderBlock from './SliderBlock'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./review.scss"

const Review = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <section className="review">
                <div className="container">
                    <span className="inner-subtitle">Review</span>
                    <h2 className="inner-title review-title">What Our Happy Clients Say</h2>
                    <Slider className="slider-review" {...settings}>
                        {reviews.map((review, index) => (
                            <SliderBlock key={index} {...review}/>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Review