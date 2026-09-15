'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function GaurYamunaCityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen pt-28">
        {/* Banner */}
        <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page relative z-10 px-4 md:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <Link href="/projects/rera" className="hover:underline">RERA Projects</Link>
              <span>/</span>
              <span>Gaur Yamuna City</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
              Gaur Yamuna City Mega Township
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              A 250-acre master-planned mega township featuring lakefront plots, international schools, sports complexes, and commercial arcades.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Explore Available Plots
              </Link>
              <Link href="/projects/rera" className={btnSecondary}>
                Back to RERA Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Township Infrastructure</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🌊 9-Acre Yamuna Lakefront</h3>
                  <p className="text-slate-300 text-sm">Picturesque lake promenade, boating deck, and waterfront restaurants.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">⛳ 9-Hole Golf Course &amp; Sports Complex</h3>
                  <p className="text-slate-300 text-sm">Professional golf greens, tennis courts, skating rink, and swimming pools.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🕉️ 108 Ft. Lord Krishna Statue &amp; Cultural Park</h3>
                  <p className="text-slate-300 text-sm">Iconic landmark attraction bringing thousands of visitors and high township footfall.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Hero section banner.jpg"
                alt="Gaur Yamuna City Masterplan"
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
