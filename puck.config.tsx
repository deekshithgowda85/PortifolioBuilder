import { DropZone, type Config } from "@measured/puck";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type Props } from "./types";
import Galaxy  from "@/components/Backgrounds/Galaxy/Galaxy";
import Particles from "@/components/Backgrounds/Particles/Particles";
import {CardCarousel } from "@/components/ui/card-carousel";
import { HeadingComponent } from "@/components/ui/heading-component"
import Image from "next/image";
// GSAP Animation Imports
import { useGsapAnimation, useStaggerAnimation } from "@/hooks/use-gsap-animation";

export const config: Config<Props> = {
  components: {
    Background: {
      fields: {
        type: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Galaxy", value: "galaxy" },
            { label: "Particles", value: "particles" },
          ],
        },
        // Background Color and Gradient for "none" option
        backgroundColor: { 
          type: "text", 
          label: "Background Color (None Type)"
        },
        gradient: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
          label: "Enable Gradient (None Type)"
        },
        gradientStart: { 
          type: "text", 
          label: "Gradient Start Color (None Type)"
        },
        gradientEnd: { 
          type: "text", 
          label: "Gradient End Color (None Type)"
        },
        gradientDirection: {
          type: "select",
          label: "Gradient Direction (None Type)",
          options: [
            { label: "Left to Right", value: "to right" },
            { label: "Right to Left", value: "to left" },
            { label: "Top to Bottom", value: "to bottom" },
            { label: "Bottom to Top", value: "to top" },
            { label: "Diagonal ↗", value: "to top right" },
            { label: "Diagonal ↘", value: "to bottom right" },
            { label: "Diagonal ↙", value: "to bottom left" },
            { label: "Diagonal ↖", value: "to top left" },
          ]
        },
        // Galaxy settings
        mouseRepulsion: {
          type: "select",
          options: [
            { label: "True", value: true },
            { label: "False", value: false },
          ],
          label: "Mouse Repulsion (Galaxy)"
        },
        mouseInteraction: {
          type: "select",
          options: [
            { label: "True", value: true },
            { label: "False", value: false },
          ],
          label: "Mouse Interaction (Galaxy)"
        },
        density: { 
          type: "number", 
          label: "Density (Galaxy)"
        },
        glowIntensity: { 
          type: "number", 
          label: "Glow Intensity (Galaxy)"
        },
        saturation: { 
          type: "number", 
          label: "Saturation (Galaxy)"
        },
        hueShift: { 
          type: "number", 
          label: "Hue Shift (Galaxy)"
        },
        // Particles settings
        particleCount: { 
          type: "number", 
          label: "Particle Count (Particles)"
        },
        particleSpeed: { 
          type: "number", 
          label: "Particle Speed (Particles)"
        },
        particleSize: { 
          type: "number", 
          label: "Particle Size (Particles)"
        },
      },
      defaultProps: {
        type: "galaxy",
        backgroundColor: "#000000",
        gradient: false,
        gradientStart: "#3b82f6",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        mouseRepulsion: true,
        mouseInteraction: true,
        density: 1.5,
        glowIntensity: 0.5,
        saturation: 0.8,
        hueShift: 240,
        particleCount: 100,
        particleSpeed: 0.1,
        particleSize: 100,
      },
      render: ({
        type,
        backgroundColor,
        gradient,
        gradientStart,
        gradientEnd,
        gradientDirection,
        mouseRepulsion,
        mouseInteraction,
        density,
        glowIntensity,
        saturation,
        hueShift,
        particleCount,
        particleSpeed,
        particleSize,
      }) => {
        // Create background style based on type
        let backgroundStyle = {};
        
        if (type === "none") {
          if (gradient) {
            backgroundStyle = {
              background: `linear-gradient(${gradientDirection}, ${gradientStart}, ${gradientEnd})`,
            };
          } else {
            backgroundStyle = {
              backgroundColor: backgroundColor || "#000000",
            };
          }
        } else {
          backgroundStyle = {
            backgroundColor: "#000",
          };
        }

        return (
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "100vh",
              overflow: "visible",
              pointerEvents: "none", // Allow clicks to pass through to content
              ...backgroundStyle,
            }}
          >
            {type === "galaxy" && (
              <Galaxy
                mouseRepulsion={mouseRepulsion ?? false}
                mouseInteraction={mouseInteraction ?? false}
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
                  backgroundColor: "#000",
                  pointerEvents: "none",
                }}
              />
            )}

            {type === "particles" && (
              <div 
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <Particles
                  particleCount={particleCount ?? 100}
                  particleSpread={10}
                  speed={particleSpeed ?? 0.1}
                  particleColors={["#ffffff", "#ffffff", "#ffffff"]}
                  moveParticlesOnHover={true}
                  particleHoverFactor={1}
                  alphaParticles={false}
                  particleBaseSize={particleSize ?? 100}
                  sizeRandomness={0.5}
                  cameraDistance={10}
                  disableRotation={false}
                  className=""
                />
              </div>
            )}

            <DropZone
              zone="background-content"
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "20px",
                gap: "20px",
                width: "100%",
                minHeight: "100vh",
                pointerEvents: "auto", // Allow interactions with content
              }}
            />
          </div>
        );
      },
    },
    Heading: {
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
        gsapAnimation: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Fade In", value: "fade" },
            { label: "Slide Animation", value: "slide" },
            { label: "Typewriter Effect", value: "typewriter" },
            { label: "Text Reveal", value: "reveal" },
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
        padding: 10,
        margin: 10,
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
        gsapAnimation: "none",
      },
      render: (props) => <HeadingComponent {...props} />,
    },
    Grid: {
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
              backgroundColor: "transparent"
            }}
          />
        );
      },
    },
    Overlay: {
      fields: {
        height: { type: "number" },
        width: { type: "number" }, // added
        opacity: { type: "number", min: 0, max: 1, step: 0.05 }, // added
        backgroundColor: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
          label: "Alignment",
        }, // added
         gap: { type: "number", min: 0, max: 100, step: 4 },
      },
      defaultProps: {
        height: 400,
        width: 600, // added
        opacity: 1, // added
        backgroundColor: "#f3f4f6",
        align: "center", // added
        gap: 16, 
      },
      render: ({ height, width, opacity, backgroundColor, align ,gap}) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        // Parse the background color to apply opacity only to background
        const getBackgroundWithOpacity = (bgColor, opacityValue) => {
          if (!bgColor || bgColor === "transparent") {
            return `rgba(243, 244, 246, ${opacityValue})`; // Default color with opacity
          }
          
          // If it's a hex color, convert to rgba
          if (bgColor.startsWith('#')) {
            const hex = bgColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
          }
          
          // If it's already rgba or rgb, modify it
          if (bgColor.startsWith('rgba(')) {
            return bgColor.replace(/,\s*[\d.]+\)$/, `, ${opacityValue})`);
          }
          
          if (bgColor.startsWith('rgb(')) {
            return bgColor.replace('rgb(', 'rgba(').replace(')', `, ${opacityValue})`);
          }
          
          // For named colors, use the color with opacity overlay
          return bgColor;
        };

        return (
          <div style={{ 
            position: "relative", 
            width: width ? `${width}px` : "100%", 
            height: `${height}px`,
            display: "flex",
            justifyContent,
            alignItems: "center",
            overflow: "hidden"
          }}>
            {/* Background layer with opacity */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: getBackgroundWithOpacity(backgroundColor || "transparent", opacity || 1),
              zIndex: 0,
            }} />
            
            {/* Content layer - full opacity */}
            <DropZone
              zone="overlay-base"
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent,
                gap: gap ? `${gap}px` : undefined,
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                margin: "4px",
              }}
            />
          </div>
        );
      },
    },
    // Hero section with background and overlay content
    HeroOverlay: {
      fields: {
        backgroundImage: { type: "text" },
        overlayOpacity: { type: "number" },
        minHeight: { type: "number" },
        gsapAnimation: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Parallax Scroll", value: "parallax" },
            { label: "Zoom Effect", value: "zoom" },
            { label: "Layered Animation", value: "layered" },
          ],
        },
      },
      defaultProps: {
        backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        overlayOpacity: 0.5,
        minHeight: 500,
        gsapAnimation: "none",
      },
      render: (props) => {
        const { backgroundImage, overlayOpacity, minHeight } = props;
        
        return (
          <div style={{ 
            position: "relative", 
            width: "100%", 
            minHeight: `${minHeight}px`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                backgroundColor: "transparent",
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
                backgroundColor: "transparent",
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
                backgroundColor: "transparent",
              }}
            />
          </div>
        );
      },
    },
    Button: {
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
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 50, max: 800 },
        height: { type: "number", min: 20, max: 200 },
        gsapAnimation: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Magnetic Effect", value: "magnetic" },
            { label: "Pulse Animation", value: "pulse" },
            { label: "Shake Effect", value: "shake" },
            { label: "Bounce Animation", value: "bounce" },
          ],
        },
      },
      defaultProps: {
        text: "Click me",
        variant: "default",
        size: "default",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
        height: 0,
        gsapAnimation: "none",
      },
      render: (props) => {
        const { text, variant, size, align, backgroundColor, textColor, width, height } = props;
        
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
            <Button variant={variant} size={size} style={buttonStyle}>
              {text}
            </Button>
          </div>
        );
      },
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        content: { type: "textarea" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 800 },
        height: { type: "number", min: 100, max: 600 },
        gsapAnimation: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Slide Up", value: "slideUp" },
            { label: "Scale Effect", value: "scale" },
            { label: "Flip Animation", value: "flip" },
            { label: "Stagger Effect", value: "stagger" },
          ],
        },
      },
      defaultProps: {
        title: "Card Title",
        description: "Card description",
        content: "This is the card content. You can add any text here.",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
        height: 0,
        gsapAnimation: "none",
      },
      render: (props) => {
        const { title, description, content, align, backgroundColor, textColor, width, height } = props;
        
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
        );
      },
    },
   CardCarousel: {
  fields: {
    images: {
      type: "array",
      arrayFields: {
        src: {
          type: "text",
          label: "Image URL",
          placeholder: "https://example.com/image.jpg",
        },
        file: { 
          type: "custom",
          label: "Upload Image from PC",
          render: ({ name, onChange, value }) => {
            // Create a simple file upload without hooks for now
            const handleFileUpload = async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('/api/upload', {
                  method: 'POST',
                  body: formData,
                });

                const result = await response.json();
                if (result.success) {
                  onChange(result.url); // Store the URL instead of the file
                  alert('Upload successful!');
                } else {
                  alert('Upload failed: ' + result.error);
                }
              } catch (error) {
                alert('Upload failed: ' + error.message);
              }
            };

            return (
              <div className="space-y-2">
                <label className="text-sm font-medium">{name}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {value && <p className="text-xs text-gray-500">Uploaded: {value}</p>}
              </div>
            );
          },
        },
        alt: {
          type: "text",
          label: "Alt text",
          placeholder: "Descriptive text",
        },
      },
    },
    autoplayDelay: { 
      type: "number",
      label: "Autoplay Delay (ms)",
    },
    showPagination: { 
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      label: "Show Pagination",
    },
    showNavigation: { 
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      label: "Show Navigation",
    },
    align: {
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    backgroundColor: { type: "text" },
    width: { type: "number", min:800 , max: 1000 },
    height: { type: "number", min: 200, max: 600 },
  },
 defaultProps: {
  images: [
    {
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300",
      file: null,
      alt: "Person 1",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300",
      file: null,
      alt: "Person 2",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300",
      file: null,
      alt: "Person 3",
    },
  ],
    autoplayDelay: 1500,
    showPagination: true,
    showNavigation: true,
    align: "center",
    backgroundColor: "",
    width: 0,
    height: 0,
  },
  render: (props: {
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
  }) => {
    const { align, backgroundColor, width, height, images, ...carouselProps } = props;
    
    // Process images to use uploaded file URLs if available, otherwise use src URLs
    const processedImages = images.map(image => ({
      ...image,
      src: image.file || image.src
    }));
    
    let justifyContent = "center";
    if (align === "left") justifyContent = "flex-start";
    if (align === "right") justifyContent = "flex-end";
    
    const containerStyle = {
      padding: 16,
      display: "flex",
      justifyContent,
      ...(backgroundColor && { backgroundColor }),
    };
    
    const carouselStyle = {
      ...(width && { width: `${width}px` }),
      ...(height && { height: `${height}px` }),
    };
    
    return (
      <div style={containerStyle}>
        <div style={carouselStyle}>
          <CardCarousel {...carouselProps} images={processedImages} />
        </div>
      </div>
    );
  },
},
    Badge: {
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
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
      },
      defaultProps: {
        text: "Badge",
        variant: "default",
        align: "center",
        backgroundColor: "",
        textColor: "",
      },
      render: ({ text, variant, align, backgroundColor, textColor }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const badgeStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Badge variant={variant} style={badgeStyle}>{text}</Badge>
          </div>
        );
      },
    },
    Alert: {
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
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 800 },
      },
      defaultProps: {
        title: "Alert Title",
        description: "This is an alert description.",
        variant: "default",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ title, description, variant, align, backgroundColor, textColor, width }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const alertStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Alert variant={variant} style={alertStyle}>
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>{description}</AlertDescription>
            </Alert>
          </div>
        );
      },
    },
    Accordion: {
      fields: {
        item1Title: { type: "text" },
        item1Content: { type: "textarea" },
        item2Title: { type: "text" },
        item2Content: { type: "textarea" },
        item3Title: { type: "text" },
        item3Content: { type: "textarea" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 800 },
      },
      defaultProps: {
        item1Title: "What is this?",
        item1Content: "This is an accordion component that can be used to organize content into collapsible sections.",
        item2Title: "How does it work?",
        item2Content: "Click on the accordion headers to expand or collapse the content sections.",
        item3Title: "Can I customize it?",
        item3Content: "Yes, you can edit the titles and content directly in the Puck editor.",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ item1Title, item1Content, item2Title, item2Content, item3Title, item3Content, align, backgroundColor, textColor, width }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const accordionStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Accordion type="single" collapsible style={accordionStyle}>
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
        );
      },
    },
    Input: {
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
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 100, max: 600 },
      },
      defaultProps: {
        placeholder: "Enter your text here...",
        type: "text",
        label: "Input Label",
        align: "left",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ placeholder, type, label, align, backgroundColor, textColor, width }) => {
        let justifyContent = "flex-start";
        if (align === "center") justifyContent = "center";
        if (align === "right") justifyContent = "flex-end";
        
        const inputStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
              </label>
              <Input type={type} placeholder={placeholder} style={inputStyle} />
            </div>
          </div>
        );
      },
    },
    Separator: {
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
    Textarea: {
      fields: {
        placeholder: { type: "text" },
        label: { type: "text" },
        rows: { type: "number" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 100, max: 800 },
        height: { type: "number", min: 60, max: 400 },
      },
      defaultProps: {
        placeholder: "Type your message here...",
        label: "Message",
        rows: 4,
        align: "left",
        backgroundColor: "",
        textColor: "",
        width: 0,
        height: 0,
      },
      render: ({ placeholder, label, rows, align, backgroundColor, textColor, width, height }) => {
        let justifyContent = "flex-start";
        if (align === "center") justifyContent = "center";
        if (align === "right") justifyContent = "flex-end";
        
        const textareaStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          ...(height && { height: `${height}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div className="space-y-2">
              <Label>{label}</Label>
              <Textarea placeholder={placeholder} rows={rows} style={textareaStyle} />
            </div>
          </div>
        );
      },
    },
    Switch: {
      fields: {
        label: { type: "text" },
        description: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 600 },
      },
      defaultProps: {
        label: "Airplane mode",
        description: "Turn on airplane mode to disable all wireless connections.",
        align: "left",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ label, description, align, backgroundColor, textColor, width }) => {
        let justifyContent = "flex-start";
        if (align === "center") justifyContent = "center";
        if (align === "right") justifyContent = "flex-end";
        
        const containerStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          padding: "16px",
          borderRadius: "8px",
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div style={containerStyle}>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">{label}</Label>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        );
      },
    },
    Checkbox: {
      fields: {
        label: { type: "text" },
        description: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 600 },
      },
      defaultProps: {
        label: "Accept terms and conditions",
        description: "You agree to our Terms of Service and Privacy Policy.",
        align: "left",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ label, description, align, backgroundColor, textColor, width }) => {
        let justifyContent = "flex-start";
        if (align === "center") justifyContent = "center";
        if (align === "right") justifyContent = "flex-end";
        
        const containerStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          padding: "16px",
          borderRadius: "8px",
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div style={containerStyle}>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">{label}</Label>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        );
      },
    },
    RadioGroup: {
      fields: {
        label: { type: "text" },
        option1: { type: "text" },
        option2: { type: "text" },
        option3: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 600 },
      },
      defaultProps: {
        label: "Select your favorite framework",
        option1: "React",
        option2: "Vue",
        option3: "Angular",
        align: "left",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ label, option1, option2, option3, align, backgroundColor, textColor, width }) => {
        let justifyContent = "flex-start";
        if (align === "center") justifyContent = "center";
        if (align === "right") justifyContent = "flex-end";
        
        const containerStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          padding: "16px",
          borderRadius: "8px",
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div style={containerStyle}>
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
          </div>
        );
      },
    },
    Skeleton: {
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
    Avatar: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        fallback: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        width: { type: "number", min: 30, max: 200 },
        height: { type: "number", min: 30, max: 200 },
      },
      defaultProps: {
        src: "https://github.com/shadcn.png",
        alt: "@shadcn",
        fallback: "CN",
        align: "center",
        backgroundColor: "",
        width: 0,
        height: 0,
      },
      render: ({ src, alt, fallback, align, backgroundColor, width, height }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const avatarStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(width && { width: `${width}px` }),
          ...(height && { height: `${height}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Avatar style={avatarStyle}>
              <AvatarImage src={src} alt={alt} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </div>
        );
      },
    },
    Image: {
      fields: {
        src: { type: "text", label: "Image URL" },
        file: { 
          type: "custom",
          label: "Upload Image from PC",
          render: ({ name, onChange, value }) => {
            // Create a simple file upload without hooks for now
            const handleFileUpload = async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('/api/upload', {
                  method: 'POST',
                  body: formData,
                });

                const result = await response.json();
                if (result.success) {
                  onChange(result.url); // Store the URL instead of the file
                  alert('Upload successful!');
                } else {
                  alert('Upload failed: ' + result.error);
                }
              } catch (error) {
                alert('Upload failed: ' + error.message);
              }
            };

            return (
              <div className="space-y-2">
                <label className="text-sm font-medium">{name}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {value && <p className="text-xs text-gray-500">Uploaded: {value}</p>}
              </div>
            );
          },
        },
        alt: { type: "text", label: "Alt text" },
        width: { type: "number", label: "Width (px)" },
        height: { type: "number", label: "Height (px)" },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        opacity: {
          type: "number",
          label: "Opacity",
          min: 0,
          max: 1,
          step: 0.05,
        },
        gsapAnimation: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Parallax Scroll", value: "parallax" },
            { label: "Zoom Effect", value: "zoom" },
            { label: "Reveal Animation", value: "reveal" },
            { label: "Clip Path", value: "clipPath" },
          ],
        },
      },
      defaultProps: {
        src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
        file: null,
        alt: "Photo by Drew Beamer",
        width: 400,
        height: 225,
        align: "center",
        opacity: 1,
        gsapAnimation: "none",
      },
      render: (props) => {
        const { src, file, alt, width, height, align, opacity } = props;
        
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        // Use uploaded file URL if available, otherwise use src URL
        const imageSource = file || src;
        
        return (
          <div
            style={{
              display: "flex",
              justifyContent,
              alignItems: "center",
              width: width ? `${width}px` : "auto",
              height: height ? `${height}px` : "auto",
              opacity: opacity ?? 1,
              margin: "0 auto",
            }}
          >
            <Image
              src={imageSource}
              alt={alt}
              width={width || 400}
              height={height || 225}
              style={{
                width: width ? `${width}px` : "auto",
                height: height ? `${height}px` : "auto",
                objectFit: "cover",
                borderRadius: 8,
                display: "block",
              }}
            />
          </div>
        );
      },
    },
    Collapsible: {
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
    Dialog: {
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
    Drawer: {
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
    Sheet: {
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
    Popover: {
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
    HoverCard: {
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
    Tooltip: {
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
   
    Label: {
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
    Carousel: {
      fields: {
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 800 },
        height: { type: "number", min: 200, max: 600 },
      },
      defaultProps: {
        item1: "Slide 1",
        item2: "Slide 2",
        item3: "Slide 3",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
        height: 0,
      },
      render: ({ item1, item2, item3, align, backgroundColor, textColor, width, height }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const carouselStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          ...(height && { height: `${height}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Carousel className="w-full max-w-xs" style={carouselStyle}>
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
        );
      },
    },
    Table: {
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
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 300, max: 1200 },
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
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ header1, header2, header3, row1col1, row1col2, row1col3, row2col1, row2col2, row2col3, align, backgroundColor, textColor, width }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const tableStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <Table style={tableStyle}>
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
        );
      },
    },
    Pagination: {
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
    NavigationMenu: {
      fields: {
        title: { type: "text" }, 
        item1: { type: "text" },
        item2: { type: "text" },
        item3: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
            { label: "Space Between", value: "space-between" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 300, max: 1400 },
        height: { type: "number", min: 50, max: 150 },
      },
      defaultProps: {
        title: "Deekshithgowda85", 
        item1: "Components",
        item2: "Documentation",
        item3: "About",
        align: "space-between",
        backgroundColor: "transparent",
        textColor: "white",
        width: 0,
        height: 0,
      },
      render: (props) => {
        const { title, item1, item2, item3, align, backgroundColor, textColor, width, height } = props;
        
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
          backgroundColor: backgroundColor || 'transparent',
          ...(height && { height: `${height}px` }),
          color: textColor || 'white', // Default to white for visibility
        };
        
        return (
          <div style={containerStyle}>
            <span
              className="text-3xl font-bold font-serif drop-shadow"
              style={{ 
                letterSpacing: 1,
                color: textColor || 'white' // Use textColor or white default
              }}
            >
              {title}
            </span>
            <NavigationMenu style={{ backgroundColor: 'transparent' }}>
              <NavigationMenuList style={{ backgroundColor: 'transparent' }}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    style={{ 
                      backgroundColor: 'transparent',
                      color: textColor || 'white'
                    }}
                  >
                    {item1}
                  </NavigationMenuTrigger>
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
                  <NavigationMenuLink 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: textColor || 'white'
                    }}
                  >
                    {item2}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: textColor || 'white'
                    }}
                  >
                    {item3}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        );
      },
    },
    Menubar: {
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
    Command: {
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
    DropdownMenu: {
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
    AlertDialog: {
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
    Form: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 250, max: 800 },
        height: { type: "number", min: 200, max: 600 },
      },
      defaultProps: {
        title: "Form Title",
        description: "This is a form component. You can add form fields here.",
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
        height: 0,
      },
      render: ({ title, description, align, backgroundColor, textColor, width, height }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const formStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          ...(height && { height: `${height}px` }),
          padding: "24px",
          borderRadius: "8px",
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <div className="space-y-6" style={formStyle}>
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
        );
      },
    },
    ScrollArea: {
      fields: {
        content: { type: "textarea" },
        height: { type: "number" },
        align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
        width: { type: "number", min: 200, max: 800 },
      },
      defaultProps: {
        content: "This is scrollable content. You can add a lot of text here and it will be scrollable within the defined height.",
        height: 200,
        align: "center",
        backgroundColor: "",
        textColor: "",
        width: 0,
      },
      render: ({ content, height, align, backgroundColor, textColor, width }) => {
        let justifyContent = "center";
        if (align === "left") justifyContent = "flex-start";
        if (align === "right") justifyContent = "flex-end";
        
        const scrollAreaStyle = {
          ...(backgroundColor && { backgroundColor }),
          ...(textColor && { color: textColor }),
          ...(width && { width: `${width}px` }),
          height: `${height}px`,
        };
        
        return (
          <div style={{ padding: 16, display: "flex", justifyContent }}>
            <ScrollArea className="rounded-md border p-4" style={scrollAreaStyle}>
              <div className="space-y-4">
                <p>{content}</p>
                <p>More content here...</p>
                <p>Even more content...</p>
              </div>
            </ScrollArea>
          </div>
        );
      },
    },

  


  },
};

export default config;
