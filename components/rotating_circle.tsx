import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface RotatingCircleProps {
  children: ReactNode[];
  rotate?: boolean; // Whether the circle rotates
  speed?: number;   // Speed of rotation (in seconds for full rotation)
  reverse?: boolean; // Whether the rotation is clockwise or counter-clockwise
  size?: number;    // Diameter of the circle
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({
  children,
  rotate = false,
  speed = 10,
  reverse = false,
  size = 300,
}) => {
  const radius = size / 2;
  const rotationDirection = reverse ? -360 : 360;

  // Helper function to get the position of each child around the perimeter
  const getPosition = (index: number, total: number) => {
    const angle = (index / total) * 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius + radius * Math.cos(radian);
    const y = radius + radius * Math.sin(radian);
    return { x, y };
  };

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        // border: '2px solid #000', // Optional for visibility
      }}
      animate={rotate ? { rotate: rotationDirection } : {}}
      transition={rotate ? { repeat: Infinity, duration: speed, ease: "linear" } : {}}
    >
      {children.map((child, index) => {
        const { x, y } = getPosition(index, children.length);
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: x - 20,  // Adjust 20 to account for half the size of the child (width/height)
              top: y - 20,   // This centers the child element on the perimeter point
              width: 40,     // Fixed size for the children (can be dynamic)
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0', // Optional for child visibility
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default RotatingCircle;
