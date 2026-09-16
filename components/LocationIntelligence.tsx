'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const markers = [
  { name: 'Delhi NCR', top: '30%', left: '42%' },
  { name: 'Noida', top: '42%', left: '56%' },
  { name: 'Greater Noida', top: '55%', left: '62%' },
  { name: 'Yamuna Expressway', top: '65%', left: '52%' },
  { name: 'Airport Corridor', top: '72%', left: '40%' },
  { name: 'Industrial Zones', top: '38%', left: '28%' },
  { name: 'Emerging Growth Areas', top: '50%', left: '35%' },
];

const LocationIntelligence = () => {
  const ref = useScrollReveal();

  return (
    <section className="sticky top-0 z-10 flex min-h-[500px] items-center overflow-hidden md:min-h-[600px]">
      <div className="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="/banner-bg.png"
          alt="Location Intelligence Map"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(135deg,rgba(6,25,56,0.75)_0%,rgba(11,42,91,0.55)_100%)]" />
      </div>

      <div
        className="relative z-2 mx-auto grid w-full max-w-page grid-cols-1 items-center gap-6 px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-12"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div>
          <h2 className="fade-up mb-3 text-[1.85rem] font-bold leading-tight text-white sm:text-[2.25rem] md:text-[2.75rem] md:mb-5 lg:text-[3.25rem]">
            Location Is the Investment.
          </h2>
          <p className="fade-up text-[0.95rem] leading-[1.6] text-slate-200 delay-200 sm:text-[1.05rem] md:text-[1.2rem]">
            We focus on markets where infrastructure, industry and urban expansion converge.
          </p>
        </div>

        <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[320px] md:h-[380px] lg:h-[450px]">
          {markers.map((marker, index) => (
            <div
              key={marker.name}
              className="group absolute flex animate-marker-in cursor-pointer items-center gap-1.5 opacity-0 md:gap-2.5"
              style={{ top: marker.top, left: marker.left, animationDelay: `${0.3 + index * 0.12}s` }}
            >
              <span className="relative z-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] md:h-3.5 md:w-3.5" />
              <span className="absolute top-1/2 -left-1.5 h-5 w-5 -translate-y-1/2 animate-marker-pulse rounded-full border-2 border-gold opacity-0 md:h-7 md:w-7 md:-left-1.5" />
              <span className="text-[0.7rem] font-semibold tracking-[0.2px] whitespace-nowrap text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:text-gold sm:text-[0.8rem] md:text-[0.95rem]">
                {marker.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationIntelligence;
