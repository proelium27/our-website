"use client";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect } from "react";

function GSAPSync() {
  const lenis = useLenis(() => {});

  useEffect(() => {
    if (!lenis) return;
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(ticker);
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
      <GSAPSync />
      {children}
    </ReactLenis>
  );
}
