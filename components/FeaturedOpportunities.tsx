'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

const opportunities = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    location: 'Yamuna Expressway, Greater Noida',
    type: 'Residential Plots',
    description: 'Strategically located plots near the upcoming Noida International Airport with strong infrastructure connectivity.',
    price: '₹ On Request',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    location: 'Cyber City, Gurugram',
    type: 'Commercial Office Space',
    description: "Premium Grade-A commercial spaces in one of India's most established business corridors.",
    price: '₹ On Request',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    location: 'Dwarka Expressway, NCR',
    type: 'Luxury Residences',
    description: 'High-rise luxury residences along the rapidly developing Dwarka Expressway corridor.',
    price: '₹ On Request',
  },
];

const FeaturedOpportunities = () => {
  const headerRef = useScrollReveal();

  return (
    <section className="bg-white py-12 md:py-32" id="opportunities">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-12 max-w-[700px] text-center md:mb-20"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up mb-4 text-[1.75rem] sm:text-[2.25rem] md:text-5xl">Opportunities Worth Looking At</h2>
          <p className="fade-up text-[1rem] text-muted delay-200 md:text-[1.25rem]">
            A focused selection of strategically positioned real-estate opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {opportunities.map((item) => (
            <div
              className="group relative overflow-hidden border border-primary/8 bg-white transition-all duration-400 ease-smooth hover:-translate-y-2 hover:shadow-premium"
              key={item.location}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.location}
                  className="h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.3),transparent)]" />
              </div>

              <div className="p-8">
                <span className="mb-3 block text-[0.8rem] font-semibold tracking-[1.5px] text-gold uppercase">
                  {item.type}
                </span>
                <h3 className="mb-4 text-2xl text-primary">{item.location}</h3>
                <p className="mb-8 text-base leading-[1.6] text-muted">{item.description}</p>
                <div className="flex items-center justify-between border-t border-primary/8 pt-6">
                  <span className="font-heading text-[1.1rem] font-bold text-primary">{item.price}</span>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-primary transition-all duration-400 ease-smooth hover:text-gold"
                  >
                    Explore Opportunity
                    <span className="inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-[5px]">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gold transition-transform duration-400 ease-smooth group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;
