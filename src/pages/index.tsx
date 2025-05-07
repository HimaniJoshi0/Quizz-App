
import Aboutus from '@/lib/sections/Aboutus'
import Characteristics from '@/lib/sections/characteristics'
import HeroSection from '@/lib/sections/HeroSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Aboutus />
      <Characteristics />
    </div>
  )
}

export default Home