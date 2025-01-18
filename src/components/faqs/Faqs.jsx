import React from 'react'
import "./faqs.scss"

const Faqs = () => {
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
                        <div className="tab-block">
                            <span className="tab-block-title">Do I need previous experience for your classNamees?</span>
                            <div className="tab-content">
                                <p> Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet
                                    tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. </p>
                            </div>
                        </div>
                        <div className="tab-block">
                            <span className="tab-block-title">Do you offer a trial className for any of your classNamees?</span>
                            <div className="tab-content">
                                <p>Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet
                                    tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.</p>
                            </div>
                        </div>
                        <div className="tab-block">
                            <span className="tab-block-title">How long is the className duration?</span>
                            <div className="tab-content">
                                <p>Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet
                                    tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.</p>
                            </div>
                        </div>
                        <div className="tab-block">
                            <span className="tab-block-title">Do you offer on-site classNamees, or just virtual classNamees?</span>
                            <div className="tab-content">
                                <p>Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet
                                    tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.</p>
                            </div>
                        </div>
                        <div className="tab-block">
                            <span className="tab-block-title">Do you offer 1-on-1 classNamees and personal training?</span>
                            <div className="tab-content">
                                <p>Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet
                                    tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Faqs