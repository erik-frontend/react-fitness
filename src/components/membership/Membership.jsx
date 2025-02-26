import React, { useState } from 'react'
import MembershipPlan from './MembershipPlan'
import "./membership.scss"
import { membershipPlan as plans } from '../../data/membershipPlan'


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
                    <h2 className="inner-title membership-title">Crushing your health and fitness goals starts here...</h2>
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