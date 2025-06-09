import HeroSection from '@/components/HeroSection'
import NewsLetter from '@/components/NewsLetter'
import Testimonials from '@/components/Testimonials'
import TopDestinations from '@/components/TopDestinations'
import React from 'react'

const page = () => {
  return (
    <main>
      <HeroSection />
      <TopDestinations />
      <Testimonials />
      <NewsLetter />
    </main>
  )
}

export default page