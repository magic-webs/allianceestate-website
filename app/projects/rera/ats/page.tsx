'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function AtsProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 py-12 md:py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase">
              <Link href="/projects/rera" className="hover:underline">RERA Projects</Link>
              <span>/</span>
              <span>ATS Projects</span>
            </div>
            <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-3 text-white leading-tight md:mb-4">
              ATS Homekraft &amp; Signature Projects
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Pioneers of green, low-density living. Signature Spanish architecture, sprawling lawns, and unparalleled resale value.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="#contact" className={btnPrimary}>
                Schedule an ATS Site Visit
              </Link>
              <Link href="/projects/rera" className={btnSecondary}>
                Back to RERA Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl md:mb-6">Why Invest in ATS Developments?</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏡 Spanish-Style Timeless Aesthetics</h3>
                  <p className="text-slate-300 text-sm">Red tile roofs, terracotta arcades, and lush courtyard gardens.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🌳 80% Open Green Space</h3>
                  <p className="text-slate-300 text-sm">Low-density masterplans with extensive green cover and dedicated walking trails.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏆 Impeccable Market Reputation</h3>
                  <p className="text-slate-300 text-sm">Decades of proven execution quality, high maintenance standards, and solid investor trust.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Hero section banner.jpg"
                alt="ATS Signature Projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
