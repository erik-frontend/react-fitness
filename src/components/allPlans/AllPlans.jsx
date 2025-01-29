import React, { useState } from 'react'
import { tableRows, plans } from '../../data/allPlans'
import "./allPlans.scss"
import { dataTable } from '../../data/dataTable'


const AllPlans = () => {

    const [isActive, setIsActive] = useState(1)

    const [activeTable, setActiveTable] = useState(1)

    console.log(`${activeTable} - ${isActive}`);


    const handlePlanClick = index => {
        setIsActive(index)
        setActiveTable(index)
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
                        {dataTable
                            .filter(table => table.id === activeTable)
                            .map((item, index) => (
                                <table className={`table ${activeTable === item.id ? "active" : ""}`} key={index}>
                                    <tbody>
                                        <tr>
                                            <th>Overview</th>
                                        </tr>
                                        {item.rows.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <td className="plan-table-title">{row.title}</td>
                                                {row.values.map((value, callIndex) => (
                                                    <td key={callIndex} className={value}>{!isNaN(value) ? value : null}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllPlans