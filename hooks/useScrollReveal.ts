import { useEffect, useRef, MutableRefObject } from 'react';

export const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target); // uncomment if we only want it to animate once
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
};
