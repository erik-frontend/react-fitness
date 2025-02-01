import React from 'react'
import "./contact.scss"
import ContactForm from './ContactForm'
import ContactDetales from './ContactDetales'

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1 className="contact-title">Let's get <span>in touch!</span></h1>
                    <p className="contact-subtitle">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
                        imperdiet non malesuada.</p>
                    <div className="contact-wrapper">
                        <ContactForm/>
                        <div className="reserve">
                            <span className="reserve-title">Contact Details</span>
                            <p className="reserve-subtitle">Fill up the form and our team will get back to you with in 24 hours.
                            </p>
                            <ContactDetales/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact