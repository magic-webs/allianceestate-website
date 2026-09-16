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

        {/* Stats Section */}
        <section className="py-12 bg-slate-800/50 border-y border-white/5">
          <div className="mx-auto max-w-page px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2 font-heading">15+</div>
              <div className="text-sm text-slate-400">Years of Expertise</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2 font-heading">2500+</div>
              <div className="text-sm text-slate-400">Satisfied Investors</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2 font-heading">₹500Cr+</div>
              <div className="text-sm text-slate-400">Assets Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2 font-heading">100%</div>
              <div className="text-sm text-slate-400">Clean & Verified Titles</div>
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
