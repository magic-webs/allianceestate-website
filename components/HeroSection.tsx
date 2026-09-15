'use client';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';

const heroBtn =
  'inline-flex items-center justify-center rounded border px-8 py-4 text-base font-semibold transition-all duration-400 ease-smooth';

const slides = [
  {
    image: '/hero-section-bg.png',
    eyebrow: 'BUILDING TOMORROW',
    heading: (
      <>
        Where Land Meets
        <br />
        <span className="font-serif text-gold italic">Opportunity.</span>
      </>
    ),
    sub: 'Explore carefully selected land opportunities across emerging growth corridors of Uttar Pradesh.',
  },
  {
    image: '/Govt.-equisition.png',
    eyebrow: 'GOVERNMENT ACQUISITION',
    heading: (
      <>
        Land Secured by
        <br />
        <span className="font-serif text-gold italic">Government Trust.</span>
      </>
    ),
    sub: 'Location insights, documentation and property information to help you make informed land decisions.',
  },
  {
    image: '/Yamuna-Expressway.png',
    eyebrow: 'YAMUNA EXPRESSWAY',
    heading: (
      <>
        Yamuna Expressway
        <br />
        <span className="font-serif text-gold italic">Growth Corridor</span>
      </>
    ),
    sub: 'Explore property opportunities across one of Uttar Pradesh major planned development corridors.',
  },
  {
    image: '/Abadi-landd.png',
    eyebrow: 'ABADI LAND',
    heading: (
      <>
        Land Within
        <br />
        <span className="font-serif text-gold italic">Established Areas.</span>
      </>
    ),
    sub: 'Explore land opportunities located within or around abadi areas, subject to applicable revenue records and local regulations.',
  },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    setLoaded(true);
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i: number) => { goTo(i); resetTimer(); };

  const reveal = loaded ? 'animate-slide-up-fade' : '';
  const slide = slides[active];

  return (
    <section className="relative flex h-screen min-h-screen items-center overflow-hidden text-white md:min-h-[800px]">
      {/* Slides – crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-1 transition-opacity duration-700 ease-in-out ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={s.image}
            alt={s.eyebrow}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,25,56,0.75)_0%,rgba(11,42,91,0.88)_100%)] lg:bg-[linear-gradient(to_right,rgba(6,25,56,0.9)_0%,rgba(11,42,91,0.65)_55%,rgba(11,42,91,0.25)_100%)]" />
        </div>
      ))}

      <div className="relative z-2 mx-auto flex h-full w-full max-w-page flex-col justify-center px-4 pt-28 md:px-8 md:pt-36">
        <div className="max-w-[800px]">
          <div
            className={`flex items-center gap-4 font-heading text-[0.85rem] font-semibold tracking-[3px] text-gold opacity-0 [animation-delay:0.1s] mb-8 ${reveal}`}
          >
            {slide.eyebrow} <span className="inline-block h-px w-10 bg-gold" />
          </div>

          <h1
            className={`mb-8 text-5xl leading-[1.1] font-medium tracking-[-1px] text-white opacity-0 [animation-delay:0.3s] md:text-[3.5rem] lg:text-[5rem] ${reveal}`}
          >
            {slide.heading}
          </h1>

          <p
            className={`mb-12 max-w-[650px] text-[1.1rem] leading-[1.6] text-slate-200 opacity-0 [animation-delay:0.5s] md:text-[1.25rem] ${reveal}`}
          >
            {slide.sub}
          </p>

          <div
            className={`mb-8 flex flex-col gap-6 opacity-0 [animation-delay:0.7s] md:flex-row ${reveal}`}
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

          <div
            className={`mb-16 flex items-center gap-4 opacity-0 [animation-delay:0.8s] ${reveal}`}
          >
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Bottom bar – counter / dots / arrows */}
        <div
          className={`relative mt-16 flex w-full flex-col items-center justify-between gap-8 opacity-0 [animation-delay:1s] md:absolute md:bottom-12 md:mt-0 md:w-[calc(100%-4rem)] md:max-w-[1400px] md:flex-row md:gap-0 ${reveal}`}
        >



        </div>
      </div>
    </section>
  );
};

export default HeroSection;

