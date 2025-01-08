import React from 'react'
import { HeroSection, Membership, Offer, Review } from '../components/index';

export const HomePage = () => {
  return (
    <>
        <HeroSection />
        <Offer/>
        <Membership/>
        <Review/>
    </>
  )
}

export default HomePage;
