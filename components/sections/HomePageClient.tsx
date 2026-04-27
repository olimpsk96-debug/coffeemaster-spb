'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { BrandsMarquee } from '@/components/sections/BrandsMarquee'
import { PressLogos } from '@/components/sections/PressLogos'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CommonIssues } from '@/components/sections/CommonIssues'
import { MastersSection } from '@/components/sections/MastersSection'
import { CalculatorSection } from '@/components/sections/CalculatorSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery'
import { YandexMapSection } from '@/components/sections/YandexMapSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LiveActivitySection } from '@/components/sections/LiveActivitySection'
import { CTASection } from '@/components/sections/CTASection'
import { useFormModal } from '@/components/layout/FormContext'

export function HomePageClient() {
  const { open } = useFormModal()

  return (
    <>
      <HeroSection onOpenForm={open} />
      <LiveActivitySection />
      <BrandsMarquee />
      <PressLogos />
      <StatsSection />
      <WhyUsSection />
      <CalculatorSection onOpenForm={open} />
      <ServicesSection />
      <BeforeAfterGallery />
      <ProcessSection />
      <CommonIssues onOpenForm={open} />
      <MastersSection />
      <TestimonialsSection />
      <FAQSection />
      <YandexMapSection />
      <CTASection onOpenForm={open} />
    </>
  )
}
