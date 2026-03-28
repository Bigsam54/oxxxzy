"use client";

import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          
          if (el.classList.contains("stagger-container") && window.innerWidth > 900) {
            const items = el.querySelectorAll(".fade-up");
            items.forEach((item, idx) => {
              (item as HTMLElement).style.setProperty("--stagger-idx", idx.toString());
              item.classList.add("visible");
            });
          } else {
            el.classList.add("visible");
          }
          
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      document.querySelectorAll(".fade-up, .stagger-container").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();

    // Re-observe on mutations (e.g. when navigation happens)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
