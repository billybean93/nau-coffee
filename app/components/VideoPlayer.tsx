// src/app/components/VideoPlayer.tsx
"use client";

import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  /** Optional poster image shown before play */
  poster?: string;
}

export default function VideoPlayer({ src, className = "", poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 } // play when ≥60% visible
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`w-full h-full object-cover ${className}`}
      loop
      muted
      playsInline
      autoPlay       // ← REQUIRED FOR iPHONE!
      preload="metadata"
    />
  );
}