'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Topbar from "../topbar/page";
import Footer from "../footer/footer";

export default function Safety() {
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
        <section className="py-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 relative overflow-hidden">
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
              Your Safety First
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Safety &
              <br />
              <span className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your safety and privacy are our top priorities. We use advanced security measures to protect your personal information and ensure a safe dating environment.
            </p>
          </div>
        </section>

        {/* Safety Statistics */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl md:text-6xl font-bold text-green-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="99.9">0</span>%
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Verified Profiles</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="24">0</span>/7
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Support Available</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl md:text-6xl font-bold text-purple-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="1000">0</span>+
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Safety Reports</p>
              </div>
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl md:text-6xl font-bold text-green-600 mb-2 hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up" data-target="50">0</span>M+
                </div>
                <p className="text-gray-800 font-semibold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Protected Users</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Safety Features
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Advanced
                <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Security</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge technology to keep you safe and secure while dating online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Profile Verification</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Every profile is manually verified with photo ID and social media links to ensure you're connecting with real people.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8A6 6 0 006 8c0 7-3 9-3 9s3 2 9 2 9-2 9-2-3-2-3-9a6 6 0 00-6-6zm-6.5 6.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Privacy Protection</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Your personal information is encrypted with industry-leading security and never shared with third parties.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">24/7 Support</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our dedicated safety team is available around the clock to help with any concerns or issues.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Block & Report</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Easily block and report any suspicious behavior. We take all reports seriously and act quickly.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI Detection</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Advanced AI algorithms detect and prevent fake profiles, scams, and inappropriate behavior.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Safe Messaging</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Built-in filters and monitoring ensure all conversations remain respectful and appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Safety Guidelines
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Dating Safety Tips
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Follow these essential safety guidelines to ensure a positive and secure dating experience.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Meet in Public Places</h3>
                      <p className="text-gray-600">Always choose well-lit, public locations for your first few dates. Coffee shops, restaurants, or parks are great options.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Trust Your Instincts</h3>
                      <p className="text-gray-600">If something feels off, don't ignore it. Your gut feeling is often right. Report any suspicious behavior immediately.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Take Your Time</h3>
                      <p className="text-gray-600">Get to know someone through messaging and video calls before meeting in person. Don't rush into meeting.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Location</h3>
                      <p className="text-gray-600">Let a friend or family member know where you're going and who you're meeting. Share your location with them.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Red Flags to Watch For</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">Asks for money or financial help</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">Pressures you to meet immediately</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">Refuses to video chat or meet in public</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">Has inconsistent or vague information</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">Makes you feel uncomfortable or unsafe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              If you feel unsafe or encounter suspicious behavior, our safety team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-600 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center justify-center">
                  Report an Issue
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  Contact Support
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Date Safely?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join millions of people who trust VeraMatch for safe, secure, and meaningful connections. 
              Your safety is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup" className="bg-white text-green-600 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center justify-center">
                  Start Dating Safely
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
