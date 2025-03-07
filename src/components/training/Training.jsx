import React from 'react'
import { features, trainingDetales, details } from '../../data/treaners'
import "./training.scss"
import { motion } from 'motion/react'
import { fadeInTrainingTitle, programAnimate, slideInFromRight } from '../../utils/animations'
import TrainingText from "./TrainingText"

const Training = () => {

    return (
        <>
            <section className="trainning">
                <div className="container">
                    <motion.h1 className="trainning-title"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInTrainingTitle(0.3)}
                    >Personal<span>Training</span></motion.h1>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInTrainingTitle(0.6)}
                        className="trainning-subtitle">It’s a long estabilished fact that a reader will be distracted by the
                        readable content</motion.span>
                    <div className="trainning-wrapper">
                        <div className="trainning-content">
                            <div className="trainning-features">
                                {features.map((item, index) => (
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInTrainingTitle(0.9)}
                                        className="features-block" key={index}>
                                        <figure>
                                            <img src={item.img} alt={item.alt} />
                                        </figure>
                                        <ul className="list">
                                            <li>{item.number}</li>
                                            <li>{item.text}</li>
                                        </ul>
                                    </motion.div>
                                ))}

                            </div>
                            <div className="trainning-video">
                                <button className="btn video-btn"></button>
                                <video id="video" src="../../assets/video/Biceps-Workout.mp4" controls type="video/mp4"
                                    poster="../../assets/img/video.jpg"></video>
                            </div>
                            {trainingDetales.map((item, index) => (
                                <TrainingText key={index} item={item} index={index} />
                            ))}
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={slideInFromRight()}
                            className="trainning-detales">
                            <span className="detales-title">Details Program</span>
                            <p className="detales-text">It’s a long estabilished fact that a reader will be distracted by the
                                readable content</p>
                            <ul className="detales-list">
                                {details.map((item, index) => (
                                    <li className={`detales-item ${item.iconClass}`} key={index}>
                                        {item.title}
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="" className="detales-btn">Book a className</a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Training