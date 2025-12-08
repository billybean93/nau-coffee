// src/app/page.tsx
import Logo from "./components/logo";
import Countdown from "./components/countdown";
import CoffeeDrip from "./components/coffee-drip";
import MenuItems from "./components/menuItems";
import PastPopUps from "./components/PastPopUps";
import OurStory from "./components/ourStory";   // ← new
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen max-h-[1000px] bg-[#2b1b14] flex flex-col items-center justify-center px-6 **overflow-hidden**">
        <div className="flex-1 flex flex-col items-center justify-center pb-20">
          <Logo size="md" className="mt-12 mb-16" />
          <div className="my-12">
            <CoffeeDrip />
          </div>
          <Countdown />
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-[#1c1210] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <MenuItems />
        </div>
      </section>

      {/* PAST POP-UPS */}

      <section id="popups">
       <PastPopUps /> 
      </section>

      {/* OUR STORY */}
      <section id="ourStory">
        <OurStory />
      </section>

      {/* Footer */}

      <Footer />

    </>
  );
}