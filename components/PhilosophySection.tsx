'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './PhilosophySection.module.css';

const stats = [
  { target: 15, suffix: '+', label: 'Years of Experience' },
  { target: 50, suffix: '+', label: 'Projects / Opportunities' },
  { target: 500, suffix: '+', label: 'Investors Served' },
  { target: 12, suffix: '+', label: 'Growth Markets' },
];

const CountUpNumber = ({ target, suffix, started }: { target: number; suffix: string; started: boolean }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [started, target]);

  return (
    <>
      {count}<span className="text-gold">{suffix}</span>
    </>
  );
};

const PhilosophySection = () => {
  const [countStarted, setCountStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section bg-white" id="about">
      <div className="container">
        <div className={styles.splitLayout}>
          <div className={styles.leftCol}>
            <h2 className={`fade-up ${styles.statement}`}>
              Property is physical.<br />
              Opportunity is strategic.
            </h2>
          </div>
          <div className={styles.rightCol}>
            <p className={`fade-up ${styles.description}`} style={{ animationDelay: '0.2s' }}>
              We help investors identify real-estate opportunities where infrastructure, economic growth and future demand come together. Our focus is on long-term value creation.
            </p>
            <Link href="#approach" className={`fade-up ${styles.link}`} style={{ animationDelay: '0.4s' }}>
              Discover Our Approach &rarr;
            </Link>
          </div>
        </div>

        <div className={styles.statsContainer} ref={statsRef}>
          {stats.map((stat, index) => (
            <div className={styles.statItem} key={index}>
              <div className={styles.statNumber}>
                <CountUpNumber target={stat.target} suffix={stat.suffix} started={countStarted} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
