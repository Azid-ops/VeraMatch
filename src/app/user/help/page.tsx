const Help = () => {
    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Help & Support</h1>
                    <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <span className="text-lg">🔍</span>
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <span className="text-lg">📞</span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">24/7 support available</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 font-medium">Live chat</span>
                </div>
            </div>
            <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">❓</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I update my profile?
                                </h3>
                                <p className="text-sm text-gray-600">Go to your Profile section and click on the edit button to update your information, photos, and preferences.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I report someone?
                                </h3>
                                <p className="text-sm text-gray-600">Click on the three dots menu next to any message or profile to report inappropriate behavior.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I delete my account?
                                </h3>
                                <p className="text-sm text-gray-600">Go to Settings &gt; Account &gt; Delete Account to permanently remove your account and data.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I block someone?
                                </h3>
                                <p className="text-sm text-gray-600">Go to their profile and click the block button, or use the three dots menu in messages.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I change my privacy settings?
                                </h3>
                                <p className="text-sm text-gray-600">Navigate to Settings &gt; Privacy to control who can see your profile and contact you.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <span className="text-blue-500 mr-2">Q:</span>
                                    How do I verify my account?
                                </h3>
                                <p className="text-sm text-gray-600">Go to Settings &gt; Verification to upload your ID and get a verified badge on your profile.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">💬</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Contact Support</h2>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Need help? Our support team is here to assist you 24/7.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            Live Chat
                        </button>
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            Email Support
                        </button>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            Call Us
                        </button>
                    </div>
                </div>

                {/* Support Resources */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">📚</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Support Resources</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">📖</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">User Guide</h3>
                                    <p className="text-xs text-gray-600">Complete guide</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">🎥</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Video Tutorials</h3>
                                    <p className="text-xs text-gray-600">Step-by-step videos</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">🔒</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Safety Tips</h3>
                                    <p className="text-xs text-gray-600">Stay safe online</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">📋</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Terms of Service</h3>
                                    <p className="text-xs text-gray-600">Legal information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;