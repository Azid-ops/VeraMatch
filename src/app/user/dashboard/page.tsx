'use client';

const Dashboard = () => {
    return(
        <div className="p-6 space-y-6">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your account.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-0">
                        <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
                        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                            Refresh Data
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Matches</p>
                            <p className="text-3xl font-bold text-pink-600 mt-1">24</p>
                            <p className="text-xs text-green-600 mt-1">↑ 12% from last month</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">❤️</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Messages</p>
                            <p className="text-3xl font-bold text-purple-600 mt-1">12</p>
                            <p className="text-xs text-green-600 mt-1">↑ 8% from last week</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">💬</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Profile Views</p>
                            <p className="text-3xl font-bold text-blue-600 mt-1">156</p>
                            <p className="text-xs text-green-600 mt-1">↑ 23% from last month</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">👁️</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Response Rate</p>
                            <p className="text-3xl font-bold text-green-600 mt-1">89%</p>
                            <p className="text-xs text-green-600 mt-1">↑ 5% from last month</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">📈</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/50">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View All</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-pink-50/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">S</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">Sarah liked your profile</p>
                                <p className="text-xs text-gray-500">2 minutes ago</p>
                            </div>
                            <span className="text-pink-500">❤️</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-blue-50/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">M</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">Mike sent you a message</p>
                                <p className="text-xs text-gray-500">15 minutes ago</p>
                            </div>
                            <span className="text-blue-500">💬</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">J</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">New match with Jessica</p>
                                <p className="text-xs text-gray-500">1 hour ago</p>
                            </div>
                            <span className="text-green-500">✨</span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/50">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📝</span>
                                <span className="font-medium">Update Profile</span>
                            </div>
                        </button>
                        <button className="w-full text-left p-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📸</span>
                                <span className="font-medium">Add Photos</span>
                            </div>
                        </button>
                        <button className="w-full text-left p-3 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">🔍</span>
                                <span className="font-medium">Browse Matches</span>
                            </div>
                        </button>
                        <button className="w-full text-left p-3 bg-gradient-to-r from-green-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">⚙️</span>
                                <span className="font-medium">Settings</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Performance Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/50">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Performance</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Profile Completion</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-900">85%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Photo Quality Score</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-900">92%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Response Time</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{width: '78%'}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-900">78%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/50">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Stats</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-700">New Matches</span>
                            <span className="text-lg font-bold text-pink-600">+5</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-700">Messages Sent</span>
                            <span className="text-lg font-bold text-purple-600">+18</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-700">Profile Views</span>
                            <span className="text-lg font-bold text-blue-600">+42</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-pink-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-700">Likes Received</span>
                            <span className="text-lg font-bold text-green-600">+12</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Features Promo */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Upgrade to Premium</h2>
                        <p className="text-pink-100 mb-4">Get unlimited likes, see who liked you, and boost your profile visibility.</p>
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold">✨</div>
                        <p className="text-sm text-pink-100">Premium Features</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;