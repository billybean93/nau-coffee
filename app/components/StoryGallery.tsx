"use client"

import { PopUp } from "../interface/popup";
import { MediaItem } from "../interface/MediaItem";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';


// StoryGallery Component
export default function StoryGallery({ 
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

  const currentMedia = popup.media[currentIndex];

  // Safety check - close gallery if no media
  if (!currentMedia || !popup.media || popup.media.length === 0) {
    return null;
  }

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

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
      </div> */}

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/80 text-sm flex items-center gap-2">
        <span>{currentIndex + 1} / {popup.media.length}</span>
        {currentMedia.type === 'video' && (
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs">VIDEO</span>
        )}
      </div>
    </div>
  );
}
