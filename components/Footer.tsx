import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLink =
  'text-[0.95rem] text-slate-600 transition-all duration-400 ease-smooth hover:text-gold';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-800 md:pt-24">
      <div className="mx-auto mb-16 grid w-full max-w-[1200px] grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-8 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div className="md:col-span-3 lg:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo al.png"
              alt="Alliance Estate Logo"
              width={220}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-[0.95rem] leading-[1.6] text-slate-600 mb-4">
            Connecting people with thoughtfully selected land and real estate opportunities across emerging growth corridors.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] font-bold text-primary after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Company
          </h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className={footerLink}>About Us</Link></li>
            <li><Link href="/contact" className={footerLink}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] font-bold text-primary after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Opportunities
          </h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/projects/residential" className={footerLink}>Residential Plots</Link></li>
            <li><Link href="/projects/rera" className={footerLink}>RERA Projects</Link></li>
            <li><Link href="/projects/abadi-land" className={footerLink}>Abadi Land</Link></li>
            <li><Link href="/projects/yeida-acquisition-land" className={footerLink}>YEIDA Acquisition Land</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-[1.1rem] font-bold text-primary after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-5 after:bg-gold after:content-['']">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-[0.95rem] text-slate-600">
            <li>
              <a href="https://wa.me/919990366338" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                +91 9990366338 (WhatsApp)
              </a>
            </li>
            <li>
              <a href="mailto:contact@allianceestateltd.com" className="hover:text-gold transition-colors">
                contact@allianceestateltd.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/gi2qrnJVssnxg5nA7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                F-75, First Floor, Galleria Market,
                <br />
                Gaur Yamuna City, Gautam Buddha Nagar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px w-full bg-slate-200" />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col flex-wrap items-center justify-between gap-4 px-4 pt-8 text-center md:flex-row md:px-8 md:text-left">
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="text-[0.85rem] text-slate-500 transition-all duration-400 ease-smooth hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[0.85rem] text-slate-500 transition-all duration-400 ease-smooth hover:text-primary"
          >
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="text-[0.85rem] text-slate-500">
          &copy; {new Date().getFullYear()} Alliance Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
