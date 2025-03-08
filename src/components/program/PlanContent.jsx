import React from 'react'
import { features, article, list } from '../../data/programData'
import { motion } from 'motion/react'
import { fadeInTrainingTitle, slideInFromRight, slideIn } from '../../utils/animations'
import ContentFeatures from './ContentFeatures'

const PlanContent = () => {
    return (
        <>
            <div className="content">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInTrainingTitle(0.3)}
                    className="content-title">Basic <span>Plan</span></motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInTrainingTitle(0.6)}
                    className="content-subtitle">It’s a long estabilished fact that a reader will be distracted by
                    the readable content</motion.p>
                <div className="content-features">
                    {features.map((item, index) => (
                        <ContentFeatures
                            item={item}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                {article.map((item, index) => (
                    <motion.article
                        initial="hidden"
                        whileInView="visible"
                        variants={slideIn(index)}
                        className="content-article" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <p>{item.secondText}</p>
                        {list.length > 0 ?
                            <ol>
                                {list.map((listItem, index) => (
                                    <li key={index}>{listItem}</li>
                                ))}
                            </ol>
                            : null
                        }
                    </motion.article>
                ))}
            </div>
        </>
    )
}

export default PlanContent