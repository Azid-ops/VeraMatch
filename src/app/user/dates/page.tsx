'use client';

import { useState } from 'react';

const Dates = (props: any) => {
    const [touchedCard, setTouchedCard] = useState<string | null>(null);
    return (
        <div className="p-6">
            {/* Futuristic Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="relative">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                            Discover People
                        </h1>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium">24 people nearby</span>
                    </div>
                </div>
                <button className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto">
                    <span className="relative z-10">🔄 Refresh</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>

            {/* Futuristic Search Filters */}
            <div className="relative bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20 mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-2 sm:space-y-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center space-x-2 sm:space-x-3">
                            <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
                            <span>Advanced Filters</span>
                        </h2>
                        <button className="text-xs sm:text-sm text-purple-600 hover:text-purple-700 font-medium hover:scale-105 transition-transform duration-200">
                            Clear All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700">Age Range</label>
                            <select className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 hover:border-pink-300 text-xs sm:text-sm md:text-base">
                                <option>18-25</option>
                                <option>26-35</option>
                                <option>36-45</option>
                                <option>46+</option>
                            </select>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700">Distance</label>
                            <select className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 text-xs sm:text-sm md:text-base">
                                <option>Within 5 miles</option>
                                <option>Within 10 miles</option>
                                <option>Within 25 miles</option>
                                <option>Any distance</option>
                            </select>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700">Looking For</label>
                            <select className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 text-xs sm:text-sm md:text-base">
                                <option>Serious Relationship</option>
                                <option>Casual Dating</option>
                                <option>Friendship</option>
                                <option>Marriage</option>
                            </select>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700">Online Status</label>
                            <select className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 hover:border-green-300 text-xs sm:text-sm md:text-base">
                                <option>All Users</option>
                                <option>Online Now</option>
                                <option>Recently Active</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                            <label className="flex items-center space-x-3 cursor-pointer group">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg peer-checked:bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 peer-checked:shadow-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-xs sm:text-sm">✓</span>
                                    </div>
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Verified Profiles Only</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer group">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg peer-checked:bg-gradient-to-r from-purple-500 to-blue-600 transition-all duration-300 peer-checked:shadow-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-xs sm:text-sm">✓</span>
                                    </div>
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">With Photos</span>
                            </label>
                        </div>
                        <button className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto text-sm sm:text-base">
                            <span className="relative z-10">Apply Filters</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Interactive 3D Profile Cards */}
            <div className="space-y-12">
                {/* 3D Header */}
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/20">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 sm:space-y-6 lg:space-y-0">
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                                3D Profile Discovery
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-6 xl:space-x-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold">24 profiles available</span>
                                </div>
                                <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-blue-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold">8 online now</span>
                                </div>
                            </div>
                        </div>

                        {/* 3D Navigation */}
                        <div className="flex items-center justify-center lg:justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
                            <button
                                onClick={() => props.handleNavigation('search')}
                                className="p-2 sm:p-3 md:p-4 lg:p-5 bg-white/20 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl shadow-xl"
                            >
                                ◀ Previous
                            </button>
                            <div className="text-center bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-2 border-white/30 shadow-xl">
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">1</div>
                                <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/80 font-medium">of 24</div>
                            </div>
                            <button
                                onClick={() => props.handleNavigation('search')}
                                className="p-2 sm:p-3 md:p-4 lg:p-5 bg-white/20 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl shadow-xl"
                            >
                                Next ▶
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Profile Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* 3D Card 1 - Tilt Effect */}
                    <div 
                        className="group perspective-1000 cursor-pointer"
                        onClick={() => setTouchedCard(touchedCard === 'card1' ? null : 'card1')}
                    >
                        <div className={`relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5 ${
                            touchedCard === 'card1' ? 'rotate-y-12 rotate-x-5' : ''
                        }`}>
                            {/* Front Layer - Basic Info */}
                            <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-0">
                                <div className="text-center mb-8">
                                    <div className="w-28 h-28 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-white/50">
                                        <span className="text-6xl">👩</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Emma, 24</h3>
                                    <p className="text-white/80 text-base">📍 New York, NY</p>
                                </div>

                                <div className="flex justify-center space-x-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">94%</div>
                                        <div className="text-xs text-white/70">Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">2</div>
                                        <div className="text-xs text-white/70">Miles</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">🟢</div>
                                        <div className="text-xs text-white/70">Online</div>
                                    </div>
                                </div>

                                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ✋ Pass
                                    </button>
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ❤️ Like
                                    </button>
                                </div>
                            </div>

                            {/* Back Layer - Detailed Info */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] transition-opacity duration-700 ${
                                touchedCard === 'card1' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}>
                                <div className="text-white flex flex-col h-full">
                                    <h4 className="text-2xl font-bold mb-6 text-center">Detailed Profile</h4>

                                    <div className="space-y-6 flex-grow">
                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">About</h5>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                Adventure seeker & coffee enthusiast ☕ Looking for someone to explore the city with! Love photography, travel, and trying new restaurants.
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Interests</h5>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Travel</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Photography</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Coffee</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Food</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Looking For</h5>
                                            <p className="text-white/80 text-sm">Serious relationship, someone who values experiences and growth</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3 mt-8 mb-2">
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ✋ Pass
                                        </button>
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ❤️ Like
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Card 2 - Tilt Effect (Alex) */}
                    <div 
                        className="group perspective-1000 cursor-pointer"
                        onClick={() => setTouchedCard(touchedCard === 'card2' ? null : 'card2')}
                    >
                        <div className={`relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5 ${
                            touchedCard === 'card2' ? 'rotate-y-12 rotate-x-5' : ''
                        }`}>
                            {/* Front Layer - Basic Info */}
                            <div className="bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-0">
                                <div className="text-center mb-8">
                                    <div className="w-28 h-28 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-white/50">
                                        <span className="text-6xl">👨</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Alex, 27</h3>
                                    <p className="text-white/80 text-base">📍 Brooklyn, NY</p>
                                </div>

                                <div className="flex justify-center space-x-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">87%</div>
                                        <div className="text-xs text-white/70">Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">5</div>
                                        <div className="text-xs text-white/70">Miles</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-400">●</div>
                                        <div className="text-xs text-white/70">2h ago</div>
                                    </div>
                                </div>

                                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ✋ Pass
                                    </button>
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ❤️ Like
                                    </button>
                                </div>
                            </div>

                            {/* Back Layer - Detailed Info */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] transition-opacity duration-700 ${
                                touchedCard === 'card2' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}>
                                <div className="text-white flex flex-col h-full">
                                    <h4 className="text-2xl font-bold mb-6 text-center">Detailed Profile</h4>

                                    <div className="space-y-6 flex-grow">
                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">About</h5>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                Music producer & foodie 🎵 Love trying new restaurants and making beats! Passionate about art, culture, and authentic experiences.
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Interests</h5>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Music</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Food</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Art</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Culture</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Looking For</h5>
                                            <p className="text-white/80 text-sm">Someone who appreciates creativity, good food, and meaningful conversations</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3 mt-8 mb-2">
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ✋ Pass
                                        </button>
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ❤️ Like
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Card 3 - Tilt Effect (Sophia) */}
                    <div 
                        className="group perspective-1000 cursor-pointer"
                        onClick={() => setTouchedCard(touchedCard === 'card3' ? null : 'card3')}
                    >
                        <div className={`relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5 ${
                            touchedCard === 'card3' ? 'rotate-y-12 rotate-x-5' : ''
                        }`}>
                            {/* Front Layer - Basic Info */}
                            <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-0">
                                <div className="text-center mb-8">
                                    <div className="w-28 h-28 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-white/50">
                                        <span className="text-6xl">👩</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Sophia, 25</h3>
                                    <p className="text-white/80 text-base">📍 Manhattan, NY</p>
                                </div>

                                <div className="flex justify-center space-x-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">92%</div>
                                        <div className="text-xs text-white/70">Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">1</div>
                                        <div className="text-xs text-white/70">Mile</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">🟢</div>
                                        <div className="text-xs text-white/70">Online</div>
                                    </div>
                                </div>

                                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ✋ Pass
                                    </button>
                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        ❤️ Like
                                    </button>
                                </div>
                            </div>

                            {/* Back Layer - Detailed Info */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] transition-opacity duration-700 ${
                                touchedCard === 'card3' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}>
                                <div className="text-white flex flex-col h-full">
                                    <h4 className="text-2xl font-bold mb-6 text-center">Detailed Profile</h4>

                                    <div className="space-y-6 flex-grow">
                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">About</h5>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                Yoga instructor & wellness advocate 🧘‍♀️ Looking for someone who values health & mindfulness. Passionate about helping others find balance.
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Interests</h5>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Yoga</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Wellness</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Meditation</span>
                                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">Health</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white/90 mb-2">Looking For</h5>
                                            <p className="text-white/80 text-sm">Someone who values health, balance, and personal growth</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3 mt-8 mb-2">
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ✋ Pass
                                        </button>
                                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                            ❤️ Like
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D Navigation */}
                <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto pb-2">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-110 flex-shrink-0 backdrop-blur-sm ${index === 1
                                ? 'border-white bg-gradient-to-br from-pink-500/60 to-purple-500/60 scale-110'
                                : 'border-white/30 bg-gradient-to-br from-white/20 to-white/10 hover:border-white/50'
                            }`}>
                            <div className="w-full h-full flex items-center justify-center relative group">
                                <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{['👩', '👨', '👩', '👨', '👩', '👨'][index - 1]}</span>
                                {index === 1 && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dates;