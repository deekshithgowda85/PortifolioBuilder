type Props = {
Background: {
  type: "none";
  backgroundColor?: string;
  gradient?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  gradientDirection?: "to right" | "to left" | "to bottom" | "to top" | "to top right" | "to bottom right" | "to bottom left" | "to top left";
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;

};
  Heading: {
    title: string;
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize: number;
    fontWeight: "300" | "400" | "500" | "600" | "700" | "800" | "900";
    fontFamily: "default" | "serif" | "sans-serif" | "monospace" | "cursive";
    color: string;
    textAlign: "left" | "center" | "right" | "justify";
    textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
    letterSpacing: number;
    lineHeight: number;
    textShadow: boolean;
    shadowColor: string;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    backgroundColor: string;
    padding: number;
    margin: number;
    borderRadius: number;
    border: boolean;
    borderColor: string;
    borderWidth: number;
    borderStyle: "solid" | "dashed" | "dotted" | "double";
    gradient: boolean;
    gradientStart: string;
    gradientEnd: string;
    gradientDirection: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-br" | "to-bl" | "to-tl";
    animation: "none" | "fade-in" | "slide-up" | "bounce" | "pulse" | "glow";
    maxWidth: number;
    responsive: boolean;
    // GSAP Animation Options (for future use)
    gsapAnimation?: "fade" | "slide" | "typewriter" | "reveal" | "none";
  };

  Grid:{
    columns: number
    gap: number
   };
    Overlay: {
    height: number;
  width?: number;
  opacity?: number;
  backgroundColor: string;
  align?: "left" | "center" | "right";
  gap?: number;
  };
  HeroOverlay: {
    backgroundImage: string;
    overlayOpacity: number;
    minHeight: number;
    // GSAP Animation Options (for future use)
    gsapAnimation?: "parallax" | "zoom" | "layered" | "none";
  }; 
  Button: {
    text: string;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size: "default" | "sm" | "lg" | "icon";
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
    // GSAP Animation Options (for future use)
    gsapAnimation?: "magnetic" | "pulse" | "shake" | "bounce" | "none";
  };
  Card: {
    title: string;
    description: string;
    content: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
    // GSAP Animation Options (for future use)
    gsapAnimation?: "slideUp" | "scale" | "flip" | "stagger" | "none";
  };
  CardCarousel: {
    images: {
      src: string;
      file?: string | null;
      alt: string;
    }[];
    autoplayDelay: number;
    showPagination: boolean;
    showNavigation: boolean;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    width?: number;
    height?: number;
  };
  Badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
  };
  Alert: {
    title: string;
    description: string;
    variant: "default" | "destructive";
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Accordion: {
    item1Title: string;
    item1Content: string;
    item2Title: string;
    item2Content: string;
    item3Title: string;
    item3Content: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Input: {
    placeholder: string;
    type: "text" | "email" | "password" | "number" | "tel" | "url";
    label: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Separator: {
    orientation: "horizontal" | "vertical";
  };
  Textarea: {
    placeholder: string;
    label: string;
    rows: number;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
  };
  Switch: {
    label: string;
    description: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Checkbox: {
    label: string;
    description: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  RadioGroup: {
    label: string;
    option1: string;
    option2: string;
    option3: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Skeleton: {
    type: "text" | "avatar" | "button" | "card";
  };
  Avatar: {
    src: string;
    alt: string;
    fallback: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    width?: number;
    height?: number;
  };
  Image: {
    src: string;
    file?: string | null; // Now stores URL string instead of File object
    alt: string;
    width?: number;
    height?: number;
    align?: "left" | "center" | "right";
    opacity?: number;
    // GSAP Animation Options (for future use)
    gsapAnimation?: "parallax" | "zoom" | "reveal" | "clipPath" | "none";
  };
  Collapsible: {
    trigger: string;
    content: string;
  };
  Dialog: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  Drawer: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  Sheet: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  Popover: {
    trigger: string;
    content: string;
  };
  HoverCard: {
    trigger: string;
    content: string;
  };
  Tooltip: {
    trigger: string;
    content: string;
  };
  Label: {
    text: string;
    htmlFor: string;
  };
  Carousel: {
    item1: string;
    item2: string;
    item3: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
  };
  Table: {
    header1: string;
    header2: string;
    header3: string;
    row1col1: string;
    row1col2: string;
    row1col3: string;
    row2col1: string;
    row2col2: string;
    row2col3: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };
  Pagination: {
    totalPages: number;
  };
  NavigationMenu: {
    title: string; 
    item1: string;
    item2: string;
    item3: string;
    align: "left" | "center" | "right" | "space-between";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
  };
  Menubar: {
    menu1: string;
    menu2: string;
    menu3: string;
  };
  Command: {
    placeholder: string;
  };
  DropdownMenu: {
    trigger: string;
    item1: string;
    item2: string;
  };
  AlertDialog: {
    trigger: string;
    title: string;
    description: string;
  };
  Form: {
    title: string;
    description: string;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
  };
  ScrollArea: {
    content: string;
    height: number;
    align: "left" | "center" | "right";
    backgroundColor?: string;
    textColor?: string;
    width?: number;
  };


};
 export type { Props };