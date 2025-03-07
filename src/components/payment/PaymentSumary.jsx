import React from 'react'
import { featuresList } from '../../data/featuresList'
import CustomSelect from '../program/CustomSelect'
import { motion } from 'motion/react'
import { slideInReverse } from '../../utils/animations'

const PaymentSumary = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideInReverse()}
                className="payment-reserve">
                <div className="price-permonth">
                    <span className="permonth-number">$149.00</span>
                    <span className="per-month-text">/Month</span>
                </div>
                <div>
                    <span className="payment-serve-title">Basic Plan</span>
                    <p className="payment-serve-text">It’s a long estabilished fact that a reader will be distracted by
                        the readable content</p>
                </div>

                <div className="features-list">
                    <span className="features-list-subtitle">What’s Includes:</span>
                    <ul className="features-list-items">
                        {featuresList.map((item, index) => (
                            <li className="features-item" key={index}>{item.text}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span className="select-title">Package Duration</span>
                    <CustomSelect />
                </div>
            </motion.div>
        </>
    )
}

export default PaymentSumary