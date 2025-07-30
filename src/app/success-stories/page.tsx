'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Topbar from "../topbar/page";
import Footer from "../footer/footer";

export default function SuccessStories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const animateCountUp = () => {
      const counters = document.querySelectorAll('.animate-count-up');
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };
        
        updateCounter();
      });
    };

    // Start animation after a short delay
    const timer = setTimeout(animateCountUp, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <Topbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-bounce animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Real Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Success Stories
              <br />
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">That Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Discover how VeraMatch has helped thousands of couples find love, build relationships, and create lasting connections.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl md:text-6xl font-bold text-pink-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="50000">0</span>+
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Happy Couples</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-6xl font-bold text-purple-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="2.5">0</span>M+
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Successful Matches</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="95">0</span>%
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Success Rate</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl md:text-6xl font-bold text-pink-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="180">0</span>+
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                Featured Stories
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Love Stories That
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"> Inspire</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real couples share their journey from first match to lasting love.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story 1 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">S&M</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Sarah & Mike</h3>
                    <p className="text-gray-600">Married 2 years • New York</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "We matched on VeraMatch and instantly felt a connection. Our first date was magical - we talked for hours over coffee. 
                  Within 6 months, we were engaged, and now we're celebrating our 2nd anniversary. VeraMatch's smart matching really works!"
                </p>
                <div className="flex items-center text-pink-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified Couple</span>
                </div>
              </div>

              {/* Story 2 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">E&J</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Emma & James</h3>
                    <p className="text-gray-600">Together 1 year • London</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "VeraMatch's smart matching brought us together. We share the same values and dreams. 
                  It's like we were meant to be! We're planning our wedding for next summer and couldn't be happier."
                </p>
                <div className="flex items-center text-purple-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified Couple</span>
                </div>
              </div>

              {/* Story 3 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">A&D</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Alex & David</h3>
                    <p className="text-gray-600">Engaged 6 months • San Francisco</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "We found each other through VeraMatch's advanced matching. Our connection was instant and deep. 
                  We're getting married next year and can't wait to start our life together!"
                </p>
                <div className="flex items-center text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified Couple</span>
                </div>
              </div>

              {/* Story 4 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">L&K</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Lisa & Kevin</h3>
                    <p className="text-gray-600">Married 3 years • Toronto</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "After years of dating apps, VeraMatch was different. The quality of matches was incredible. 
                  We met and knew immediately we were meant for each other. Now we have a beautiful family!"
                </p>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified Couple</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real testimonials from people who found love on VeraMatch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "VeraMatch helped me find my soulmate. The matching algorithm is incredible - we're perfect for each other!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria, 28</p>
                    <p className="text-sm text-gray-600">New York</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "After trying many dating apps, VeraMatch was the one that actually worked. Found love in 3 months!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">J</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">John, 32</p>
                    <p className="text-sm text-gray-600">Los Angeles</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The quality of matches on VeraMatch is outstanding. I found someone who truly understands me."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah, 26</p>
                    <p className="text-sm text-gray-600">Chicago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Write Your Own
              <br />
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl md:text-2xl text-pink-100 mb-10 max-w-3xl mx-auto">
              Join thousands of people who have found love, friendship, and meaningful connections on VeraMatch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup" className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/" className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  Back to Home
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
