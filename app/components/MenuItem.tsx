// src/components/MenuItem.tsx
import Image from "next/image";

type MenuItemProps = {
  name: string;
  description: string;
  price: string;
  image: string; // works with both imported images and URLs
};

export default function MenuItem({
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm 
                 border border-amber-900/30 shadow-2xl transition-all duration-500 
                 hover:scale-105 hover:shadow-amber-500/20 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-[480px] md:h-[600px] lg:h-[680px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-2xl md:text-3xl font-bold text-amber-100 tracking-wide">
          {name}
        </h3>
        <p className="mt-2 text-amber-200 font-light text-sm md:text-base">
          {description}
        </p>
        <p className="mt-3 text-amber-400 font-semibold text-lg md:text-xl">
          {price}
        </p>
      </div>
    </div>
  );
}