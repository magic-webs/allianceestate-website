'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../components/buttons';

export default function AbadiLandPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Abadi land.png"
              alt="Abadi Land Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto max-w-page px-0 md:px-4 relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Verified Title Land</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Abadi Land
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Verified Abadi land plots with clean revenue records, hassle-free mutation (Khatauni), and high capital appreciation potential across expanding urban hubs.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20consult%20your%20land%20specialists%20about%20Abadi%20Land."
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Consult Land Specialists
              </a>
              <Link href="/" className={btnSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Abadi land.png"
                alt="Abadi Land"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-5 sm:text-3xl sm:mb-6">Why Invest in Abadi Land?</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">📜 Clean Revenue Records &amp; Mutation</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Every parcel undergoes thorough legal scrutiny, Khatauni verification, and boundary demarcation.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">💰 Multi-Fold Capital Growth</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Abadi land located along upcoming masterplan sectors enjoys explosive value appreciation when urban expansion arrives.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-base sm:text-lg mb-1">🏗️ Flexible Usage &amp; Immediate Possession</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Suitable for residential construction, warehousing, farmhouses, or long-term land banking.</p>
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
