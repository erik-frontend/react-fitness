import React from 'react'

const SliderBlock = ({subtitle, text, avatar}) => {
    return (
        <>
            <div className="slider">
                <div className="slider-wrapper">
                    <span className="slider-subtitle">{subtitle}</span>
                    <p className="slider-text">{text}</p>
                    <div className="slider-avatar">
                        <figure>
                            <img src={avatar.imgSrc} alt={avatar.altText} />
                        </figure>
                        <span className="avatar-name">{avatar.name}</span>
                        <span className="avatar-job">{avatar.job}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderBlock