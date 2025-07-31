'use client';

import { useState } from 'react';

interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('dashboard');

    console.log('Sidebar received props:', { activeView });

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
        console.log('Sidebar clicked:', viewId);
        console.log('Setting activeView to:', viewId);
        setActiveView(viewId);
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            <div className="relative">
                {/* Sidebar */}
                <div className={`
                    fixed top-0 left-0 h-full z-50
                    bg-white/80 backdrop-blur-sm border-r border-pink-200/50
                    ${isCollapsed ? 'w-16' : 'w-64'}
                    lg:relative lg:translate-x-0
                    ${isCollapsed ? '-translate-x-0' : 'translate-x-0'}
                    lg:block
                `}>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-pink-200/50">
                        {!isCollapsed && (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">V</span>
                                </div>
                                <span className="font-semibold text-gray-900">Vera Trust</span>
                            </div>
                        )}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-2 rounded-lg hover:bg-pink-100/50 transition-colors text-gray-700"
                        >
                            {isCollapsed ? '→' : '←'}
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

                {/* Mobile toggle button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white/80 backdrop-blur-sm border border-pink-200/50 rounded-lg shadow-lg"
                >
                    ☰
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
                {children}
            </main>
        </div>
    );
};

export default Sidebar;