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
                A true Vietnamese coffee pop-up by 2 kids growing up in Saigon, now wanting to share our culture with the world!
              </h3>
              <p className="text-lg leading-relaxed">
                We started this project in 2025 with one simple idea: make really good coffee and give people a cozy place to feel at home. 
                </p>
              <p className="text-lg leading-relaxed">
                We craved the ritual of specialty coffee without the routine. No fixed addresses. No endless menus. Just exceptional beans, hand-brewed in unexpected spots, creating moments that linger longer than the caffeine high.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/story/founders.mp4"
                
              />
            </div>
          </FadeInSection>

          {/* July 2025 – Sidestreet Pho */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/story/reviewer.mp4"
                
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                July 20, 2025 – Sidestreet Pho, Alameda: The First Pour
              </h3>
              <p className="text-lg leading-relaxed">
                We kicked off with a whisper—no billboards, just an IG story and a chalkboard sign outside a beloved pho spot on Encinal Ave. 
              </p>
              <p className="text-lg leading-relaxed">
                By noon, the line snaked around the block. Locals swapped stories over our minimalist setup. We closed at 3pm, hearts full, knowing we'd sparked something rare.
              </p>
              <p className="text-amber-300 font-medium">
                Good coffee refuses to be rushed—we’re cool with that, and we hope you are too.
              </p>
            </div>
          </FadeInSection>

      

          {/* November 2025 – Studio Aurora Return */}
          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                A menu that says what it means
              </h3>
              <p className="text-lg leading-relaxed">
                Black coffee. Coffee with condensed milk. Coffee with egg foam. Coffee with pandan foam. Coffee with salted cream. Seasonal drinks.               
                </p>
              <p className="text-lg leading-relaxed">
                That’s it. Short is honest. We’d rather nail a few things than be average at twenty.
              </p>
            </div>

            <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/story/4drinks.mp4"
                // poster="/story/birthday.jpg"
              />
            </div>
          </FadeInSection>

          <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/story/give-back.mp4"
                // poster="/story/big_team.jpg"
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
                We give back because it feels right
              </h3>
              <p className="text-lg leading-relaxed">
                Before Nau was even a dream, we were in line every week at Abacus Row with all of you. Pouring coffee there now, beside Viet & Canto and the community that raised us, feels like coming home 🥹❣️              
              </p>
              <p className="text-lg leading-relaxed">
                Free Vietnamese coffee, kids drawing on tables, soft DJ vibes, tiny workshops, open-mic laughter in the sunlight. Every pop-up is our love letter to you.              
              </p>
              <p className="text-amber-300 font-medium">
                Thank you for waiting, for smiling, for being family ❤️.              
              </p>
            </div>
          </FadeInSection>

         {/* The Pop-Up Philosophy – Final Montage */}
        <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-amber-100 order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-300">
              Right Now – Nomads of the Brew ☕
            </h3>
            
            <p className="text-lg leading-relaxed">
              We’ve been bouncing around the Bay like kids chasing the ice-cream truck — from the pho-steamy corners of Alameda to the twinkly lantern nights in Waverly. Never staying anywhere longer than 8 weeks, just long enough to make friends and drink way too much coffee.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our beans come straight from small farms in Ethiopia, Colombia, Kenya, Guatemala, and Sumatra (places where the farmers actually get paid fairly). We roast them fresh every week in Oakland so everything tastes like it just woke up happy.
            </p>
            
            <p className="text-lg leading-relaxed">
              The menu changes whenever we feel like it, but it’s always chill: maybe a fancy Geisha flight one week, a fizzy cascara soda the next, or some wild collab pour-over with a local artist or roaster. No app, no membership, no nonsense—just walk in, grab a cup, and enjoy the moment with us.
            </p>
          </div>

          <div className="order-1 md:order-2 relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
            <VideoPlayer
              src="/story/nomads.mp4"
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

        <div className="max-w-7xl mx-auto text-center">
        <FadeInSection className="mt-24">
            <p className="text-amber-300 text-lg">
              Want Nau Coffee at your shop, event, or space?{" "}
              <a
                href="mailto:hello@naucoffee.co"
                className="font-medium underline underline-offset-4 hover:text-amber-100 transition"
              >
                Let's make it happen
              </a>
              .
            </p>
          </FadeInSection>
        </div>

      </div>
    </section>
  );
}