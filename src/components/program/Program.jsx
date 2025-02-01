import React from 'react'
import "./program.scss"
import PlanContent from './PlanContent'

const Program = () => {
    return (
        <>
            <section className="program-plan">
                <div className="container">
                    <div className="program-plan-wrapper">
                        <PlanContent/>
                        <div className="package-reserve">
                            <span className="package-title">Get your package</span>
                            <p className="package-text">Suspendisse feugiat scelerisque et, viverra urna imperdiet non
                                malesuada.</p>
                            <div className="features-list">
                                <span className="features-list-subtitle">What’s Includes:</span>
                                <ul className="features-list-items">
                                    <li className="features-item">8 classNamees per month</li>
                                    <li className="features-item">All in basic package</li>
                                    <li className="features-item">1-on-1 personal trainning</li>
                                </ul>
                            </div>
                            <span className="select-title">Package Duration</span>
                            <select className="select" data-minimum-results-for-search="Infinity">
                                <option value="1 Month">1 Month</option>
                                <option value="1 Month">1 Month</option>
                            </select>
                            <div className="price-permonth">
                                <span className="permonth-number">$149.00</span>
                                <span className="per-month-text">/Month</span>
                            </div>
                            <button className="btn package-btn plan-link">Purchase Now</button>
                            <button className="btn package-btn">Add to Chart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Program