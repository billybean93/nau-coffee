import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Logo({ className, size = "lg" }: LogoProps) {
  const sizeMap = {
    sm: "w-48 md:w-56",
    md: "w-64 md:w-80",
    lg: "w-72 md:w-96 lg:w-[28rem]",
    xl: "w-96 md:w-[28rem] lg:w-[36rem]",
  };

  return (
    <div className={cn("relative leading-none animate-fade-in", className)}>
      {/* STRONG GLOW LAYER 1 */}
      {/* <div
        className="absolute inset-0 -z-10 translate-y-4 scale-50 rounded-full bg-amber-400/70 blur-3xl animate-pulse-slow"
        aria-hidden="true"
      /> */}

      {/*STRONG GLOW LAYER 2 – even warmer & bigger */}
      {/* <div
        className="absolute inset-0 -z-10 translate-y-6 scale-70 rounded-full bg-orange-500/50 blur-3xl"
        aria-hidden="true"
      /> */}

      {/* Optional third ultra-soft layer */}
      <div className="absolute inset-0 -z-10 scale-[2] rounded-full bg-amber-600/20 blur-3xl" />

      {/* Your crisp logo on top */}
      <img
        src="/nau-logo1.png"
        alt="Nau Café"
        draggable={false}
        className={cn(
          "relative z-10 select-none pointer-events-none block drop-shadow-2xl",
          sizeMap[size]
        )}
      />
    </div>
  );
}