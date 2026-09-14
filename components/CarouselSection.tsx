'use client';
import React, { useState, useRef } from 'react';
import styles from './CarouselSection.module.css';

const slideData = [
  {
    title: 'Urban Penthouses',
    description: 'Experience city living at its peak. Soaring above the skyline, these penthouses provide panoramic views and state-of-the-art modern luxury.',
    image: '/Abadi-land.png',
    tagPrimary: 'Skyline Views',
    tagSecondary: 'MODERN LUXURY'
  },
  {
    title: 'Private Terraces',
    description: 'Step into a world of unparalleled elegance. These curated estates offer private amenities, expansive grounds, and breathtaking architectural details.',
    image: '/Rera-project.jpeg',
    tagPrimary: 'Private Terraces',
    tagSecondary: ''
  },
  {
    title: 'Refined Interiors',
    description: 'Bespoke designs meeting functionality. Our interiors are meticulously crafted using the finest materials to ensure an atmosphere of pure sophistication.',
    image: '/Residential-plot.jpeg',
    tagPrimary: 'Refined Interiors',
    tagSecondary: ''
  },
  {
    title: 'Luxury Estates',
    description: 'The ultimate sanctuary. Escape to your own piece of paradise surrounded by pristine waters and total seclusion for complete peace of mind.',
    image: '/Abadi-land.png',
    tagPrimary: 'Luxury Estates',
    tagSecondary: 'PREMIUM'
  }
];

const CarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Prevent rapid firing of slide changes
    if (scrollTimeout.current) return;

    if (e.deltaY > 40) {
      nextSlide();
      scrollTimeout.current = setTimeout(() => { scrollTimeout.current = null; }, 800);
    } else if (e.deltaY < -40) {
      prevSlide();
      scrollTimeout.current = setTimeout(() => { scrollTimeout.current = null; }, 800);
    }
  };

  const currentData = slideData[activeSlide];
  const titleParts = currentData.title.split(' ');
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(' ');

  return (
    <section className={styles.sectionWrapper} id="carousel" onWheel={handleWheel}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          
          <div className={styles.contentCol}>
            <div className={styles.textContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine}></span> PREMIUM LIVING
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleDark}>{firstWord}</span><br />
                <span className={styles.titleGold}>{restWords}</span>
              </h2>
              <p className={styles.description}>{currentData.description}</p>
              <button className={styles.exploreBtn}>Explore &rarr;</button>
            </div>

            <div className={styles.controls}>
              <div className={styles.pagination}>
                <span className={styles.currentNum}>
                  {String(activeSlide + 1).padStart(2, '0')}
                </span>
                <span className={styles.slash}>/</span>
                <span className={styles.totalNum}>
                  {String(slideData.length).padStart(2, '0')}
                </span>
              </div>
              
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${((activeSlide + 1) / slideData.length) * 100}%` }}
                ></div>
              </div>

              <div className={styles.arrowGroup}>
                <button 
                  className={`${styles.arrowBtn} ${styles.arrowPrev}`} 
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  &larr;
                </button>
                <button 
                  className={`${styles.arrowBtn} ${styles.arrowNext}`} 
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className={styles.sliderCol}>
            {/* Background decorative circles */}
            <div className={styles.decoCircle1}></div>
            <div className={styles.decoCircle2}></div>

            {/* Floating Top Right Text */}
            <div className={styles.floatingText}>
              A Higher<br />Way of Living
              <div className={styles.floatingLine}></div>
            </div>

            {/* Pagination Dots Right Side */}
            <div className={styles.verticalDots}>
              {slideData.map((_, i) => (
                <div key={i} className={`${styles.dot} ${i === activeSlide ? styles.dotActive : ''}`}></div>
              ))}
            </div>

            <div className={styles.sliderContainer}>
              {slideData.map((slide, index) => {
                let positionClass = '';
                
                if (index === activeSlide) {
                  positionClass = styles.slideActive;
                } else if (index === (activeSlide - 1 + slideData.length) % slideData.length) {
                  positionClass = styles.slidePrev;
                } else if (index === (activeSlide + 1) % slideData.length) {
                  positionClass = styles.slideNext;
                } else {
                  positionClass = styles.slideHidden;
                }

                return (
                  <div key={index} className={`${styles.slide} ${positionClass}`}>
                    <div className={styles.slideInner}>
                      <img src={slide.image} alt={slide.title} className={styles.slideImage} />
                      <div className={styles.slideOverlay}>
                        <h3 className={styles.slideTagPrimary}>
                          {slide.tagPrimary}
                          <span className={styles.slideTagLine}></span>
                        </h3>
                        {slide.tagSecondary && (
                          <p className={styles.slideTagSecondary}>{slide.tagSecondary}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
