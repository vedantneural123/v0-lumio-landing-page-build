'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ProductStory } from '@/components/product-story'
import { FeatureEcosystem } from '@/components/feature-ecosystem'
import { HowItWorks } from '@/components/how-it-works'
import { AIAnalysis } from '@/components/ai-analysis'
import { ProductShowcase } from '@/components/product-showcase'
import { CreatorOutcome } from '@/components/creator-outcome'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar isScrolled={isScrolled} />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <ProductStory />
        <FeatureEcosystem />
        <HowItWorks />
        <AIAnalysis />
        <ProductShowcase />
        <CreatorOutcome />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
