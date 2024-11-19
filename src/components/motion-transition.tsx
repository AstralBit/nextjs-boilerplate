"use client";
import { AnimatePresence, motion } from "framer-motion";

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const mobileNavContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export function Transition({ children }: { children: React.ReactNode }) {
  return <motion.div variants={textVariants}>{children}</motion.div>;
}

export function NavTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        layout="position"
        key="nav-links"
        variants={mobileNavContainerVariant}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
