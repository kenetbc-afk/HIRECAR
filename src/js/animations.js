import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animationConfig from '../data/animations.json';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION ANIMATIONS
// ============================================
export function animateHero() {
  const heroTitle = document.querySelector('.hero-type');
  const heroSubtitle = document.querySelector('.hero .eyebrow');
  const heroCtas = document.querySelectorAll('.ctas .btn');
  const scrollCue = document.querySelector('.scrollcue');

  const heroConfig = animationConfig.animations.hero;

  // Title fade in + scale
  if (heroTitle) {
    gsap.fromTo(
      heroTitle,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: heroConfig.duration,
        easing: heroConfig.easing,
        delay: heroConfig.elements.title.delay,
      }
    );
  }

  // Subtitle fade in
  if (heroSubtitle) {
    gsap.fromTo(
      heroSubtitle,
      { opacity: 0 },
      {
        opacity: 1,
        duration: heroConfig.duration,
        delay: heroConfig.elements.subtitle.delay,
      }
    );
  }

  // CTAs fade in + slide up
  heroCtas.forEach((cta, index) => {
    gsap.fromTo(
      cta,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: heroConfig.elements.cta.delay + index * 0.1,
        easing: 'back.out',
      }
    );
  });

  // Scroll cue pulse
  if (scrollCue) {
    gsap.to(scrollCue, {
      scale: 1.1,
      repeat: -1,
      repeatDelay: 2,
      duration: 0.5,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}

// ============================================
// SERVICE CARDS STAGGER ANIMATION
// ============================================
export function animateServiceCards() {
  const cards = document.querySelectorAll('[data-animate="service-card"]');
  const cardConfig = animationConfig.animations.serviceCards;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: cardConfig.duration,
      stagger: cardConfig.staggerDelay,
      ease: cardConfig.easing,
      scrollTrigger: {
        trigger: '[data-section="services"]',
        start: 'top 80%',
        markers: false,
      },
    }
  );

  // Icon animations within cards
  cards.forEach((card) => {
    const icon = card.querySelector('[data-element="icon"]');
    if (icon) {
      gsap.fromTo(
        icon,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.2,
          ease: 'elastic.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    }
  });
}

// ============================================
// VIDEO SECTION ANIMATION
// ============================================
export function animateVideoSection() {
  const videoContainer = document.querySelector('[data-section="video"]');
  const video = document.querySelector('video[data-element="hero-video"]');
  const playButton = document.querySelector('[data-element="play-button"]');

  if (video) {
    gsap.fromTo(
      video,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: videoContainer,
          start: 'top 80%',
        },
      }
    );
  }

  // Play button pulse
  if (playButton) {
    gsap.to(playButton, {
      scale: 1.15,
      repeat: -1,
      repeatDelay: 1,
      duration: 0.6,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}

// ============================================
// BENEFIT CARDS WITH PARALLAX
// ============================================
export function animateBenefitCards() {
  const leftCards = document.querySelectorAll('[data-animate="benefit-left"]');
  const rightCards = document.querySelectorAll('[data-animate="benefit-right"]');
  const benefitConfig = animationConfig.animations.benefitCards;

  // Left cards - parallax slower
  leftCards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: benefitConfig.duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          onUpdate: (self) => {
            gsap.set(card, {
              y: self.getVelocity() * 0.1,
            });
          },
        },
      }
    );
  });

  // Right cards - parallax faster
  rightCards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: benefitConfig.duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      }
    );
  });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================
export function animateCounters() {
  const counters = document.querySelectorAll('[data-element="counter"]');
  const counterConfig = animationConfig.animations.counters;

  counters.forEach((counter) => {
    const finalValue = parseInt(counter.dataset.value, 10);
    const obj = { value: 0 };

    gsap.to(obj, {
      value: finalValue,
      duration: counterConfig.duration,
      ease: counterConfig.easing,
      onUpdate: () => {
        counter.textContent = Math.floor(obj.value);
      },
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        once: true,
      },
    });
  });
}

// ============================================
// FAQ ACCORDION
// ============================================
export function initFaqAccordion() {
  const faqItems = document.querySelectorAll('[data-element="faq-item"]');
  const faqConfig = animationConfig.animations.faqAccordion;

  faqItems.forEach((item) => {
    const button = item.querySelector('[data-element="faq-button"]');
    const content = item.querySelector('[data-element="faq-content"]');
    const icon = button?.querySelector('[data-element="faq-icon"]');

    if (button && content) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        if (isOpen) {
          // Close
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: faqConfig.duration,
            ease: faqConfig.easing.power2InOut,
          });

          if (icon) {
            gsap.to(icon, {
              rotate: 0,
              duration: faqConfig.duration,
            });
          }

          item.classList.remove('open');
        } else {
          // Open
          gsap.set(content, { height: 'auto' });
          const fullHeight = content.scrollHeight;

          gsap.to(content, {
            height: fullHeight,
            opacity: 1,
            duration: faqConfig.duration,
            ease: faqConfig.easing.power2InOut,
          });

          if (icon) {
            gsap.to(icon, {
              rotate: 180,
              duration: faqConfig.duration,
            });
          }

          item.classList.add('open');
        }
      });
    }
  });
}

// ============================================
// GENERIC FADE-IN ON SCROLL
// ============================================
export function initIntersectionObserver() {
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe all elements with data-animate-scroll
  document.querySelectorAll('[data-animate-scroll]').forEach((el) => {
    observer.observe(el);
  });
}

// ============================================
// CTA BUTTON PULSE
// ============================================
export function animateCtaButton() {
  const ctaButton = document.querySelector('[data-element="cta-primary"]');
  const ctaConfig = animationConfig.animations.ctaButton;

  if (ctaButton) {
    // Wait, then pulse
    gsap.to(ctaButton, {
      delay: ctaConfig.delay,
      onComplete: () => {
        gsap.to(ctaButton, {
          boxShadow: [
            '0 0 0 0 rgba(200, 134, 46, 0.7)',
            '0 0 0 20px rgba(200, 134, 46, 0)',
          ],
          duration: ctaConfig.duration,
          repeat: -1,
          repeatDelay: 2,
          ease: 'power1.inOut',
        });
      },
    });
  }
}

// ============================================
// PARALLAX BACKGROUND
// ============================================
export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach((element) => {
    const speed = element.dataset.parallax || '0.5';

    gsap.to(element, {
      y: () => {
        const rect = element.getBoundingClientRect();
        return (
          (window.innerHeight - rect.top) * parseFloat(speed)
        );
      },
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    });
  });
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          scrollTo: target,
          duration: 1,
          ease: 'power2.inOut',
        });
      }
    });
  });
}

// ============================================
// INIT ALL ANIMATIONS
// ============================================
export function initAllAnimations() {
  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    console.log('Animations disabled due to prefers-reduced-motion');
    return;
  }

  // Initialize all animations on page load
  animateHero();
  animateServiceCards();
  animateVideoSection();
  animateBenefitCards();
  animateCounters();
  initFaqAccordion();
  initIntersectionObserver();
  animateCtaButton();
  initParallax();
  initSmoothScroll();

  // Refresh ScrollTrigger on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
  });

  console.log('✅ All animations initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllAnimations);
} else {
  initAllAnimations();
}
