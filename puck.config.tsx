import { DropZone, type Config } from "@measured/puck";
import {useState} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toaster } from "@/components/ui/sonner";
import { ChartContainer } from "@/components/ui/chart";
import { type Props } from "./types";
import Galaxy  from "@/components/Backgrounds/Galaxy/Galaxy";

export const config: Config<Props> = {
  components: {
    BackgroundBlock : {
  fields: {
    type: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Galaxy", value: "galaxy" },
      ],
    },
    mouseRepulsion: {
      type: "select",
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
    mouseInteraction: {
      type: "select",
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
    density: { type: "number" },
    glowIntensity: { type: "number" },
    saturation: { type: "number" },
    hueShift: { type: "number" },
  },
  defaultProps: {
    type: "galaxy",
    mouseRepulsion: true,
    mouseInteraction: true,
    density: 1.5,
    glowIntensity: 0.5,
    saturation: 0.8,
    hueShift: 240,
  },
  render: ({
  type,
  mouseRepulsion,
  mouseInteraction,
  density,
  glowIntensity,
  saturation,
  hueShift,
}) => {
  return (
    <div
   style={{
        position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "visible",
        backgroundColor: "#000", 
      }}
    >
    {type === "galaxy" && (
      <Galaxy
        mouseRepulsion={false}
        mouseInteraction={false}
        density={density ?? 1.5}
        glowIntensity={glowIntensity ?? 0.5}
        saturation={saturation ?? 0.8}
        hueShift={hueShift ?? 240}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundColor: "#000",     // ✅ ensure deep black canvas
        }}
      />
    )}

    <DropZone
      zone="background-content"
      style={{
        position: "relative",         // ✅ make DropZone part of flow
        zIndex: 1,
        display: "flex",
        flexDirection: "column",      // 👈 change to "row" if needed
        alignItems: "flex-center",
        justifyContent: "start",
        padding: "40px",
        gap: "20px",
        width: "100%",
      }}
    />
  </div>
);
},
    },
   HeadingBlock: {
  fields: {
    title: { type: "text" },
    level: {
      type: "select",
      options: [
        { label: "H1 - Main Title", value: "h1" },
        { label: "H2 - Section Title", value: "h2" },
        { label: "H3 - Subsection", value: "h3" },
        { label: "H4 - Minor Heading", value: "h4" },
        { label: "H5 - Small Heading", value: "h5" },
        { label: "H6 - Tiny Heading", value: "h6" },
      ],
    },
    fontSize: {
      type: "number",
      min: 12,
      max: 120,
      step: 2,
    },
    fontWeight: {
      type: "select",
      options: [
        { label: "Light (300)", value: "300" },
        { label: "Normal (400)", value: "400" },
        { label: "Medium (500)", value: "500" },
        { label: "Semi Bold (600)", value: "600" },
        { label: "Bold (700)", value: "700" },
        { label: "Extra Bold (800)", value: "800" },
        { label: "Black (900)", value: "900" },
      ],
    },
    fontFamily: {
      type: "select",
      options: [
        { label: "Default", value: "default" },
        { label: "Sans Serif", value: "sans-serif" },
        { label: "Serif", value: "serif" },
        { label: "Monospace", value: "monospace" },
        { label: "Cursive", value: "cursive" },
      ],
    },
    color: { type: "text" },
    textAlign: {
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
        { label: "Justify", value: "justify" },
      ],
    },
    textTransform: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "UPPERCASE", value: "uppercase" },
        { label: "lowercase", value: "lowercase" },
        { label: "Capitalize", value: "capitalize" },
      ],
    },
    letterSpacing: {
      type: "number",
      min: -2,
      max: 10,
      step: 0.1,
    },
    lineHeight: {
      type: "number",
      min: 0.8,
      max: 3,
      step: 0.1,
    },
    textShadow: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    shadowColor: { type: "text" },
    shadowBlur: {
      type: "number",
      min: 0,
      max: 20,
      step: 1,
    },
    shadowOffsetX: {
      type: "number",
      min: -10,
      max: 10,
      step: 1,
    },
    shadowOffsetY: {
      type: "number",
      min: -10,
      max: 10,
      step: 1,
    },
    backgroundColor: { type: "text" },
    padding: {
      type: "number",
      min: 0,
      max: 100,
      step: 4,
    },
    margin: {
      type: "number",
      min: 0,
      max: 100,
      step: 4,
    },
    borderRadius: {
      type: "number",
      min: 0,
      max: 50,
      step: 2,
    },
    border: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    borderColor: { type: "text" },
    borderWidth: {
      type: "number",
      min: 1,
      max: 10,
      step: 1,
    },
    borderStyle: {
      type: "select",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Dashed", value: "dashed" },
        { label: "Dotted", value: "dotted" },
        { label: "Double", value: "double" },
      ],
    },
    gradient: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    gradientStart: { type: "text" },
    gradientEnd: { type: "text" },
    gradientDirection: {
      type: "select",
      options: [
        { label: "Left to Right", value: "to-r" },
        { label: "Right to Left", value: "to-l" },
        { label: "Top to Bottom", value: "to-t" },
        { label: "Bottom to Top", value: "to-b" },
        { label: "Diagonal ↗", value: "to-tr" },
        { label: "Diagonal ↘", value: "to-br" },
        { label: "Diagonal ↙", value: "to-bl" },
        { label: "Diagonal ↖", value: "to-tl" },
      ],
    },
    animation: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Fade In", value: "fade-in" },
        { label: "Slide Up", value: "slide-up" },
        { label: "Bounce", value: "bounce" },
        { label: "Pulse", value: "pulse" },
        { label: "Glow", value: "glow" },
      ],
    },
    maxWidth: {
      type: "number",
      min: 0,
      max: 1200,
      step: 50,
    },
    responsive: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
  defaultProps: {
    title: "Heading",
    level: "h1",
    fontSize: 48,
    fontWeight: "700",
    fontFamily: "default",
    color: "#1a1a1a",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: 0,
    lineHeight: 1.2,
    textShadow: false,
    shadowColor: "#000000",
    shadowBlur: 4,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
    backgroundColor: "transparent",
    padding: 20,
    margin: 20,
    borderRadius: 0,
    border: false,
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderStyle: "solid",
    gradient: false,
    gradientStart: "#3b82f6",
    gradientEnd: "#8b5cf6",
    gradientDirection: "to-r",
    animation: "none",
    maxWidth: 0,
    responsive: true,
  },
  render: ({ 
    title,
    level,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    textAlign,
    textTransform,
    letterSpacing,
    lineHeight,
    textShadow,
    shadowColor,
    shadowBlur,
    shadowOffsetX,
    shadowOffsetY,
    backgroundColor,
    padding,
    margin,
    borderRadius,
    border,
    borderColor,
    borderWidth,
    borderStyle,
    gradient,
    gradientStart,
    gradientEnd,
    gradientDirection,
    animation,
    maxWidth,
    responsive
  }) => {
    const Tag = level as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    
    // Font family mapping
    const getFontFamily = () => {
      switch (fontFamily) {
        case "serif":
          return "Georgia, 'Times New Roman', serif";
        case "sans-serif":
          return "'Helvetica Neue', Arial, sans-serif";
        case "monospace":
          return "'Courier New', Consolas, monospace";
        case "cursive":
          return "'Comic Sans MS', cursive";
        default:
          return "inherit";
      }
    };

    // Gradient direction mapping
    const getGradientDirection = () => {
      const directions = {
        "to-r": "to right",
        "to-l": "to left",
        "to-t": "to top",
        "to-b": "to bottom",
        "to-tr": "to top right",
        "to-br": "to bottom right",
        "to-bl": "to bottom left",
        "to-tl": "to top left",
      };
      return directions[gradientDirection] || "to right";
    };

    // Animation keyframes
    const getAnimationStyle = () => {
      const animations = {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "bounce": "bounce 1s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      };
      return animations[animation] || "none";
    };

    // Base styles
    const headingStyle = {
      fontSize: responsive ? `clamp(${fontSize * 0.6}px, ${fontSize / 16}rem, ${fontSize}px)` : `${fontSize}px`,
      fontWeight,
      fontFamily: getFontFamily(),
      color: gradient ? "transparent" : color,
      textAlign: textAlign as any,
      textTransform: textTransform as any,
      letterSpacing: `${letterSpacing}px`,
      lineHeight,
      textShadow: textShadow ? `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}` : "none",
      backgroundColor,
      padding: `${padding}px`,
      margin: `${margin}px auto`,
      borderRadius: `${borderRadius}px`,
      border: border ? `${borderWidth}px ${borderStyle} ${borderColor}` : "none",
      background: gradient ? `linear-gradient(${getGradientDirection()}, ${gradientStart}, ${gradientEnd})` : backgroundColor,
      backgroundClip: gradient ? "text" : "border-box",
      WebkitBackgroundClip: gradient ? "text" : "border-box",
      WebkitTextFillColor: gradient ? "transparent" : color,
      animation: getAnimationStyle(),
      maxWidth: maxWidth > 0 ? `${maxWidth}px` : "100%",
      width: "fit-content",
    };

    return (
      <>
        {/* CSS Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translateY(0);
            }
            40%, 43% {
              transform: translateY(-15px);
            }
            70% {
              transform: translateY(-7px);
            }
            90% {
              transform: translateY(-3px);
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes glow {
            from {
              text-shadow: 0 0 5px ${shadowColor}, 0 0 10px ${shadowColor}, 0 0 15px ${shadowColor};
            }
            to {
              text-shadow: 0 0 10px ${shadowColor}, 0 0 20px ${shadowColor}, 0 0 30px ${shadowColor};
            }
          }
        `}</style>
        
        <Tag style={headingStyle}>
          {title}
        </Tag>
      </>
    );
  },
},
   GridBlock: {
      fields: {
        columns: { type: "number" },
        gap: { type: "number" },
      },
      defaultProps: {
        columns: 3,
        gap: 16,
      },
      render: ({ columns, gap }) => {
        return (
          <DropZone
            zone="my-custom-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: `${gap}px`,
              padding: "16px",
              minHeight: "200px",
              border: "2px dashed #e2e8f0",
              borderRadius: "8px",
              backgroundColor: "#f8fafc"
            }}
          />
        );
      },
    },
      OverlayBlock: {
      fields: {
        height: { type: "number" },
        backgroundColor: { type: "text" },
      },
      defaultProps: {
        height: 400,
        backgroundColor: "#f3f4f6",
      },
      render: ({ height, backgroundColor }) => {
        return (
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: `${height}px`,
            backgroundColor,
            border: "2px dashed #e2e8f0",
            borderRadius: "8px"
          }}>
            <DropZone
              zone="overlay-base"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(248, 250, 252, 0.8)",
                border: "1px dashed #cbd5e1"
              }}
            />
            <DropZone
              zone="overlay-top"
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                bottom: "20px",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px dashed #3b82f6",
                borderRadius: "4px"
              }}
            />
          </div>
        );
      },
    },

    // Layered block with multiple overlay zones
    LayeredBlock: {
      fields: {
        layers: { type: "number" },
        spacing: { type: "number" },
      },
      defaultProps: {
        layers: 3,
        spacing: 20,
      },
      render: ({ layers, spacing }) => {
        const layerElements = [];
        
        for (let i = 0; i < layers; i++) {
          layerElements.push(
            <DropZone
              key={i}
              zone={`layer-${i}`}
              style={{
                position: "absolute",
                top: `${i * spacing}px`,
                left: `${i * spacing}px`,
                right: `${i * spacing}px`,
                bottom: `${i * spacing}px`,
                zIndex: layers - i,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: `rgba(255, 255, 255, ${0.8 - (i * 0.2)})`,
                border: `2px dashed hsl(${i * 60}, 70%, 60%)`,
                borderRadius: "8px",
                minHeight: "100px"
              }}
            />
          );
        }

        return (
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: `${300 + (layers * spacing)}px`,
            backgroundColor: "#f9fafb",
            border: "2px solid #e5e7eb",
            borderRadius: "12px",
            padding: "10px"
          }}>
            {layerElements}
          </div>
        );
      },
    },

    // Hero section with background and overlay content
    HeroOverlayBlock: {
      fields: {
        backgroundImage: { type: "text" },
        overlayOpacity: { type: "number" },
        minHeight: { type: "number" },
      },
      defaultProps: {
        backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        overlayOpacity: 0.5,
        minHeight: 500,
      },
      render: ({ backgroundImage, overlayOpacity, minHeight }) => {
        return (
          <div style={{ 
            position: "relative", 
            width: "100%", 
            minHeight: `${minHeight}px`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            overflow: "hidden"
          }}>
            {/* Dark overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
              zIndex: 1
            }} />
            
            {/* Content overlay zones */}
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
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "2px dashed rgba(255, 255, 255, 0.5)",
                borderRadius: "8px",
                color: "white"
              }}
            />
            
            <DropZone
              zone="hero-top"
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                zIndex: 3,
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px dashed rgba(255, 255, 255, 0.3)",
                borderRadius: "4px"
              }}
            />
            
            <DropZone
              zone="hero-bottom"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                zIndex: 3,
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px dashed rgba(255, 255, 255, 0.3)",
                borderRadius: "4px"
              }}
            />
          </div>
        );
      },
    },
    ButtonBlock: {
      fields: {
        text: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Secondary", value: "secondary" },
            { label: "Ghost", value: "ghost" },
            { label: "Link", value: "link" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
            { label: "Large", value: "lg" },
            { label: "Icon", value: "icon" },
          ],
        },
      },
      defaultProps: {
        text: "Click me",
        variant: "default",
        size: "default",
      },
      render: ({ text, variant, size }) => (
        <div style={{ padding: 16 }}>
          <Button variant={variant} size={size}>
            {text}
          </Button>
        </div>
      ),
    },
    CardBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        title: "Card Title",
        description: "Card description",
        content: "This is the card content. You can add any text here.",
      },
      render: ({ title, description, content }) => (
        <div style={{ padding: 16 }}>
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    BadgeBlock: {
      fields: {
        text: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
          ],
        },
      },
      defaultProps: {
        text: "Badge",
        variant: "default",
      },
      render: ({ text, variant }) => (
        <div style={{ padding: 16 }}>
          <Badge variant={variant}>{text}</Badge>
        </div>
      ),
    },
    AlertBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
          ],
        },
      },
      defaultProps: {
        title: "Alert Title",
        description: "This is an alert description.",
        variant: "default",
      },
      render: ({ title, description, variant }) => (
        <div style={{ padding: 16 }}>
          <Alert variant={variant}>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </Alert>
        </div>
      ),
    },
    AccordionBlock: {
      fields: {
        item1Title: { type: "text" },
        item1Content: { type: "textarea" },
        item2Title: { type: "text" },
        item2Content: { type: "textarea" },
        item3Title: { type: "text" },
        item3Content: { type: "textarea" },
      },
      defaultProps: {
        item1Title: "What is this?",
        item1Content: "This is an accordion component that can be used to organize content into collapsible sections.",
        item2Title: "How does it work?",
        item2Content: "Click on the accordion headers to expand or collapse the content sections.",
        item3Title: "Can I customize it?",
        item3Content: "Yes, you can edit the titles and content directly in the Puck editor.",
      },
      render: ({ item1Title, item1Content, item2Title, item2Content, item3Title, item3Content }) => (
        <div style={{ padding: 16 }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item1Title}</AccordionTrigger>
              <AccordionContent>{item1Content}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{item2Title}</AccordionTrigger>
              <AccordionContent>{item2Content}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{item3Title}</AccordionTrigger>
              <AccordionContent>{item3Content}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    InputBlock: {
      fields: {
        placeholder: { type: "text" },
        type: {
          type: "select",
          options: [
            { label: "Text", value: "text" },
            { label: "Email", value: "email" },
            { label: "Password", value: "password" },
            { label: "Number", value: "number" },
            { label: "Telephone", value: "tel" },
            { label: "URL", value: "url" },
          ],
        },
        label: { type: "text" },
      },
      defaultProps: {
        placeholder: "Enter your text here...",
        type: "text",
        label: "Input Label",
      },
      render: ({ placeholder, type, label }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {label}
            </label>
            <Input type={type} placeholder={placeholder} />
          </div>
        </div>
      ),
    },
    SeparatorBlock: {
      fields: {
        orientation: {
          type: "select",
          options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
        },
      },
      defaultProps: {
        orientation: "horizontal",
      },
      render: ({ orientation }) => (
        <div style={{ padding: 16 }}>
          <Separator orientation={orientation} />
        </div>
      ),
    },
    TabsBlock: {
      fields: {
        tab1Title: { type: "text" },
        tab1Content: { type: "textarea" },
        tab2Title: { type: "text" },
        tab2Content: { type: "textarea" },
        tab3Title: { type: "text" },
        tab3Content: { type: "textarea" },
      },
      defaultProps: {
        tab1Title: "Account",
        tab1Content: "Make changes to your account here. Click save when you're done.",
        tab2Title: "Password",
        tab2Content: "Change your password here. After saving, you'll be logged out.",
        tab3Title: "Settings",
        tab3Content: "Manage your account settings and preferences.",
      },
      render: ({ tab1Title, tab1Content, tab2Title, tab2Content, tab3Title, tab3Content }) => (
        <div style={{ padding: 16 }}>
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">{tab1Title}</TabsTrigger>
              <TabsTrigger value="password">{tab2Title}</TabsTrigger>
              <TabsTrigger value="settings">{tab3Title}</TabsTrigger>
            </TabsList>
            <TabsContent value="account">{tab1Content}</TabsContent>
            <TabsContent value="password">{tab2Content}</TabsContent>
            <TabsContent value="settings">{tab3Content}</TabsContent>
          </Tabs>
        </div>
      ),
    },
    TextareaBlock: {
      fields: {
        placeholder: { type: "text" },
        label: { type: "text" },
        rows: { type: "number" },
      },
      defaultProps: {
        placeholder: "Type your message here...",
        label: "Message",
        rows: 4,
      },
      render: ({ placeholder, label, rows }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-2">
            <Label>{label}</Label>
            <Textarea placeholder={placeholder} rows={rows} />
          </div>
        </div>
      ),
    },
    SwitchBlock: {
      fields: {
        label: { type: "text" },
        description: { type: "text" },
      },
      defaultProps: {
        label: "Airplane mode",
        description: "Turn on airplane mode to disable all wireless connections.",
      },
      render: ({ label, description }) => (
        <div style={{ padding: 16 }}>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">{label}</Label>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      ),
    },
    CheckboxBlock: {
      fields: {
        label: { type: "text" },
        description: { type: "text" },
      },
      defaultProps: {
        label: "Accept terms and conditions",
        description: "You agree to our Terms of Service and Privacy Policy.",
      },
      render: ({ label, description }) => (
        <div style={{ padding: 16 }}>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">{label}</Label>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      ),
    },
    RadioGroupBlock: {
      fields: {
        label: { type: "text" },
        option1: { type: "text" },
        option2: { type: "text" },
        option3: { type: "text" },
      },
      defaultProps: {
        label: "Select your favorite framework",
        option1: "React",
        option2: "Vue",
        option3: "Angular",
      },
      render: ({ label, option1, option2, option3 }) => (
        <div style={{ padding: 16 }}>
          <RadioGroup defaultValue="react">
            <Label>{label}</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="react" id="react" />
                <Label htmlFor="react">{option1}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vue" id="vue" />
                <Label htmlFor="vue">{option2}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="angular" id="angular" />
                <Label htmlFor="angular">{option3}</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      ),
    },
    SliderBlock: {
      fields: {
        label: { type: "text" },
        min: { type: "number" },
        max: { type: "number" },
        step: { type: "number" },
        defaultValue: { type: "number" },
      },
      defaultProps: {
        label: "Volume",
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
      },
      render: ({ label, min, max, step, defaultValue }) => (
        <div style={{ padding: 16 }}>
          <Label>{label}</Label>
          <Slider defaultValue={[defaultValue]} max={max} min={min} step={step} className="w-full" />
        </div>
      ),
    },
    ProgressBlock: {
      fields: {
        value: { type: "number" },
        label: { type: "text" },
      },
      defaultProps: {
        value: 33,
        label: "Loading...",
      },
      render: ({ value, label }) => (
        <div style={{ padding: 16 }}>
          <Label>{label}</Label>
          <Progress value={value} className="w-full" />
        </div>
      ),
    },
    SkeletonBlock: {
      fields: {
        type: {
          type: "select",
          options: [
            { label: "Text", value: "text" },
            { label: "Avatar", value: "avatar" },
            { label: "Button", value: "button" },
            { label: "Card", value: "card" },
          ],
        },
      },
      defaultProps: {
        type: "text",
      },
      render: ({ type }) => (
        <div style={{ padding: 16 }}>
          {type === "text" && <Skeleton className="h-4 w-full" />}
          {type === "avatar" && <Skeleton className="h-12 w-12 rounded-full" />}
          {type === "button" && <Skeleton className="h-10 w-20" />}
          {type === "card" && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          )}
        </div>
      ),
    },
    AvatarBlock: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        fallback: { type: "text" },
      },
      defaultProps: {
        src: "https://github.com/shadcn.png",
        alt: "@shadcn",
        fallback: "CN",
      },
      render: ({ src, alt, fallback }) => (
        <div style={{ padding: 16 }}>
          <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    AspectRatioBlock: {
      fields: {
        ratio: { type: "number" },
        src: { type: "text" },
        alt: { type: "text" },
      },
      defaultProps: {
        ratio: 16 / 9,
        src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
        alt: "Photo by Drew Beamer",
      },
      render: ({ ratio, src, alt }) => (
        <div style={{ padding: 16 }}>
          <AspectRatio ratio={ratio} className="bg-muted">
            <img src={src} alt={alt} className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      ),
    },
    CollapsibleBlock: {
      fields: {
        trigger: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        trigger: "Click to expand",
        content: "This is the collapsible content. You can put any text or components here.",
      },
      render: ({ trigger, content }) => (
        <div style={{ padding: 16 }}>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center space-x-2">
              <span>{trigger}</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p>{content}</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      ),
    },
    DialogBlock: {
      fields: {
        trigger: { type: "text" },
        title: { type: "text" },
        description: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        trigger: "Open Dialog",
        title: "Edit Profile",
        description: "Make changes to your profile here. Click save when you're done.",
        content: "This is the dialog content. You can add any components or text here.",
      },
      render: ({ trigger, title, description, content }) => (
        <div style={{ padding: 16 }}>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div>{content}</div>
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
    DrawerBlock: {
      fields: {
        trigger: { type: "text" },
        title: { type: "text" },
        description: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        trigger: "Open Drawer",
        title: "Edit Profile",
        description: "Make changes to your profile here. Click save when you're done.",
        content: "This is the drawer content. You can add any components or text here.",
      },
      render: ({ trigger, title, description, content }) => (
        <div style={{ padding: 16 }}>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">{content}</div>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
    SheetBlock: {
      fields: {
        trigger: { type: "text" },
        title: { type: "text" },
        description: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        trigger: "Open Sheet",
        title: "Edit Profile",
        description: "Make changes to your profile here. Click save when you're done.",
        content: "This is the sheet content. You can add any components or text here.",
      },
      render: ({ trigger, title, description, content }) => (
        <div style={{ padding: 16 }}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>{description}</SheetDescription>
              </SheetHeader>
              <div className="mt-4">{content}</div>
            </SheetContent>
          </Sheet>
        </div>
      ),
    },
    PopoverBlock: {
      fields: {
        trigger: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        trigger: "Click me",
        content: "This is the popover content.",
      },
      render: ({ trigger, content }) => (
        <div style={{ padding: 16 }}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>{content}</p>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    HoverCardBlock: {
      fields: {
        trigger: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        trigger: "Hover me",
        content: "This is the hover card content.",
      },
      render: ({ trigger, content }) => (
        <div style={{ padding: 16 }}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p>{content}</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      ),
    },
    TooltipBlock: {
      fields: {
        trigger: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        trigger: "Hover me",
        content: "This is a tooltip.",
      },
      render: ({ trigger, content }) => (
        <div style={{ padding: 16 }}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">{trigger}</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{content}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ),
    },
    SelectBlock: {
      fields: {
        label: { type: "text" },
        placeholder: { type: "text" },
        option1: { type: "text" },
        option2: { type: "text" },
        option3: { type: "text" },
      },
      defaultProps: {
        label: "Select an option",
        placeholder: "Choose an option",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
      },
      render: ({ label, placeholder, option1, option2, option3 }) => (
        <div style={{ padding: 16 }}>
          <Label>{label}</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">{option1}</SelectItem>
              <SelectItem value="option2">{option2}</SelectItem>
              <SelectItem value="option3">{option3}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
    },
    LabelBlock: {
      fields: {
        text: { type: "text" },
        htmlFor: { type: "text" },
      },
      defaultProps: {
        text: "Label",
        htmlFor: "input",
      },
      render: ({ text, htmlFor }) => (
        <div style={{ padding: 16 }}>
          <Label htmlFor={htmlFor}>{text}</Label>
        </div>
      ),
    },
    BreadcrumbBlock: {
      fields: {
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
      },
      defaultProps: {
        item1: "Home",
        item2: "Components",
        item3: "Breadcrumb",
      },
      render: ({ item1, item2, item3 }) => (
        <div style={{ padding: 16 }}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">{item1}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">{item2}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{item3}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ),
    },
    CarouselBlock: {
      fields: {
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
      },
      defaultProps: {
        item1: "Slide 1",
        item2: "Slide 2",
        item3: "Slide 3",
      },
      render: ({ item1, item2, item3 }) => (
        <div style={{ padding: 16 }}>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{item1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{item2}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{item3}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ),
    },
    TableBlock: {
      fields: {
        header1: { type: "text" },
        header2: { type: "text" },
        header3: { type: "text" },
        row1col1: { type: "text" },
        row1col2: { type: "text" },
        row1col3: { type: "text" },
        row2col1: { type: "text" },
        row2col2: { type: "text" },
        row2col3: { type: "text" },
      },
      defaultProps: {
        header1: "Name",
        header2: "Email",
        header3: "Role",
        row1col1: "John Doe",
        row1col2: "john@example.com",
        row1col3: "Admin",
        row2col1: "Jane Smith",
        row2col2: "jane@example.com",
        row2col3: "User",
      },
      render: ({ header1, header2, header3, row1col1, row1col2, row1col3, row2col1, row2col2, row2col3 }) => (
        <div style={{ padding: 16 }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{header1}</TableHead>
                <TableHead>{header2}</TableHead>
                <TableHead>{header3}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{row1col1}</TableCell>
                <TableCell>{row1col2}</TableCell>
                <TableCell>{row1col3}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{row2col1}</TableCell>
                <TableCell>{row2col2}</TableCell>
                <TableCell>{row2col3}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
    },
    PaginationBlock: {
      fields: {
        totalPages: { type: "number" },
      },
      defaultProps: {
        totalPages: 10,
      },
      render: ({ totalPages }) => (
        <div style={{ padding: 16 }}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ),
    },
    NavigationMenuBlock: {
      fields: {
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
      },
      defaultProps: {
        item1: "Components",
        item2: "Documentation",
        item3: "About",
      },
      render: ({ item1, item2, item3 }) => (
        <div style={{ padding: 16 }}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{item1}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">{item1}</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {item2}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {item3}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ),
    },
    MenubarBlock: {
      fields: {
        menu1: { type: "text" },
        menu2: { type: "text" },
        menu3: { type: "text" },
      },
      defaultProps: {
        menu1: "File",
        menu2: "Edit",
        menu3: "View",
      },
      render: ({ menu1, menu2, menu3 }) => (
        <div style={{ padding: 16 }}>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>{menu1}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>{menu2}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>{menu3}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Zoom In</MenubarItem>
                <MenubarItem>Zoom Out</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    CommandBlock: {
      fields: {
        placeholder: { type: "text" },
      },
      defaultProps: {
        placeholder: "Type a command or search...",
      },
      render: ({ placeholder }) => (
        <div style={{ padding: 16 }}>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      ),
    },
    ContextMenuBlock: {
      fields: {
        trigger: { type: "text" },
        item1: { type: "text" },
        item2: { type: "text" },
      },
      defaultProps: {
        trigger: "Right click me",
        item1: "Copy",
        item2: "Paste",
      },
      render: ({ trigger, item1, item2 }) => (
        <div style={{ padding: 16 }}>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              {trigger}
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>{item1}</ContextMenuItem>
              <ContextMenuItem>{item2}</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Share</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      ),
    },
    DropdownMenuBlock: {
      fields: {
        trigger: { type: "text" },
        item1: { type: "text" },
        item2: { type: "text" },
      },
      defaultProps: {
        trigger: "Open Menu",
        item1: "Profile",
        item2: "Settings",
      },
      render: ({ trigger, item1, item2 }) => (
        <div style={{ padding: 16 }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{trigger}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>{item1}</DropdownMenuItem>
              <DropdownMenuItem>{item2}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
    AlertDialogBlock: {
      fields: {
        trigger: { type: "text" },
        title: { type: "text" },
        description: { type: "text" },
      },
      defaultProps: {
        trigger: "Delete Account",
        title: "Are you absolutely sure?",
        description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      },
      render: ({ trigger, title, description }) => (
        <div style={{ padding: 16 }}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">{trigger}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ),
    },
    FormBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
      },
      defaultProps: {
        title: "Form Title",
        description: "This is a form component. You can add form fields here.",
      },
      render: ({ title, description }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      ),
    },
    InputOTPBlock: {
      fields: {
        length: { type: "number" },
        label: { type: "text" },
      },
      defaultProps: {
        length: 6,
        label: "One-Time Password",
      },
      render: ({ length, label }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-2">
            <Label>{label}</Label>
            <InputOTP maxLength={length} render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} index={index} />
                ))}
              </InputOTPGroup>
            )} />
          </div>
        </div>
      ),
    },
    ScrollAreaBlock: {
      fields: {
        content: { type: "textarea" },
        height: { type: "number" },
      },
      defaultProps: {
        content: "This is scrollable content. You can add a lot of text here and it will be scrollable within the defined height.",
        height: 200,
      },
      render: ({ content, height }) => (
        <div style={{ padding: 16 }}>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <div className="space-y-4">
              <p>{content}</p>
              <p>More content here...</p>
              <p>Even more content...</p>
            </div>
          </ScrollArea>
        </div>
      ),
    },
    ResizableBlock: {
      fields: {
        panel1Title: { type: "text" },
        panel2Title: { type: "text" },
        panel1Content: { type: "textarea" },
        panel2Content: { type: "textarea" },
      },
      defaultProps: {
        panel1Title: "Panel 1",
        panel2Title: "Panel 2",
        panel1Content: "This is the content of panel 1. You can resize the panels by dragging the handle.",
        panel2Content: "This is the content of panel 2. The panels can be resized to your preference.",
      },
      render: ({ panel1Title, panel2Title, panel1Content, panel2Content }) => (
        <div style={{ padding: 16 }}>
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-full rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{panel1Title}</h3>
                  <p className="text-sm text-muted-foreground">{panel1Content}</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{panel2Title}</h3>
                  <p className="text-sm text-muted-foreground">{panel2Content}</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      ),
    },
    SidebarBlock: {
      fields: {
        title: { type: "text" },
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
      },
      defaultProps: {
        title: "Sidebar",
        item1: "Dashboard",
        item2: "Settings",
        item3: "Profile",
      },
      render: ({ title, item1, item2, item3 }) => (
        <div style={{ padding: 16 }}>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuButton>{title}</SidebarMenuButton>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>{item1}</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>{item2}</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>{item3}</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </div>
      ),
    },
    ToggleBlock: {
      fields: {
        label: { type: "text" },
      },
      defaultProps: {
        label: "Toggle",
      },
      render: ({ label }) => (
        <div style={{ padding: 16 }}>
          <Toggle aria-label={label}>
            <span>{label}</span>
          </Toggle>
        </div>
      ),
    },
    ToggleGroupBlock: {
      fields: {
        label: { type: "text" },
        option1: { type: "text" },
        option2: { type: "text" },
        option3: { type: "text" },
      },
      defaultProps: {
        label: "Select an option",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
      },
      render: ({ label, option1, option2, option3 }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-2">
            <Label>{label}</Label>
            <ToggleGroup type="single">
              <ToggleGroupItem value="option1" aria-label={option1}>
                {option1}
              </ToggleGroupItem>
              <ToggleGroupItem value="option2" aria-label={option2}>
                {option2}
              </ToggleGroupItem>
              <ToggleGroupItem value="option3" aria-label={option3}>
                {option3}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      ),
    },
    ChartBlock: {
      fields: {
        type: {
          type: "select",
          options: [
            { label: "Line", value: "line" },
            { label: "Bar", value: "bar" },
            { label: "Area", value: "area" },
            { label: "Pie", value: "pie" },
          ],
        },
        title: { type: "text" },
      },
      defaultProps: {
        type: "line",
        title: "Chart",
      },
      render: ({ type, title }) => (
        <div style={{ padding: 16 }}>
          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <div className="h-[200px] w-full rounded-md border bg-muted/50 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">{type.charAt(0).toUpperCase() + type.slice(1)} Chart</p>
            </div>
          </div>
        </div>
      ),
    },

  },
};

export default config;
