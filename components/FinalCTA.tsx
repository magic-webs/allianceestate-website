'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgWrapper}>
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Real Estate"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`} ref={ref as React.RefObject<HTMLDivElement>}>
        <h2 className={`fade-up ${styles.headline}`}>
          Your Next Investment<br />Starts With the Right Location.
        </h2>
        <p className={`fade-up ${styles.subtext}`} style={{ animationDelay: '0.2s' }}>
          Let&apos;s identify the opportunity that fits your investment goals.
        </p>
        <div className={`fade-up ${styles.ctaGroup}`} style={{ animationDelay: '0.4s' }}>
          <Link href="#contact" className="btn btn-primary">
            Talk to an Advisor
          </Link>
          <Link href="#opportunities" className="btn btn-white">
            Explore Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
