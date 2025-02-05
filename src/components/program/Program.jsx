import React from 'react'
import "./program.scss"
import PlanContent from './PlanContent'
import PackageReserve from './PackageReserve'

const Program = () => {
    return (
        <>
            <section className="program-plan">
                <div className="container">
                    <div className="program-plan-wrapper">
                        <PlanContent/>
                        <PackageReserve/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Program