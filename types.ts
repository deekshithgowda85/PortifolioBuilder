type Props = {
BackgroundBlock: {
  type: "none" | "galaxy";
  mouseRepulsion: boolean;
  mouseInteraction: boolean;
  density: number;
  glowIntensity: number;
  saturation: number;
  hueShift: number;
};
HeadingBlock: {
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
};

  GridBlock:{
    columns: number
    gap: number
   };
    OverlayBlock: {
    height: number;
    backgroundColor: string;
  };
  LayeredBlock: {
    layers: number;
    spacing: number;
  };
  HeroOverlayBlock: {
    backgroundImage: string;
    overlayOpacity: number;
    minHeight: number;
  }; 
  ButtonBlock: {
    text: string;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size: "default" | "sm" | "lg" | "icon";
  };
  CardBlock: {
    title: string;
    description: string;
    content: string;
  };
  BadgeBlock: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
  };
  AlertBlock: {
    title: string;
    description: string;
    variant: "default" | "destructive";
  };
  AccordionBlock: {
    item1Title: string;
    item1Content: string;
    item2Title: string;
    item2Content: string;
    item3Title: string;
    item3Content: string;
  };
  InputBlock: {
    placeholder: string;
    type: "text" | "email" | "password" | "number" | "tel" | "url";
    label: string;
  };
  SeparatorBlock: {
    orientation: "horizontal" | "vertical";
  };
  TabsBlock: {
    tab1Title: string;
    tab1Content: string;
    tab2Title: string;
    tab2Content: string;
    tab3Title: string;
    tab3Content: string;
  };
  TextareaBlock: {
    placeholder: string;
    label: string;
    rows: number;
  };
  SwitchBlock: {
    label: string;
    description: string;
  };
  CheckboxBlock: {
    label: string;
    description: string;
  };
  RadioGroupBlock: {
    label: string;
    option1: string;
    option2: string;
    option3: string;
  };
  SliderBlock: {
    label: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  };
  ProgressBlock: {
    value: number;
    label: string;
  };
  SkeletonBlock: {
    type: "text" | "avatar" | "button" | "card";
  };
  AvatarBlock: {
    src: string;
    alt: string;
    fallback: string;
  };
  AspectRatioBlock: {
    ratio: number;
    src: string;
    alt: string;
  };
  CollapsibleBlock: {
    trigger: string;
    content: string;
  };
  DialogBlock: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  DrawerBlock: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  SheetBlock: {
    trigger: string;
    title: string;
    description: string;
    content: string;
  };
  PopoverBlock: {
    trigger: string;
    content: string;
  };
  HoverCardBlock: {
    trigger: string;
    content: string;
  };
  TooltipBlock: {
    trigger: string;
    content: string;
  };
  SelectBlock: {
    label: string;
    placeholder: string;
    option1: string;
    option2: string;
    option3: string;
  };
  LabelBlock: {
    text: string;
    htmlFor: string;
  };
  BreadcrumbBlock: {
    item1: string;
    item2: string;
    item3: string;
  };
  CarouselBlock: {
    item1: string;
    item2: string;
    item3: string;
  };
  TableBlock: {
    header1: string;
    header2: string;
    header3: string;
    row1col1: string;
    row1col2: string;
    row1col3: string;
    row2col1: string;
    row2col2: string;
    row2col3: string;
  };
  PaginationBlock: {
    totalPages: number;
  };
  NavigationMenuBlock: {
    item1: string;
    item2: string;
    item3: string;
  };
  MenubarBlock: {
    menu1: string;
    menu2: string;
    menu3: string;
  };
  CommandBlock: {
    placeholder: string;
  };
  ContextMenuBlock: {
    trigger: string;
    item1: string;
    item2: string;
  };
  DropdownMenuBlock: {
    trigger: string;
    item1: string;
    item2: string;
  };
  AlertDialogBlock: {
    trigger: string;
    title: string;
    description: string;
  };
  FormBlock: {
    title: string;
    description: string;
  };
  InputOTPBlock: {
    length: number;
    label: string;
  };
  ScrollAreaBlock: {
    content: string;
    height: number;
  };
  ResizableBlock: {
    panel1Title: string;
    panel2Title: string;
    panel1Content: string;
    panel2Content: string;
  };
  SidebarBlock: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
  };
  ToggleBlock: {
    label: string;
  };
  ToggleGroupBlock: {
    label: string;
    option1: string;
    option2: string;
    option3: string;
  };
  ChartBlock: {
    type: "line" | "bar" | "area" | "pie";
    title: string;
  };

};
 export type { Props };