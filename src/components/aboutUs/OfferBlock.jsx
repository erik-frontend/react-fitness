import React from 'react'
import OfferContent from './OfferContent'
import OfferImg from './OfferImg'

const OfferBlock = ({item, index}) => {
    return (
        <>
            <div className={`offer-wrapper ${item.id % 2 === 0 ? "reverse" : ""}`} key={index}>
                <OfferContent item={item} index={index}/>
                <OfferImg item={item} index={index}/>
            </div>
        </>
    )
}

export default OfferBlock