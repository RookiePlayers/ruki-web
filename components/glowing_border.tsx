import React, { CSSProperties, useState } from "react";
import "../index.module.css"; // Assuming you have a CSS file for styling
import { Center } from "ruki-react-layouts";
import { alpha } from "@mui/material";
import { motion } from "framer-motion";
type MousePosition = {
  x: number;
  y: number;
};

interface GlowingBorderProps {
  children: React.ReactNode; // Allows for nested components
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: number;
  style?: CSSProperties; // Allows for custom styling
  borderOpacity?: number; // Allows specifying border radius
}

export const GlowingBorder: React.FC<GlowingBorderProps> = (
  { 
    children,
     borderRadius = "0px", 
     borderColor = "#fff", 
     borderWidth = 1,
  borderOpacity = 0.5,
  style = {} }
) => {
  const [gradient, setGradient] = useState<string>("");

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate the relative mouse position inside the component
    const x = clientX - left;
    const y = clientY - top;

    // Calculate gradient positions based on mouse distance
    const horizontalGradient = (x / width) * 100;
    const verticalGradient = (y / height) * 100;

    // Set the gradient based on mouse position
    setGradient(`
      radial-gradient(
        circle at ${horizontalGradient}% ${verticalGradient}%,
        ${alpha(borderColor, borderOpacity ?? 0.5)},
        transparent
      )
    `);
  };

  const handleMouseLeave = () => {
    setGradient(``);
  };

  return (
    <motion.div
      className="glowing-box"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        background: gradient,
      }}
      whileHover={{
        padding: borderWidth,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
          type: "tween",
        },
      }}
      transition={{
        duration: 0.1, // Duration of the transition
        ease: "easeInOut", // Easing function
        type: "spring",
      }}
      style={{
        borderRadius: borderRadius,
        padding: 0, // Apply border-radius to match glowing effect
      }}
    >
      <Center style={{ borderRadius: borderRadius, ...style }}>{children}</Center>
    </motion.div>
  );
};
