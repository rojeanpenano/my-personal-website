"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once — the entrance plays a single time
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  return (
    <div ref={ref} data-animate-onview data-inview={inView ? "" : undefined}>
      {children}
    </div>
  );
}