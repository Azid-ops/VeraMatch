'use client';

const Notifications = () => {
    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h1>
                    <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <span className="text-lg">🔍</span>
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <span className="text-lg">⋮</span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">8 notifications</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-red-500 font-medium">3 unread</span>
                </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm opacity-90">New Likes</p>
                            <p className="text-2xl font-bold">12</p>
                        </div>
                        <span className="text-3xl">❤️</span>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm opacity-90">Messages</p>
                            <p className="text-2xl font-bold">8</p>
                        </div>
                        <span className="text-3xl">💬</span>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm opacity-90">Matches</p>
                            <p className="text-2xl font-bold">5</p>
                        </div>
                        <span className="text-3xl">🎯</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-pink-500/10 to-red-600/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg">❤️</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">New Like</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">5m ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Sarah liked your profile</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-pink-500 font-medium bg-pink-50 px-2 py-1 rounded-full">New</span>
                                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg">💬</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">New Message</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1h ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Mike sent you a message</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-purple-500 font-medium bg-purple-50 px-2 py-1 rounded-full">Unread</span>
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Notification */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">🎯</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Profile Match</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2h ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Emma has a 95% compatibility with you</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-emerald-500 font-medium">High Match</span>
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fourth Notification */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">🎉</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Profile Complete</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">3h ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Congratulations! Your profile is 100% complete</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-orange-500 font-medium">Achievement</span>
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fifth Notification */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">📊</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Weekly Report</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1d ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Your profile was viewed 12 times this week</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-blue-500 font-medium">Read</span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sixth Notification */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">⭐</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">Premium Feature</h3>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2d ago</span>
                            </div>
                            <p className="text-sm text-gray-600">Unlock unlimited likes with Premium</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-yellow-500 font-medium">Offer</span>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                        <button className="text-sm text-green-600 hover:text-green-700 font-medium">View All</button>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">👤</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">Profile viewed by <span className="font-medium">Emma</span></p>
                                <p className="text-xs text-gray-500">2 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">📱</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">App updated to version 2.1</p>
                                <p className="text-xs text-gray-500">1 hour ago</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">🎁</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">New feature unlocked: <span className="font-medium">Advanced Filters</span></p>
                                <p className="text-xs text-gray-500">3 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;