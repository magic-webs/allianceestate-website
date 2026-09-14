'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const heroBtn =
  'inline-flex items-center justify-center rounded border px-8 py-4 text-base font-semibold transition-all duration-400 ease-smooth';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Each block fades up on mount; `opacity-0` holds it hidden until its
  // staggered animation-delay elapses.
  const reveal = loaded ? 'animate-slide-up-fade' : '';

  return (
    <section className="relative mb-16 flex h-screen min-h-screen items-center overflow-hidden text-white md:min-h-[800px]">
      {/* Background Image / Overlay */}
      <div className="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="/hero-section-bg.png"
          alt="Premium Real Estate"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(6,25,56,0.8)_0%,rgba(11,42,91,0.9)_100%)] lg:bg-[linear-gradient(to_right,rgba(6,25,56,0.9)_0%,rgba(11,42,91,0.7)_50%,rgba(11,42,91,0.3)_100%)]" />
      </div>

      <div className="relative z-2 mx-auto flex h-full w-full max-w-page flex-col justify-center px-4 md:px-8">
        <div className="max-w-[800px]">
          <div
            className={`flex items-center gap-4 font-heading text-[0.85rem] font-semibold tracking-[3px] text-gold opacity-0 [animation-delay:0.1s] mb-8 ${reveal}`}
          >
            BUILDING TOMORROW <span className="inline-block h-px w-10 bg-gold" />
          </div>

          <h1
            className={`mb-8 text-5xl leading-[1.1] font-medium tracking-[-1px] text-white opacity-0 [animation-delay:0.3s] md:text-[3.5rem] lg:text-[5rem] ${reveal}`}
          >
            Invest in Places
            <br />
            That <span className="font-serif text-gold italic">Define the Future.</span>
          </h1>

          <p
            className={`mb-12 max-w-[650px] text-[1.1rem] leading-[1.6] text-slate-200 opacity-0 [animation-delay:0.5s] md:text-[1.25rem] ${reveal}`}
          >
            Discover thoughtfully planned destinations designed for long-term value, lifestyle and growth.
          </p>

          <div
            className={`mb-16 flex flex-col gap-6 opacity-0 [animation-delay:0.7s] md:flex-row ${reveal}`}
          >
            <Link
              href="#opportunities"
              className={`${heroBtn} border-gold bg-gold text-ink hover:-translate-y-0.5 hover:border-gold-light hover:bg-gold-light`}
            >
              EXPLORE PROJECTS &rarr;
            </Link>
            <Link
              href="#contact"
              className={`${heroBtn} border-white/40 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10`}
            >
              LEARN MORE &rarr;
            </Link>
          </div>
        </div>

        <div
          className={`relative mt-16 flex w-full flex-col items-center justify-between gap-8 opacity-0 [animation-delay:1s] md:absolute md:bottom-12 md:mt-0 md:w-[calc(100%-4rem)] md:max-w-[1400px] md:flex-row md:gap-0 ${reveal}`}
        >
          <div className="text-[0.9rem] font-medium tracking-[1px] text-white/50">
            <span className="text-white">01</span> <span className="mx-2">/</span> 04
          </div>

          <div className="flex gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="h-0.5 w-10 bg-gold transition-all duration-400 ease-smooth" />
            <div className="h-0.5 w-10 bg-white/20 transition-all duration-400 ease-smooth" />
            <div className="h-0.5 w-10 bg-white/20 transition-all duration-400 ease-smooth" />
            <div className="h-0.5 w-10 bg-white/20 transition-all duration-400 ease-smooth" />
          </div>

          <div className="flex gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-400 ease-smooth hover:border-gold hover:text-gold">
              &larr;
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-400 ease-smooth hover:border-gold hover:text-gold">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
