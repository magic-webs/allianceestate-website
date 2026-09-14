'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    number: '01',
    title: 'Market Intelligence',
    description: 'Data-driven insights into location potential, infrastructure timelines and growth trajectories.',
  },
  {
    number: '02',
    title: 'Strategic Selection',
    description: 'Identifying opportunities where infrastructure, demand and economic growth intersect.',
  },
  {
    number: '03',
    title: 'Due Diligence',
    description: 'Thorough review of documentation, legal standing, and development credentials.',
  },
  {
    number: '04',
    title: 'End-to-End Assistance',
    description: 'Structured support from opportunity identification through to investment execution.',
  },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">
            Not Just Property.<br />Perspective.
          </h2>
          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            We bring together market intelligence, strategic thinking and operational expertise to help investors make informed real-estate decisions.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div className={styles.featureItem} key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={styles.featureNumber}>{feature.number}</div>
              <div className={styles.featureLine}></div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
