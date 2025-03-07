import React from 'react'
import "./programs.scss"
import ProgramsProgram from './ProgramsProgram'
import { motion } from 'motion/react'
import { slideInFromTop } from '../../utils/animations'

const Program = () => {
  return (
    <>
    <section className="programs">
            <div className="container">
                <span className="inner-subtitle">Programs</span>
                <motion.h2 className="inner-title programs-title"
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromTop()}
                >Browse Our Available Programs</motion.h2>
                <ProgramsProgram/>
            </div>
        </section>
    </>
  )
}

export default Program