'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Topbar from "../topbar/page";
import Footer from "../footer/footer";

export default function HowItWorks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              Step-by-Step Guide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              How VeraMatch
              <br />
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Discover the simple, effective process that helps millions find meaningful connections every day.
            </p>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                Your Journey
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Journey to Love in
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"> 4 Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven process makes finding your perfect match easier than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Sign up in minutes and build your authentic profile with photos, interests, and what you're looking for in a relationship.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Upload your best photos
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Share your interests
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Set your preferences
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Smart Matches</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our AI-powered algorithm analyzes compatibility factors to suggest the most promising matches for you.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Personality matching
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Interest alignment
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Location-based suggestions
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Connecting</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Like profiles that interest you and start conversations with matches through our secure messaging system.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Send likes and messages
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Video chat available
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Voice messages
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet & Build</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Take your connection offline when you're ready and build a meaningful relationship together.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Plan your first date
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Build lasting connections
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Grow together
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"> VeraMatch?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our unique features make finding love easier, safer, and more enjoyable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Smart Matching Algorithm</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our AI analyzes compatibility factors including personality, interests, values, and relationship goals to find your perfect match.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Verified Profiles</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Every profile is manually verified to ensure you're connecting with real people in a safe, trustworthy environment.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Advanced Communication</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Connect through text, voice messages, video calls, and more. Our platform makes communication natural and engaging.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8A6 6 0 006 8c0 7-3 9-3 9s3 2 9 2 9-2 9-2-3-2-3-9a6 6 0 00-6-6zm-6.5 6.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Privacy & Safety</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Your privacy and safety are our top priorities. Advanced security measures protect your personal information.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Success Stories</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Join thousands of couples who found love on VeraMatch. Our platform has created countless meaningful relationships.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">24/7 Support</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our dedicated support team is available around the clock to help you with any questions or concerns.
                </p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-pink-100 mb-10 max-w-3xl mx-auto">
              Join millions of people who have found love, friendship, and meaningful connections on VeraMatch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup" className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center justify-center">
                  Create Your Profile
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