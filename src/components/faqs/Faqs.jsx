import React, { useState } from 'react'
import "./faqs.scss"
import { faqsItems } from '../../data/faqsItems'

const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(false)

    const toogleTab = index => {
        setActiveIndex(activeIndex === index ? false : index)
    }

    return (
        <>
            <section className="faqs">
                <div className="container">
                    <div className="faqs-wrapper">
                        <div className="faqs-content">
                            <h2 className="faqs-title">FAQ<span>s</span></h2>
                            <p className="faqs-text">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
                                imperdiet non malesuada.</p>
                            <a href="" className="faqs-link">Book a className</a>
                        </div>
                        <div className="faqs-tabs tabs">
                            <span className="tabs-title">Maybe your question is have been answered, check this out!</span>
                            {faqsItems.map((item, index) => (
                                <div className={`tab-block ${activeIndex === index ? "active" : ""}`} key={index}>
                                    <span className={`tab-block-title ${activeIndex === index ? "active" : ""}`} onClick={() => toogleTab(index)}>{item.question}</span>
                                    {activeIndex === index && (
                                        <div className="tab-content">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs