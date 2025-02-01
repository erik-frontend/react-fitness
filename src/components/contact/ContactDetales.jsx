import React from 'react'
import { reserveItems } from '../../data/contactData'

const ContactDetales = () => {
    return (
        <>
            <ul className="reserve-list">
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