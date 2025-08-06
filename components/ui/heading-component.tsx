import React from "react"
import { Props } from "../../types"

export type HeadingProps = Props["Heading"]

export const HeadingComponent: React.FC<HeadingProps> = ({
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
  responsive,
}) => {
  const Tag = level as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

  const getFontFamily = () => {
    switch (fontFamily) {
      case "serif":
        return "Georgia, 'Times New Roman', serif"
      case "sans-serif":
        return "'Helvetica Neue', Arial, sans-serif"
      case "monospace":
        return "'Courier New', Consolas, monospace"
      case "cursive":
        return "'Comic Sans MS', cursive"
      default:
        return "inherit"
    }
  }

  const getGradientDirection = () => {
    const directions: Record<string, string> = {
      "to-r": "to right",
      "to-l": "to left",
      "to-t": "to top",
      "to-b": "to bottom",
      "to-tr": "to top right",
      "to-br": "to bottom right",
      "to-bl": "to bottom left",
      "to-tl": "to top left",
    }
    return directions[gradientDirection] || "to right"
  }

  const getAnimationStyle = () => {
    const animations: Record<string, string> = {
      "fade-in": "fadeIn 1s ease-in-out",
      "slide-up": "slideUp 0.8s ease-out",
      "bounce": "bounce 1s ease-in-out infinite",
      "pulse": "pulse 2s ease-in-out infinite",
      "glow": "glow 2s ease-in-out infinite alternate",
    }
    return animations[animation] || "none"
  }

  const headingStyle: React.CSSProperties = {
    fontSize: responsive ? `clamp(${fontSize * 0.6}px, ${fontSize / 16}rem, ${fontSize}px)` : `${fontSize}px`,
    fontWeight,
    fontFamily: getFontFamily(),
    color: gradient ? "transparent" : color,
    textAlign,
    textTransform,
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
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-15px); }
          70% { transform: translateY(-7px); }
          90% { transform: translateY(-3px); }
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
      <Tag style={headingStyle}>{title}</Tag>
    </>
  )
}