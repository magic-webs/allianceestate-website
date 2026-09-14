'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './InvestmentProcess.module.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the investor\'s goals, timeline and risk appetite.',
  },
  {
    number: '02',
    title: 'Evaluate',
    description: 'Analyse location, property fundamentals and growth potential.',
  },
  {
    number: '03',
    title: 'Verify',
    description: 'Review documentation, legal standing and all relevant information.',
  },
  {
    number: '04',
    title: 'Invest',
    description: 'Move forward with structured assistance and ongoing support.',
  },
];

const InvestmentProcess = () => {
  const ref = useScrollReveal();

  return (
    <section className="section bg-white" id="approach">
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">A Smarter Way to Invest.</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.stepCircle}>
                <span>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
