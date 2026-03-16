import React, { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { MotionContext } from "@/hooks/useZSNavigation";

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth springs for cursor effects
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, smoothOptions);
  const springY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    const handleResize = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(window.innerWidth < 768 || isTouch);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <MotionContext.Provider value={{ mouseX: springX, mouseY: springY, isMobile }}>
      {children}
    </MotionContext.Provider>
  );
};
