"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Navigation */}
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
                <a href="#" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-50">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-50">
                  How it Works
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-50">
                  Success Stories
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-50">
                  Safety
                </a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-pink-500 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-50">
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
              <a href="#" className="text-gray-700 hover:text-pink-500 block px-4 py-3 rounded-lg text-base font-medium hover:bg-pink-50 transition-all duration-300">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 block px-4 py-3 rounded-lg text-base font-medium hover:bg-pink-50 transition-all duration-300">
                How it Works
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 block px-4 py-3 rounded-lg text-base font-medium hover:bg-pink-50 transition-all duration-300">
                Success Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 block px-4 py-3 rounded-lg text-base font-medium hover:bg-pink-50 transition-all duration-300">
                Safety
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link href="/login" className="text-gray-700 hover:text-pink-500 block px-4 py-3 rounded-lg text-base font-medium hover:bg-pink-50 transition-all duration-300">
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

      {/* New Hero Section with Image */}
      <section className="relative overflow-hidden">
        {/* Mobile Layout: Image with text below */}
        <div className="block lg:hidden">
          <Image 
            src="/images/dating1.png" 
            alt="Hero Image" 
            width={2560} 
            height={1440} 
            className="w-full h-64 object-cover object-center" 
            priority
          />
          
          {/* Mobile Content Below Image */}
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                  New Feature
                </div>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  Discover
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"> True Love</span>
                  <br />
                  <span className="text-gray-900">Every Day</span>
                </h1>
                <p className="text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
                  Experience the magic of meaningful connections. Our advanced matching algorithm 
                  helps you find someone who truly understands and complements you.
                </p>
                
                <div className="flex flex-col gap-3">
                  <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group shadow-lg">
                    <span className="flex items-center justify-center">
                      Start Your Journey
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <button className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 group">
                    <span className="flex items-center justify-center">
                      Watch Demo
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    AI-Powered Matching
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Video Chat
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Real-time Messaging
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Image with overlaid text */}
        <div className="hidden lg:block relative">
          <Image 
            src="/images/dating1.png" 
            alt="Hero Image" 
            width={2560} 
            height={1440} 
            className="w-full h-[600px] object-cover object-center" 
            priority
          />
          {/* Subtle overlay for better visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-start py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-left">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      New Feature
                    </div>
                    <h1 className="text-6xl font-bold text-white leading-tight drop-shadow-lg">
                      Discover
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"> True Love</span>
                      <br />
                      <span className="text-white drop-shadow-lg">Every Day</span>
                    </h1>
                    <p className="text-xl text-white leading-relaxed max-w-lg drop-shadow-lg">
                      Experience the magic of meaningful connections. Our advanced matching algorithm 
                      helps you find someone who truly understands and complements you.
                    </p>
                  </div>
                  
                  <div className="flex flex-row gap-6">
                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group shadow-lg">
                      <span className="flex items-center justify-center">
                        Start Your Journey
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                    <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 group backdrop-blur-sm">
                      <span className="flex items-center justify-center">
                        Watch Demo
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-8 text-sm text-white drop-shadow-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      AI-Powered Matching
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Video Chat
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Real-time Messaging
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Why Choose VeraMatch?
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Built for Real Connections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to helping you find meaningful connections through our innovative matching system and safety features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Smart Matching</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our AI-powered algorithm learns your preferences to suggest the most compatible matches with high accuracy.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Verified Profiles</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Every profile is manually verified to ensure you're connecting with real people in a safe environment.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Easy Messaging</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Start conversations easily with our intuitive messaging system, video calls, and voice messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Simple Steps
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How VeraMatch Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started is easy. Follow these simple steps to find your perfect match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Sign up and create your detailed profile with photos, interests, and what you're looking for.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Matched</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI algorithm finds compatible matches based on your preferences and personality.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Chatting</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with your matches through our secure messaging and video call features.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet & Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Take your connection offline and meet in person when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Real Stories
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from real couples who found love on VeraMatch and built lasting relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">S&M</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Sarah & Mike</h4>
                  <p className="text-gray-600">Married 2 years</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We matched on VeraMatch and instantly felt a connection. Our first date was magical, and we've been inseparable ever since!"
              </p>
              <div className="flex items-center text-pink-600">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Verified Couple</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">E&J</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Emma & James</h4>
                  <p className="text-gray-600">Together 1 year</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "VeraMatch's smart matching brought us together. We share the same values and dreams. It's like we were meant to be!"
              </p>
              <div className="flex items-center text-purple-600">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Verified Couple</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">A&D</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Alex & David</h4>
                  <p className="text-gray-600">Engaged 6 months</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We found each other through VeraMatch's advanced matching. Our connection was instant and deep. We're getting married next year!"
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Verified Couple</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                Your Safety First
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Safe & Secure Dating
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Your safety and privacy are our top priorities. We use advanced security measures to protect your personal information and ensure a safe dating environment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Profile Verification</h3>
                    <p className="text-gray-600">Every profile is manually verified to ensure you're connecting with real people.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 8A6 6 0 006 8c0 7-3 9-3 9s3 2 9 2 9-2 9-2-3-2-3-9a6 6 0 00-6-6zm-6.5 6.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Protection</h3>
                    <p className="text-gray-600">Your personal information is encrypted and protected with industry-leading security.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our dedicated support team is available around the clock to help you with any concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Safety Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Always meet in public places for your first few dates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Trust your instincts and report any suspicious behavior</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Take your time getting to know someone before meeting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p className="text-gray-700">Share your location with a friend when meeting someone new</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Match?
          </h2>
                      <p className="text-xl text-pink-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join millions of people who have found love, friendship, and meaningful connections on VeraMatch. 
              Start your journey today and discover what's possible.
            </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-pink-600 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <span className="flex items-center justify-center">
                Create Your Profile
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 group">
              <span className="flex items-center justify-center">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
                VeraMatch
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Connecting hearts, one match at a time. Building meaningful relationships through trust and technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VeraMatch. All rights reserved. Made with ❤️ for meaningful connections.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
