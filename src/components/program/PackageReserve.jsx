import React from 'react'
import { featuresList } from '../../data/featuresList'
import CustomSelect from './CustomSelect'
import { motion } from 'motion/react'
import { slideInFromRight } from '../../utils/animations'

const PackageReserve = () => {
    return (
        <>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight()}
            className="package-reserve">
                <span className="package-title">Get your package</span>
                <p className="package-text">Suspendisse feugiat scelerisque et, viverra urna imperdiet non
                    malesuada.</p>
                <div className="features-list">
                    <span className="features-list-subtitle">What’s Includes:</span>
                    <ul className="features-list-items" >
                        {featuresList.map((item, index) => (
                            <li className="features-item" key={index}>{item.text}</li>
                        ))}
                    </ul>
                </div>
                <span className="select-title">Package Duration</span>
                <CustomSelect/>
                
                <div className="price-permonth">
                    <span className="permonth-number">$149.00</span>
                    <span className="per-month-text">/Month</span>
                </div>
                <button className="btn package-btn plan-link">Purchase Now</button>
                <button className="btn package-btn">Add to Chart</button>
            </motion.div>
        </>
    )
}

export default PackageReserve