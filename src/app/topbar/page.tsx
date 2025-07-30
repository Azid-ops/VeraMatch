'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Topbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    return(
        <nav className="bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  VeraMatch
                </h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  href="/" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === "/" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/how-it-works" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === "/how-it-works" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  How it Works
                </Link>
                <Link 
                  href="/success-stories" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === "/success-stories" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  Success Stories
                </Link>
                <Link 
                  href="/safety" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === "/safety" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  Safety
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === "/login" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  Sign In
                </Link>
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/25">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-pink-500 p-2 rounded-lg hover:bg-pink-50 transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link 
                href="/" 
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === "/" 
                    ? "text-pink-500 bg-pink-50" 
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/how-it-works" 
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === "/how-it-works" 
                    ? "text-pink-500 bg-pink-50" 
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                How it Works
              </Link>
              <Link 
                href="/success-stories" 
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === "/success-stories" 
                    ? "text-pink-500 bg-pink-50" 
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                Success Stories
              </Link>
              <Link 
                href="/safety" 
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === "/safety" 
                    ? "text-pink-500 bg-pink-50" 
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                Safety
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link 
                  href="/login" 
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname === "/login" 
                      ? "text-pink-500 bg-pink-50" 
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  Sign In
                </Link>
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium mt-3 hover:shadow-xl transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    )
}

export default Topbar;