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
        <section className="relative px-4 pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Abadi-landd.png"
              alt="Abadi Land Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-page px-4 md:px-8 relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <span>Verified Title Land</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              Abadi &amp; Extended Abadi Land Parcels
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              Verified Abadi land plots with clean revenue records, hassle-free mutation (Khatauni), and high capital appreciation potential across expanding urban hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Consult Land Specialists
              </Link>
              <Link href="/" className={btnSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Abadi-land.png"
                alt="Abadi Land"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Invest in Abadi Land?</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">📜 Clean Revenue Records &amp; Mutation</h3>
                  <p className="text-slate-300 text-sm">Every parcel undergoes thorough legal scrutiny, Khatauni verification, and boundary demarcation.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">💰 Multi-Fold Capital Growth</h3>
                  <p className="text-slate-300 text-sm">Abadi land located along upcoming masterplan sectors enjoys explosive value appreciation when urban expansion arrives.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🏗️ Flexible Usage &amp; Immediate Possession</h3>
                  <p className="text-slate-300 text-sm">Suitable for residential construction, warehousing, farmhouses, or long-term land banking.</p>
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
