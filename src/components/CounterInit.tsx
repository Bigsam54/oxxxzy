"use client";

import { useEffect } from "react";

const CounterInit = () => {
  useEffect(() => {
    const animateCounter = (el: HTMLElement, target: number, duration = 1800) => {
      let start = 0;
      const increment = target / (duration / 16);
      const isPlus = el.dataset.suffix === "+";

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(start) + (isPlus ? "+" : "");
      }, 16);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            if (!isNaN(target)) animateCounter(el, target);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const observeCounters = () => {
      document.querySelectorAll("[data-count]").forEach((el) => {
        counterObserver.observe(el);
      });
    };

    observeCounters();

    const mutationObserver = new MutationObserver(() => {
      observeCounters();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      counterObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default CounterInit;
