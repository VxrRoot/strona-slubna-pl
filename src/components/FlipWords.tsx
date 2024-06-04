"use client";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";

export const FlipWords = ({
  word,
  duration = 3000,
  className,
  delay = 0,
  animationDuration = 0.08,
}: {
  word: string;
  duration?: number;
  className?: string;
  delay?: number;
  animationDuration?: number;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={word}
      >
        {word.split(" ").map((letter: string, index: number) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * animationDuration,
              duration: 0.8,
            }}
            className="inline-block whitespace-break-spaces text-white"
          >
            {letter === " " ? "\u00a0" : `${letter} `}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
