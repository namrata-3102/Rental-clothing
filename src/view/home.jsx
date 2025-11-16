import React from 'react'
import Navbar from '../components/navbar.jsx'
import FeatureSection from '../components/ClothingSection.jsx'
import ReviewSection from '../components/ReviewSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <FeatureSection/>
      <ReviewSection/>
      <Footer/>
    </div>

        
      
  )
}

export default Home
