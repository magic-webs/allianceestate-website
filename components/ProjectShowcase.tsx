'use client';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
    description: "Grade-A commercial spaces in one of Noida's fastest-growing business corridors.",
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

const cardClass =
  'group overflow-hidden border border-primary/6 bg-white transition-all duration-400 ease-smooth hover:shadow-premium';
const categoryClass = 'mb-2 block text-xs font-semibold tracking-[1.5px] text-gold uppercase';
const exploreClass =
  'inline-flex items-center gap-2 font-semibold text-primary transition-all duration-400 ease-smooth hover:text-gold';
const exploreArrowClass =
  'inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-[5px]';
const imageClass =
  'h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.03]';
const imageOverlayClass =
  'absolute bottom-0 left-0 h-[40%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.2),transparent)]';

const ProjectShowcase = () => {
  const ref = useScrollReveal();
  const [featured, ...supporting] = projects;

  return (
    <section className="bg-surface py-16 md:py-32" id="projects">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div className="mb-20 max-w-[700px]" ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="fade-up text-[2.25rem] md:text-5xl">Projects With Potential.</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Featured project */}
          <div className={`${cardClass} grid grid-rows-[1.2fr_auto]`}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.name} className={imageClass} />
              <div className={imageOverlayClass} />
            </div>
            <div className="p-8">
              <span className={categoryClass}>{featured.category}</span>
              <h3 className="mb-2 text-2xl text-primary">{featured.name}</h3>
              <p className="mb-4 text-[0.95rem] text-muted">{featured.location}</p>
              <p className="mb-6 text-base leading-[1.6] text-muted">{featured.description}</p>
              <Link href="#" className={exploreClass}>
                Explore Project <span className={exploreArrowClass}>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Supporting projects */}
          <div className="flex flex-col gap-8">
            {supporting.map((project) => (
              <div className={cardClass} key={project.name}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={project.image} alt={project.name} className={imageClass} />
                  <div className={imageOverlayClass} />
                </div>
                <div className="p-8">
                  <span className={categoryClass}>{project.category}</span>
                  <h3 className="mb-2 text-2xl text-primary">{project.name}</h3>
                  <p className="mb-4 text-[0.95rem] text-muted">{project.location}</p>
                  <Link href="#" className={exploreClass}>
                    Explore Project <span className={exploreArrowClass}>&rarr;</span>
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
