'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { btnSecondary } from '../../../components/buttons';

export default function GovtAcquisitionLandPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/land-equisiton-03.png"
              alt="Government Acquisition Land Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto max-w-page px-0 md:px-4 relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Authority Allotment Advisory</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Government Acquisition &amp; Land
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Expert legal &amp; transactional advisory for Authority Acquired Land, Abadi Compensation Residential Plots, and direct transfer opportunities.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/" className={btnSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Breakdown */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl md:mb-6">Authority Allotment Highlights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏛️ Authority Allotted Plots</h3>
                  <p className="text-slate-300 text-sm">Residential plots allotted by Noida &amp; YEIDA authorities to land owners, offering 100% legal security and planned sector infrastructure.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📋 Complete Lease Deed &amp; Transfer Support</h3>
                  <p className="text-slate-300 text-sm">Full assistance in authority transfer permissions, registry, and TM (Transfer Memorandum) execution.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📈 High Security &amp; Prime Sector Layout</h3>
                  <p className="text-slate-300 text-sm">Situated within developed masterplan sectors with wide sector roads, electricity, and water connections.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/land-equisiton-03.png"
                alt="Government Acquisition Land Advisory"
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
