'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './MarketInsights.module.css';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop',
    category: 'Market Updates',
    date: 'September 2026',
    headline: 'How Infrastructure Investments Are Reshaping NCR\'s Real-Estate Landscape',
  },
  {
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800&auto=format&fit=crop',
    category: 'Infrastructure',
    date: 'August 2026',
    headline: 'Noida International Airport: What It Means for Surrounding Property Markets',
  },
  {
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=800&auto=format&fit=crop',
    category: 'Investment Insights',
    date: 'August 2026',
    headline: 'Understanding Location Intelligence: A Framework for Smarter Real-Estate Decisions',
  },
];

const MarketInsights = () => {
  const ref = useScrollReveal();

  return (
    <section className="section bg-light" id="insights">
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">What the Market Is Telling Us</h2>
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <Link href="#" className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <img src={article.image} alt={article.headline} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                <h3 className={styles.headline}>{article.headline}</h3>
                <span className={styles.readMore}>
                  Read More <span className={styles.arrow}>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
