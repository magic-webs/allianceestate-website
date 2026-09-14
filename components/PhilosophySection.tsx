'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const stats = [
  { target: 15, suffix: '+', label: 'Years of Experience' },
  { target: 50, suffix: '+', label: 'Projects / Opportunities' },
  { target: 500, suffix: '+', label: 'Investors Served' },
  { target: 12, suffix: '+', label: 'Growth Markets' },
];

const CountUpNumber = ({ target, suffix, started }: { target: number; suffix: string; started: boolean }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [started, target]);

  return (
    <>
      {count}<span className="text-gold">{suffix}</span>
    </>
  );
};

const PhilosophySection = () => {
  const [countStarted, setCountStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-32" id="about">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:mb-32 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="fade-up text-[2.25rem] leading-tight text-primary md:text-[2.5rem] lg:text-[3.5rem]">
              Property is physical.
              <br />
              Opportunity is strategic.
            </h2>
          </div>
          <div>
            <p className="fade-up mb-8 max-w-[500px] text-[1.25rem] leading-[1.6] text-ink delay-200 lg:text-2xl">
              We help investors identify real-estate opportunities where infrastructure, economic growth and future demand come together. Our focus is on long-term value creation.
            </p>
            <Link
              href="#approach"
              className="fade-up relative inline-flex items-center text-[1.125rem] font-semibold text-primary delay-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-400 after:ease-smooth after:content-[''] hover:text-gold hover:after:w-full"
            >
              Discover Our Approach &rarr;
            </Link>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-8 border-t border-primary/10 pt-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-4 lg:pt-16"
          ref={statsRef}
        >
          {stats.map((stat) => (
            <div
              className="relative flex flex-col items-center px-4 py-8 text-center before:absolute before:top-0 before:left-1/2 before:h-[3px] before:w-10 before:-translate-x-1/2 before:bg-gold before:opacity-40 before:content-['']"
              key={stat.label}
            >
              <div className="mb-4 font-heading text-[3rem] leading-none font-bold text-primary lg:text-[4.5rem]">
                <CountUpNumber target={stat.target} suffix={stat.suffix} started={countStarted} />
              </div>
              <div className="text-[1.05rem] font-medium tracking-[0.3px] text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
