import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Alliance Estate',
  description: 'Privacy Policy and data protection terms of Alliance Estate.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Header Hero */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-20 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-page text-center relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Legal &amp; Compliance</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-5xl font-bold font-heading mb-4 text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base font-light">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-slate-950/70 border border-white/10 p-6 md:p-12 shadow-2xl backdrop-blur-md space-y-8 text-slate-300 text-[0.95rem] leading-relaxed">
            
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>Alliance Estate</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to safeguarding your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and secure your personal information when you visit our website, submit property inquiries, or engage in real estate transactions with us.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect personal information that you provide voluntarily, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                <li><strong>Contact Details:</strong> Full name, telephone number, mobile/WhatsApp number, and email address.</li>
                <li><strong>Property Preferences:</strong> Budget requirements, desired locations (e.g. YEIDA Sectors, Yamuna Expressway, RERA projects), land type interests (residential, commercial, abadi).</li>
                <li><strong>Career &amp; Partnership Information:</strong> Resumes, employment history, portfolio documents, partner credentials submitted via our careers and onboarding forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and pages visited to improve website performance and user experience.</li>
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                3. How We Use Your Information
              </h2>
              <p className="mb-3">The information collected is used for lawful business purposes including:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                <li>Responding to your inquiries and scheduling site visits.</li>
                <li>Providing customized property investment consultations, legal updates, and market intelligence.</li>
                <li>Processing applications for employment or channel partnership.</li>
                <li>Complying with statutory real estate laws, RERA guidelines, and tax regulations.</li>
                <li>Enhancing the security, layout, and functionality of our web services.</li>
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do <strong>not</strong> sell, trade, or rent your personal identification information to third parties. We may share information only with:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 mt-2 text-slate-300">
                <li>Authorized channel partners, legal verification teams, and trusted service contractors who assist us in operating our services under strict confidentiality agreements.</li>
                <li>Law enforcement or regulatory authorities when required by applicable laws or judicial directives.</li>
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                5. Data Security
              </h2>
              <p>
                We implement robust technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be advised that no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                6. Contact Information &amp; Grievance
              </h2>
              <p className="mb-4">
                If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact our administrative desk:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2 text-sm">
                <p><strong className="text-white">Alliance Estate</strong></p>
                <p>F-75, First Floor, Galleria Market, Gaur Yamuna City, Gautam Buddha Nagar, Uttar Pradesh, India</p>
                <p>Email: <a href="mailto:contact@allianceestateltd.com" className="text-gold hover:underline">contact@allianceestateltd.com</a></p>
                <p>Phone: <a href="https://wa.me/919990366338" className="text-gold hover:underline">+91 9990366338</a></p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link href="/" className="text-gold hover:underline text-sm font-semibold flex items-center gap-1.5">
                &larr; Back to Home
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                View Terms &amp; Conditions &rarr;
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
