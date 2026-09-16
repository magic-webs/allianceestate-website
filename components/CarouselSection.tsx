'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  {
    title: 'Abadi Land',
    description: 'Explore land opportunities located within or around established abadi areas, subject to applicable revenue records, land-use provisions and local regulations.',
    image: '/abadi-land-02.png',
    tagPrimary: 'Abadi Land',
    tagSecondary: '',
    link: '/projects/abadi-land',
  },
  {
    title: 'Government Acquisition Land',
    description: 'Certain land parcels may be located in areas identified for planned infrastructure, urban expansion or potential acquisition.',
    image: '/land-equisition-02.png',
    tagPrimary: 'Government Acquisition Land',
    tagSecondary: '',
    link: '/projects/govt-acquisition-land',
  },
  {
    title: 'Residential Plots',
    description: 'Discover residential plots in strategically located areas suitable for future home construction and long-term land ownership.',
    image: '/Residential-plots.png',
    tagPrimary: 'Residential Plots',
    tagSecondary: '',
    link: '/projects/residential',
  },
  {
    title: 'RERA Projects',
    description: 'Explore registered residential projects with greater transparency around project details, approvals and development status.',
    image: '/Rera-01.png',
    tagPrimary: 'RERA Projects',
    tagSecondary: '',
    link: '/projects/rera',
  },
];

const slidePosition = {
  active: 'z-3 opacity-100 [transform:translateX(0)_translateZ(45px)_rotateY(0deg)_scale(1.12)] md:[transform:translateX(0)_translateZ(90px)_rotateY(0deg)_scale(1.25)]',
  prev: 'z-2 opacity-70 cursor-pointer [transform:translateX(-48%)_translateZ(0px)_rotateY(12deg)_scale(0.82)] md:opacity-85 md:[transform:translateX(-85%)_translateZ(0px)_rotateY(16deg)_scale(0.9)] hover:opacity-100',
  next: 'z-2 opacity-70 cursor-pointer [transform:translateX(48%)_translateZ(0px)_rotateY(-12deg)_scale(0.82)] md:opacity-85 md:[transform:translateX(85%)_translateZ(0px)_rotateY(-16deg)_scale(0.9)] hover:opacity-100',
  hidden: 'z-1 pointer-events-none opacity-0 [transform:translateX(0)_translateZ(-60px)_scale(0.6)]',
};

const CarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const stRef = useRef<ScrollTrigger | null>(null);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const pinEl = pinRef.current;

    if (!triggerEl || !pinEl) return;

    const ctx = gsap.context(() => {
      stRef.current = ScrollTrigger.create({
        trigger: triggerEl,
        pin: pinEl,
        start: 'top top',
        end: () => (window.innerWidth < 768 ? `+=${slideData.length * 80}%` : `+=${slideData.length * 100}%`),
        scrub: 0.6,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.min(
            slideData.length - 1,
            Math.floor(progress * slideData.length)
          );
          setActiveSlide((curr) => (curr !== slideIndex ? slideIndex : curr));
        },
      });
    }, triggerRef);

    return () => {
      stRef.current = null;
      ctx.revert();
    };
  }, []);

  const currentData = slideData[activeSlide];
  const titleParts = currentData.title.split(' ');
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(' ');

  return (
    <div ref={triggerRef} className="relative bg-[#fafbfc]" id="carousel">
      <div
        ref={pinRef}
        className="flex min-h-[100dvh] w-full items-center justify-center overflow-hidden py-3 md:py-6"
      >
        <div className="mx-auto flex w-full max-w-page justify-center px-3 sm:px-6 md:px-8">
          <div className="relative grid w-full max-w-page gap-4 overflow-hidden rounded-[20px] bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.05)] sm:p-6 md:rounded-[30px] md:gap-6 md:p-8 lg:grid-cols-[35%_65%] lg:p-10">
            <div className="z-10 flex flex-col justify-center lg:pr-6">
              <div key={activeSlide} className="transition-all duration-400 ease-out animate-fadeIn">
                <h2 className="mb-2 font-heading not-italic text-[1.4rem] leading-[1.25] font-bold sm:text-[2rem] md:text-[3rem] md:leading-[3.75rem] md:mb-4">
                  <span className="font-bold text-primary">{firstWord}</span>
                  <br />
                  <span className="font-bold text-gold">{restWords}</span>
                </h2>
                <p className="mb-4 max-w-[95%] text-xs leading-[1.65] text-muted sm:text-sm md:text-base md:mb-6 md:max-w-[90%]">
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
                    className="absolute top-0 left-0 h-full bg-gold transition-[width] duration-500 ease-out"
                    style={{ width: `${((activeSlide + 1) / slideData.length) * 100}%` }}
                  />
                </div>

                <div className="flex gap-2 md:gap-3">
                  <button
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#eaeaea] bg-white text-base text-primary shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold hover:scale-110 active:scale-90 md:h-12 md:w-12 md:text-lg cursor-pointer"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-0.5">&larr;</span>
                  </button>
                  <button
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dark))] text-base text-white shadow-[0_4px_14px_rgba(201,162,39,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(201,162,39,0.5)] active:scale-90 md:h-12 md:w-12 md:text-lg cursor-pointer"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="relative flex h-[340px] items-center justify-center overflow-visible px-1 sm:h-[360px] md:h-[380px] lg:h-auto select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Background decorative circles */}
              <div className="absolute top-[-10%] left-[20%] z-1 hidden h-[150px] w-[150px] rounded-full border border-gold/30 sm:block md:h-[200px] md:w-[200px]" />
              <div className="absolute top-[5%] right-[15%] z-1 hidden h-[180px] w-[180px] rounded-full bg-[rgba(245,238,222,0.5)] sm:block md:h-[260px] md:w-[260px]" />

              {/* Pagination Dots Right Side */}
              <div className="absolute top-1/2 right-1 z-10 flex -translate-y-1/2 flex-col gap-2 sm:right-2 md:right-8 md:gap-2.5">
                {slideData.map((slide, i) => (
                  <button
                    key={slide.title + i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-1.5 cursor-pointer rounded-full transition-all duration-300 ${i === activeSlide ? 'h-4 rounded-[6px] bg-gold-script' : 'h-1.5 bg-[#ddd] hover:bg-[#bbb]'
                      }`}
                  />
                ))}
              </div>

              <div className="relative z-5 flex h-full w-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
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
                      onClick={() => {
                        if (position === 'prev') prevSlide();
                        if (position === 'next') nextSlide();
                      }}
                      className={`absolute h-[240px] w-[165px] will-change-transform rounded-[12px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] [backface-visibility:hidden] sm:h-[260px] sm:w-[175px] md:h-[280px] md:w-[190px] lg:h-[310px] lg:w-[210px] ${slidePosition[position]}`}
                    >
                      <div
                        className={`relative h-full w-full overflow-hidden rounded-[12px] md:rounded-[16px] transition-shadow duration-500 ${position === 'active'
                          ? 'shadow-[0_20px_45px_rgba(0,0,0,0.28)] ring-1 ring-gold/20'
                          : 'shadow-[0_10px_25px_rgba(0,0,0,0.16)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]'
                          }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        {(slide.tagPrimary || slide.tagSecondary) && (
                          <div
                            className={`absolute bottom-0 left-0 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] px-2 pt-4 pb-2 text-white transition-opacity duration-300 md:px-3 md:pt-6 md:pb-3 ${position === 'prev' || position === 'next' ? 'opacity-80' : ''
                              }`}
                          >
                            {slide.tagPrimary && (
                              <h3 className="mb-[3px] flex items-center gap-1 font-serif text-[0.8rem] font-medium text-white md:gap-1.5 md:text-[0.9rem]">
                                {slide.tagPrimary}
                                <span className="inline-block h-px w-[15px] bg-white/60 md:w-[25px]" />
                              </h3>
                            )}
                            {slide.tagSecondary && (
                              <p className="hidden text-[0.6rem] tracking-[2px] text-[#ccc] md:block md:text-[0.65rem]">{slide.tagSecondary}</p>
                            )}
                          </div>
                        )}
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
