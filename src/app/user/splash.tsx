'use client';

import { useState, useEffect } from "react";

interface UserSplashProps {
  onComplete?: () => void;
  duration?: number;
}

export default function UserSplash({ onComplete, duration = 1000 }: UserSplashProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!showSplash) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <div className="text-center">
        {/* VeraMatch Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          {/* Animated rings */}
          <div className="absolute inset-0 w-32 h-32 mx-auto">
            <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-ping animation-delay-2000"></div>
          </div>
        </div>
        
        {/* Brand Name */}
        <h1 className="text-6xl font-bold text-white mb-4 animate-fadeInUp">
          VeraMatch
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-white/90 animate-fadeInUp animation-delay-500">
          Connecting hearts, one match at a time
        </p>
        
        {/* Loading dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
} 