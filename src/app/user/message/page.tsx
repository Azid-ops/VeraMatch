'use client';

import React, { useState } from 'react';

export default function Messages() {
    const [selectedChat, setSelectedChat] = useState('sarah');
    const [activeTab, setActiveTab] = useState('all');
    const [showChat, setShowChat] = useState(true);

    const chats = [
        {
            id: 'sarah',
            name: 'Sarah',
            lastMessage: 'Hey! How are you doing?',
            time: '2m',
            unread: 1,
            online: true,
            avatar: 'S',
            color: 'from-pink-500 to-purple-600'
        },
        {
            id: 'mike',
            name: 'Mike',
            lastMessage: 'Would you like to grab coffee sometime?',
            time: '1h',
            unread: 0,
            online: true,
            avatar: 'M',
            color: 'from-purple-500 to-blue-600'
        },
        {
            id: 'emma',
            name: 'Emma',
            lastMessage: 'Thanks for the great conversation! 😊',
            time: '3h',
            unread: 0,
            online: true,
            avatar: 'E',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            id: 'alex',
            name: 'Alex',
            lastMessage: 'Are you free this weekend?',
            time: '1d',
            unread: 0,
            online: false,
            avatar: 'A',
            color: 'from-orange-500 to-red-600'
        }
    ];

    const messages: Record<string, Array<{ id: number; text: string; time: string; sent: boolean; read: boolean }>> = {
        sarah: [
            { id: 1, text: 'Hey! How are you doing?', time: '22:31', sent: false, read: true },
            { id: 2, text: 'I\'m doing great! How about you?', time: '22:32', sent: true, read: true },
            { id: 3, text: 'Pretty good! Want to grab coffee sometime?', time: '22:33', sent: false, read: false }
        ]
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Panel - Chat List */}
            <div className={`${showChat ? 'flex' : 'hidden'} md:flex w-full md:w-1/3 bg-white border-r border-gray-200 flex-col`}>
                {/* Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                            <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-lg">➕</span>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-xl font-bold text-gray-800">⋮</span>
                                </button>
                            </div>
                        </div>
                </div>

                {/* Search Bar */}
                <div className="px-3 md:px-4 py-3 border-b border-gray-200">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Search or start a new chat"
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                    </div>
                        </div>

                {/* Navigation Tabs */}
                <div className="px-3 md:px-4 py-2 border-b border-gray-200">
                    <div className="flex space-x-1 overflow-x-auto">
                        {['all', 'unread', 'favourites', 'groups'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                                    activeTab === tab 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => {
                                setSelectedChat(chat.id);
                                setShowChat(false);
                            }}
                            className={`px-3 md:px-4 py-3 cursor-pointer transition-colors ${
                                selectedChat === chat.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center space-x-2 md:space-x-3">
                                <div className="relative">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${chat.color} rounded-full flex items-center justify-center`}>
                                        <span className="text-white font-semibold text-sm md:text-lg">{chat.avatar}</span>
                                    </div>
                                    {chat.online && (
                                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                                        <span className="text-xs text-gray-500">{chat.time}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                                        {chat.unread > 0 && (
                                            <div className="flex items-center space-x-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-gray-400">{chat.unread}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel - Chat Conversation */}
            <div className={`${!showChat ? 'flex' : 'hidden'} md:flex flex-1 flex-col bg-gray-50`}>
                {selectedChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => setShowChat(true)}
                                className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <span className="text-xl font-bold text-gray-800">←</span>
                            </button>
                            <div className="relative">
                                <div className={`w-10 h-10 bg-gradient-to-r ${chats.find(c => c.id === selectedChat)?.color} rounded-full flex items-center justify-center`}>
                                    <span className="text-white font-semibold text-sm">
                                        {chats.find(c => c.id === selectedChat)?.avatar}
                                    </span>
                                </div>
                                {chats.find(c => c.id === selectedChat)?.online && (
                                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    {chats.find(c => c.id === selectedChat)?.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {chats.find(c => c.id === selectedChat)?.online ? 'online' : 'last seen recently'}
                                </p>
                            </div>
                        </div>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-lg">🔍</span>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-xl font-bold text-gray-800">⋮</span>
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
                            {messages[selectedChat]?.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] sm:max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                                        message.sent 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-white text-gray-900'
                                    }`}>
                                        <p className="text-sm">{message.text}</p>
                                        <div className={`flex items-center justify-end mt-1 space-x-1 ${
                                            message.sent ? 'text-green-100' : 'text-gray-500'
                                        }`}>
                                            <span className="text-xs">{message.time}</span>
                                            {message.sent && (
                                                <span className="text-xs">
                                                    {message.read ? '✓✓' : '✓'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="bg-white px-3 md:px-4 py-3 border-t border-gray-200">
                            <div className="flex items-center space-x-2 md:space-x-3">
                                <button className="p-1.5 md:p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-base md:text-lg">➕</span>
                                </button>
                                <div className="flex-1 relative">
                                    <input 
                                        type="text" 
                                        placeholder="Type a message"
                                        className="w-full px-3 md:px-4 py-2 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                    />
                                </div>
                                <button className="p-1.5 md:p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-base md:text-lg">😊</span>
                                </button>
                                <button className="p-1.5 md:p-2 rounded-full hover:bg-gray-200 transition-colors">
                                    <span className="text-base md:text-lg">🎤</span>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">💬</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a chat</h3>
                            <p className="text-gray-500">Choose a conversation to start messaging</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}