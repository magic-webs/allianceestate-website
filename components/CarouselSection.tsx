'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  {
    title: 'ABADI LAND ',
    description: 'Explore land opportunities located within or around established abadi areas, subject to applicable revenue records, land-use provisions and local regulations.',
    image: '/Abadi-land.png',
    tagPrimary: 'Skyline Views',
    tagSecondary: 'MODERN LUXURY',
    link: '/projects/abadi-land',
  },
  {
    title: 'GOVERNMENT ACQUISITION LAND',
    description: 'Certain land parcels may be located in areas identified for planned infrastructure, urban expansion or potential acquisition.',
    image: '/Rera-project.jpeg',
    tagPrimary: 'Private Terraces',
    tagSecondary: '',
    link: '/projects/govt-acquisition-land',
  },
  {
    title: 'RESIDENTIAL PLOTS',
    description: 'Discover residential plots in strategically located areas suitable for future home construction and long-term land ownership.',
    image: '/Residential-plot.jpeg',
    tagPrimary: 'Refined Interiors',
    tagSecondary: '',
    link: '/projects/residential',
  },
  {
    title: 'RERA PROJECTS',
    description: 'Explore registered residential projects with greater transparency around project details, approvals and development status.',
    image: '/Abadi-land.png',
    tagPrimary: 'Luxury Estates',
    tagSecondary: 'PREMIUM',
    link: '/projects/rera',
  },
];

const slidePosition = {
  active: 'z-3 opacity-100 [transform:translateX(0)_translateZ(80px)_rotateY(0deg)_scale(1.25)]',
  prev: 'z-2 opacity-100 [transform:translateX(-40%)_translateZ(0px)_rotateY(15deg)_scale(0.85)] md:[transform:translateX(-85%)_translateZ(0px)_rotateY(15deg)_scale(0.9)]',
  next: 'z-2 opacity-100 [transform:translateX(40%)_translateZ(0px)_rotateY(-15deg)_scale(0.85)] md:[transform:translateX(85%)_translateZ(0px)_rotateY(-15deg)_scale(0.9)]',
  hidden: 'z-1 pointer-events-none opacity-0 [transform:translateX(0)_translateZ(-100px)_scale(0.5)]',
};

const CarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const pinEl = pinRef.current;

    if (!triggerEl || !pinEl) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerEl,
        pin: pinEl,
        start: 'top top',
        end: `+=${slideData.length * 100}%`,
        scrub: 0.5,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.min(
            slideData.length - 1,
            Math.floor(progress * slideData.length)
          );
          setActiveSlide(slideIndex);
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const currentData = slideData[activeSlide];
  const titleParts = currentData.title.split(' ');
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(' ');

  return (
    <div ref={triggerRef} className="relative bg-[#fafbfc]" id="carousel">
      <div ref={pinRef} className="flex min-h-screen w-full items-center justify-center overflow-hidden py-2 md:py-4">
        <div className="mx-auto flex w-full max-w-page justify-center px-3 md:px-8">
          <div className="relative grid w-full max-w-page gap-4 overflow-hidden rounded-[16px] bg-white p-3 shadow-[0_20px_40px_rgba(0,0,0,0.05)] sm:p-6 md:rounded-[30px] md:gap-6 md:p-8 lg:grid-cols-[35%_65%] lg:p-10">
            <div className="z-10 flex flex-col justify-center lg:pr-6">
              <div>
                <h2 className="mb-3 font-heading not-italic text-[1.5rem] leading-[1.3] font-bold sm:text-[2rem] md:text-[3rem] md:leading-[3.75rem] md:mb-4">
                  <span className="font-bold text-primary">{firstWord}</span>
                  <br />
                  <span className="font-bold text-gold">{restWords}</span>
                </h2>
                <p className="mb-4 max-w-[90%] text-sm leading-[1.7] text-muted md:text-base md:mb-6">
                  {currentData.description}
                </p>
                <Link
                  href={currentData.link}
                  className="inline-block w-max rounded-[40px] bg-[linear-gradient(to_right,var(--color-gold-dark),var(--color-gold))] px-5 py-2 text-xs font-medium text-white shadow-[0_8px_16px_rgba(201,162,39,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(201,162,39,0.4)] md:px-7 md:py-2.5 md:text-sm"
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-3 md:mt-6 md:gap-4">
                <div className="relative mx-1 h-0.5 w-10 bg-[#eee] md:mx-2 md:w-14">
                  <div
                    className="absolute top-0 left-0 h-full bg-gold transition-[width] duration-500"
                    style={{ width: `${((activeSlide + 1) / slideData.length) * 100}%` }}
                  />
                </div>

                <div className="flex gap-2 md:gap-3">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eaeaea] bg-white text-sm text-primary shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#ccc] md:h-12 md:w-12 md:text-base"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    &larr;
                  </button>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dark))] text-sm text-white shadow-[0_4px_10px_rgba(201,162,39,0.3)] transition-all duration-300 hover:translate-x-0.5 md:h-12 md:w-12 md:text-base"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex h-[380px] items-center justify-center overflow-visible px-1 sm:h-[340px] md:h-[360px] lg:h-auto">
              {/* Background decorative circles - hidden on very small screens */}
              <div className="absolute top-[-10%] left-[20%] z-1 hidden h-[150px] w-[150px] rounded-full border border-gold/30 sm:block md:h-[200px] md:w-[200px]" />
              <div className="absolute top-[5%] right-[15%] z-1 hidden h-[180px] w-[180px] rounded-full bg-[rgba(245,238,222,0.5)] sm:block md:h-[260px] md:w-[260px]" />

              {/* Pagination Dots Right Side */}
              <div className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 flex-col gap-2 md:right-8 md:gap-2.5">
                {slideData.map((slide, i) => (
                  <div
                    key={slide.title + i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'h-3 rounded-[6px] bg-gold-script' : 'h-1.5 bg-[#ddd]'
                      }`}
                  />
                ))}
              </div>

              <div className="relative z-5 flex h-full w-full items-center justify-center [perspective:1500px] [transform-style:preserve-3d]">
                {slideData.map((slide, index) => {
                  let position: keyof typeof slidePosition;

                  if (index === activeSlide) {
                    position = 'active';
                  } else if (index === (activeSlide - 1 + slideData.length) % slideData.length) {
                    position = 'prev';
                  } else if (index === (activeSlide + 1) % slideData.length) {
                    position = 'next';
                  } else {
                    position = 'hidden';
                  }

                  return (
                    <div
                      key={slide.title + index}
                      className={`absolute h-[260px] w-[180px] rounded-[12px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] [transform-style:preserve-3d] sm:h-[240px] sm:w-[165px] md:h-[260px] md:w-[180px] lg:h-[300px] lg:w-[200px] ${slidePosition[position]}`}
                    >
                      <div
                        className={`relative h-full w-full overflow-hidden rounded-[12px] md:rounded-[16px] ${position === 'active'
                          ? 'shadow-[0_25px_50px_rgba(0,0,0,0.3)]'
                          : 'shadow-[0_15px_35px_rgba(0,0,0,0.2)]'
                          }`}
                      >
                        <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                        <div
                          className={`absolute bottom-0 left-0 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] px-2 pt-4 pb-2 text-white transition-opacity duration-500 md:px-3 md:pt-6 md:pb-3 ${position === 'prev' || position === 'next' ? 'opacity-80' : ''
                            }`}
                        >
                          <h3 className="mb-[3px] flex items-center gap-1 font-serif text-[0.8rem] font-medium text-white md:gap-1.5 md:text-[0.9rem]">
                            {slide.tagPrimary}
                            <span className="inline-block h-px w-[15px] bg-white/60 md:w-[25px]" />
                          </h3>
                          {slide.tagSecondary && (
                            <p className="hidden text-[0.6rem] tracking-[2px] text-[#ccc] md:block md:text-[0.65rem]">{slide.tagSecondary}</p>
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
      </div>
    </div>
  );
};

export default CarouselSection;
