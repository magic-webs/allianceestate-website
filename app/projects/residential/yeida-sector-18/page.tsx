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
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page relative z-10 px-4 md:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <Link href="/projects/residential" className="hover:underline">Residential Plots</Link>
              <span>/</span>
              <span>YEIDA Sector 18</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
              YEIDA Sector 18 Residential &amp; Commercial Plots
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              Invest in YEIDA’s premier high-street destination. Unmatched capital appreciation, direct connectivity to Jewar Airport, and immediate revenue potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Inquire Plot Rates
              </Link>
              <Link href="/projects/residential" className={btnSecondary}>
                Back to Residential Plots
              </Link>
            </div>
          </div>
        </section>

        {/* Overview & Key Highlights */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Sector-18.png"
                alt="YEIDA Sector 18 Location"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Sector 18 Location Advantages</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🚆 Metro &amp; Transit Hub</h3>
                  <p className="text-slate-300 text-sm">Direct Blue Line Metro station in the sector with seamless connectivity to Delhi CP and South Noida.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🛍️ High Street Shopping &amp; Malls</h3>
                  <p className="text-slate-300 text-sm">Adjacent to DLF Mall of India, Gardens Galleria, and Great India Place.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📈 Guaranteed Rental Returns</h3>
                  <p className="text-slate-300 text-sm">Highest rental yields in Noida driven by corporate offices and luxury retail space.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plot Options */}
        <section className="py-12 bg-slate-800/40 border-y border-white/5 px-4 md:px-8">
          <div className="mx-auto max-w-page">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Available Plot Configurations - Sector 18</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
