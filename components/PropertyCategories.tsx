'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './PropertyCategories.module.css';

const categories = [
  {
    title: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Industrial',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Hospitality & Institutional',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  },
];

const PropertyCategories = () => {
  const ref = useScrollReveal();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">Real Estate, Across Growth Sectors.</h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div className={styles.card} key={index}>
              <img src={cat.image} alt={cat.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <span className={styles.cardArrow}>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
