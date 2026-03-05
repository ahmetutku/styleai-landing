"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & HTMLMotionProps<"div">;

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={`${pathname}-${delay}`}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
