import React from 'react'
import HeroSection from "../components/sections/HeroSection"
import WinnXBotSection from '../components/sections/WinnXBotSection'
import FAQSection from '../components/sections/FAQSection'
import HIWSection from '../components/sections/HIWSection'
import Waitlist from '../components/sections/Waitlist'
import ContestFormatsSection from '../components/sections/ContestFormatsSection'

function Home() {
  return (
    
    <>
        <HeroSection/>
       <HIWSection/>
       <ContestFormatsSection/>
        <WinnXBotSection/>
        <Waitlist/>
        <FAQSection/>
    </>
  )
}

export default Home