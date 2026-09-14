'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FeaturedOpportunities.module.css';

const opportunities = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    location: 'Yamuna Expressway, Greater Noida',
    type: 'Residential Plots',
    description: 'Strategically located plots near the upcoming Noida International Airport with strong infrastructure connectivity.',
    price: '₹ On Request',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    location: 'Cyber City, Gurugram',
    type: 'Commercial Office Space',
    description: 'Premium Grade-A commercial spaces in one of India\'s most established business corridors.',
    price: '₹ On Request',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    location: 'Dwarka Expressway, NCR',
    type: 'Luxury Residences',
    description: 'High-rise luxury residences along the rapidly developing Dwarka Expressway corridor.',
    price: '₹ On Request',
  },
];

const FeaturedOpportunities = () => {
  const headerRef = useScrollReveal();

  return (
    <section className="section bg-white" id="opportunities">
      <div className="container">
        <div className={styles.header} ref={headerRef as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">Opportunities Worth Looking At</h2>
          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            A focused selection of strategically positioned real-estate opportunities.
          </p>
        </div>

        <div className={styles.grid}>
          {opportunities.map((item, index) => (
            <div className={styles.card} key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.location} className={styles.cardImage} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.propertyType}>{item.type}</span>
                <h3 className={styles.location}>{item.location}</h3>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{item.price}</span>
                  <Link href="#" className={styles.exploreLink}>
                    Explore Opportunity <span className={styles.linkArrow}>&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className={styles.goldLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;
