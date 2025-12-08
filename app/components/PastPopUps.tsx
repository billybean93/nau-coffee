"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

// Types
interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

export interface PopUp {
  date: string;
  title: string;
  location: string;
  partner: string;
  media: MediaItem[];
}

// FadeInSection Component
function FadeInSection({ 
  children, 
  className = "", 
  style = {} 
}: { 
  children: React.ReactNode; 
  className?: string; 
  style?: React.CSSProperties;
}) {
  return (
    <div 
      className={`opacity-0 animate-fadeIn ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

// StoryGallery Component
function StoryGallery({ 
  popup, 
  isOpen, 
  onClose 
}: { 
  popup: PopUp | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (!isOpen || !popup) return null;

  const currentMedia = popup.media[currentIndex];

  // Safety check
  if (!currentMedia || !popup.media || popup.media.length === 0) {
    return null;
  }

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < popup.media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < popup.media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClose = () => {
    setCurrentIndex(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex gap-1 mb-4">
          {popup.media.map((_, index) => (
            <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white transition-all duration-300 ${
                  index < currentIndex ? 'w-full' : 
                  index === currentIndex ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">{popup.title}</h3>
            <p className="text-white/80 text-sm">{popup.location}</p>
            <p className="text-white/60 text-xs mt-1">{popup.date}</p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div 
        className="w-full h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.src} 
            alt={`${popup.title} - ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <video 
            src={currentMedia.src}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="absolute inset-0 flex pointer-events-none">
        <button 
          onClick={handlePrev}
          className="flex-1 cursor-pointer focus:outline-none pointer-events-auto"
          disabled={currentIndex === 0}
          aria-label="Previous media"
        />
        <div className="flex-1 pointer-events-none" />
        <button 
          onClick={handleNext}
          className="flex-1 cursor-pointer focus:outline-none pointer-events-auto"
          disabled={currentIndex === popup.media.length - 1}
          aria-label="Next media"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {popup.media.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to ${item.type} ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/80 text-sm flex items-center gap-2">
        <span>{currentIndex + 1} / {popup.media.length}</span>
        {currentMedia.type === 'video' && (
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs">VIDEO</span>
        )}
      </div>
    </div>
  );
}

// PopUpCard Component
function PopUpCard({ 
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

// Helper function to build media paths
function buildMedia(folderName: string, files: string[]): MediaItem[] {
  const videoExtensions = ['.mp4', '.webm', '.mov'];
  
  return files.map(file => {
    const ext = file.slice(file.lastIndexOf('.')).toLowerCase();
    return {
      type: videoExtensions.includes(ext) ? 'video' : 'image',
      src: `/popups/${folderName}/${file}`
    };
  });
}

// Define all your popups here - just list the files!
const pastPopups: PopUp[] = [

   {
    date: "Sunday, July 20, 2025",
    title: "Sidestreet Pho",
    location: "2304 Encinal Ave, Alameda",
    partner: "Nau x @chanelbloomcoffee",
    media: buildMedia("sidestreet", [
      "sidestreet1.jpg",
      "sidestreet2.jpg",
      "sidestreet3.jpg",
      "sidestreet4.jpg",
      "sidestreet5.jpg",
      "sidestreet6.jpg",
      "sidestreet7.jpg",
      "sidestreet8.mp4",
      "sidestreet9.jpg",
      "sidestreet10.jpg",
    ])
  },

  {
    date: "Sunday, November 7, 2025",
    title: "Studio Aurora",
    location: "302 Valencia St, San Francisco",
    partner: "Studio Aurora",
    media: buildMedia("studio_aurora1", [
      "studio1.jpg",
      "studio2.jpg",
      "studio3.jpg",
      "studio4.jpg",
      "studio5.jpg",
      "studio6.jpg",
      "studio7.jpg",
      "studio8.jpg",
      "studio9.jpg",
      "studio10.jpg",
      "studio11.jpg",
      "studio12.jpg",
      "studio13.jpg",
      "studio14.jpg",
      "studio15.jpg",
      "studio16.jpg",
      "studio17.jpg",
      "studio18.mp4",
      "studio19.mp4",
      "studio20.mp4",
      "studio21.mp4",
      "studio22.jpg",
      "studio23.jpg",
      "studio24.jpg",
      "studio25.jpg",
      "studio26.jpg",
      "studio27.jpg",
      "studio28.mp4",
      "studio29.mp4",
      "studio30.jpg",
      "studio31.jpg",
      "studio32.jpg",
      "studio33.jpg",
      "studio34.jpg",
      "studio35.jpg",
      "studio36.jpg",

  ])
  },
  {
    date: "Saturday, September 20, 2025",
    title: "Bernal Cutlery",
    location: "Bernal Heights, San Francisco",
    partner: "Bernal Cutlery",
    media: buildMedia("bernal_cutlery", [
      "bernal1.jpg",
      "bernal2.jpg",
      "bernal3.jpg",
      "bernal4.jpg",
      "bernal5.jpg",
      "bernal6.jpg",
      "bernal1.jpg",
      "bernal2.jpg",
      "bernal3.jpg",
      "bernal4.jpg",
      "bernal5.jpg",
      "bernal6.jpg",
      "bernal7.jpg",
      "bernal8.jpg",
      "bernal9.jpg",
      "bernal10.jpg",
      "bernal7.jpg",
      "bernal8.jpg",
      "bernal9.jpg",
      "bernal10.jpg",
      "bernal11.jpg",
      "bernal12.jpg",
      "bernal13.jpg",
      "bernal14.jpg",
      "bernal15.jpg",
      "bernal16.jpg",
      "bernal17.jpg",
      "bernal18.jpg",
      "bernal19.jpg",
      "bernal20.jpg",
      "bernal21.jpg",
      "bernal22.jpg",
      "bernal23.jpg",
      "bernal24.jpg",
      "bernal25.jpg",
      "bernal26.jpg",
      "bernal27.jpg",
      "bernal28.jpg",
      "bernal29.mp4",
      "bernal30.mp4",
      "bernal31.mp4",
      "bernal32.mp4",
      "bernal33.mp4",
      "bernal34.mp4",
    ])
  },
    
  {
    date: "Every week!",
    title: "Abacus Row",
    location: "Mission District, San Francisco",
    partner: "@abacusrow.sf",
    media: buildMedia("abacus_row", [
      "abacus1.jpg",
      "abacus2.jpg",
      "abacus3.jpg",
      "abacus4.jpg",
      "abacus5.jpg",
      "abacus6.mp4",
      "abacus7.jpg",
      "abacus8.jpg",
      "abacus9.jpg",
      "abacus10.jpg",
      "abacus11.mp4",
      "abacus12.jpg",
      "abacus13.jpg",
      "abacus14.jpg",
      "abacus15.jpg",
      "abacus16.jpg",
      "abacus17.jpg",
      "abacus18.jpg",
      "abacus19.jpg",
      "abacus20.jpg",
      "abacus21.jpg",
      "abacus22.jpg",
      "abacus23.jpg",
      "abacus24.jpg",
      "abacus25.jpg",
      "abacus26.jpg",
      "abacus27.jpg",
      "abacus28.jpg",
      "abacus29.jpg",
      "abacus30.jpg",
    ])
  },

    
  {
    date: "Every week!",
    title: "Abacus Row ",
    location: "Mission District, San Francisco",
    partner: "@abacusrow.sf",
    media: buildMedia("abacus_row2", [
      "abacus1.jpg",
      "abacus2.mp4",
      "abacus3.mp4",
      "abacus4.jpg",
      "abacus5.jpg",
      "abacus6.mp4",
      "abacus7.mp4",
      "abacus8.jpg",
      "abacus9.jpg",
      "abacus10.jpg",
      "abacus11.jpg",
      "abacus12.jpg",
      "abacus13.jpg",
      "abacus14.jpg",
      "abacus15.jpg",
      "abacus16.mp4",
      "abacus17.mp4",
      "abacus18.mp4",
      "abacus19.mp4",
      "abacus20.mp4",
      "abacus21.jpg",
      "abacus22.jpg",
      "abacus23.jpg",
      "abacus24.jpg",
      "abacus25.jpg",
    ])
  },

   
  {
    date: "Sunday, November 2, 2025",
    title: "Studio Aurora",
    location: "302 Valencia St, San Francisco",
    partner: "Studio Aurora",
    media: buildMedia("studio_aurora2", [


      "studio1.jpg",
      "studio2.jpg",
      "studio3.mp4",
      "studio4.jpg",
      "studio5.jpg",
      "studio6.jpg",
      "studio7.jpg",
      "studio8.jpg",
      "studio9.jpg",
      "studio10.jpg",
      "studio11.jpg",
      "studio12.jpg",
      "studio13.jpg",
      "studio14.jpg",
      "studio15.jpg",
      "studio16.jpg",
      "studio17.jpg",
      "studio18.mp4",
      "studio19.mp4",
      "studio20.mp4",
      "studio21.mp4",
      "studio22.jpg",
      "studio23.jpg",
      "studio24.jpg",
      "studio25.mp4",
      "studio26.mp4",
      "studio27.mp4",
      "studio28.mp4",
      "studio29.mp4",
      "studio30.mp4",
    ])
  },
  {
    date: "Sunday, November 22, 2025",
    title: "On Waverly",
    location: "Waverly, San Francisco",
    partner: "On Waverly",
    media: buildMedia("waverly", [
      "waverly1.jpg",
      "waverly2.mp4",
      "waverly3.mp4",
      "waverly4.jpg",
      "waverly5.jpg",
      "waverly6.jpg",
      "waverly7.jpg",
      "waverly8.jpg",
      "waverly9.jpg",
      "waverly10.jpg",
      "waverly11.jpg",
      "waverly12.jpg",
      "waverly13.jpg",
      "waverly14.jpg",
      "waverly15.jpg",
      "waverly16.jpg",
      "waverly17.mp4",
      "waverly18.mp4",
      "waverly19.mp4",
      
    ])
  },

 
];

// Main PastPopUps Component
export default function PastPopUps() {
  const [selectedPopup, setSelectedPopup] = useState<PopUp | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (popup: PopUp) => {
    if (popup.media && popup.media.length > 0) {
      setSelectedPopup(popup);
      setIsGalleryOpen(true);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    setTimeout(() => setSelectedPopup(null), 300);
  };

  return (
    <>
      <section className="w-full bg-[#0f0a08] py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-bold text-amber-50 mb-6">
              Where We've Brewed
            </h2>
            <p className="text-amber-200 text-lg max-w-2xl mx-auto mb-20">
              From Alameda pho joints to Mission art spaces — here are the spots that have hosted Nau Coffee.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pastPopups.map((popup, index) => (
              <PopUpCard
                key={`${popup.title}-${index}`}
                popup={popup}
                index={index}
                onClick={() => openGallery(popup)}
              />
            ))}
          </div>
        </div>
      </section>

      <StoryGallery 
        popup={selectedPopup}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}