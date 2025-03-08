import React, { useState } from 'react'
import { tableRows, plans } from '../../data/allPlans'
import "./allPlans.scss"
import { dataTable } from '../../data/dataTable'
import { motion } from 'motion/react'
import { slideInFromTop, slideIn } from '../../utils/animations'
import PlanBlock from './PlanBlock'

const AllPlans = () => {

    const [isActive, setIsActive] = useState(2)

    const [activeTable, setActiveTable] = useState(2)

    const handlePlanClick = id => {
        setActiveTable(id)
        setIsActive(id)
    }

    return (
        <>
            <section className="allplans">
                <div className="container">
                    <span className="inner-subtitle">Membership</span>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromTop()}
                        className="inner-title allplans-title">Compare Our Plane and
                        Find Your</motion.h2>
                    <div className="plans">
                        {plans.map((item, index) => (
                            <PlanBlock
                                item={item}
                                index={index}
                                isActive={isActive === item.id}
                                onClick={() => handlePlanClick(item.id) }
                                key={index}
                            />
                        ))}
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideIn()}
                        className="plan-table">
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
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default AllPlans