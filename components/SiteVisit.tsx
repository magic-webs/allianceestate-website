'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SiteVisit = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-12 md:py-32">
      <div
        className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-24"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582407947092-50a0e786dfc1?q=80&w=1200&auto=format&fit=crop"
            alt="Site Visit"
            className="h-[260px] w-full object-cover transition-transform duration-600 ease-smooth hover:scale-[1.02] sm:h-[340px] md:h-[400px] lg:h-[600px]"
          />
        </div>

        <div>
          <span className="fade-up mb-4 block text-[0.7rem] font-semibold tracking-[2.5px] text-gold md:mb-6 md:text-[0.8rem] md:tracking-[3px]">
            BEYOND THE BROCHURE
          </span>
          <h2 className="fade-up mb-5 text-[1.75rem] leading-tight text-primary sm:text-[2.25rem] md:mb-8 md:text-5xl">
            See the Opportunity.
            <br />
            On the Ground.
          </h2>
          <p className="fade-up mb-8 max-w-[500px] text-[1rem] leading-[1.7] text-muted delay-200 md:mb-10 md:text-[1.15rem]">
            We believe informed investments start with real-world evaluation. Our guided site visits help investors
            see the location, understand the surroundings, and assess the opportunity beyond photographs and brochures.
          </p>
          <a
            href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up group inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-[1rem] font-semibold text-primary delay-400 hover:text-gold md:text-[1.1rem]"
          >
            Schedule a Site Visit
            <span className="inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-[5px]">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SiteVisit;
