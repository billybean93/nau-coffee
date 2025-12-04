// src/components/MenuItems.tsx
"use client"; // ← Important! We need client-side IntersectionObserver

import menuItems from "../data/menuItems";
import MenuItem from "./MenuItem";
import FadeInSection from "./FadeInSection";

export default function MenuItems() {
  return (
    <section className="w-full bg-[#1c120f] py-24 lg:py-32">
      {/* Title – fades in first */}
      <FadeInSection>
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-100 tracking-wider">
            Menu Preview
          </h2>
          <p className="mt-6 text-amber-300 text-xl md:text-2xl font-light">
            Opening Spring 2026
          </p>
        </div>
      </FadeInSection>

      {/* Menu grid with staggered fade-in */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto px-6">
        {menuItems.map((item, index) => (
          <FadeInSection
            key={item.name}
            className="delay-animation" // we'll style the delay below
            style={{
              // Stagger each card by 100ms (feels natural)
              animationDelay: `${index * 100}ms`,
            }}
          >
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}