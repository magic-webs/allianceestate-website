'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './WhyMarketSection.module.css';

const WhyMarketSection = () => {
  const headerRef = useScrollReveal();
  const blocksRef = useScrollReveal();

  return (
    <section className="section bg-light" id="markets">
      <div className="container">
        <div className={styles.header} ref={headerRef as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">The smartest investments follow infrastructure.</h2>
          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            Long-term real-estate value is often shaped by what is being built around it.
          </p>
        </div>

        <div className={styles.blocksContainer} ref={blocksRef as React.RefObject<HTMLDivElement>}>
          <div className={`fade-up ${styles.block}`}>
            <div className={styles.blockNumber}>01</div>
            <h3 className={styles.blockTitle}>Infrastructure</h3>
            <p className={styles.blockText}>
              Expressways, airports, industrial corridors and major connectivity projects.
            </p>
            <div className={styles.arrow}>&rarr;</div>
          </div>

          <div className={`fade-up ${styles.block}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.blockNumber}>02</div>
            <h3 className={styles.blockTitle}>Economic Growth</h3>
            <p className={styles.blockText}>
              Industrial, commercial and business expansion.
            </p>
            <div className={styles.arrow}>&rarr;</div>
          </div>

          <div className={`fade-up ${styles.block}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.blockNumber}>03</div>
            <h3 className={styles.blockTitle}>Future Demand</h3>
            <p className={styles.blockText}>
              Residential, hospitality and institutional development.
            </p>
            <div className={styles.arrow}>&rarr;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMarketSection;
