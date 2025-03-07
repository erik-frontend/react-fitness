import React, { useState } from 'react'
import MembershipPlan from './MembershipPlan'
import "./membership.scss"
import { membershipPlan as plans } from '../../data/membershipPlan'
import { motion } from 'motion/react'
import { slideInFromTop } from '../../utils/animations'

const Membership = () => {

    const [isActive, setIsActive] = useState(1)

    const handlePlanClick = index => {
        setIsActive(index)
    }

    return (
        <>
            <section className="membership">
                <div className="container">
                    <span className="inner-subtitle">Membership</span>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromTop()}
                        className="inner-title membership-title">
                            Crushing your health and fitness goals starts here...</motion.h2>
                    <div className="membership-wrapper">
                        {plans.map((plan, index) => (
                            <MembershipPlan
                                key={index}
                                {...plan}
                                isActive={isActive === index}
                                onClick={() => handlePlanClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Membership