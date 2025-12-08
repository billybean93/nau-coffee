"use client";

import { useState } from 'react';
import StoryGallery from './StoryGallery'; // Adjust path as needed
import PopUpCard from './PopUpCard'; // Adjust path as needed
import { PopUp } from "../interface/popup";
import { pastPopups } from '../data/popupData'; // Import popup data

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