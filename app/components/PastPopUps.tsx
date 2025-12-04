// src/app/components/PastPopUps.tsx
"use client";

import FadeInSection from "./FadeInSection";

const pastPopups = [
  {
    date: "Sunday, November 22, 2025",
    title: "On Waverly",
    location: "Waverly, San Francisco",
    partner: "Pop-up event",
  },
  {
    date: "Sunday, November 2, 2025",
    title: "Studio Aurora",
    location: "302 Valencia St, San Francisco",
    partner: "Studio Aurora",
  },
  {
    date: "Saturday, September 20, 2025",
    title: "Bernal Cutlery",
    location: "Bernal Heights, San Francisco",
    partner: "Bernal Cutlery",
  },
  {
    date: "Sunday, September 7, 2025",
    title: "Studio Aurora",
    location: "Mission District, San Francisco",
    partner: "@studioaurora.sf",
  },
  {
    date: "Sunday, July 20, 2025",
    title: "Sidestreet Pho",
    location: "2304 Encinal Ave, Alameda",
    partner: "Nau x @chanelbloomcoffee",
  },
] as const;

export default function PastPopUps() {
  return (
    <section className="w-full bg-[#0f0a08] py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title & subtitle */}
        <FadeInSection>
          <h2 className="text-5xl md:text-7xl font-bold text-amber-50 mb-6">
            Where We’ve Brewed
          </h2>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto mb-20">
            From Alameda pho joints to Mission art spaces — here are the spots that have hosted Nau Coffee.
          </p>
        </FadeInSection>

        {/* Grid with staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastPopups.map((popup, index) => (
            <FadeInSection
              key={`${popup.title}-${index}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="group relative bg-[#2b1b14]/50 backdrop-blur-sm border border-amber-900/30 rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-amber-800/60 hover:shadow-amber-900/20">
                {/* Visual placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-950/40 to-black flex items-center justify-center">
                  <span className="text-8xl font-bold text-amber-800/30 tracking-wider">
                    NAU
                  </span>
                </div>

                <div className="p-8 text-left">
                  <p className="text-amber-500/70 text-sm font-medium">
                    {popup.date}
                  </p>
                  <h3 className="text-2xl font-bold text-amber-100 mt-2">
                    {popup.title}
                  </h3>
                  <p className="text-amber-300 mt-1">{popup.location}</p>
                  {popup.partner && (
                    <p className="text-amber-400/80 text-sm mt-3 italic">
                      with {popup.partner}
                    </p>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <span className="text-amber-200 tracking-wider text-sm">
                    Coming Soon →
                  </span>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Footer CTA */}
        <FadeInSection className="mt-24">
          <p className="text-amber-300 text-lg">
            Want Nau Coffee at your shop, event, or space?{" "}
            <a
              href="mailto:hello@naucoffee.co"
              className="font-medium underline underline-offset-4 hover:text-amber-100 transition"
            >
              Let’s make it happen
            </a>
            .
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}