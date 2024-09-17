import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Define the props interface
interface PerspectiveWrapperProps {
  children: React.ReactNode;
  constrain?: number;
  snapBack?: boolean; // New prop to enable/disable snap-back feature
}

const PerspectiveWrapper: React.FC<PerspectiveWrapperProps> = ({
  children,
  constrain = 20,
  snapBack = true, // Default value is true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Use motion values to track the mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Calculate the rotation values using Framer Motion's useTransform
  const rotateX = useTransform(mouseY, (y) => -(y / constrain));
  const rotateY = useTransform(mouseX, (x) => x / constrain);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = containerRef.current?.getBoundingClientRect();
    if (box) {
      const x = e.clientX - box.left - box.width / 2;
      const y = e.clientY - box.top - box.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Define styles including animation based on the snapBack prop
  const motionStyle = {
    width: '100%',
    height: '100%',
    rotateX,
    rotateY,
    transition: 'transform 0.1s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div
      ref={containerRef}
      style={{ width: 'auto', height: 'auto', perspective: '100px', }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (snapBack) {
          mouseX.set(0);
          mouseY.set(0);
        }
      }}
    >
      <motion.div
        style={motionStyle}
        animate={{
          rotateX: snapBack ? 0 : rotateX.get(),
          rotateY: snapBack ? 0 : rotateY.get(),
        }}
        onHoverEnd={() => {
          if (snapBack) {
            mouseX.set(0);
            mouseY.set(0);
          }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PerspectiveWrapper;
