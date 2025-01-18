import React from 'react'
import HeroPrograms from '../heroSection/HeroPrograms'
import "./programs.scss"

const Program = () => {
  return (
    <>
    <section className="programs">
            <div className="container">
                <span className="inner-subtitle">Programs</span>
                <h2 className="inner-title programs-title">Browse Our Available Programs</h2>
                <HeroPrograms/>
            </div>
        </section>
    </>
  )
}

export default Program