import React from 'react'
import OfferImage from './OfferImage'
import OfferContent from './OfferContent'

const OfferBlock = ({icon, title, listItems, buttonText, image, reverse, checked, index}) => {
    return (
        <>
            <div className={`offer-wrapper ${reverse ? "reverse" : ""}`}>
                <OfferContent icon={icon} title={title} listItems={listItems} buttonText={buttonText} checked={checked} index={index}/>
               <OfferImage image={image} index={index}/>
            </div>
        </>
    )
}

export default OfferBlock