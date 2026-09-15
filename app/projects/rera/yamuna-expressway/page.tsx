'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import ContactSection from '../../../../components/ContactSection';
import Footer from '../../../../components/Footer';
import { btnPrimary, btnSecondary } from '../../../../components/buttons';

export default function YamunaExpresswayPage() {
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
              <span>Yamuna Expressway</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
              Yamuna Expressway RERA Plots
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 font-light leading-relaxed mb-8">
              Invest directly in India’s fastest-growing infrastructure corridor surrounding Jewar Airport, International Film City, and Pod Taxi routes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className={btnPrimary}>
                Download Airport Corridor Brochure
              </Link>
              <Link href="/projects/rera" className={btnSecondary}>
                Back to RERA Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Growth Drivers */}
        <section className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/Rera-project.jpeg"
                alt="Yamuna Expressway Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Corridor Growth Drivers</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">✈️ Jewar Noida International Airport</h3>
                  <p className="text-slate-300 text-sm">Asia’s largest 6-runway airport creating massive commercial & residential demand.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🎬 International Film City &amp; Toy Park</h3>
                  <p className="text-slate-300 text-sm">1000-acre Film City development generating thousands of high-income employment opportunities.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-gold/20">
                  <h3 className="font-bold text-gold text-lg mb-1">🚝 Pod Taxi &amp; High-Speed Rail</h3>
                  <p className="text-slate-300 text-sm">India’s first personal rapid transit (PRT) pod taxi connecting Sector 21 Film City to Jewar Airport.</p>
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
