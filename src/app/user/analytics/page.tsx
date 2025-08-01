'use client';

const Analytics = () => {
    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">Track your profile performance and engagement metrics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">📊</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Profile Performance</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">👁️</span>
                                <div>
                                    <p className="text-sm text-gray-600">Profile Views</p>
                                    <p className="text-lg font-bold text-gray-900">156</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+12%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">❤️</span>
                                <div>
                                    <p className="text-sm text-gray-600">Likes Received</p>
                                    <p className="text-lg font-bold text-gray-900">89</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+8%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">💕</span>
                                <div>
                                    <p className="text-sm text-gray-600">Matches Made</p>
                                    <p className="text-lg font-bold text-gray-900">24</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+15%</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">📈</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Activity</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">💬</span>
                                <div>
                                    <p className="text-sm text-gray-600">Messages Sent</p>
                                    <p className="text-lg font-bold text-gray-900">67</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+5%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">📷</span>
                                <div>
                                    <p className="text-sm text-gray-600">Photos Uploaded</p>
                                    <p className="text-lg font-bold text-gray-900">8</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+2</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200/50">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">✏️</span>
                                <div>
                                    <p className="text-sm text-gray-600">Profile Updates</p>
                                    <p className="text-lg font-bold text-gray-900">12</p>
                                </div>
                            </div>
                            <span className="text-green-500 text-sm font-semibold">+3</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Engagement Metrics */}
            <div className="mt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">🎯</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Engagement Metrics</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 text-center">
                            <div className="text-3xl mb-2">📱</div>
                            <p className="text-sm text-gray-600">Response Rate</p>
                            <p className="text-2xl font-bold text-gray-900">87%</p>
                            <p className="text-green-500 text-xs">+5% this week</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200/50 text-center">
                            <div className="text-3xl mb-2">⏰</div>
                            <p className="text-sm text-gray-600">Avg Response Time</p>
                            <p className="text-2xl font-bold text-gray-900">2.3h</p>
                            <p className="text-green-500 text-xs">-0.5h this week</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200/50 text-center">
                            <div className="text-3xl mb-2">🌟</div>
                            <p className="text-sm text-gray-600">Profile Rating</p>
                            <p className="text-2xl font-bold text-gray-900">4.8/5</p>
                            <p className="text-green-500 text-xs">+0.2 this month</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/50 text-center">
                            <div className="text-3xl mb-2">🎉</div>
                            <p className="text-sm text-gray-600">Success Rate</p>
                            <p className="text-2xl font-bold text-gray-900">92%</p>
                            <p className="text-green-500 text-xs">+3% this month</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Views Chart */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">📈</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Profile Views Trend</h3>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Last 7 days</span>
                            <span className="text-green-500 font-semibold">+23%</span>
                        </div>
                        
                        {/* Simple Bar Chart */}
                        <div className="flex items-end justify-between h-32 space-x-2">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '60%'}}></div>
                                <span className="text-xs text-gray-500">Mon</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '80%'}}></div>
                                <span className="text-xs text-gray-500">Tue</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '45%'}}></div>
                                <span className="text-xs text-gray-500">Wed</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '90%'}}></div>
                                <span className="text-xs text-gray-500">Thu</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '75%'}}></div>
                                <span className="text-xs text-gray-500">Fri</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '95%'}}></div>
                                <span className="text-xs text-gray-500">Sat</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg" style={{height: '70%'}}></div>
                                <span className="text-xs text-gray-500">Sun</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engagement Chart */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">💬</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Engagement Rate</h3>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>This month</span>
                            <span className="text-green-500 font-semibold">+18%</span>
                        </div>
                        
                        {/* Doughnut Chart */}
                        <div className="relative w-32 h-32 mx-auto">
                            <div className="w-32 h-32 rounded-full border-8 border-gray-200"></div>
                            <div className="absolute inset-0 w-32 h-32 rounded-full border-8 border-transparent border-green-500" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)'}}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">87%</div>
                                    <div className="text-xs text-gray-500">Engagement</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-lg">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="font-semibold text-green-700">High</span>
                            </div>
                            <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 rounded-lg">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <span className="font-semibold text-yellow-700">Medium</span>
                            </div>
                            <div className="flex items-center space-x-2 px-3 py-1 bg-red-100 rounded-lg">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="font-semibold text-red-700">Low</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics;