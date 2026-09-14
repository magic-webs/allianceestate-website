'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    number: '01',
    title: 'Market Intelligence',
    description: 'Data-driven insights into location potential, infrastructure timelines and growth trajectories.',
  },
  {
    number: '02',
    title: 'Strategic Selection',
    description: 'Identifying opportunities where infrastructure, demand and economic growth intersect.',
  },
  {
    number: '03',
    title: 'Due Diligence',
    description: 'Thorough review of documentation, legal standing, and development credentials.',
  },
  {
    number: '04',
    title: 'End-to-End Assistance',
    description: 'Structured support from opportunity identification through to investment execution.',
  },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-primary py-20 md:py-32">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-16 max-w-[700px] text-center md:mb-24"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up mb-6 text-[2.5rem] text-white lg:text-[3.5rem]">
            Not Just Property.
            <br />
            Perspective.
          </h2>
          <p className="fade-up text-[1.25rem] leading-[1.6] text-slate-400 delay-200">
            We bring together market intelligence, strategic thinking and operational expertise to help investors make informed real-estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <div className="p-8" key={feature.number}>
              <div className="mb-6 font-heading text-[1.25rem] font-bold text-gold">{feature.number}</div>
              <div className="mb-6 h-px w-10 bg-gold opacity-50" />
              <h3 className="mb-4 text-[1.35rem] text-white">{feature.title}</h3>
              <p className="text-base leading-[1.6] text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
