'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Header */}
        <section className="relative px-4 pt-28 pb-16 md:pt-36 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
          <div className="mx-auto max-w-page text-center relative z-10 px-4 md:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs tracking-wider text-gold uppercase">
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              Contact Our Estate Advisors
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg font-light">
              Have questions about plots, RERA projects, or land acquisitions? Speak directly with our dedicated real estate experts today.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-4 md:px-8">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-800/60 border border-white/20 flex flex-col items-start hover:border-gold/50 transition-all shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-rose-500/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Corporate Office</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                F-75, First Floor, Galleria Market,<br />
                Gaur Yamuna City, Gautam Buddha Nagar
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 border border-white/20 flex flex-col items-start hover:border-gold/50 transition-all shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-emerald-500/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Phone & WhatsApp</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                Mon - Sun: 9:00 AM - 8:00 PM
              </p>
              <a href="tel:+919990366338" className="text-gold font-semibold hover:underline">
                +91 9990366338
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 border border-white/20 flex flex-col items-start hover:border-gold/50 transition-all shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-amber-500/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Email Inquiries</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                For sales, title checks & partnerships
              </p>
              <a href="mailto:contact@allianceestate.com" className="text-gold font-semibold hover:underline">
                contact@allianceestate.com
              </a>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
