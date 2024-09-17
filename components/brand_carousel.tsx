import React, { useEffect, useRef, useState, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface SlideProps {
    bgColor: string;
  }
  
export const Slide = styled.div<SlideProps>`
    background-color: ${(props) => props.bgColor};
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  `;
  interface InfiniteCarouselProps {
    children: ReactNode;
    speed?: number; // Speed of continuous scroll in pixels per second
    visibleSlides?: number; // Number of slides visible at a time
  }
  
  const scrollAnimation = (speed: number, totalWidth: number) => keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-${totalWidth}px, 0, 0);
    }
  `;
  
  const CarouselWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
  `;
  
  interface CarouselContainerProps {
    speed: number;
    totalWidth: number;
  }
  
  const CarouselContainer = styled.div<CarouselContainerProps>`
    display: flex;
    width: ${(props) => props.totalWidth}px;
    animation: ${(props) => scrollAnimation(props.speed, props.totalWidth)} ${(props) => props.totalWidth / props.speed}s linear infinite;
  `;
  
  interface CarouselItemProps {
    visibleSlides: number;
  }
  
  const CarouselItem = styled.div<CarouselItemProps>`
    flex: 0 0 ${(props) => 100 / props.visibleSlides}%;
    box-sizing: border-box;
  `;
  
  const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
    children,
    speed = 50, // Default speed (pixels per second)
    visibleSlides = 1, // Default to 1 visible slide
  }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const totalChildren = React.Children.count(children);
  
    // Calculate total width for animation based on number of children and visible slides
    const itemWidth = 100 / visibleSlides;
    const totalWidth = itemWidth * totalChildren;
  
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.width = `${totalWidth * 2}px`; // Double the width for seamless scroll
      }
    }, [visibleSlides, totalChildren, totalWidth]);
  
    return (
      <CarouselWrapper>
        <CarouselContainer ref={containerRef} speed={speed} totalWidth={totalWidth}>
          {React.Children.map(children, (child, i) => (
            <CarouselItem key={i} visibleSlides={visibleSlides}>
              {child}
            </CarouselItem>
          ))}
          {/* Duplicate children for infinite scroll effect
          {React.Children.map(children, (child, i) => (
            <CarouselItem key={`duplicate-${i}`} visibleSlides={visibleSlides}>
              {child}
            </CarouselItem>
          ))} */}
        </CarouselContainer>
      </CarouselWrapper>
    );
  };
  
  export default InfiniteCarousel;