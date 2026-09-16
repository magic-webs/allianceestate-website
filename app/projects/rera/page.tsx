'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { btnPrimary } from '../../../components/buttons';

const reraProjects = [
  {
    name: 'Yamuna Expressway',
    slug: '/projects/rera/yamuna-expressway',
    image: '/yamuna-exp-02.png',
    badge: 'Jewar Airport Zone',
    desc: 'High-yield RERA registered plots & townships along the upcoming Noida International Airport corridor.',
    reraId: 'UPRERAPRJ15482',
    highlights: ['Near Jewar Airport', 'Film City Proximity', 'Olympic Park Precinct'],
  },
  {
    name: 'Gaur Yamuna City',
    slug: '/projects/rera/gaur-yamuna-city',
    image: '/Gaur-yamuna-city.png',
    badge: '250+ Acre Integrated Township',
    desc: 'Integrated smart township featuring lakefront villas, commercial plazas, and luxury residential plots.',
    reraId: 'UPRERAPRJ94123',
    highlights: ['9-Hole Golf Course', 'Lakefront Promenade', 'International School'],
  },
  {
    name: 'ACE Projects',
    slug: '/projects/rera/ace',
    image: '/Ace-location.png',
    badge: 'Ultra Luxury Township',
    desc: 'Award-winning developer projects offering high-end residential land and architectural elegance.',
    reraId: 'UPRERAPRJ88210',
    highlights: ['Clubhouse & Sports Complex', 'Pre-certified Green Building', 'High Return'],
  },
  {
    name: 'ATS Projects',
    slug: '/projects/rera/ats',
    image: '/ATS-location.png',
    badge: 'Signature Living',
    desc: 'Premium green living spaces with Spanish-inspired architecture and world-class sports facilities.',
    reraId: 'UPRERAPRJ77190',
    highlights: ['Low Density Layout', 'Grand Entry Plaza', 'Olympic Swimming Pool'],
  },
];

export default function ReraProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Banner */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Rera-project.jpeg"
              alt="RERA Projects Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-page px-0 md:px-4 relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>100% Legally Verified</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              RERA Approved Mega Projects
            </h1>
            <p className="max-w-3xl text-base text-slate-300 font-light leading-relaxed mb-6 md:text-lg md:mb-8">
              Explore government-sanctioned, RERA-approved residential &amp; township projects across Yamuna Expressway, Gaur Yamuna City, ACE, and ATS. Guaranteed timeline compliance and transparent legal paperwork.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-page">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gold/20 pb-4 md:text-3xl md:mb-8">
              Featured RERA Developments
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {reraProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl bg-slate-800/80 border border-gold/20 overflow-hidden hover:border-gold/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-gold text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                        {project.badge}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] text-gold font-mono mb-1">RERA: {project.reraId}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-slate-300 text-xs mb-4 leading-relaxed">{project.desc}</p>
                      <div className="space-y-1 mb-4">
                        {project.highlights.map((h) => (
                          <div key={h} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-gold" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link href={project.slug} className={`${btnPrimary} w-full text-center text-xs py-2 block`}>
                      Explore Project &rarr;
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
