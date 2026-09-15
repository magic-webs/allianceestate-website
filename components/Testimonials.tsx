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
    <section className="relative z-20 bg-white py-10 md:py-16">
      <div className="mx-auto w-full max-w-page px-4 md:px-8">
        <div
          className="mx-auto mb-10 max-w-[700px] text-center"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="fade-up text-[2.25rem] md:text-5xl">Built on Trust.</h2>
        </div>

        <div className="relative mx-auto max-w-[800px] text-center">
          <div className="-mb-12 font-serif text-[8rem] leading-none text-gold opacity-30">&ldquo;</div>

          <div className="flex min-h-[180px] flex-col justify-center">
            <p className="mb-8 text-[1.2rem] leading-[1.6] text-ink italic md:text-2xl">
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

          <div className="mt-8 flex items-center justify-center gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
