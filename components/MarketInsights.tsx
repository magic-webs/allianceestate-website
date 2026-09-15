'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop',
    category: 'Market Updates',
    date: 'September 2026',
    headline: "How Infrastructure Investments Are Reshaping NCR's Real-Estate Landscape",
  },
  {
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800&auto=format&fit=crop',
    category: 'Infrastructure',
    date: 'August 2026',
    headline: 'Noida International Airport: What It Means for Surrounding Property Markets',
  },
  {
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=800&auto=format&fit=crop',
    category: 'Investment Insights',
    date: 'August 2026',
    headline: 'Understanding Location Intelligence: A Framework for Smarter Real-Estate Decisions',
  },
];

const MarketInsights = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-surface py-12 md:py-32" id="insights">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div className="mb-10 max-w-[700px] md:mb-20" ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up text-[1.75rem] sm:text-[2.25rem] md:text-5xl">What the Market Is Telling Us</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              href="#"
              className="group flex flex-col overflow-hidden border border-primary/6 bg-white transition-all duration-400 ease-smooth hover:-translate-y-[5px] hover:shadow-premium"
              key={article.headline}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.headline}
                  className="h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[1.5px] text-gold uppercase">
                    {article.category}
                  </span>
                  <span className="text-[0.85rem] text-muted">{article.date}</span>
                </div>
                <h3 className="mb-6 flex-1 text-[1.35rem] leading-[1.4] text-primary">
                  {article.headline}
                </h3>
                <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-primary transition-all duration-400 ease-smooth group-hover:text-gold">
                  Read More
                  <span className="inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-[5px]">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
