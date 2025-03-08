import React from 'react'
import { reserveItems } from '../../data/contactData'

const ContactDetales = () => {
    return (
        <>
            <div
                >
                <span className="reserve-title">Contact Details</span>
                <p className="reserve-subtitle">Fill up the form and our team will get back to you with in 24 hours.
                </p></div>
            <ul
                className="reserve-list">
                {reserveItems.map((item, index) => (
                    <li className="reserve-item" key={index}>
                        <a href={item.href} className="reserve-link">{item.text}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactDetales