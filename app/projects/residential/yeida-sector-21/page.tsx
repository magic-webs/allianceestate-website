'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function Sector21Page() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page relative z-10 px-4 md:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <Link href="/projects/residential" className="hover:underline">Residential Plots</Link>
              <span>/</span>
              <span>YEIDA Sector 21</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
              YEIDA Sector 21 Prime Residential Plots
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              Premium residential plots situated in a high-demand, quiet residential belt with direct access to main arterial roads and commercial sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Book a Site Visit
              </Link>
              <Link href="/projects/residential" className={btnSecondary}>
                Back to Residential Plots
              </Link>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/yeida-sector-21.png"
                alt="YEIDA Sector 21 Residential"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Investment Highlights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🛣️ 24-Meter Wide Internal Roads</h3>
                  <p className="text-slate-300 text-sm">Spacious layout with underground cabling, rainwater harvesting, and modern utility grids.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🔒 Gated Security Infrastructure</h3>
                  <p className="text-slate-300 text-sm">24/7 manned security checkpoints, CCTV coverage, and controlled entry/exit.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📊 Strong Value Retention</h3>
                  <p className="text-slate-300 text-sm">High land valuation consistency driven by limited plot inventory in central Noida.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
