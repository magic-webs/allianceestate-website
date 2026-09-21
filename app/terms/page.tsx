import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Alliance Estate',
  description: 'Terms and Conditions governing the use of Alliance Estate website and real estate consulting services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Header Hero */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-20 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-page text-center relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Legal Agreements</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-5xl font-bold font-heading mb-4 text-white leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base font-light">
              Please read these terms carefully before accessing or using Alliance Estate services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 md:py-16 md:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-slate-950/70 border border-white/10 p-6 md:p-12 shadow-2xl backdrop-blur-md space-y-8 text-slate-300 text-[0.95rem] leading-relaxed">
            
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website (<span className="text-gold">allianceestateltd.com</span>), you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue using our services immediately.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                2. Real Estate Advisory &amp; Listings Disclaimer
              </h2>
              <p className="mb-3">
                Alliance Estate provides marketing, facilitation, and advisory services for residential plots, commercial developments, YEIDA acquisition land, and RERA-approved properties.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                <li>All property details, unit measurements, master plans, pricing, and availability shown on this website are indicative and subject to change without prior notice.</li>
                <li>Project information is compiled from respective developers, authority masterplans, and public records. While we strive for absolute accuracy, buyers and investors are strongly advised to independently inspect documentation, authority allotments, and RERA certificates before making financial commitments.</li>
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on this website, including text, logos, photographs, graphics, layout designs, and branding assets, is the proprietary intellectual property of Alliance Estate or its respective licensors. Unauthorized copying, reproduction, re-engineering, or commercial exploitation is strictly prohibited under Indian copyright and trademark laws.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                4. User Conduct &amp; Submissions
              </h2>
              <p className="mb-2">When submitting inquiries or career/channel partner applications via our platform, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                <li>Provide accurate, genuine, and updated personal and professional credentials.</li>
                <li>Not upload harmful files, malware, fraudulent certificates, or unauthorized promotional material.</li>
                <li>Authorize our advisors to contact you via telephone, WhatsApp, or email for transaction updates and consultation.</li>
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                5. Limitation of Liability
              </h2>
              <p>
                Alliance Estate shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use this site, fluctuation in market land rates, governmental regulatory modifications, or delays caused by third-party statutory bodies.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold inline-block" />
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Gautam Buddha Nagar (Noida / Greater Noida), Uttar Pradesh</strong>.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link href="/" className="text-gold hover:underline text-sm font-semibold flex items-center gap-1.5">
                &larr; Back to Home
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                View Privacy Policy &rarr;
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
