import React, { useState } from 'react'
import { tableRows, plans } from '../../data/allPlans'
import "./allPlans.scss"


const AllPlans = () => {

     const [isActive, setIsActive] = useState(1)
    console.log(isActive);
    
        const handlePlanClick = index => {
            setIsActive(index)
            
            
        }

    return (
        <>
            <section className="allplans">
                <div className="container">
                    <span className="inner-subtitle">Membership</span>
                    <h2 className="inner-title allplans-title">Compare Our Plane and
                        Find Your</h2>
                    <div className="plans">
                        {plans.map((item, index) => (
                            <div className={`plan-block ${isActive === index ? "active" : ""}`} key={index} onClick={() => handlePlanClick(index)}>
                                <div className="plan-prise">
                                    <span className="prise">{item.price}</span>
                                    <span className="month">{item.month}</span>
                                </div>
                                <span className="plan-title">{item.title}</span>
                                <p className="plan-text">{item.text}</p>
                                <a href="" className="plan-link">{item.btnText}</a>
                            </div>
                        ))}
                    </div>
                    <div className="plan-table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Overview</th>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">classNamees per month</td>
                                    <td className="">1</td>
                                    <td className="">8</td>
                                    <td className="">20</td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access to online classNamees</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Health & fitness guides</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full Warmup guide</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access video Link</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full diet plan</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Nutritional support</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full customize plan</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Daily progress check up</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">All Intermediate package</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table active">
                            <tbody>
                                <tr>
                                    <th>Overview</th>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">classNamees per month</td>
                                    <td className="">1</td>
                                    <td className="">8</td>
                                    <td className="">20</td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access to online classNamees</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Health & fitness guides</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full Warmup guide</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access video Link</td>
                                    <td className="checked-error"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full diet plan</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Nutritional support</td>
                                    <td className="checked"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full customize plan</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Daily progress check up</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">All Intermediate package</td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                    <td className="checked-error"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Overview</th>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">classNamees per month</td>
                                    <td className="">1</td>
                                    <td className="">8</td>
                                    <td className="">20</td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access to online classNamees</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Health & fitness guides</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full Warmup guide</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Access video Link</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full diet plan</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Nutritional support</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Full customize plan</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">Daily progress check up</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                                <tr>
                                    <td className="plan-table-title">All Intermediate package</td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                    <td className="checked"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllPlans