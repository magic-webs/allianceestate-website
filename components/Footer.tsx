import React from 'react';
import Link from 'next/link';

const footerLink =
  'text-[0.95rem] text-slate-400 transition-all duration-400 ease-smooth hover:text-gold';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white md:pt-24">
      <div className="mx-auto mb-16 grid w-full max-w-page grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr]">
        <div className="md:col-span-3 lg:col-span-1">
          <h3 className="mb-4 text-2xl tracking-[2px] text-white">ALLIANCE ESTATE</h3>
          <p className="text-[1.1rem] leading-[1.6] text-muted">
            Strategic real estate.
            <br />
            Smarter investments.
          </p>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] text-white after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Company
          </h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="#about" className={footerLink}>About</Link></li>
            <li><Link href="#approach" className={footerLink}>Our Approach</Link></li>
            <li><Link href="#contact" className={footerLink}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] text-white after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Opportunities
          </h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="#residential" className={footerLink}>Residential</Link></li>
            <li><Link href="#commercial" className={footerLink}>Commercial</Link></li>
            <li><Link href="#industrial" className={footerLink}>Industrial</Link></li>
            <li><Link href="#hospitality" className={footerLink}>Hospitality</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] text-white after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Insights
          </h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="#updates" className={footerLink}>Market Updates</Link></li>
            <li><Link href="#insights" className={footerLink}>Investment Insights</Link></li>
            <li><Link href="#infrastructure" className={footerLink}>Infrastructure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] text-white after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-[0.95rem] text-slate-400">
            <li>+91 98765 43210</li>
            <li>contact@allianceestate.com</li>
            <li>
              Level 12, Infinity Tower,
              <br />
              Cyber City, Gurugram
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px w-full bg-gold opacity-30" />

      <div className="mx-auto flex w-full max-w-page flex-col flex-wrap items-center justify-between gap-4 px-4 pt-8 text-center md:flex-row md:px-8 md:text-left">
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="text-[0.85rem] text-slate-400 transition-all duration-400 ease-smooth hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[0.85rem] text-slate-400 transition-all duration-400 ease-smooth hover:text-white"
          >
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="text-[0.85rem] text-slate-400">
          &copy; {new Date().getFullYear()} Alliance Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
