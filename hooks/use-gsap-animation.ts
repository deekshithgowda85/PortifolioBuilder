/*
 * REACT HOOK FOR GSAP SCROLL ANIMATIONS
 * Usage in Puck component render functions
 */

// GSAP hooks are now active!
import { useEffect, useRef } from 'react';
import { GsapAnimations } from '@/lib/gsap-animations';

export const useGsapAnimation = (
  animationType: 'heading' | 'card' | 'image' | 'button' | 'navigation' | 'hero',
  variant?: string,
  options?: any
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const uniqueId = `gsap-${Math.random().toString(36).substr(2, 9)}`;
    element.setAttribute('data-gsap-id', uniqueId);
    const selector = `[data-gsap-id="${uniqueId}"]`;

    switch (animationType) {
      case 'heading':
        GsapAnimations.animateHeading(selector, variant as any);
        break;
      case 'card':
        GsapAnimations.animateCard(selector, variant as any);
        break;
      case 'image':
        GsapAnimations.animateImage(selector, variant as any);
        break;
      case 'button':
        GsapAnimations.animateButton(selector, variant as any);
        break;
      case 'navigation':
        GsapAnimations.animateNavigation(selector, variant as any);
        break;
      case 'hero':
        GsapAnimations.animateHeroOverlay(selector, variant as any);
        break;
    }

    return () => {
      // Cleanup animations when component unmounts
      GsapAnimations.killAllScrollTriggers();
    };
  }, [animationType, variant, options]);

  return elementRef;
};

export const useStaggerAnimation = (selector: string, options?: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      GsapAnimations.createStaggerAnimation(selector, options);
    }, 100);

    return () => {
      clearTimeout(timer);
      GsapAnimations.killAllScrollTriggers();
    };
  }, [selector, options]);

  return containerRef;
};
