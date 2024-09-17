/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import { BreakPoints, useMediaQuery } from './useMediaQuery';
import { Alignment, Column, Row } from 'ruki-react-layouts';

type ResponsiveRowProps = {
  children?: React.ReactNode;
  breakpoints?: BreakPoints;
  isDynamic?: boolean;
  alignment?: Alignment;
  crossAlignment?: Alignment;
};

export const ResponsiveRow = ({ breakpoints = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1240px'
}, children, isDynamic, alignment, crossAlignment }: ResponsiveRowProps = {}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const { isMobile } = useMediaQuery({ breakpoints });
  const [colChildren, setColChildren] = useState<React.ReactNode[]>([]);

  // Initialize refs array to match the number of children
  if (childRefs.current.length !== React.Children.count(children)) {
    childRefs.current = Array(React.Children.count(children))
      .fill(null)
      .map((_, i) => childRefs.current[i] || React.createRef<HTMLDivElement>());
  }

  const buildContainerBasedOnChildOffScreen = () => {
    const newColChildren: React.ReactNode[] = [];
    const rowChildren = React.Children.toArray(children);
    let capacity = componentRef.current?.getBoundingClientRect().width ?? 0;
    let currentWidth = 0;
    let currentRow: React.ReactNode[] = [];

    for (let i = 0; i < rowChildren.length; i++) {
      const childRef = childRefs.current[i];
      const child = (
        <div key={i} ref={childRef}>
          {rowChildren[i]}
        </div>
      );

      const childWidth = childRef.current?.getBoundingClientRect().width ?? 0;
      if (currentWidth + childWidth <= capacity) {
        currentRow.push(child);
        currentWidth += childWidth;
      } else {
        newColChildren.push(<Row key={`row-${newColChildren.length}`}>{currentRow}</Row>);
        currentRow = [child];
        currentWidth = childWidth;
      }
    }

    if (currentRow.length > 0) {
      newColChildren.push(<Row key={`row-${newColChildren.length}`}>{currentRow}</Row>);
    }

    setColChildren(newColChildren);
  };

  // Use useLayoutEffect to ensure layout calculations happen after the DOM is fully ready
  useEffect(() => {
    if (isDynamic) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
        buildContainerBasedOnChildOffScreen();
      setTimeout(() => {
        buildContainerBasedOnChildOffScreen();
      }, 1);
    }
  }, [children, isDynamic]); // Re-run the effect if children or isDynamic changes

  useEffect(() => {
    // Add a resize event listener to rebuild the layout on window resize
    const handleResize = () => {
      buildContainerBasedOnChildOffScreen();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children, isDynamic]); // Attach resize listener only once, but update when children or isDynamic changes

  if (!isDynamic) {
    if (isMobile) {
      return <Column>{children}</Column>;
    }
    return <>{children}</>;
  }

  return <div ref={componentRef}>{<Column crossAlignment={crossAlignment} alignment={alignment}>
  {colChildren}
  </Column>}</div>;
};
 
