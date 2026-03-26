/* ======================================================
   OXZY — Shared JavaScript
   ====================================================== */

'use strict';

/* ─── Navbar ─────────────────────────────────────────── */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar__hamburger');
const mobileNav = document.querySelector('.navbar__mobile');

// Scroll shadow
window.addEventListener(
  'scroll',
  () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  },
  { passive: true },
);

// Hero Entrance Sequence (Desktop only)
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 900) {
    const heroContent = document.querySelector('.hero__content.stagger-container, .page-hero__content.stagger-container');
    if (heroContent) {
      setTimeout(() => {
        const items = heroContent.querySelectorAll('.fade-up');
        items.forEach((item, idx) => {
          item.style.setProperty('--stagger-idx', idx);
          item.classList.add('visible');
        });
      }, 300);
    }
  }
});

// Hamburger toggle
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav?.classList.toggle('open');
  document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
document.querySelectorAll('.navbar__mobile a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (mobileNav?.classList.contains('open') && !e.target.closest('.navbar')) {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ─── Scroll Animations ─────────────────────────────── */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      
      // Handle staggering for children if it's a "stagger-container"
      if (el.classList.contains('stagger-container') && window.innerWidth > 900) {
        const items = el.querySelectorAll('.fade-up');
        items.forEach((item, idx) => {
          item.style.setProperty('--stagger-idx', idx);
          item.classList.add('visible');
        });
      } else {
        el.classList.add('visible');
      }
      
      observer.unobserve(el);
    }
  });
}, observerOptions);

// Observe individuals OR containers
document.querySelectorAll('.fade-up, .stagger-container').forEach((el) => {
  observer.observe(el);
});

/* ─── Counter Animation ─────────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const increment = target / (duration / 16);
  const isPlus = el.dataset.suffix === '+';

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start) + (isPlus ? '+' : '');
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (!isNaN(target)) animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

/* ─── Checkbox Items ────────────────────────────────── */
document.querySelectorAll('.checkbox-item').forEach((item) => {
  item.addEventListener('click', () => {
    const input = item.querySelector('input[type="checkbox"]');
    if (input) {
      input.checked = !input.checked;
      item.classList.toggle('checked', input.checked);
    }
  });
});

/* ─── Form Handling ─────────────────────────────────── */
function setupForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach((field) => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        field.style.borderColor = 'var(--red)';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      const firstError = form.querySelector('.error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Simulate submit
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.textContent = 'Submitting…';
      btn.disabled = true;
    }

    setTimeout(() => {
      form.style.display = 'none';
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 900);
  });
}

// Wire up forms
setupForm('clubForm', 'clubSuccess');
setupForm('summitForm', 'summitSuccess');
setupForm('contactForm', 'contactSuccess');
setupForm('gygForm', 'gygSuccess');

/* ─── Active nav link ───────────────────────────────── */
(function highlightNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ─── Smooth scroll for anchor links ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── Ripple on buttons ─────────────────────────────── */
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;
      border-radius:50%;
      background:rgba(255,255,255,0.35);
      pointer-events:none;
      transform:scale(0);
      animation:rippleEffect 0.55s ease;
      width:100px;height:100px;
      top:${e.clientY - rect.top - 50}px;
      left:${e.clientX - rect.left - 50}px;
    `;
    this.style.overflow = 'hidden';
    this.style.position = 'relative';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Ripple keyframe (injected once)
if (!document.getElementById('rippleStyle')) {
  const s = document.createElement('style');
  s.id = 'rippleStyle';
  s.textContent = '@keyframes rippleEffect { to { transform:scale(4); opacity:0; } }';
  document.head.appendChild(s);
}
