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
    link: '/projects/residential',
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
    link: '/projects/govt-acquisition-land',
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
    link: '/projects/rera/yamuna-expressway',
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
    link: '/projects/abadi-land',
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
    <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden text-white md:min-h-[800px]">
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

      <div className="relative z-2 mx-auto flex h-full w-full max-w-page flex-col justify-center px-4 pt-20 md:px-8 md:pt-36">
        <div className="max-w-[800px]">
          <div
            className={`flex items-center gap-3 font-heading text-[0.7rem] font-semibold tracking-[2px] text-gold opacity-0 [animation-delay:0.1s] mb-4 md:text-[0.85rem] md:tracking-[3px] md:gap-4 md:mb-8 ${reveal}`}
          >
            {slide.eyebrow} <span className="inline-block h-px w-6 bg-gold md:w-10" />
          </div>

          <h1
            className={`mb-5 text-[2.2rem] leading-[1.15] font-medium tracking-[-0.5px] text-white opacity-0 [animation-delay:0.3s] sm:text-[2.8rem] md:text-[3.5rem] md:mb-8 md:tracking-[-1px] lg:text-[5rem] ${reveal}`}
          >
            {slide.heading}
          </h1>

          <p
            className={`mb-8 max-w-[650px] text-[0.95rem] leading-[1.6] text-slate-200 opacity-0 [animation-delay:0.5s] md:mb-12 md:text-[1.25rem] ${reveal}`}
          >
            {slide.sub}
          </p>

          <div
            className={`mb-8 flex flex-col gap-3 opacity-0 [animation-delay:0.7s] sm:flex-row sm:gap-4 ${reveal}`}
          >
            <Link
              href="/projects/residential"
              className={`${heroBtn} border-gold bg-gold text-ink hover:-translate-y-0.5 hover:border-gold-light hover:bg-gold-light px-6 py-3 text-sm md:px-8 md:py-4 md:text-base`}
            >
              EXPLORE PROJECTS &rarr;
            </Link>
            <Link
              href="/contact"
              className={`${heroBtn} border-white/40 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10 px-6 py-3 text-sm md:px-8 md:py-4 md:text-base`}
            >
              LEARN MORE &rarr;
            </Link>
          </div>

          <div
            className={`mb-8 flex items-center gap-3 opacity-0 [animation-delay:0.8s] ${reveal}`}
          >
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 bg-transparent text-gold transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 md:h-12 md:w-12"
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dark))] text-white shadow-[0_4px_10px_rgba(201,162,39,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(201,162,39,0.5)] md:h-12 md:w-12"
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

