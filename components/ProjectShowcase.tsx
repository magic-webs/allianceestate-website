'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ProjectShowcase.module.css';

const projects = [
  {
    name: 'Horizon Heights',
    location: 'Yamuna Expressway, Greater Noida',
    category: 'Residential',
    description: 'Premium residential development positioned near the upcoming international airport with seamless expressway connectivity.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    name: 'Commerce Square',
    location: 'Sector 62, Noida',
    category: 'Commercial',
    description: 'Grade-A commercial spaces in one of Noida\'s fastest-growing business corridors.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    name: 'Industrial Park One',
    location: 'Greater Noida Industrial Area',
    category: 'Industrial',
    description: 'Modern industrial plots with proximity to key logistics and transportation infrastructure.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
];

const ProjectShowcase = () => {
  const ref = useScrollReveal();

  return (
    <section className="section bg-light" id="projects">
      <div className="container">
        <div className={styles.header} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up">Projects With Potential.</h2>
        </div>

        <div className={styles.grid}>
          {/* Featured project */}
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.imageWrapper}>
              <img src={projects[0].image} alt={projects[0].name} className={styles.cardImage} />
              <div className={styles.cardImageOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.category}>{projects[0].category}</span>
              <h3 className={styles.projectName}>{projects[0].name}</h3>
              <p className={styles.projectLocation}>{projects[0].location}</p>
              <p className={styles.projectDescription}>{projects[0].description}</p>
              <Link href="#" className={styles.exploreBtn}>
                Explore Project <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Supporting projects */}
          <div className={styles.supporting}>
            {projects.slice(1).map((project, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.name} className={styles.cardImage} />
                  <div className={styles.cardImageOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectLocation}>{project.location}</p>
                  <Link href="#" className={styles.exploreBtn}>
                    Explore Project <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
