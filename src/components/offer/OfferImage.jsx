import React from 'react'

const OfferImage = ({image}) => {
  return (
    <>
      <figure className="offer-img">
        <img src={image} alt="traner"/>
      </figure>
    </>
  )
}

export default OfferImage