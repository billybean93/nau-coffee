// src/app/components/OurStory.tsx
import FadeInSection from "./FadeInSection";
import VideoPlayer from "./VideoPlayer"; // Your custom component (code below if you need it)

export default function OurStory() {
  return (
    <section className="w-full bg-[#0f0a08] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-center text-5xl md:text-7xl font-bold text-amber-50 mb-20">
            Our Story
          </h2>
        </FadeInSection>

        <div className="space-y-32">
          {/* 2025 – The Spark */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                2025 – Born in a San Francisco Kitchen
              </h3>
              <p className="text-lg leading-relaxed">
                A true Vietnamese coffee pop-up by 2 kids growing up in Saigon, now wanting to share our culture with the world!              
                </p>
              <p className="text-lg leading-relaxed">
                We craved the ritual of specialty coffee without the routine. No fixed addresses. No endless menus. Just exceptional beans, hand-brewed in unexpected spots, creating moments that linger longer than the caffeine high.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/founders.mp4"
                // poster="/story/founders.jpg"
              />
            </div>
          </FadeInSection>

          {/* July 2025 – Sidestreet Pho */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/reviewer.mp4"
                // poster="/story/team3.jpg"
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                July 20, 2025 – Sidestreet Pho, Alameda: The First Pour
              </h3>
              <p className="text-lg leading-relaxed">
                We kicked off with a whisper—no billboards, just an IG story and a chalkboard sign outside a beloved pho spot on Encinal Ave. Partnering with Chanel Bloom Coffee, we served single-origin Ethiopian Yirgacheffe drips and Vietnamese-inspired cold brews.
              </p>
              <p className="text-lg leading-relaxed">
                By noon, the line snaked around the block. Locals swapped stories over our minimalist setup: one bar, two methods (pour-over and espresso), zero waste. We closed at 3pm, hearts full, knowing we'd sparked something rare.
              </p>
              <p className="text-amber-300 font-medium">
                Proof: Temporary spaces brew the strongest connections.
              </p>
            </div>
          </FadeInSection>

          {/* September 2025 – Studio Aurora */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                September 7, 2025 – Studio Aurora, SF: Art Meets Aroma
              </h3>
              <p className="text-lg leading-relaxed">
                Nestled in the creative hum of San Francisco's Mission, our second pour unfolded at Studio Aurora—a sunlit space where local artists sketch and dream. Here, we debuted Colombian Supremo flights, paired with live acoustic sets and sketchbook-inspired cup sleeves.
              </p>
              <p className="text-lg leading-relaxed">
                Crowds lingered longer than our 11am-3pm window, capturing the alchemy of coffee and canvas. Whispers of "This is what SF needs more of" fueled our fire, as first-timers became evangelists via phone snaps and heartfelt tags.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/dj.mp4"
                // poster="/story/line2.jpg"
              />
            </div>
          </FadeInSection>

          {/* September 2025 – Bernal Cutlery */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/reviewer2.mp4"
                // poster="/story/cheer.jpg"
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                September 20, 2025 – Bernal Cutlery: Sharp Edges, Softer Sips
              </h3>
              <p className="text-lg leading-relaxed">
                Trading fog for Bernal Heights' sunny slopes, we set up amid gleaming blades and heirloom tools. This Saturday surprise featured Guatemalan Huehuetenango espressos, with demos on pairing brews to charcuterie—because great coffee cuts through the ordinary.
              </p>
              <p className="text-lg leading-relaxed">
                Knife enthusiasts traded tips with caffeine seekers, turning a tool shop into a communal hearth. By dusk, we'd etched our mark: not just a pop-up, but a memory forged in steel and steam.
              </p>
              <p className="text-amber-300 font-medium">
                Where precision meets pour, magic brews.
              </p>
            </div>
          </FadeInSection>

          {/* November 2025 – Studio Aurora Return */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                November 2, 2025 – Studio Aurora (Return), 302 Valencia St: Echoes of the First
              </h3>
              <p className="text-lg leading-relaxed">
                We couldn't resist circling back to Valencia Street's vibrant pulse, where our September magic still echoed. This Sunday encore brought Kenyan AA light roasts and cascara experiments, with guest baristas sharing origin tales under string lights.
              </p>
              <p className="text-lg leading-relaxed">
                Familiar faces returned, toasting to the rarity of second chances. The air hummed with laughter and low notes from a vinyl spinner—proof that even nomads find homes in fleeting rituals.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/reviewer3.mp4"
                // poster="/story/birthday.jpg"
              />
            </div>
          </FadeInSection>

          {/* November 2025 – On Waverly */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/scooter.mp4"
                // poster="/story/big_team.jpg"
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                November 22, 2025 – On Waverly: Alleyway Alchemy
              </h3>
              <p className="text-lg leading-relaxed">
                Our latest whisper: a Saturday hideaway in Chinatown's labyrinthine lanes, where Waverly Place meets mystery. We unveiled Sumatran Mandheling dark roasts, infused with subtle spice nods to the neighborhood's heritage—served from a pop-up cart under lantern glow.
              </p>
              <p className="text-lg leading-relaxed">
                Strangers became storytellers over shared sips, the fog rolling in like a curtain call. As 3pm approached, we packed up, leaving only empty cups and the echo of "When's next?"—the sweetest close.
              </p>
              <p className="text-amber-300 font-medium">
                In hidden corners, coffee reveals its secrets.
              </p>
            </div>
          </FadeInSection>

          {/* The Pop-Up Philosophy – Final Montage */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-amber-100 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                Now – Nomads of the Brew
              </h3>
              <p className="text-lg leading-relaxed">
                From Alameda's pho-scented streets to Waverly's lantern-lit whispers, we've hopped the Bay's hidden gems. Eight weeks max per spot, sourcing beans from ethical farms in Ethiopia, Colombia, Kenya, Guatemala, and Sumatra—roasted fresh in Oakland.
              </p>
              <p className="text-lg leading-relaxed">
                Our menu? Ever-evolving but simple: seasonal singles like Geisha flights, cascara tonics, and collab-infused specials. Partnerships with local artists, roasters, and shops keep it alive. No apps, no subscriptions—just show up, sip, and savor the now.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/nomads.mp4"
                // poster="/story/2cups.jpg"
              />
            </div>
          </FadeInSection>
        </div>

        {/* Closing tagline */}
        <FadeInSection className="mt-32 text-center">
          <div className="inline-block">
            <p className="text-xl md:text-2xl text-amber-200/50 font-light mb-3">
              We're not chasing permanence.
            </p>
            <p className="text-2xl md:text-3xl text-amber-100 font-light italic">
              We're crafting coffee that haunts your cup.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}