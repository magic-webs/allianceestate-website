'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { btnPrimary } from './buttons';

const subMenuItems = [
  { label: 'Residential Plots', href: '#residential' },
  { label: 'Rera Approved', href: '#rera' },
  { label: 'Abadi Land', href: '#abadi' },
  { label: 'Government Acquisition Land', href: '#govt' },
];

/* Underline-on-hover treatment shared by the links and the dropdown trigger. */
const navItemBase =
  "relative text-xl font-medium whitespace-nowrap transition-all duration-400 ease-smooth after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-400 after:ease-smooth after:content-[''] hover:text-gold hover:after:w-full lg:text-[1.05rem]";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // In the mobile drawer every item is navy; on desktop it tracks the header.
  const navItem = `${navItemBase} text-primary ${scrolled ? 'lg:text-ink' : 'lg:text-white'}`;

  const hamburgerLine = `h-0.5 w-[25px] transition-all duration-400 ease-smooth ${
    scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 z-1000 w-full transition-all duration-400 ease-smooth ${
        scrolled
          ? 'bg-white/97 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-[12px]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-page items-center justify-between px-4 md:px-8">
        {/* ── Logo ── */}
        <div>
          <Link href="/">
            <Image
              src="/logo al.png"
              alt="Alliance Estate Logo"
              width={140}
              height={48}
              className={`h-12 w-auto object-contain transition-all duration-400 ease-smooth lg:h-[60px] ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>
        </div>

        {/* ── Nav Links ── */}
        <nav
          className={`fixed top-0 z-1000 flex h-screen w-4/5 max-w-[360px] flex-col items-start justify-center gap-7 bg-white px-10 py-12 shadow-[-4px_0_30px_rgba(0,0,0,0.1)] transition-all duration-400 ease-smooth lg:static lg:h-auto lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-9 lg:bg-transparent lg:p-0 lg:shadow-none ${
            mobileMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <Link href="/" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>

          {/* Projects with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`${navItem} flex items-center gap-1.5 bg-transparent p-0 font-body`}
              onClick={() => setProjectsOpen(!projectsOpen)}
              aria-expanded={projectsOpen}
            >
              Projects
              <svg
                className={`text-current transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {projectsOpen && (
              <div className="z-100 mt-2 w-full border-l-2 border-gold/30 py-2 pl-4 lg:absolute lg:top-[calc(100%+14px)] lg:left-1/2 lg:mt-0 lg:w-auto lg:min-w-[230px] lg:-translate-x-1/2 lg:animate-dropdown-in lg:rounded-[14px] lg:border lg:border-gold/20 lg:bg-white/98 lg:py-2.5 lg:pl-0 lg:shadow-[0_12px_40px_rgba(0,0,0,0.12)] lg:before:absolute lg:before:-top-[6px] lg:before:left-1/2 lg:before:h-3 lg:before:w-3 lg:before:-translate-x-1/2 lg:before:rotate-45 lg:before:border-t lg:before:border-l lg:before:border-gold/20 lg:before:bg-white lg:before:content-['']">
                {subMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-2 py-2 text-[0.95rem] font-medium text-ink transition-all duration-200 hover:text-gold lg:px-5 lg:py-[0.7rem] lg:text-[0.88rem] lg:hover:bg-gold/6"
                    onClick={() => {
                      setProjectsOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#contact" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>

          <div className="mt-4 block lg:hidden">
            <Link href="#contact" className={btnPrimary} onClick={() => setMobileMenuOpen(false)}>
              Talk to an Advisor
            </Link>
          </div>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className={`inline-flex items-center justify-center rounded border bg-transparent px-[1.4rem] py-[0.7rem] text-[0.88rem] font-semibold whitespace-nowrap transition-all duration-400 ease-smooth ${
              scrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-primary'
            }`}
          >
            Talk to an Advisor
          </Link>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="z-1001 flex flex-col gap-[5px] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`${hamburgerLine} ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`${hamburgerLine} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`${hamburgerLine} ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
