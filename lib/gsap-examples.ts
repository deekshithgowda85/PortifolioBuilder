/*
 * EXAMPLES: HOW TO ADD GSAP ANIMATIONS TO PUCK COMPONENTS
 * 
 * 1. Install GSAP: npm install gsap
 * 2. Uncomment the code in /lib/gsap-animations.ts
 * 3. Uncomment the code in /hooks/use-gsap-animation.ts
 * 4. Add animations to your components as shown below
 */

// ==================== HEADING COMPONENT WITH ANIMATIONS ====================
/*
// In puck.config.tsx - Heading component
render: (props) => {
  const animationRef = useGsapAnimation('heading', 'fade'); // 'fade', 'slide', 'typewriter', 'reveal'
  
  return (
    <div ref={animationRef}>
      <HeadingComponent {...props} />
    </div>
  );
}
*/

// ==================== CARD COMPONENT WITH ANIMATIONS ====================
/*
// In puck.config.tsx - Card component  
render: ({ title, description, content, align, backgroundColor, textColor, width, height }) => {
  const animationRef = useGsapAnimation('card', 'slideUp'); // 'slideUp', 'scale', 'flip', 'stagger'
  
  let justifyContent = "center";
  if (align === "left") justifyContent = "flex-start";
  if (align === "right") justifyContent = "flex-end";
  
  const cardStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(width && { width: `${width}px` }),
    ...(height && { height: `${height}px` }),
  };
  
  return (
    <div style={{ padding: 16, display: "flex", justifyContent }}>
      <div ref={animationRef}>
        <Card style={cardStyle}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
*/

// ==================== IMAGE COMPONENT WITH ANIMATIONS ====================
/*
// In puck.config.tsx - Image component
render: ({ src, file, alt, width, height, align, opacity }) => {
  const animationRef = useGsapAnimation('image', 'parallax'); // 'parallax', 'zoom', 'reveal', 'clipPath'
  
  let justifyContent = "center";
  if (align === "left") justifyContent = "flex-start";
  if (align === "right") justifyContent = "flex-end";
  
  const imageSource = file || src;
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent,
        alignItems: "center",
        opacity: opacity ?? 1,
        margin: "0 auto",
      }}
    >
      <div ref={animationRef} style={{ overflow: 'hidden', borderRadius: 8 }}>
        <Image
          src={imageSource}
          alt={alt}
          width={width || 400}
          height={height || 225}
          style={{
            width: width ? `${width}px` : "auto",
            height: height ? `${height}px` : "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
*/

// ==================== BUTTON COMPONENT WITH ANIMATIONS ====================
/*
// In puck.config.tsx - Button component
render: ({ text, variant, size, align, backgroundColor, textColor, width, height }) => {
  const animationRef = useGsapAnimation('button', 'magnetic'); // 'magnetic', 'pulse', 'shake', 'bounce'
  
  let justifyContent = "center";
  if (align === "left") justifyContent = "flex-start";
  if (align === "right") justifyContent = "flex-end";
  
  const buttonStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(width && { width: `${width}px` }),
    ...(height && { height: `${height}px` }),
  };
  
  return (
    <div style={{ padding: 16, display: "flex", justifyContent }}>
      <div ref={animationRef}>
        <Button variant={variant} size={size} style={buttonStyle}>
          {text}
        </Button>
      </div>
    </div>
  );
}
*/

// ==================== NAVIGATION MENU WITH ANIMATIONS ====================
/*
// In puck.config.tsx - NavigationMenu component
render: ({ title, item1, item2, item3, align, backgroundColor, textColor, width, height }) => {
  const animationRef = useGsapAnimation('navigation', 'sticky'); // 'sticky', 'morphing', 'slideDown'
  
  let justifyContent = "space-between";
  if (align === "left") justifyContent = "flex-start";
  if (align === "center") justifyContent = "center";
  if (align === "right") justifyContent = "flex-end";
  
  const containerStyle = {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent,
    width: width ? `${width}px` : "100%",
    ...(height && { height: `${height}px` }),
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };
  
  return (
    <div ref={animationRef} style={containerStyle}>
      <span className="text-3xl font-bold font-serif text-white drop-shadow">
        {title}
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>{item1}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>{item2}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>{item3}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
*/

// ==================== HERO OVERLAY WITH ANIMATIONS ====================
/*
// In puck.config.tsx - HeroOverlay component
render: ({ backgroundImage, overlayOpacity, minHeight }) => {
  const animationRef = useGsapAnimation('hero', 'parallax'); // 'parallax', 'zoom', 'layered'
  
  return (
    <div ref={animationRef} style={{ 
      position: "relative", 
      width: "100%", 
      minHeight: `${minHeight}px`,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "12px",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        zIndex: 1
      }} />
      
      <DropZone
        zone="hero-background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "80%",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
}
*/

// ==================== STAGGER ANIMATIONS FOR MULTIPLE ELEMENTS ====================
/*
// For components with multiple items (like CardCarousel, Table rows, etc.)
const StaggerExample = () => {
  const containerRef = useStaggerAnimation('.stagger-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
  });

  return (
    <div ref={containerRef}>
      <div className="stagger-item">Item 1</div>
      <div className="stagger-item">Item 2</div>
      <div className="stagger-item">Item 3</div>
    </div>
  );
};
*/

// ==================== INSTALLATION STEPS ====================
/*
1. Install GSAP:
   npm install gsap

2. Uncomment code in these files:
   - /lib/gsap-animations.ts
   - /hooks/use-gsap-animation.ts

3. Add imports to your puck.config.tsx:
   import { useGsapAnimation, useStaggerAnimation } from '@/hooks/use-gsap-animation';

4. Apply animations to components as shown in examples above

5. Test animations by scrolling through your pages

6. Customize timing, easing, and effects in /lib/gsap-animations.ts
*/

export {};
