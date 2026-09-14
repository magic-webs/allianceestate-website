'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './SiteVisit.module.css';

const SiteVisit = () => {
  const ref = useScrollReveal();

  return (
    <section className="section bg-white">
      <div className={`container ${styles.splitLayout}`} ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={styles.imageCol}>
          <img
            src="https://images.unsplash.com/photo-1582407947092-50a0e786dfc1?q=80&w=1200&auto=format&fit=crop"
            alt="Site Visit"
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <span className={`fade-up ${styles.eyebrow}`}>BEYOND THE BROCHURE</span>
          <h2 className={`fade-up ${styles.heading}`}>
            See the Opportunity.<br />On the Ground.
          </h2>
          <p className={`fade-up ${styles.paragraph}`} style={{ animationDelay: '0.2s' }}>
            We believe informed investments start with real-world evaluation. Our guided site visits help investors 
            see the location, understand the surroundings, and assess the opportunity beyond photographs and brochures.
          </p>
          <Link href="#contact" className={`fade-up ${styles.link}`} style={{ animationDelay: '0.4s' }}>
            Schedule a Site Visit <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SiteVisit;
