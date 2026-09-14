'use client';
import React, { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    quote: 'Alliance Estate helped us identify an opportunity near the Yamuna Expressway that we would have completely overlooked. Their understanding of infrastructure-driven growth is exceptional.',
    name: 'Rajesh Kumar',
    role: 'Business Owner, Delhi',
  },
  {
    quote: 'As an NRI, finding reliable property advisory in India was always a challenge. Alliance Estate provided clear, research-backed guidance and end-to-end support throughout the process.',
    name: 'Priya Sharma',
    role: 'NRI Investor, UAE',
  },
  {
    quote: 'What sets them apart is their focus on location intelligence rather than just listings. They helped us understand the growth potential before we made our investment decision.',
    name: 'Vikram Mehta',
    role: 'Entrepreneur, Mumbai',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-20 max-w-[700px] text-center"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up text-[2.25rem] md:text-5xl">Built on Trust.</h2>
        </div>

        <div className="relative mx-auto max-w-[800px] text-center">
          <div className="-mb-12 font-serif text-[8rem] leading-none text-gold opacity-30">&ldquo;</div>

          <div className="flex min-h-[250px] flex-col justify-center">
            <p className="mb-12 text-[1.2rem] leading-[1.6] text-ink italic md:text-2xl">
              {testimonials[active].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary font-heading text-[1.25rem] font-bold text-white">
                {testimonials[active].name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-[1.1rem] font-bold text-primary">{testimonials[active].name}</div>
                <div className="text-[0.9rem] text-muted">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-primary/15 text-[1.25rem] text-primary transition-all duration-400 ease-smooth hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <div className="flex gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-400 ease-smooth ${
                    index === active ? 'scale-120 bg-gold' : 'bg-primary/15'
                  }`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-primary/15 text-[1.25rem] text-primary transition-all duration-400 ease-smooth hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
