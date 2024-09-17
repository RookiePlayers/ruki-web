import { useState, useEffect } from "react";

export type BreakPoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export const useMediaQuery = ({
  breakpoints = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1240px',
  },
}: { breakpoints?: BreakPoints } = {}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches;
      const isTablet = window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches;
      const isDesktop = window.matchMedia(`(min-width: ${breakpoints.desktop})`).matches;


      if (isMobile) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (isTablet && !isDesktop) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints]);

  return { isMobile, isTablet, isDesktop };
};
