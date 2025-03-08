import { motion } from 'motion/react'
import React from 'react'
import { slideInFromTop } from '../../utils/animations'

const PlanBlock = ({ item, index, isActive, onClick }) => {
    return (
        <>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromTop(index)}
            onClick={onClick}   
            className={`plan-block ${isActive ? "active" : ""}`}>
                <div className="plan-prise">
                    <span className="prise">{item.price}</span>
                    <span className="month">{item.month}</span>
                </div>
                <span className="plan-title">{item.title}</span>
                <p className="plan-text">{item.text}</p>
                <a href="" className="plan-link">{item.btnText}</a>

            </motion.div>
        </>
    )
}

export default PlanBlock