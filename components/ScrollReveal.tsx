"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".idea, .w-card, .testi, .price, .scene"
    );
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
      if (el.classList.contains("reveal")) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.animation = "rise 700ms cubic-bezier(0.2,0.8,0.2,1) forwards";
      el.style.animationPlayState = "paused";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
