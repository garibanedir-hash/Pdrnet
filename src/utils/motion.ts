// src/utils/motion.ts
import type { MotionProps } from "framer-motion";

// Framer Motion'un TypeScript tipi 'Easing' için en sağlam yol:
// cubic-bezier olarak 4 sayılık array kullanmak.
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeIn: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE_OUT },
  viewport: { once: true },
};

export const fadeInDelay = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE_OUT, delay },
  viewport: { once: true },
});
