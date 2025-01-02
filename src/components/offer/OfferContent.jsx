import React from 'react'

const OfferContent = ({ icon, title, listItems, buttonText, checked }) => {
    console.log(checked);
    
    return (
        <>
            <div className="offer-content">
                <figure className="offer-icon">
                    <img src={icon} alt="arm" />
                </figure>
                <span className="title">{title}</span>
                <ul className="offer-list">
                    {listItems.map((item, index) => (
                        <li className="offer-item" key={index}>
                            <img src={checked} alt="CheckedIcon" className='offer-icon'/>
                            {item}</li>
                    ))}
                </ul>
                <button className="btn offer-btn">{buttonText}</button>
            </div>
        </>
    )
}

export default OfferContent