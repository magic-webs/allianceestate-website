'use client';
import React, { useState, useRef } from 'react';

const slideData = [
  {
    title: 'Urban Penthouses',
    description: 'Experience city living at its peak. Soaring above the skyline, these penthouses provide panoramic views and state-of-the-art modern luxury.',
    image: '/Abadi-land.png',
    tagPrimary: 'Skyline Views',
    tagSecondary: 'MODERN LUXURY',
  },
  {
    title: 'Private Terraces',
    description: 'Step into a world of unparalleled elegance. These curated estates offer private amenities, expansive grounds, and breathtaking architectural details.',
    image: '/Rera-project.jpeg',
    tagPrimary: 'Private Terraces',
    tagSecondary: '',
  },
  {
    title: 'Refined Interiors',
    description: 'Bespoke designs meeting functionality. Our interiors are meticulously crafted using the finest materials to ensure an atmosphere of pure sophistication.',
    image: '/Residential-plot.jpeg',
    tagPrimary: 'Refined Interiors',
    tagSecondary: '',
  },
  {
    title: 'Luxury Estates',
    description: 'The ultimate sanctuary. Escape to your own piece of paradise surrounded by pristine waters and total seclusion for complete peace of mind.',
    image: '/Abadi-land.png',
    tagPrimary: 'Luxury Estates',
    tagSecondary: 'PREMIUM',
  },
];

/* The 3D carousel positions are written as arbitrary `transform` values rather
   than Tailwind's translate/rotate/scale utilities: those compile to the
   separate `translate`/`rotate`/`scale` properties, which cannot express the
   translateZ + rotateY ordering this effect needs. */
const slidePosition = {
  active: 'z-3 opacity-100 [transform:translateX(0)_translateZ(80px)_rotateY(0deg)_scale(1.1)]',
  prev: 'z-2 opacity-100 [transform:translateX(-40%)_translateZ(0px)_rotateY(15deg)_scale(0.85)] md:[transform:translateX(-85%)_translateZ(0px)_rotateY(15deg)_scale(0.9)]',
  next: 'z-2 opacity-100 [transform:translateX(40%)_translateZ(0px)_rotateY(-15deg)_scale(0.85)] md:[transform:translateX(85%)_translateZ(0px)_rotateY(-15deg)_scale(0.9)]',
  hidden: 'z-1 pointer-events-none opacity-0 [transform:translateX(0)_translateZ(-150px)_scale(0.5)]',
};

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
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 800);
    } else if (e.deltaY < -40) {
      prevSlide();
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 800);
    }
  };

  const currentData = slideData[activeSlide];
  const titleParts = currentData.title.split(' ');
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(' ');

  return (
    <section className="overflow-hidden bg-[#fafbfc] py-24" id="carousel" onWheel={handleWheel}>
      <div className="mx-auto flex w-full max-w-page justify-center px-4 md:px-8">
        <div className="relative mx-[30px] grid min-h-[600px] w-[calc(100%-60px)] max-w-page gap-8 overflow-hidden rounded-[24px] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:rounded-[40px] md:p-12 lg:grid-cols-[35%_65%] lg:p-16">
          <div className="z-10 mb-16 flex flex-col justify-between lg:mb-0 lg:pr-8">
            <div>
              <div className="mb-8 flex items-center gap-4 text-xs font-bold tracking-[3px] text-gold">
                <span className="inline-block h-0.5 w-[30px] bg-gold" /> PREMIUM LIVING
              </div>
              <h2 className="mb-8 font-serif text-5xl leading-[1.1] lg:text-[4.5rem]">
                <span className="font-bold text-primary">{firstWord}</span>
                <br />
                <span className="font-semibold text-gold">{restWords}</span>
              </h2>
              <p className="mb-12 max-w-[90%] text-[1.05rem] leading-[1.8] text-muted">
                {currentData.description}
              </p>
              <button className="inline-block w-max rounded-[40px] bg-[linear-gradient(to_right,var(--color-gold-dark),var(--color-gold))] px-10 py-4 text-[1.05rem] font-medium text-white shadow-[0_10px_20px_rgba(201,162,39,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_25px_rgba(201,162,39,0.4)]">
                Explore &rarr;
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-baseline gap-1 font-heading text-base font-bold">
                <span className="text-2xl text-primary">{String(activeSlide + 1).padStart(2, '0')}</span>
                <span className="font-normal text-[#ccc]">/</span>
                <span className="text-[1.1rem] text-[#999]">{String(slideData.length).padStart(2, '0')}</span>
              </div>

              <div className="relative mx-4 h-0.5 w-20 bg-[#eee]">
                <div
                  className="absolute top-0 left-0 h-full bg-gold transition-[width] duration-500"
                  style={{ width: `${((activeSlide + 1) / slideData.length) * 100}%` }}
                />
              </div>

              <div className="flex gap-4">
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eaeaea] bg-white text-xl text-primary shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#ccc]"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  &larr;
                </button>
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dark))] text-xl text-white shadow-[0_4px_10px_rgba(201,162,39,0.3)] transition-all duration-300 hover:translate-x-0.5"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex h-[450px] items-center justify-center overflow-visible px-2.5 lg:h-auto">
            {/* Background decorative circles */}
            <div className="absolute top-[-10%] left-[20%] z-1 h-[300px] w-[300px] rounded-full border border-gold/30" />
            <div className="absolute top-[5%] right-[15%] z-1 h-[400px] w-[400px] rounded-full bg-[rgba(245,238,222,0.5)]" />

            {/* Floating Top Right Text */}
            <div className="absolute top-8 right-16 z-10 text-right font-script text-2xl leading-[1.2] text-gold-script italic">
              A Higher
              <br />
              Way of Living
              <div className="mt-[5px] ml-auto h-0.5 w-[30px] bg-gold-script" />
            </div>

            {/* Pagination Dots Right Side */}
            <div className="absolute top-1/2 right-8 z-10 flex -translate-y-1/2 flex-col gap-2.5">
              {slideData.map((slide, i) => (
                <div
                  key={slide.title + i}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    i === activeSlide ? 'h-3 rounded-[6px] bg-gold-script' : 'h-1.5 bg-[#ddd]'
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
                    className={`absolute h-[360px] w-[240px] rounded-[20px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] [transform-style:preserve-3d] md:h-[450px] md:w-[300px] ${slidePosition[position]}`}
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden rounded-[20px] ${
                        position === 'active'
                          ? 'shadow-[0_25px_50px_rgba(0,0,0,0.3)]'
                          : 'shadow-[0_15px_35px_rgba(0,0,0,0.2)]'
                      }`}
                    >
                      <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                      <div
                        className={`absolute bottom-0 left-0 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] px-6 pt-12 pb-6 text-white transition-opacity duration-500 ${
                          position === 'prev' || position === 'next' ? 'opacity-80' : ''
                        }`}
                      >
                        <h3 className="mb-[5px] flex items-center gap-2.5 font-serif text-[1.4rem] font-medium text-white">
                          {slide.tagPrimary}
                          <span className="inline-block h-px w-[25px] bg-white/60" />
                        </h3>
                        {slide.tagSecondary && (
                          <p className="text-[0.65rem] tracking-[2px] text-[#ccc]">{slide.tagSecondary}</p>
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
