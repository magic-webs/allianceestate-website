'use client';
import React, { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'Alliance Estate helped us identify an opportunity near the Yamuna Expressway that we would have completely overlooked. Their understanding of infrastructure-driven growth is exceptional.',
    name: 'Rajesh Kumar',
    role: 'Business Owner, Delhi',
  },
  {
    quote: 'As an NRI, finding reliable property advisory in India was always a challenge. Alliance Estate provided clear, research-backed guidance and end-to-end support throughout the process.',
    name: 'Priya Sharma',
    role: 'NRI Investor, UAE',
  },
  {
    quote: 'What sets them apart is their focus on location intelligence rather than just listings. They helped us understand the growth potential before we made our investment decision.',
    name: 'Vikram Mehta',
    role: 'Entrepreneur, Mumbai',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">Built on Trust.</h2>
        </div>

        <div className={styles.slider}>
          <div className={styles.quoteIcon}>&ldquo;</div>

          <div className={styles.slideContent}>
            <p className={styles.quote}>{testimonials[active].quote}</p>
            <div className={styles.clientInfo}>
              <div className={styles.avatar}>
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <div className={styles.clientName}>{testimonials[active].name}</div>
                <div className={styles.clientRole}>{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.navBtn} aria-label="Previous testimonial">
              &larr;
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === active ? styles.activeDot : ''}`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.navBtn} aria-label="Next testimonial">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
