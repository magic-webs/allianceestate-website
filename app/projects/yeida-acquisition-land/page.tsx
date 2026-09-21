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
              YEIDA Acquisition Land
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
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl md:mb-6">YEIDA Masterplan 2041 Highlights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🌾 Agriculture Land Masterplan 2041</h3>
                  <p className="text-slate-300 text-sm">Strategically located agricultural land parcels aligned with the Masterplan 2041, offering exceptional appreciation potential, planned connectivity, and clear titles.</p>
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
            <div className="flex flex-col">
              <div className="relative h-[380px] sm:h-[440px] md:h-[490px] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-white p-3 flex flex-col justify-between group transition-all duration-300 hover:border-gold hover:shadow-gold/20">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/yeida-masterplan-2041.png"
                    alt="YEIDA Masterplan 2041 Blueprint Map"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 text-gold text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <span>🗺️</span> YEIDA Masterplan 2041
                </div>
                <a
                  href="/yeida-masterplan-2041.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-gold hover:text-slate-900 text-gold backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  View Full Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2031 Masterplan Breakdown (Image on Left, Text on Right) */}
        <section className="py-12 px-4 md:py-16 md:px-8 bg-slate-950/40 border-t border-white/5">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Map on Left */}
            <div className="flex flex-col order-2 md:order-1">
              <div className="relative h-[380px] sm:h-[440px] md:h-[490px] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-white p-3 flex flex-col justify-between group transition-all duration-300 hover:border-gold hover:shadow-gold/20">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/YEIDA-Masterplan-2031.png"
                    alt="YEIDA Masterplan 2031 Blueprint Map"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 text-gold text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <span>🗺️</span> YEIDA Masterplan 2031
                </div>
                <a
                  href="/YEIDA-Masterplan-2031.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-gold hover:text-slate-900 text-gold backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  View Full Map
                </a>
              </div>
            </div>

            {/* Text on Right */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl md:mb-6">YEIDA Masterplan 2031 Rural Urban Center Highlights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏡 Rural-Urban Center (RUC) Strategic Hub</h3>
                  <p className="text-slate-300 text-sm">Designated rural-urban transition clusters planned to bridge key rural pockets with high-growth commercial, institutional, and industrial development corridors.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🛣️ Masterplan Road &amp; Connectivity Network</h3>
                  <p className="text-slate-300 text-sm">Direct accessibility through 45m to 100m wide arterial roads, multi-modal logistics links, and upcoming express transit alignments.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📜 Verified Registry &amp; Title Advisory</h3>
                  <p className="text-slate-300 text-sm">End-to-end assistance on land acquisition feasibility, non-encumbrance verification, boundary demarcation, and statutory permissions.</p>
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
