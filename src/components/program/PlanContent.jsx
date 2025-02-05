import React from 'react'
import { features, article, list } from '../../data/programData'

const PlanContent = () => {
    return (
        <>
            <div className="content">
                <h1 className="content-title">Basic <span>Plan</span></h1>
                <p className="content-subtitle">It’s a long estabilished fact that a reader will be distracted by
                    the readable content</p>
                <div className="content-features">
                    {features.map((item, index) => (
                        <div className="content-features-block" key={index}>
                            <figure>
                                <img src={item.img} alt={item.alt} />
                            </figure>
                            <div className="features-block-discript">
                                <span className="features-block-number">{item.number}</span>
                                <span className="features-block-text">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {article.map((item, index) => (
                    <article className="content-article" key={index}>
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
                    </article>
                ))}
            </div>
        </>
    )
}

export default PlanContent