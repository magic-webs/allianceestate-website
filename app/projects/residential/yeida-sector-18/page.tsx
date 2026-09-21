'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function Sector18Page() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Sector-18.png"
              alt="YEIDA Sector 18 Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto max-w-page relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <Link href="/projects/residential" className="hover:underline">Residential Plots</Link>
              <span>/</span>
              <span>YEIDA Sector 18</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              YEIDA Sector 18 Residential &amp; Commercial Plots
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Invest in YEIDA's premier high-street destination. Unmatched capital appreciation, direct connectivity to Jewar Airport, and immediate revenue potential.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20inquire%20about%20plot%20rates%20in%20YEIDA%20Sector%2018."
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Inquire Plot Rates
              </a>
              <a
                href="https://drive.google.com/drive/folders/1tNk3G-8zgIeYSVPUOiBK3GsMKUhGah-A"
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                All Residential Section Layout
              </a>
            </div>
          </div>
        </section>

        {/* Overview & Key Highlights */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Sector-18.png"
                alt="YEIDA Sector 18 Location"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-5 sm:text-3xl sm:mb-6">YEIDA Sector 18 Location Advantages</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">🛣️ Yamuna Expressway Connectivity</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Excellent road connectivity through the Yamuna Expressway and the wider NCR network.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">✈️ Noida International Airport</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Part of the rapidly developing corridor around the upcoming Noida International Airport at Jewar.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">🎬 Film City &amp; Future Growth</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Close to major planned developments including Film City, logistics and emerging commercial infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plot Options */}
        <section className="py-10 bg-slate-800/40 border-y border-white/5 px-4 md:py-12 md:px-8">
          <div className="mx-auto max-w-page">
            <h2 className="text-xl font-bold text-white mb-6 text-center md:text-2xl md:mb-8">Available Plot Configurations - Sector 18</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-gold/20 text-center">
                <div className="text-gold font-bold text-xl mb-2">100 - 200 Sq. Yds.</div>
                <p className="text-slate-300 text-sm mb-4">Ideal for boutique offices & luxury personal spaces.</p>
                <div className="text-xs text-slate-400">Immediate Allotment &amp; Title Verification</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-gold/30 text-center relative overflow-hidden">
                <div className="bg-gold text-slate-950 font-bold text-[10px] px-3 py-0.5 rounded-full absolute top-3 right-3 uppercase">Popular</div>
                <div className="text-gold font-bold text-xl mb-2">250 - 400 Sq. Yds.</div>
                <p className="text-slate-300 text-sm mb-4">Perfect for high-density multi-story commercial development.</p>
                <div className="text-xs text-slate-400">Authority Approved Corner Plots Available</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-gold/20 text-center">
                <div className="text-gold font-bold text-xl mb-2">500+ Sq. Yds.</div>
                <p className="text-slate-300 text-sm mb-4">Strategic land parcels for institutional investors.</p>
                <div className="text-xs text-slate-400">Direct Transfer &amp; Freehold Title</div>
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
