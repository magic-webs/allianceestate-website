'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the investor\'s goals, timeline and risk appetite.',
  },
  {
    number: '02',
    title: 'Evaluate',
    description: 'Analyse location, property fundamentals and growth potential.',
  },
  {
    number: '03',
    title: 'Verify',
    description: 'Review documentation, legal standing and all relevant information.',
  },
  {
    number: '04',
    title: 'Invest',
    description: 'Move forward with structured assistance and ongoing support.',
  },
];

const InvestmentProcess = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-12 md:py-32" id="approach">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-12 max-w-[700px] text-center md:mb-24"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up text-[1.75rem] sm:text-[2.25rem] md:text-5xl">A Smarter Way to Invest.</h2>
        </div>

        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
          <div className="absolute top-7 left-[10%] hidden h-0.5 w-4/5 bg-primary opacity-15 md:block" />

          {steps.map((step) => (
            <div className="relative text-center" key={step.number}>
              <div className="relative z-2 mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white">
                <span className="font-heading text-base font-bold text-gold">{step.number}</span>
              </div>
              <h3 className="mb-4 text-2xl text-primary">{step.title}</h3>
              <p className="mx-auto max-w-[250px] text-base leading-[1.6] text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
