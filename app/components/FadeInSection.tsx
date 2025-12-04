// src/app/components/FadeInSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;   // ← add this
} & React.HTMLAttributes<HTMLDivElement>; // ← and this (for key, etc.)

export default function FadeInSection({ children, className = "", style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}