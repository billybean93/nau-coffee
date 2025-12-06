import { PopUp } from "../interface/popup";

// PopUpCard Component
export default function PopUpCard({ 
  popup, 
  index, 
  onClick 
}: { 
  popup: PopUp; 
  index: number; 
  onClick: () => void;
}) {
  const firstMedia = popup.media[0];
  const videoCount = popup.media.filter(m => m.type === 'video').length;
  const imageCount = popup.media.filter(m => m.type === 'image').length;

  return (
    <div
      onClick={onClick}
      className="opacity-0 animate-fadeIn cursor-pointer"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="group relative bg-[#2b1b14]/50 backdrop-blur-sm border border-amber-900/30 rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-amber-800/60 hover:shadow-amber-900/20 active:scale-95">
        <div className="aspect-[4/3] bg-gradient-to-br from-amber-950/40 to-black overflow-hidden">
          {popup.media && popup.media.length > 0 ? (
            firstMedia.type === 'image' ? (
              <img 
                src={firstMedia.src} 
                alt={popup.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <video 
                src={firstMedia.src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl font-bold text-amber-800/30 tracking-wider">
                NAU
              </span>
            </div>
          )}
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
          <span className="text-amber-200 tracking-wider text-sm flex items-center gap-2">
            View Gallery ({popup.media?.length || 0} items) →
          </span>
        </div>

        {popup.media && popup.media.length > 0 && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-white text-sm font-medium">
              {imageCount > 0 && `${imageCount} 📷`}
              {videoCount > 0 && ` ${videoCount} 🎥`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}