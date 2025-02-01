import React from 'react'
import { formFilds } from '../../data/contactData'

const ContactForm = () => {
    return (
        <>
            <form className="contact-form form">
                {formFilds.map((fild, index) => (
                    <label key={index}>{fild.label}
                        <input type={fild.type} placeholder={fild.placeholder} />
                    </label>
                ))}
                <label>Input Title
                    <textarea className="message" placeholder="Write your message..."></textarea>
                </label>
                <button className="contact-btn btn">Send Message</button>
            </form>
        </>
    )
}

export default ContactForm