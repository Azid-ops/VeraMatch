'use client';

import { useState, useEffect } from 'react';
import Dashboard from './dashboard/page';
import Profile from './profile/page';
import Settings from './settings/page';
import Analytics from './analytics/page';
import Messages from './message/page';
import Notifications from './notifications/page';
import Dates from './dates/page';
import Help from './help/page';

const User = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [showSplash, setShowSplash] = useState(false);
    const [showMoreDropdown, setShowMoreDropdown] = useState(false);

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
        setShowMoreDropdown(false); // Close dropdown when navigating
        
        // Hide splash after 2 seconds
        setTimeout(() => {
            setShowSplash(false);
        }, 2000);
    };

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
                return <Profile />;
            case 'settings':
                return <Settings />;
            case 'analytics':
                return <Analytics />;
            case 'messages':
                return <Messages />;
            case 'notifications':
                return <Notifications />;
            case 'search':
                return <Dates handleNavigation={handleNavigation} />;
            case 'help':
                return <Help />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            {/* Splash Screen */}
            {showSplash && <SplashScreen />}
            
            <div className="hidden lg:block">
                {/* Desktop Sidebar */}
                <div className="fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-pink-200/50 z-50 shadow-lg">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-pink-200/50 bg-white/90">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white text-sm font-bold">V</span>
                            </div>
                            <span className="font-semibold text-gray-900">Vera Trust</span>
                        </div>
                    </div>

                    {/* User Profile */}
                    <div className="p-4 border-b border-pink-200/50">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">U</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">User Name</p>
                                <p className="text-xs text-gray-600 truncate">user@example.com</p>
                            </div>
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
                            `}
                        >
                            <span className="text-lg">🔍</span>
                            <span className="font-medium">Browse People</span>
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
                                    `}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-pink-200/50">
                        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-100/50 hover:text-gray-900 transition-colors">
                            <span className="text-lg">🚪</span>
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>


            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 transition-all duration-300 lg:ml-64 pb-20 lg:pb-0">
                {renderContent()}
            </main>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-pink-200/50 z-50">
                <div className="flex items-center justify-around px-2 py-2">
                    {menuItems.slice(0, 3).map((item) => {
                        const isActive = activeView === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                    isActive 
                                        ? 'text-pink-600 bg-pink-50' 
                                        : 'text-gray-600 hover:text-pink-600'
                                }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-xs font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                    {/* Browse People Button */}
                    <button
                        onClick={() => handleNavigation('search')}
                        className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                            activeView === 'search' 
                                ? 'text-pink-600 bg-pink-50' 
                                : 'text-gray-600 hover:text-pink-600'
                        }`}
                    >
                        <span className="text-xl">🔍</span>
                        <span className="text-xs font-medium">Browse</span>
                    </button>
                    {/* More Button */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                (activeView === 'notifications' || activeView === 'help') && showMoreDropdown
                                    ? 'text-pink-600 bg-pink-50' 
                                    : 'text-gray-600 hover:text-pink-600'
                            }`}
                        >
                            <span className="text-xl">⋮</span>
                            <span className="text-xs font-medium">More</span>
                        </button>
                        {/* Dropdown for remaining items */}
                        {showMoreDropdown && (
                            <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[120px]">
                                <button
                                    onClick={() => {
                                        handleNavigation('analytics');
                                        setShowMoreDropdown(false);
                                    }}
                                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                                        activeView === 'analytics' 
                                            ? 'text-pink-600 bg-pink-50' 
                                            : 'text-gray-600 hover:text-pink-600'
                                    }`}
                                >
                                    <span className="text-lg">📈</span>
                                    <span className="text-sm font-medium">Analytics</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleNavigation('notifications');
                                        setShowMoreDropdown(false);
                                    }}
                                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                                        activeView === 'notifications' 
                                            ? 'text-pink-600 bg-pink-50' 
                                            : 'text-gray-600 hover:text-pink-600'
                                    }`}
                                >
                                    <span className="text-lg">🔔</span>
                                    <span className="text-sm font-medium">Notifications</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleNavigation('help');
                                        setShowMoreDropdown(false);
                                    }}
                                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                                        activeView === 'help' 
                                            ? 'text-pink-600 bg-pink-50' 
                                            : 'text-gray-600 hover:text-pink-600'
                                    }`}
                                >
                                    <span className="text-lg">❓</span>
                                    <span className="text-sm font-medium">Help</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;