import React from 'react'
import Navbar from '../components/navbar.jsx'
import FeatureSection from '../components/ClothingSection.jsx'

import ReviewSection from '../components/ReviewSection.jsx'
import Heading from '../components/heading.jsx'
import HeroSection from '../components/HeroSection.jsx'
function Home() {
  return (
    <div>
    
      <Navbar />
    <HeroSection/>
 <FeatureSection/>
 <ReviewSection/>
 <Heading/>
      </div>

        
      
  )
}

export default Home
