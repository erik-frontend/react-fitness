import { motion } from 'motion/react'
import React from 'react'
import { GiHidden } from 'react-icons/gi'
import { slideInFromDown } from '../../utils/animations'

const MembershipPlan = ({ isActive, price, duration, plan, features, onClick, listIcon, activeListIcon }) => {
    
    const icon = isActive ? activeListIcon : listIcon

    return (
        <>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={slideInFromDown()}
                className={`membership-plan ${isActive ? "active" : ""} `} 
                onClick={onClick}>
                <span className="price">{price}<small>{duration}</small></span>
                <span className="plan">{plan}</span>
                <ul className="membership-list">
                    {features.map((feature, index) => (
                        <li className="membership-item" key={index}>
                            <img src={icon} alt="listIcon" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="btn membership-btn">Puchase Plan</button>
            </motion.div>
        </>
    )
}

export default MembershipPlan