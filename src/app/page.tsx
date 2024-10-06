import React from 'react'
import { CustomCard } from './components/CustomCard'
import { Home } from './components/Home'
import { FeaturesSection } from './components/FeaturesSection'
import { PricingSection } from './components/PricingSection'
import FAQSection from './components/FAQSection'
import DiscussionForm from './components/DiscussionForm'
import Footer from './components/Footer'
import { ProjectSection } from './components/ProjectSection'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto space-y-4'>
      <Home />
      <FeaturesSection />
      <PricingSection />
      <ProjectSection />
      <FAQSection />
      <DiscussionForm />
    </div>
  )
}

export default page