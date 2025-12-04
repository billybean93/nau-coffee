// src/app/page.tsx
import Logo from "./components/logo";
import Countdown from "./components/countdown";
import CoffeeDrip from "./components/coffee-drip";
import MenuItems from "./components/menuItems";
import PastPopUps from "./components/PastPopUps";
import OurStory from "./components/ourStory";   // ← new

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen max-h-[1000px] bg-[#2b1b14] flex flex-col items-center justify-center px-6">
        <div className="flex-1 flex flex-col items-center justify-center pb-20">
          <Logo size="lg" className="mt-12 mb-16" />
          <div className="my-12 scale-125">
            <CoffeeDrip />
          </div>
          <Countdown />
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="bg-[#1c1210] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <MenuItems />
        </div>
      </section>

      {/* OUR STORY */}
      <OurStory />

      {/* PAST POP-UPS */}
      <PastPopUps />
    </>
  );
}