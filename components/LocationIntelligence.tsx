'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './LocationIntelligence.module.css';

const markers = [
  { name: 'Delhi NCR', top: '30%', left: '42%' },
  { name: 'Noida', top: '42%', left: '56%' },
  { name: 'Greater Noida', top: '55%', left: '62%' },
  { name: 'Yamuna Expressway', top: '65%', left: '52%' },
  { name: 'Airport Corridor', top: '72%', left: '40%' },
  { name: 'Industrial Zones', top: '38%', left: '28%' },
  { name: 'Emerging Growth Areas', top: '50%', left: '35%' },
];

const LocationIntelligence = () => {
  const ref = useScrollReveal();

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
          alt="Aerial City View"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`} ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={styles.textBlock}>
          <h2 className="fade-up">Location Is the Investment.</h2>
          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            We focus on markets where infrastructure, industry and urban expansion converge.
          </p>
        </div>

        <div className={styles.mapArea}>
          {markers.map((marker, index) => (
            <div
              key={index}
              className={styles.marker}
              style={{ top: marker.top, left: marker.left, animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <span className={styles.markerDot}></span>
              <span className={styles.markerPulse}></span>
              <span className={styles.markerLabel}>{marker.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationIntelligence;
