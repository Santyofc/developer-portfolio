import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

interface MotionContextType {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isMobile: boolean;
}

export const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const useZSNavigation = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useZSNavigation must be used within a MotionProvider");
  }
  return context;
};
