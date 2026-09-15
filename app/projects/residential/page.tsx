'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { btnPrimary } from '../../../components/buttons';

const residentialSectors = [
  {
    name: 'YEIDA Sector 18',
    slug: '/projects/residential/yeida-sector-18',
    image: '/Sector-18.png',
    badge: 'Commercial & High Demand',
    desc: 'Prime commercial hub along Yamuna Expressway with world-class retail infrastructure, metro connectivity, and rapid land value appreciation.',
    plotSizes: '100 - 500 Sq. Yds.',
    highlights: ['Near Jewar Airport Corridor', 'High Footfall Hub', 'Immediate Possession'],
  },
  {
    name: 'YEIDA Sector 20',
    slug: '/projects/residential/yeida-sector-20',
    image: '/yeida-sector-20.png',
    badge: 'Established Residential',
    desc: 'Ultra-luxurious residential sector with wide green belts, top-tier schools, and excellent proximity to Yamuna Expressway.',
    plotSizes: '150 - 1000 Sq. Yds.',
    highlights: ['Lush Green Parks', '24/7 Security Enclosure', 'Ready Construction'],
  },
  {
    name: 'YEIDA Sector 21',
    slug: '/projects/residential/yeida-sector-21',
    image: '/yeida-sector-21.png',
    badge: 'Premium Sector',
    desc: 'Exclusive residential pocket featuring wide roads, Film City proximity, and high end-user demand.',
    plotSizes: '200 - 800 Sq. Yds.',
    highlights: ['Wide 24m Avenues', 'Gated Community', 'High Capital Yield'],
  },
];

export default function ResidentialPlotsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Residential-plot.jpeg"
              alt="Residential Plots Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-page px-0 md:px-4 relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Projects Portfolio</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Prime Residential Plots in Noida
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Explore freehold residential land in Noida's most sought-after sectors. Fully authority-approved plots with immediate registry and high ROI potential.
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gold/20 pb-4 md:text-3xl md:mb-8">
              Featured Residential Sectors
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {residentialSectors.map((sector) => (
                <div
                  key={sector.name}
                  className="rounded-2xl bg-slate-800/80 border border-gold/20 overflow-hidden hover:border-gold/60 transition-all flex flex-col"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-gold text-slate-950 font-bold text-xs px-3 py-1 rounded-full uppercase">
                      {sector.badge}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{sector.name}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{sector.desc}</p>
                      <div className="text-xs text-gold font-semibold mb-4">
                        Plot Sizes: <span className="text-white">{sector.plotSizes}</span>
                      </div>
                      <div className="space-y-1.5 mb-6">
                        {sector.highlights.map((h) => (
                          <div key={h} className="text-xs text-slate-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={sector.slug} className={`${btnPrimary} w-full text-center text-sm py-2.5`}>
                      View Sector Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
