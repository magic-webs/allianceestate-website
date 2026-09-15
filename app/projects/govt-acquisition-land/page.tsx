'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../components/buttons';

export default function GovtAcquisitionLandPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Govt.-equisition.png"
              alt="Government Acquisition Land Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-page px-4 md:px-8 relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <span>Authority Allotment Advisory</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              Government Acquisition &amp; 6% / 7% Allotment Land
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              Expert legal &amp; transactional advisory for Authority Acquired Land, 6% &amp; 7% Abadi Compensation Residential Plots, and direct transfer opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Speak to Acquisition Lawyer
              </Link>
              <Link href="/" className={btnSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Breakdown */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Authority Allotment Highlights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏛️ Authority Allotted 6% / 7% Plots</h3>
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
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Govt.-equisition.png"
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
