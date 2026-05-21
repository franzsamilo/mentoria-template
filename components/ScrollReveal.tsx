"use client";

import { useEffect } from "react";

/**
 * Adds the `.reveal` class to scroll-targets when they enter the viewport.
 * Elements are visible by default, so this only adds a one-shot fade-up —
 * if JS is disabled or the observer fails the content still renders.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets = document.querySelectorAll<HTMLElement>(
      ".idea, .w-card, .testi, .price, .scene"
    );
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${i * 80}ms`;
          el.classList.add("reveal");
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => {
      if (!el.classList.contains("reveal")) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
