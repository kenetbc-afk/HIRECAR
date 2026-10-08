import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Plyr from 'plyr';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// COUNTER ANIMATION (for stats & numbers)
// ============================================
function animateCounters() {
  const counters = document.querySelectorAll('[data-animate="counter"]');

  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute('data-value'));
    const isDecimal = target % 1 !== 0;

    gsap.fromTo(
      counter,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: isDecimal ? 0.1 : 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        onUpdate() {
          counter.textContent = isDecimal
            ? parseFloat(counter.textContent).toFixed(1)
            : Math.floor(counter.textContent);
        },
      }
    );
  });
}

// ============================================
// FAQ ACCORDION (expand/collapse)
// ============================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const button = item.querySelector('[data-element="faq-button"]');
    const content = item.querySelector('[data-element="faq-content"]');

    if (!button || !content) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items (optional: single-open behavior)
      // Uncomment below to allow only one open at a time
      // faqItems.forEach(otherItem => {
      //   if (otherItem !== item && otherItem.classList.contains('open')) {
      //     closeAccordion(otherItem);
      //   }
      // });

      if (isOpen) {
        closeAccordion(item, content);
      } else {
        openAccordion(item, content);
      }
    });
  });

  function openAccordion(item, content) {
    const height = content.scrollHeight;

    gsap.to(content, {
      height,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });

    item.classList.add('open');
  }

  function closeAccordion(item, content) {
    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });

    item.classList.remove('open');
  }
}

// ============================================
// STAGGER ANIMATIONS (for cards & lists)
// ============================================
function initStaggerAnimations() {
  const staggerGroups = [
    { selector: '[data-animate="service-card"]', delay: 0.1 },
    { selector: '[data-animate="timeline-item"]', delay: 0.1 },
    { selector: '[data-animate="proof-card"]', delay: 0.1 },
    { selector: '[data-animate="faq-item"]', delay: 0.08 },
  ];

  staggerGroups.forEach(({ selector, delay }) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * delay,
          ease: 'back.out',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  });
}

// ============================================
// SECTION REVEAL ANIMATIONS
// ============================================
function initSectionAnimations() {
  const sections = {
    'why-title': { type: 'fade-up', delay: 0 },
    'why-content': { type: 'fade-right', delay: 0.2 },
    'why-image': { type: 'fade-left', delay: 0.3 },
    'services-title': { type: 'fade-up', delay: 0 },
    'timeline-title': { type: 'fade-up', delay: 0 },
    'proof-title': { type: 'fade-up', delay: 0 },
    'faq-title': { type: 'fade-up', delay: 0 },
    'cta-heading': { type: 'fade-up', delay: 0 },
    'cta-subheading': { type: 'fade-up', delay: 0.1 },
    'cta-final': { type: 'scale-in', delay: 0.2 },
  };

  Object.entries(sections).forEach(([selector, config]) => {
    const el = document.querySelector(`[data-animate="${selector}"]`);
    if (!el) return;

    const isVisible = el.offsetParent !== null;

    if (isVisible) {
      // Element is visible on initial load
      animateElement(el, config);
    } else {
      // Element needs scroll trigger
      gsap.fromTo(
        el,
        getInitialState(config.type),
        {
          ...getTargetState(config.type),
          duration: 0.8,
          delay: config.delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
  });

  function animateElement(el, config) {
    gsap.fromTo(
      el,
      getInitialState(config.type),
      {
        ...getTargetState(config.type),
        duration: 0.8,
        delay: config.delay,
        ease: 'power2.out',
      }
    );
  }

  function getInitialState(type) {
    switch (type) {
      case 'fade-up':
        return { opacity: 0, y: 30 };
      case 'fade-left':
        return { opacity: 0, x: -30 };
      case 'fade-right':
        return { opacity: 0, x: 30 };
      case 'scale-in':
        return { opacity: 0, scale: 0.9 };
      default:
        return { opacity: 0 };
    }
  }

  function getTargetState(type) {
    switch (type) {
      case 'fade-up':
      case 'fade-left':
      case 'fade-right':
        return { opacity: 1, x: 0, y: 0 };
      case 'scale-in':
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1 };
    }
  }
}

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================
function initParallax() {
  const heroImage = document.querySelector('.hero .ph img');

  if (heroImage) {
    gsap.to(heroImage, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        markers: false,
      },
    });
  }
}

// ============================================
// VIDEO PLAYER INITIALIZATION (Plyr)
// ============================================
function initVideoPlayer() {
  const videoPlayer = document.getElementById('video-player');

  if (videoPlayer) {
    const player = new Plyr(videoPlayer, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'],
      keyboard: { focused: true, global: true },
      tooltips: { controls: true, seek: true },
      quality: { default: 720, options: [360, 720] },
      storage: { enabled: true, key: 'plyr' },
    });

    // Animate video player on scroll into view
    gsap.fromTo(
      videoPlayer,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out',
        scrollTrigger: {
          trigger: videoPlayer,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }
}

// ============================================
// BUTTON HOVER ANIMATIONS
// ============================================
function initButtonHovers() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
}

// ============================================
// ACCESSIBILITY: Respect prefers-reduced-motion
// ============================================
function respectReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0);
    gsap.globalTimeline.timeScale(1);

    // Disable ScrollTrigger animations
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

    // Show all elements immediately
    document.querySelectorAll('[data-animate]').forEach((el) => {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
    });

    document.querySelectorAll('.faq-item').forEach((item) => {
      item.classList.remove('open');
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
export function initAllAnimations() {
  respectReducedMotion();

  // Stagger the initialization for better performance
  requestAnimationFrame(() => {
    animateCounters();
    initFaqAccordion();
    initStaggerAnimations();
    initSectionAnimations();
    initParallax();
    initButtonHovers();
    initVideoPlayer();

    // Refresh ScrollTrigger after all animations are set
    ScrollTrigger.refresh();
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllAnimations);
} else {
  initAllAnimations();
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});
