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
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/yamuna-exp-02.png"
              alt="Yamuna Expressway Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto max-w-page relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <Link href="/projects/rera" className="hover:underline">RERA Projects</Link>
              <span>/</span>
              <span>Yamuna Expressway</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Yamuna Expressway RERA Plots
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Invest directly in India's fastest-growing infrastructure corridor surrounding Jewar Airport, International Film City, and Pod Taxi routes.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20download%20the%20Yamuna%20Expressway%20Airport%20Corridor%20Brochure%20and%20plot%20details."
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Download Airport Corridor Brochure
              </a>
              <Link href="/projects/rera" className={btnSecondary}>
                Back to RERA Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Growth Drivers */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/yamuna-exp-02.png"
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
