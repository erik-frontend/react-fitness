import React from 'react'
import { HeroSection, Membership, Offer, Review, Started } from '../components/index';

export const HomePage = () => {
  return (
    <>
        <HeroSection />
        <Offer/>
        <Membership/>
        <Review/>
        <Started/>
    </>
  )
}

export default HomePage;
