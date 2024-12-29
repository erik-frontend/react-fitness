import React from 'react'
import OfferImage from './OfferImage'
import OfferContent from './OfferContent'

const OfferBlock = ({icon, title, listItems, buttonText, image, reverse}) => {
    return (
        <>
            <div className={`offer-wrapper ${reverse ? "reverse" : ""}`}>
                <OfferContent icon={icon} title={title} listItems={listItems} buttonText={buttonText}/>
               <OfferImage image={image}/>
            </div>
        </>
    )
}

export default OfferBlock