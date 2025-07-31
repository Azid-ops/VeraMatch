'use client';

import { useState, useEffect } from 'react';
import Dashboard from './dashboard/page';

const User = () => {
    const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed on mobile
    const [activeView, setActiveView] = useState('dashboard');
    const [showSplash, setShowSplash] = useState(false);

    console.log('User component rendering with activeView:', activeView);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'analytics', label: 'Analytics', icon: '📈' },
        { id: 'messages', label: 'Messages', icon: '💬' },
        { id: 'notifications', label: 'Notifications', icon: '🔔' },
        { id: 'help', label: 'Help', icon: '❓' },
    ];

    const handleNavigation = (viewId: string) => {
        console.log('Navigation clicked:', viewId);
        setShowSplash(true);
        setActiveView(viewId);
        
        // Hide splash after 2 seconds
        setTimeout(() => {
            setShowSplash(false);
        }, 2000);
    };

    // Profile Content
    const ProfileContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">U</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">User Name</h2>
                        <p className="text-gray-600">user@example.com</p>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                            defaultValue="User Name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                            defaultValue="user@example.com"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                            defaultValue="+1 (555) 123-4567"
                        />
                    </div>
                </div>
                
                <div className="mt-6">
                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );

    // Settings Content
    const SettingsContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
            
            <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                                <p className="text-sm text-gray-600">Receive email updates about your account</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">Push Notifications</h3>
                                <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
                    <div className="space-y-4">
                        <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">Change Password</h3>
                                    <p className="text-sm text-gray-600">Update your account password</p>
                                </div>
                                <span className="text-gray-400">→</span>
                            </div>
                        </button>
                        
                        <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                                </div>
                                <span className="text-gray-400">→</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Analytics Content
    const AnalyticsContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Performance</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Profile Views</span>
                            <span className="font-semibold">156</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Likes Received</span>
                            <span className="font-semibold">89</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Matches Made</span>
                            <span className="font-semibold">24</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Messages Sent</span>
                            <span className="font-semibold">67</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Photos Uploaded</span>
                            <span className="font-semibold">8</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Profile Updates</span>
                            <span className="font-semibold">12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Messages Content
    const MessagesContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
            <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">S</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">Sarah</h3>
                            <p className="text-sm text-gray-600">Hey! How are you doing?</p>
                        </div>
                        <span className="text-xs text-gray-500">2m ago</span>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">M</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">Mike</h3>
                            <p className="text-sm text-gray-600">Would you like to grab coffee sometime?</p>
                        </div>
                        <span className="text-xs text-gray-500">1h ago</span>
                    </div>
                </div>
            </div>
        </div>
    );

    // Notifications Content
    const NotificationsContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
            <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">❤</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">New Like</h3>
                            <p className="text-sm text-gray-600">Sarah liked your profile</p>
                        </div>
                        <span className="text-xs text-gray-500">5m ago</span>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">💬</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">New Message</h3>
                            <p className="text-sm text-gray-600">Mike sent you a message</p>
                        </div>
                        <span className="text-xs text-gray-500">1h ago</span>
                    </div>
                </div>
            </div>
        </div>
    );

    // Search/Browse People Content
    const SearchContent = () => (
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
                                onClick={() => handleNavigation('search')}
                                className="p-2 sm:p-3 md:p-4 lg:p-5 bg-white/20 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl shadow-xl"
                            >
                                ◀ Previous
                            </button>
                            <div className="text-center bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-2 border-white/30 shadow-xl">
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">1</div>
                                <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/80 font-medium">of 24</div>
                            </div>
                            <button 
                                onClick={() => handleNavigation('search')}
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
                    <div className="group perspective-1000">
                        <div className="relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
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
                    <div className="group perspective-1000">
                        <div className="relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
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
                    <div className="group perspective-1000">
                        <div className="relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-5">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 shadow-2xl border border-white/30 transform translate-z-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
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
                        <div key={index} className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-xl flex-shrink-0 ${
                            index === 1 
                                ? 'border-white bg-gradient-to-br from-pink-500/40 to-purple-500/40 shadow-pink-300 scale-110' 
                                : 'border-white/30 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/50'
                        }`}>
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-2xl sm:text-3xl md:text-4xl">{['👩', '👨', '👩', '👨', '👩', '👨'][index - 1]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // Help Content
    const HelpContent = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
            <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">How do I update my profile?</h3>
                            <p className="text-sm text-gray-600">Go to your Profile section and click on the edit button to update your information.</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">How do I report someone?</h3>
                            <p className="text-sm text-gray-600">Click on the three dots menu next to any message or profile to report inappropriate behavior.</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">How do I delete my account?</h3>
                            <p className="text-sm text-gray-600">Go to Settings &gt; Account &gt; Delete Account to permanently remove your account.</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h2>
                    <p className="text-sm text-gray-600 mb-4">Need help? Our support team is here to assist you.</p>
                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );

    // Splash Screen Component
    const SplashScreen = () => (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                {/* Logo Animation */}
                <div className="mb-8 animate-logoEntrance">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30">
                        <span className="text-4xl font-bold text-white">V</span>
                    </div>
                </div>
                
                {/* App Name with Animation */}
                <div className="animate-fadeInUp animation-delay-200">
                    <h1 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">Vera Trust</h1>
                    <p className="text-lg text-pink-100 mb-6 font-medium">Loading {activeView}...</p>
                </div>
                
                {/* Loading Animation */}
                <div className="animate-fadeInUp animation-delay-400">
                    <div className="flex justify-center items-center space-x-2 mb-6">
                        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200"></div>
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="animate-fadeInUp animation-delay-500">
                    <div className="w-64 bg-white/20 rounded-full h-3 mx-auto shadow-inner">
                        <div className="bg-white h-3 rounded-full shadow-lg transition-all duration-1000 ease-out" 
                             style={{width: '75%'}}></div>
                    </div>
                    <p className="text-sm text-pink-100 mt-3 font-medium">Preparing your experience...</p>
                </div>
            </div>
        </div>
    );

    // Render content based on active view
    const renderContent = () => {
        console.log('Rendering content for:', activeView);
        switch (activeView) {
            case 'dashboard':
                return <Dashboard />;
            case 'profile':
                return <ProfileContent />;
            case 'settings':
                return <SettingsContent />;
            case 'analytics':
                return <AnalyticsContent />;
            case 'messages':
                return <MessagesContent />;
            case 'notifications':
                return <NotificationsContent />;
            case 'search':
                return <SearchContent />;
            case 'help':
                return <HelpContent />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            {/* Splash Screen */}
            {showSplash && <SplashScreen />}
            
            <div className="relative">
                {/* Sidebar */}
                <div className={`
                    fixed top-0 left-0 h-full z-50
                    bg-white/95 backdrop-blur-sm border-r border-pink-200/50
                    ${isCollapsed ? 'w-16' : 'w-64'}
                    lg:relative lg:translate-x-0
                    ${isCollapsed ? '-translate-x-0' : 'translate-x-0'}
                    lg:block
                    ${isCollapsed ? 'w-16' : 'w-56 sm:w-64'}
                    transition-all duration-300 ease-in-out
                    min-w-16
                    shadow-lg
                `}>
                    
                    {/* Header */}
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-4 border-b border-pink-200/50 bg-white/90`}>
                        {!isCollapsed && (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white text-sm font-bold">V</span>
                                </div>
                                <span className="font-semibold text-gray-900">Vera Trust</span>
                            </div>
                        )}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-2 rounded-lg hover:bg-pink-100/50 transition-colors text-gray-700"
                        >
                            {isCollapsed ? '☰' : '✕'}
                        </button>
                    </div>

                    {/* User Profile */}
                    <div className="p-4 border-b border-pink-200/50">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">U</span>
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">User Name</p>
                                    <p className="text-xs text-gray-600 truncate">user@example.com</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="p-4 border-b border-pink-200/50">
                        <button
                            onClick={() => handleNavigation('search')}
                            className={`
                                w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                                ${activeView === 'search' 
                                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white shadow-lg' 
                                    : 'text-gray-700 hover:bg-pink-100/50 hover:text-gray-900'
                                }
                                ${isCollapsed ? 'justify-center' : 'justify-start'}
                            `}
                        >
                            <span className="text-lg">🔍</span>
                            {!isCollapsed && (
                                <span className="font-medium">Browse People</span>
                            )}
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 p-4 space-y-2">
                        {menuItems.map((item) => {
                            const isActive = activeView === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id)}
                                    className={`
                                        w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                                        ${isActive 
                                            ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white shadow-lg' 
                                            : 'text-gray-700 hover:bg-pink-100/50 hover:text-gray-900'
                                        }
                                        ${isCollapsed ? 'justify-center' : 'justify-start'}
                                    `}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {!isCollapsed && (
                                        <span className="font-medium">{item.label}</span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-pink-200/50">
                        <button className={`
                            w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 
                            hover:bg-pink-100/50 hover:text-gray-900 transition-colors
                            ${isCollapsed ? 'justify-center' : 'justify-start'}
                        `}>
                            <span className="text-lg">🚪</span>
                            {!isCollapsed && <span className="font-medium">Logout</span>}
                        </button>
                    </div>
                </div>


            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 lg:ml-0 ml-16 sm:ml-16 lg:ml-0 pl-4 lg:pl-0">
                {renderContent()}
            </main>
        </div>
    );
}

export default User;