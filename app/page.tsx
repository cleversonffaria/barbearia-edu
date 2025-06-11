"use client"

import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import GallerySection from "../components/GallerySection"
import TestimonialsSection from "../components/TestimonialsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
