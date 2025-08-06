/*
 * GSAP SCROLL ANIMATIONS FOR PUCK COMPONENTS
 * Install: npm install gsap
 * 
 * Usage: Import and call animations in component render functions
 */

// GSAP is now active!
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ==================== HEADING ANIMATIONS ====================
export const animateHeading = (selector: string, animationType: 'fade' | 'slide' | 'typewriter' | 'reveal' = 'fade') => {
  const element = document.querySelector(selector);
  if (!element) return;

  switch (animationType) {
    case 'fade':
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'slide':
      gsap.fromTo(element,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'typewriter':
      const text = element.textContent;
      element.textContent = '';
      gsap.to(element, {
        text: text,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      break;

    case 'reveal':
      gsap.fromTo(element,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;
  }
};

// ==================== CARD ANIMATIONS ====================
export const animateCard = (selector: string, animationType: 'slideUp' | 'scale' | 'flip' | 'stagger' = 'slideUp') => {
  const element = document.querySelector(selector);
  if (!element) return;

  switch (animationType) {
    case 'slideUp':
      gsap.fromTo(element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'scale':
      gsap.fromTo(element,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'flip':
      gsap.fromTo(element,
        { rotationY: 90, opacity: 0 },
        {
          rotationY: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'stagger':
      const cards = document.querySelectorAll(selector);
      gsap.fromTo(cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;
  }
};

// ==================== IMAGE ANIMATIONS ====================
export const animateImage = (selector: string, animationType: 'parallax' | 'zoom' | 'reveal' | 'clipPath' = 'parallax') => {
  const element = document.querySelector(selector);
  if (!element) return;

  switch (animationType) {
    case 'parallax':
      gsap.fromTo(element,
        { y: -50 },
        {
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
      break;

    case 'zoom':
      gsap.fromTo(element,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'reveal':
      gsap.fromTo(element,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;

    case 'clipPath':
      gsap.fromTo(element,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;
  }
};

// ==================== BUTTON ANIMATIONS ====================
export const animateButton = (selector: string, animationType: 'magnetic' | 'pulse' | 'shake' | 'bounce' = 'magnetic') => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) return;

  switch (animationType) {
    case 'magnetic':
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(element, { x: x * 0.1, y: y * 0.1, duration: 0.3 });
      });
      break;

    case 'pulse':
      gsap.fromTo(element,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play pause resume reverse'
          }
        }
      );
      break;

    case 'shake':
      ScrollTrigger.create({
        trigger: element,
        start: 'top 90%',
        onEnter: () => {
          gsap.fromTo(element, 
            { x: 0 },
            {
              x: "+=5",
              duration: 0.1,
              ease: 'power2.inOut',
              repeat: 7,
              yoyo: true
            }
          );
        }
      });
      break;

    case 'bounce':
      gsap.fromTo(element,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      break;
  }
};

// ==================== NAVIGATION MENU ANIMATIONS ====================
export const animateNavigation = (selector: string, animationType: 'sticky' | 'morphing' | 'slideDown' = 'sticky') => {
  const element = document.querySelector(selector);
  if (!element) return;

  switch (animationType) {
    case 'sticky':
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top -100',
        end: 'bottom bottom',
        onUpdate: (self) => {
          gsap.to(element, {
            backgroundColor: self.direction === -1 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: self.direction === -1 ? 'blur(10px)' : 'none',
            boxShadow: self.direction === -1 ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
            duration: 0.3
          });
        }
      });
      break;

    case 'morphing':
      gsap.fromTo(element,
        { borderRadius: '0px' },
        {
          borderRadius: '20px',
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 10%',
            end: 'top 5%',
            scrub: true
          }
        }
      );
      break;

    case 'slideDown':
      gsap.fromTo(element,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
      break;
  }
};

// ==================== HERO OVERLAY ANIMATIONS ====================
export const animateHeroOverlay = (selector: string, animationType: 'parallax' | 'zoom' | 'layered' = 'parallax') => {
  const element = document.querySelector(selector);
  if (!element) return;

  switch (animationType) {
    case 'parallax':
      gsap.fromTo(element,
        { y: 0 },
        {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
      break;

    case 'zoom':
      gsap.fromTo(element,
        { scale: 1 },
        {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
      break;

    case 'layered':
      const layers = element.querySelectorAll('[data-speed]');
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '1');
        gsap.fromTo(layer,
          { y: 0 },
          {
            y: -100 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });
      break;
  }
};

// ==================== UTILITY FUNCTIONS ====================
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const createStaggerAnimation = (selector: string, options: any = {}) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const defaultOptions = {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  };

  gsap.fromTo(elements, 
    { y: defaultOptions.y, opacity: defaultOptions.opacity },
    { ...defaultOptions, ...options, y: 0, opacity: 1 }
  );
};

// Export all GSAP animation functions
export const GsapAnimations = {
  animateHeading,
  animateCard,
  animateImage,
  animateButton,
  animateNavigation,
  animateHeroOverlay,
  refreshScrollTrigger,
  killAllScrollTriggers,
  createStaggerAnimation
};
