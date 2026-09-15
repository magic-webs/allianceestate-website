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
    <section className="relative flex min-h-[600px] items-center overflow-hidden">
      <div className="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
          alt="Aerial City View"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(135deg,rgba(6,25,56,0.92)_0%,rgba(11,42,91,0.8)_100%)]" />
      </div>

      <div
        className="relative z-2 mx-auto grid w-full max-w-page grid-cols-1 items-center gap-8 px-8 py-12 lg:grid-cols-[1fr_1.5fr] lg:gap-12"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div>
          <h2 className="fade-up mb-6 text-[2rem] text-white md:text-[2.5rem] lg:text-[3.5rem]">
            Location Is the Investment.
          </h2>
          <p className="fade-up text-[1.25rem] leading-[1.6] text-slate-300 delay-200">
            We focus on markets where infrastructure, industry and urban expansion converge.
          </p>
        </div>

        <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
          {markers.map((marker, index) => (
            <div
              key={marker.name}
              className="group absolute flex animate-marker-in cursor-pointer items-center gap-3 opacity-0"
              style={{ top: marker.top, left: marker.left, animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <span className="relative z-2 h-3 w-3 shrink-0 rounded-full bg-gold" />
              <span className="absolute top-1/2 -left-1.5 h-6 w-6 animate-marker-pulse rounded-full border-2 border-gold opacity-0" />
              <span className="text-[0.75rem] font-semibold tracking-[0.5px] whitespace-nowrap text-white transition-all duration-400 ease-smooth group-hover:text-gold md:text-[0.9rem]">
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
