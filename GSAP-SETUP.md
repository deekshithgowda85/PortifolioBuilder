# 🎬 GSAP Scroll Animations Setup Guide

## 📋 **Components That Will Get GSAP Animations:**

### **🔥 High Priority:**

1. **Heading** - Text reveals, typewriter effects, slide animations
2. **Card** - Slide up, scale, flip effects with stagger
3. **Image** - Parallax scrolling, zoom effects, clip-path reveals
4. **Button** - Magnetic hover, pulse, shake effects
5. **Alert** - Attention-grabbing slide-in animations
6. **NavigationMenu** - Sticky header effects, morphing
7. **HeroOverlay** - Parallax backgrounds, layered animations

### **⚡ Medium Priority:**

8. **Badge** - Pop-in effects, floating animations
9. **Avatar** - Scale animations, hover effects
10. **Accordion** - Smooth expand/collapse
11. **Form** - Field reveal animations
12. **CardCarousel** - Enhanced transitions

## 🚀 **Installation Steps:**

### **Step 1: Install GSAP**

```bash
npm install gsap
```

### **Step 2: Uncomment Animation Files**

1. Open `/lib/gsap-animations.ts` - Uncomment all code
2. Open `/hooks/use-gsap-animation.ts` - Uncomment all code
3. Open `/lib/gsap-examples.ts` - Reference for implementation

### **Step 3: Add Imports to puck.config.tsx**

```typescript
import {
  useGsapAnimation,
  useStaggerAnimation,
} from "@/hooks/use-gsap-animation";
```

### **Step 4: Apply Animations to Components**

#### **Example: Heading with Fade Animation**

```typescript
Heading: {
  render: (props) => {
    const animationRef = useGsapAnimation("heading", "fade");

    return (
      <div ref={animationRef}>
        <HeadingComponent {...props} />
      </div>
    );
  };
}
```

#### **Example: Card with Slide Up Animation**

```typescript
Card: {
  render: ({
    title,
    description,
    content,
    align,
    backgroundColor,
    textColor,
    width,
    height,
  }) => {
    const animationRef = useGsapAnimation("card", "slideUp");

    return (
      <div style={{ padding: 16, display: "flex", justifyContent }}>
        <div ref={animationRef}>
          <Card style={cardStyle}>{/* Card content */}</Card>
        </div>
      </div>
    );
  };
}
```

## ✨ **Available Animation Types:**

### **Heading Animations:**

- `fade` - Fade in from bottom
- `slide` - Slide in from left
- `typewriter` - Typewriter effect
- `reveal` - Clip-path reveal

### **Card Animations:**

- `slideUp` - Slide up from bottom
- `scale` - Scale up with bounce
- `flip` - 3D flip animation
- `stagger` - Multiple cards with delay

### **Image Animations:**

- `parallax` - Parallax scroll effect
- `zoom` - Zoom in animation
- `reveal` - Circular reveal
- `clipPath` - Polygon clip reveal

### **Button Animations:**

- `magnetic` - Mouse-follow effect
- `pulse` - Pulsing scale animation
- `shake` - Shake on scroll enter
- `bounce` - Bounce in animation

### **Navigation Animations:**

- `sticky` - Dynamic background on scroll
- `morphing` - Shape changes
- `slideDown` - Slide down entrance

### **Hero Animations:**

- `parallax` - Background parallax
- `zoom` - Background zoom effect
- `layered` - Multi-layer parallax

## 🎯 **Advanced Features:**

### **Stagger Animations (Multiple Elements)**

```typescript
const containerRef = useStaggerAnimation(".card-item", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
});
```

### **Custom Scroll Triggers**

- Elements animate when 80% visible
- Reverse animations when scrolling up
- Scrub animations tied to scroll position
- Performance optimized with refresh

## 🔧 **Customization:**

### **Modify Animation Settings:**

Edit `/lib/gsap-animations.ts` to customize:

- Animation duration
- Easing functions
- Scroll trigger points
- Animation directions
- Stagger timing

### **Add New Animations:**

1. Create new animation function in `/lib/gsap-animations.ts`
2. Add type to hook in `/hooks/use-gsap-animation.ts`
3. Apply to components in `puck.config.tsx`

## 📱 **Performance Tips:**

1. **Lazy Loading**: Animations only initialize when elements are near viewport
2. **Cleanup**: Animations automatically cleanup on component unmount
3. **Refresh**: Call `refreshScrollTrigger()` after dynamic content changes
4. **Kill All**: Use `killAllScrollTriggers()` to stop all animations

## 🎨 **Visual Effects Available:**

- **Parallax Scrolling** - Background moves at different speeds
- **Reveal Animations** - Elements uncover as you scroll
- **Magnetic Interactions** - Elements follow mouse movement
- **Stagger Effects** - Sequential animations with delays
- **Morphing Shapes** - Elements change form while scrolling
- **3D Transforms** - Rotation and perspective effects
- **Text Effects** - Typewriter, reveal, and split text animations

## 🚀 **Production Ready:**

- ✅ TypeScript support
- ✅ React hooks integration
- ✅ Performance optimized
- ✅ Memory leak prevention
- ✅ Mobile responsive
- ✅ Accessibility friendly
- ✅ Easy to customize

## 📖 **Resources:**

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- [Animation Examples](/lib/gsap-examples.ts)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
