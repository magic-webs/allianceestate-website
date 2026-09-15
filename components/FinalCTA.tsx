'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { btnPrimary, btnWhite } from './buttons';

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Real Estate"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(135deg,rgba(6,25,56,0.92)_0%,rgba(11,42,91,0.85)_100%)]" />
      </div>

      <div
        className="relative z-2 mx-auto w-full max-w-page px-4 py-12 text-center md:px-8 md:py-20"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <h2 className="fade-up mx-auto mb-6 max-w-[800px] text-[2.5rem] text-white md:text-[4rem]">
          Your Next Investment
          <br />
          Starts With the Right Location.
        </h2>
        <p className="fade-up mb-12 text-[1.1rem] text-slate-300 delay-200 md:text-[1.35rem]">
          Let&apos;s identify the opportunity that fits your investment goals.
        </p>
        <div className="fade-up flex flex-col items-center justify-center gap-6 delay-400 md:flex-row md:flex-wrap">
          <Link href="/contact" className={btnPrimary}>
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
