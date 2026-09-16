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
          <p className="text-[0.95rem] leading-[1.6] text-slate-600">
            Connecting people with thoughtfully selected land and real estate opportunities across emerging growth corridors.
          </p>
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
            <li><Link href="/projects/govt-acquisition-land" className={footerLink}>Government Acquisition Land</Link></li>
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
            <li>contact@allianceestate.com</li>
            <li>
              F-75, First Floor, Galleria Market,
              <br />
              Gaur Yamuna City, Gautam Buddha Nagar
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
