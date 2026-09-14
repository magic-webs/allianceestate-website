'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

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

  const subMenuItems = [
    { label: 'Residential Plots', href: '#residential' },
    { label: 'Rera Approved',     href: '#rera' },
    { label: 'Abadi Land',        href: '#abadi' },
    { label: 'Government Acquisition Land', href: '#govt' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>

        {/* ── Logo ── */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo al.png"
              alt="Alliance Estate Logo"
              width={140}
              height={48}
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>

        {/* ── Nav Links ── */}
        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

          {/* Projects with dropdown */}
          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setProjectsOpen(!projectsOpen)}
              aria-expanded={projectsOpen}
            >
              Projects
              <svg
                className={`${styles.dropdownArrow} ${projectsOpen ? styles.arrowOpen : ''}`}
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {projectsOpen && (
              <div className={styles.dropdown}>
                {subMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={styles.dropdownItem}
                    onClick={() => { setProjectsOpen(false); setMobileMenuOpen(false); }}
                  >
                    <span className={styles.dropdownDot}></span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

          <div className={styles.mobileCta}>
            <Link href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Talk to an Advisor
            </Link>
          </div>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className={styles.cta}>
          <Link href="#contact" className={`btn btn-secondary ${styles.ctaBtn}`}>
            Talk to an Advisor
          </Link>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`${styles.line} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.line} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.line} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
