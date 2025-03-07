import React from 'react'
import { formFilds } from '../../data/contactData'
import { motion } from 'motion/react'
import { slideIn } from '../../utils/animations'

const ContactForm = () => {
    return (
        <>
            <motion.form 
            initial="hidden"
            whileInView="visible"
            variants={slideIn()}
            className="contact-form form">
                {formFilds.map((fild, index) => (
                    <label key={index}>{fild.label}
                        <input type={fild.type} placeholder={fild.placeholder} />
                    </label>
                ))}
                <label>Input Title
                    <textarea className="message" placeholder="Write your message..."></textarea>
                </label>
                <button className="contact-btn btn">Send Message</button>
            </motion.form>
        </>
    )
}

export default ContactForm