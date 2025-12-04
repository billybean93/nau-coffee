"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-12-25T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Optional tiny elegant label */}
      <p className="text-amber-200/70 text-sm tracking-widest font-light">
        next póp-úp
      </p>

      {/* Main countdown – pure minimal chic */}
      <div className="flex gap-8 md:gap-12 text-amber-100">
        <div className="text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-amber-200/60 mt-2 tracking-widest">DAYS</div>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-amber-200/60 mt-2 tracking-widest">HOURS</div>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-amber-200/60 mt-2 tracking-widest">MINUTES</div>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-amber-200/60 mt-2 tracking-widest">SECONDS</div>
        </div>
      </div>

      {/* Date line – soft and elegant */}
      <p className="text-amber-100/80 text-lg md:text-xl tracking-wider font-light">
        25 December 2025 • Studio Aurora
      </p>
    </div>
  );
}