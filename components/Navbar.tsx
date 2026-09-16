'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { btnPrimary } from './buttons';

interface ChildMenuItem {
  label: string;
  href: string;
}

interface SubMenuItem {
  label: string;
  href: string;
  children?: ChildMenuItem[];
}

const subMenuItems: SubMenuItem[] = [
  {
    label: 'Residential Plots',
    href: '/projects/residential',
    children: [
      { label: 'YEIDA Sector 18', href: '/projects/residential/yeida-sector-18' },
      { label: 'YEIDA Sector 20', href: '/projects/residential/yeida-sector-20' },
      { label: 'YEIDA Sector 21', href: '/projects/residential/yeida-sector-21' },
    ],
  },
  {
    label: 'RERA Projects',
    href: '/projects/rera',
    children: [
      { label: 'Yamuna Expressway', href: '/projects/rera/yamuna-expressway' },
      { label: 'Gaur Yamuna City', href: '/projects/rera/gaur-yamuna-city' },
      { label: 'ACE', href: '/projects/rera/ace' },
      { label: 'ATS', href: '/projects/rera/ats' },
    ],
  },
  { label: 'Abadi Land', href: '/projects/abadi-land' },
  { label: 'Government Acquisition Land', href: '/projects/govt-acquisition-land' },
];

/* Underline-on-hover treatment shared by the links and the dropdown trigger. */
const navItemBase =
  "relative text-xl font-medium whitespace-nowrap transition-all duration-400 ease-smooth after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-400 after:ease-smooth after:content-[''] hover:text-gold hover:after:w-full lg:text-[1.05rem]";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // In the mobile drawer every item is navy; on desktop it tracks the header.
  const navItem = `${navItemBase} text-primary ${scrolled ? 'lg:text-ink' : 'lg:text-white'}`;

  const hamburgerLine = `h-0.5 w-[25px] transition-all duration-400 ease-smooth ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'
    }`;

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(prev => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 z-1000 w-full transition-all duration-400 ease-smooth ${scrolled
          ? 'bg-white/97 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-[12px]'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-8">
        {/* ── Logo ── */}
        <div>
          <Link href="/">
            <Image
              src="/logo al.png"
              alt="Alliance Estate Logo"
              width={140}
              height={48}
              className={`h-12 w-auto object-contain transition-all duration-400 ease-smooth lg:h-[60px] ${scrolled ? '' : 'brightness-0 invert'
                }`}
              priority
            />
          </Link>
        </div>

        {/* ── Mobile Menu Backdrop Overlay ── */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-999 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ── Nav Links ── */}
        <nav
          className={`fixed top-0 z-1000 flex h-screen w-4/5 max-w-[360px] flex-col items-start justify-start overflow-y-auto gap-7 bg-white px-8 py-12 shadow-[-4px_0_30px_rgba(0,0,0,0.1)] transition-all duration-400 ease-smooth lg:static lg:h-auto lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-9 lg:bg-transparent lg:p-0 lg:shadow-none lg:overflow-visible ${mobileMenuOpen ? 'right-0' : '-right-full'
            }`}
        >
          <Link href="/" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>

          {/* Projects with dropdown */}
          <div
            className="relative w-full lg:w-auto"
            ref={dropdownRef}
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => {
              setProjectsOpen(false);
              setActiveSubmenu(null);
            }}
          >
            <button
              className={`${navItem} flex items-center gap-1.5 bg-transparent p-0 font-body w-full justify-between lg:justify-start`}
              onClick={() => {
                setProjectsOpen(!projectsOpen);
                if (projectsOpen) setActiveSubmenu(null);
              }}
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
              <div className="z-50 mt-2 w-full border-l-2 border-gold/30 py-2 pl-3 lg:absolute lg:top-full lg:left-0 lg:mt-0 lg:w-auto lg:min-w-[250px] lg:pt-2 lg:pl-0">
                <div className="lg:rounded-[14px] lg:border lg:border-gold/20 lg:bg-white lg:py-2.5 lg:shadow-[0_12px_40px_rgba(0,0,0,0.12)] lg:before:absolute lg:before:top-1 lg:before:left-6 lg:before:h-3 lg:before:w-3 lg:before:-translate-x-1/2 lg:before:rotate-45 lg:before:border-t lg:before:border-l lg:before:border-gold/20 lg:before:bg-white lg:before:content-['']">
                  {subMenuItems.map((item) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const isSubOpen = activeSubmenu === item.label;

                    return (
                      <div
                        key={item.label}
                        className="relative group/sub"
                        onMouseEnter={() => hasChildren && setActiveSubmenu(item.label)}
                        onMouseLeave={() => hasChildren && setActiveSubmenu(null)}
                      >
                        <div className="flex items-center justify-between px-2 py-2 text-[0.95rem] font-medium text-ink transition-all duration-200 hover:text-gold lg:px-5 lg:py-[0.7rem] lg:text-[0.88rem] lg:hover:bg-gold/10 rounded-md lg:rounded-none">
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 flex-1"
                            onClick={() => {
                              setProjectsOpen(false);
                              setMobileMenuOpen(false);
                              setActiveSubmenu(null);
                            }}
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold opacity-60 transition-opacity duration-200 group-hover/sub:opacity-100" />
                            {item.label}
                          </Link>
                          {hasChildren && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubmenu(item.label);
                              }}
                              className="p-1 text-ink/70 hover:text-gold transition-colors focus:outline-none"
                              aria-label={`Toggle ${item.label} submenu`}
                            >
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 lg:-rotate-90 ${isSubOpen ? 'rotate-180 lg:-rotate-90' : ''
                                  }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {hasChildren && (
                          <div
                            className={`mt-1 space-y-1 pl-6 border-l border-gold/20 lg:mt-0 lg:space-y-0 lg:pl-0 lg:border-l-0 ${isSubOpen ? 'block' : 'hidden lg:hidden'
                              } lg:absolute lg:top-0 lg:left-full lg:w-auto lg:min-w-[220px] lg:pl-1`}
                          >
                            <div className="lg:rounded-[12px] lg:border lg:border-gold/20 lg:bg-white lg:py-2 lg:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-2.5 px-3 py-1.5 text-[0.88rem] font-normal text-ink/90 transition-all duration-200 hover:text-gold lg:px-4 lg:py-[0.6rem] lg:text-[0.84rem] lg:hover:bg-gold/10"
                                  onClick={() => {
                                    setProjectsOpen(false);
                                    setMobileMenuOpen(false);
                                    setActiveSubmenu(null);
                                  }}
                                >
                                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className={navItem} onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>

          <div className="mt-4 block lg:hidden">
            <a
              href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20talk%20to%20an%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
              onClick={() => setMobileMenuOpen(false)}
            >
              Talk to an Advisor
            </a>
          </div>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919990366338?text=Hello%20Alliance%20Estate%2C%20I%20would%20like%20to%20talk%20to%20an%20advisor."
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded border bg-transparent px-[1.4rem] py-[0.7rem] text-[0.88rem] font-semibold whitespace-nowrap transition-all duration-400 ease-smooth ${scrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-primary'
              }`}
          >
            Talk to an Advisor
          </a>
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
