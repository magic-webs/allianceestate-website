'use client';
import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Image / Overlay */}
      <div className={styles.bgWrapper}>
        <img 
          src="/hero-section-bg.png" 
          alt="Premium Real Estate" 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <div className={`${styles.eyebrow} ${loaded ? styles.animateUp : ''} ${styles.delay1}`}>
            BUILDING TOMORROW <span className={styles.eyebrowLine}></span>
          </div>
          
          <h1 className={`${styles.headline} ${loaded ? styles.animateUp : ''} ${styles.delay2}`}>
            Invest in Places<br />
            That <span className={styles.italicGold}>Define the Future.</span>
          </h1>
          
          <p className={`${styles.paragraph} ${loaded ? styles.animateUp : ''} ${styles.delay3}`}>
            Discover thoughtfully planned destinations designed for long-term value, lifestyle and growth.
          </p>
          
          <div className={`${styles.ctaGroup} ${loaded ? styles.animateUp : ''} ${styles.delay4}`}>
            <Link href="#opportunities" className={`btn ${styles.btnPrimary}`}>
              EXPLORE PROJECTS &rarr;
            </Link>
            <Link href="#contact" className={`btn ${styles.btnSecondary}`}>
              LEARN MORE &rarr;
            </Link>
          </div>
        </div>

        <div className={`${styles.bottomStrip} ${loaded ? styles.animateUp : ''} ${styles.delay5}`}>
          <div className={styles.paginationNumbers}>
            <span className={styles.activeNum}>01</span> <span className={styles.slash}>/</span> 04
          </div>
          <div className={styles.paginationLines}>
            <div className={`${styles.line} ${styles.activeLine}`}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrowBtn}>&larr;</button>
            <button className={styles.arrowBtn}>&rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
