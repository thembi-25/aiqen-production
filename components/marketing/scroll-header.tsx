"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl transition-shadow duration-300 supports-backdrop-filter:bg-background/60",
        scrolled && "shadow-[var(--shadow-elevation-2)]"
      )}
    >
      {children}
    </header>
  );
}
