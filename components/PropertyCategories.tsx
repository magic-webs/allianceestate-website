'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = [
  {
    title: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Industrial',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Hospitality & Institutional',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  },
];

const PropertyCategories = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-12 md:py-32">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-10 max-w-[700px] text-center md:mb-20"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up text-[1.75rem] sm:text-[2.25rem] md:text-5xl">Real Estate, Across Growth Sectors.</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {categories.map((cat) => (
            <div
              className="group relative aspect-[16/10] cursor-pointer overflow-hidden"
              key={cat.title}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-[linear-gradient(to_top,rgba(6,25,56,0.7)_0%,transparent_60%)] p-5 transition-all duration-400 ease-smooth group-hover:bg-[linear-gradient(to_top,rgba(6,25,56,0.9)_0%,rgba(6,25,56,0.5)_100%)] md:p-10">
                <h3 className="text-[1.1rem] font-bold text-white transition-all duration-400 ease-smooth md:text-[1.35rem] lg:text-[1.75rem]">
                  {cat.title}
                </h3>
                <span className="-translate-x-5 text-[1.5rem] text-gold opacity-0 transition-all duration-400 ease-smooth group-hover:translate-x-0 group-hover:opacity-100 md:text-[2rem]">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
