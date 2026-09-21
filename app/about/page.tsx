'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import { btnPrimary, btnSecondary } from '../../components/buttons';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/About-us.png"
              alt="About Alliance Estate Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-page relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>About Alliance Estate</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Pioneering Strategic Real Estate Investments
            </h1>
            <p className="max-w-3xl text-base md:text-xl text-slate-300 font-light leading-relaxed mb-6 md:mb-8">
              Alliance Estate delivers unmatched expertise in land acquisition, RERA-approved developments, and high-yield strategic real estate assets across Delhi-NCR &amp; Yamuna Expressway.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20an%20advisor."
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Schedule a Consultation
              </a>
              <Link href="/projects/residential" className={btnSecondary}>
                Explore Opportunities
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Verification Badges */}
        <section className="py-8 bg-slate-900/90 border-y border-white/10 md:py-10">
          <div className="mx-auto max-w-page px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
              
              {/* Legally Verified */}
              <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 border-r border-white/10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5 text-gold mb-3 shadow-[0_0_15px_rgba(201,162,39,0.12)]">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h18" />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-light">
                  Legally <span className="font-bold text-white">Verified</span>
                </div>
              </div>

              {/* Title Transparency */}
              <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 md:border-r md:border-white/10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5 text-gold mb-3 shadow-[0_0_15px_rgba(201,162,39,0.12)]">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-light">
                  Title <span className="font-bold text-white">Transparency</span>
                </div>
              </div>

              {/* Documented Process */}
              <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 border-r border-white/10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5 text-gold mb-3 shadow-[0_0_15px_rgba(201,162,39,0.12)]">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="13" y2="16" />
                    <path d="m15 16 1.5 1.5 3-3" />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-light">
                  Documented <span className="font-bold text-white">Process</span>
                </div>
              </div>

              {/* Customer Trust */}
              <div className="flex flex-col items-center justify-center text-center px-3 md:px-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5 text-gold mb-3 shadow-[0_0_15px_rgba(201,162,39,0.12)]">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L13 12" />
                    <path d="m13 12-2.5-2.5a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 0 0 2.8l4.6 4.6a1 1 0 0 0 1.4 0l1.7-1.7" />
                    <path d="M2 13.5V9a2 2 0 0 1 2-2h3" />
                    <path d="M22 13.5V9a2 2 0 0 0-2-2h-3" />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-light">
                  Customer <span className="font-bold text-white">Trust</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 px-4 md:py-20 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold font-heading mb-4 md:mb-6 text-white">
                Empowering Growth Through Land &amp; Capital Intelligence
              </h2>
              <p className="text-slate-300 leading-relaxed mb-3 md:mb-4">
                Founded on principles of transparency, rigorous due diligence, and foresight, Alliance Estate bridges institutional knowledge with individual investor wealth creation.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4 md:mb-6">
                Our team specializes in identifying high-potential growth corridors before infrastructure developments fully materialize, giving our clients a distinct first-mover advantage.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Direct partnership with top developers &amp; government authorities
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Legal verification &amp; clear title documentation guarantee
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                  End-to-end portfolio management &amp; advisory services
                </li>
              </ul>
            </div>
            <div className="relative h-[260px] sm:h-[340px] md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/About-us.png"
                alt="Alliance Estate Corporate Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </section>

      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
