"use client";

import { useEffect } from "react";

export default function SmoothScrollReveal() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.08,
    });

    // Target major sections and cards
    const elements = document.querySelectorAll(
      "section:not(#home), .scroll-reveal, [data-name='03 — BRAND INTRODUCTION'], [data-name='04 — FEATURED EXPERIENCES'], [data-name='05 — PRODUCTION METHOD'], [data-name='06 — PARTNERS & ECOSYSTEM'], [data-name='07 — BRAND PHILOSOPHY'], [data-name='One Crowd Many Sounds Showcase'], [data-name='08 — CONTACT & ENQUIRY'], footer"
    );

    elements.forEach((el) => {
      el.classList.add("reveal-on-scroll");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
