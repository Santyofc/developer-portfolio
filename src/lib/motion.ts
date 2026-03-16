import type { MotionProps } from "framer-motion";

/**
 * Returns strongly-typed Framer Motion props for a fade-up reveal animation.
 * Used across pages to maintain consistent scroll-triggered animations.
 *
 * @param delay - Optional delay in seconds before the animation starts.
 */
export function fadeUp(delay = 0): Pick<MotionProps, "initial" | "whileInView" | "viewport" | "transition"> {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  };
}

/**
 * Returns strongly-typed Framer Motion props for a fade-in (no vertical movement) animation.
 */
export function fadeIn(delay = 0): Pick<MotionProps, "initial" | "whileInView" | "viewport" | "transition"> {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  };
}
