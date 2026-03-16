"use client";

import { motion } from "framer-motion";
import { useZSNavigation } from "@/hooks/useZSNavigation";

export const CyberCursor = () => {
  const { mouseX, mouseY, isMobile } = useZSNavigation();

  if (isMobile) return null;

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none glow-green"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full z-[9998] pointer-events-none"
        style={{ 
          x: mouseX, 
          y: mouseY, 
          translateX: "-50%", 
          translateY: "-50%",
          scale: 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      />
    </>
  );
};
