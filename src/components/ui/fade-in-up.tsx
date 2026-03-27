"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeInUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
