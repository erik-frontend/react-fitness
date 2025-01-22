import React from 'react'
import { features, trainingDetales, details } from '../../data/treaners'
import "./training.scss"

const Training = () => {

    return (
        <>
            <section className="trainning">
                <div className="container">
                    <h1 className="trainning-title">Personal<span>Training</span></h1>
                    <span className="trainning-subtitle">It’s a long estabilished fact that a reader will be distracted by the
                        readable content</span>
                    <div className="trainning-wrapper">
                        <div className="trainning-content">
                            <div className="trainning-features">
                                {features.map((item, index) => (
                                    <div className="features-block" key={index}>
                                        <figure>
                                            <img src={item.img} alt={item.alt} />
                                        </figure>
                                        <ul className="list">
                                            <li>{item.number}</li>
                                            <li>{item.text}</li>
                                        </ul>
                                    </div>
                                ))}

                            </div>
                            <div className="trainning-video">
                                <button className="btn video-btn"></button>
                                <video id="video" src="../../assets/video/Biceps-Workout.mp4" controls type="video/mp4"
                                    poster="../../assets/img/video.jpg"></video>
                            </div>
                            {trainingDetales.map((item, index) => (
                                <div key={index}>
                                    <h2>{item.title}</h2>
                                    <p className="trainning-text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="trainning-detales">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Training