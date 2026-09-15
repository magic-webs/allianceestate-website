'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const blocks = [
  {
    number: '01',
    title: 'Infrastructure',
    text: 'Expressways, airports, industrial corridors and major connectivity projects.',
    delay: '',
  },
  {
    number: '02',
    title: 'Economic Growth',
    text: 'Industrial, commercial and business expansion.',
    delay: 'delay-200',
  },
  {
    number: '03',
    title: 'Future Demand',
    text: 'Residential, hospitality and institutional development.',
    delay: 'delay-400',
  },
];

const WhyMarketSection = () => {
  const headerRef = useScrollReveal();
  const blocksRef = useScrollReveal();

  return (
    <section className="bg-[#fafbfc] pt-8" id="markets">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto max-w-[800px] text-center"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up mb-4 text-[2.5rem] font-bold text-primary lg:text-5xl">
            Our Featured Listings
          </h2>
          <p className="fade-up text-[1.25rem] text-muted delay-200">
            Explore Premium Real Estate Opportunities in Prime Locations
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMarketSection;
