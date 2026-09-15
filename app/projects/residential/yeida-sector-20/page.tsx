'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function Sector20Page() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 py-12 md:py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase">
              <Link href="/projects/residential" className="hover:underline">Residential Plots</Link>
              <span>/</span>
              <span>YEIDA Sector 20</span>
            </div>
            <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-3 text-white leading-tight md:mb-4">
              YEIDA Sector 20 Residential Plots
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Experience serene luxury living with wide tree-lined avenues, established residential community, and immediate construction readiness.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="#contact" className={btnPrimary}>
                Request Price List
              </Link>
              <Link href="/projects/residential" className={btnSecondary}>
                Back to Residential Plots
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl md:mb-6">Why Choose Sector 20?</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🌳 Established Green Cover</h3>
                  <p className="text-slate-300 text-sm">Landscaped sector parks, clean air index, and peaceful residential environment.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏫 Educational &amp; Healthcare Hub</h3>
                  <p className="text-slate-300 text-sm">Close proximity to top schools, multi-specialty hospitals, and community centers.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🚗 Seamless Connectivity</h3>
                  <p className="text-slate-300 text-sm">5-minute drive to DND Flyway, Expressways, and Sector 18 commercial market.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/yeida-sector-20.png"
                alt="YEIDA Sector 20 Plots"
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
