"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoffeeDrip() {
  // Generate infinite random drops across the full width
  const [drops, setDrops] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const generateDrop = () => ({
      id: Math.random(),
      x: 25 + Math.random() * 50, // 15% → 85% of width (stays under the logo)
      delay: 0,   // random start delay
    });

    // Start with 7 drops
    setDrops(Array.from({ length: 7 }, generateDrop));

    // Keep adding a new drop every 0.6–1.4 seconds
    const interval = setInterval(() => {
      setDrops((prev) => [...prev.slice(-100), generateDrop()]); // keep max ~8
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="relative w-100 h-50 -mt-8 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-8 w-2.5 h-2 origin-top"
         style={{
            left: `${drop.x}%`,
            top: "1rem",
            width: "10px",
            height: "16px",
            background: "linear-gradient(to bottom, #fef9f0, #fce5cd)",
            borderRadius: "0 0 70% 70%",
            clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",   // perfect teardrop
            // GLOW IS BACK – stronger than before
            boxShadow: "0 8px 30px rgba(254, 249, 240, 0.8)",         // bright halo
            filter: "brightness(1.4) drop-shadow(0 4px 12px rgba(254, 249, 240, 0.9))",
        }}
          initial={{ scaleY: 0.3, y: -12, opacity: 0 }}
          animate={{
            scaleY: [0.3, 0.3, 2, 0],
            y: [0, 0, 30, 460],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            delay: drop.delay,
            ease: [0.45, 0.05, 0.55, 1],
          }}
        />
      ))}
    </div>
  );
}