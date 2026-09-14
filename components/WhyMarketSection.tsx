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
    <section className="bg-surface py-16 md:py-32" id="markets">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-24 max-w-[800px] text-center"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up mb-6 text-[2.5rem] lg:text-5xl">
            The smartest investments follow infrastructure.
          </h2>
          <p className="fade-up text-[1.25rem] text-muted delay-200">
            Long-term real-estate value is often shaped by what is being built around it.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8"
          ref={blocksRef as React.RefObject<HTMLDivElement>}
        >
          {blocks.map((block) => (
            <div
              key={block.number}
              className={`fade-up group relative overflow-hidden rounded bg-white px-12 py-16 shadow-card hover:-translate-y-2.5 hover:shadow-premium before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-400 before:ease-smooth before:content-[''] hover:before:scale-x-100 ${block.delay}`}
            >
              <div className="mb-8 font-heading text-2xl font-bold text-gold opacity-80">
                {block.number}
              </div>
              <h3 className="mb-6 text-[1.75rem]">{block.title}</h3>
              <p className="mb-8 text-[1.05rem] leading-[1.6] text-muted">{block.text}</p>
              <div className="text-2xl text-primary transition-all duration-400 ease-smooth group-hover:translate-x-2.5 group-hover:text-gold">
                &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMarketSection;
