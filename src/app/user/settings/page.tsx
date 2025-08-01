'use client';

import { useState } from 'react';

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(true);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-600">Manage your account preferences and security settings</p>
            </div>
            
            <div className="space-y-6">
                {/* Account Settings */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">👤</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/50">
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                                <p className="text-sm text-gray-600">Receive email updates about your account</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={emailNotifications}
                                    onChange={(e) => setEmailNotifications(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-600"></div>
                            </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200/50">
                            <div>
                                <h3 className="font-semibold text-gray-900">Push Notifications</h3>
                                <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={pushNotifications}
                                    onChange={(e) => setPushNotifications(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
                            <div>
                                <h3 className="font-semibold text-gray-900">SMS Notifications</h3>
                                <p className="text-sm text-gray-600">Receive SMS alerts for important updates</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={smsNotifications}
                                    onChange={(e) => setSmsNotifications(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">🔒</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Security</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <button className="w-full text-left p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">Change Password</h3>
                                    <p className="text-sm text-gray-600">Update your account password</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-pink-500 transition-colors">→</span>
                            </div>
                        </button>
                        
                        <button className="w-full text-left p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200/50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Two-Factor Authentication</h3>
                                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${twoFactorEnabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                                    </span>
                                    <span className="text-gray-400 group-hover:text-purple-500 transition-colors">→</span>
                                </div>
                            </div>
                        </button>

                        <button className="w-full text-left p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Login History</h3>
                                    <p className="text-sm text-gray-600">View your recent login activity</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-blue-500 transition-colors">→</span>
                            </div>
                        </button>

                        <button className="w-full text-left p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200/50 hover:from-red-100 hover:to-pink-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors">Delete Account</h3>
                                    <p className="text-sm text-gray-600">Permanently delete your account</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-red-500 transition-colors">→</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">⚙️</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                            <div>
                                <h3 className="font-semibold text-gray-900">Dark Mode</h3>
                                <p className="text-sm text-gray-600">Switch to dark theme</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={darkMode}
                                    onChange={(e) => setDarkMode(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-emerald-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50">
                            <div>
                                <h3 className="font-semibold text-gray-900">Auto Save</h3>
                                <p className="text-sm text-gray-600">Automatically save your changes</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={autoSave}
                                    onChange={(e) => setAutoSave(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-yellow-500 peer-checked:to-orange-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Data & Privacy */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">📊</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Data & Privacy</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <button className="w-full text-left p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">Download My Data</h3>
                                    <p className="text-sm text-gray-600">Export all your personal data</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">→</span>
                            </div>
                        </button>

                        <button className="w-full text-left p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Privacy Settings</h3>
                                    <p className="text-sm text-gray-600">Manage your privacy preferences</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-purple-500 transition-colors">→</span>
                            </div>
                        </button>

                        <button className="w-full text-left p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl border border-pink-200/50 hover:from-pink-100 hover:to-red-100 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">Clear Cache</h3>
                                    <p className="text-sm text-gray-600">Clear all cached data</p>
                                </div>
                                <span className="text-gray-400 group-hover:text-pink-500 transition-colors">→</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings; 