"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show splash screen on every route change
    setIsLoading(true);
    setShowSplash(true);

    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
      {children}
    </div>
  );
} 