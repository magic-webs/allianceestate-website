'use client';
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import PhilosophySection from '../components/PhilosophySection';
import ContactSection from '../components/ContactSection';
import WhyMarketSection from '../components/WhyMarketSection';
import LocationIntelligence from '../components/LocationIntelligence';
import PropertyCategories from '../components/PropertyCategories';
import InvestmentProcess from '../components/InvestmentProcess';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal observer for .fade-up elements
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyMarketSection />
        <CarouselSection />
        <PhilosophySection />
        <ContactSection />
        <WhyMarketSection />
        <LocationIntelligence />
        <PropertyCategories />
        <InvestmentProcess />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
