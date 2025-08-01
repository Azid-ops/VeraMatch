'use client';

import { useState } from 'react';

const Profile = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<{[key: string]: string}>({});
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
    
    // 🎯 ENHANCED FEATURES STATE
    const [showConfetti, setShowConfetti] = useState(false);
    const [assessmentCategory, setAssessmentCategory] = useState('personality');
    const [profilePhotos, setProfilePhotos] = useState<string[]>([]);
    const [socialLinks, setSocialLinks] = useState({
        instagram: '',
        linkedin: '',
        twitter: ''
    });
    const [verificationStatus, setVerificationStatus] = useState({
        email: false,
        phone: false,
        social: false
    });
    const [profileCompletion, setProfileCompletion] = useState(0);
    const [isDraftSaved, setIsDraftSaved] = useState(false);

    // 🎯 ENHANCED QUESTIONS WITH CATEGORIES AND EXPLANATIONS
    const questions = [
        {
            id: 'personality',
            category: 'personality',
            question: "How would you describe your personality?",
            explanation: "This helps us understand your social preferences and energy levels",
            options: ["Introverted & Reserved", "Extroverted & Outgoing", "Balanced & Adaptable", "Creative & Artistic"]
        },
        {
            id: 'lifestyle',
            category: 'lifestyle',
            question: "What's your typical weekend like?",
            explanation: "This shows how you prefer to spend your free time",
            options: ["Quiet time at home", "Outdoor adventures", "Social gatherings", "Creative pursuits"]
        },
        {
            id: 'values',
            category: 'values',
            question: "What matters most to you in a relationship?",
            explanation: "This reveals your core relationship priorities",
            options: ["Emotional connection", "Shared interests", "Personal growth", "Stability & security"]
        },
        {
            id: 'communication',
            category: 'communication',
            question: "How do you prefer to communicate?",
            explanation: "This helps match you with compatible communication styles",
            options: ["Deep conversations", "Light & fun chats", "Direct & honest", "Thoughtful & measured"]
        },
        {
            id: 'goals',
            category: 'values',
            question: "What are your life goals?",
            explanation: "This shows your long-term aspirations and priorities",
            options: ["Career success", "Family & relationships", "Personal development", "Making a difference"]
        },
        {
            id: 'hobbies',
            category: 'lifestyle',
            question: "What activities energize you most?",
            explanation: "This helps find shared interests and activities",
            options: ["Reading & learning", "Sports & fitness", "Arts & culture", "Travel & exploration"]
        },
        {
            id: 'social',
            category: 'personality',
            question: "How do you prefer to spend time with others?",
            explanation: "This reveals your social interaction preferences",
            options: ["One-on-one conversations", "Group activities", "Shared experiences", "Supporting others"]
        },
        {
            id: 'future',
            category: 'values',
            question: "Where do you see yourself in 5 years?",
            explanation: "This shows your future planning and relationship goals",
            options: ["In a committed relationship", "Advancing in career", "Living abroad", "Starting a family"]
        },
        {
            id: 'dealbreakers',
            category: 'values',
            question: "What's most important to avoid in a partner?",
            explanation: "This helps identify potential compatibility issues early",
            options: ["Dishonesty", "Lack of ambition", "Poor communication", "Different values"]
        },
        {
            id: 'love_language',
            category: 'communication',
            question: "How do you express love and affection?",
            explanation: "This reveals your preferred ways of showing and receiving love",
            options: ["Physical touch", "Quality time", "Words of affirmation", "Acts of service"]
        },
        {
            id: 'conflict',
            category: 'communication',
            question: "How do you handle disagreements?",
            explanation: "This shows your conflict resolution style",
            options: ["Open discussion", "Time to process", "Seeking compromise", "Professional mediation"]
        },
        {
            id: 'relationship_type',
            category: 'values',
            question: "What type of relationship are you looking for?",
            explanation: "This clarifies your relationship intentions and expectations",
            options: ["Serious & long-term", "Casual & fun", "Friendship first", "Marriage-minded"]
        }
    ];

    const handleAnswer = (questionId: string, answer: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsAssessmentComplete(true);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    // 🎯 ENHANCED FUNCTIONS FOR ALL FEATURES
    
    const handleComplete = () => {
        // 🎉 CELEBRATION ANIMATION
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        
        // 📊 CALCULATE PROFILE COMPLETION
        const completion = Math.round((Object.keys(answers).length / questions.length) * 100);
        setProfileCompletion(completion);
        
        console.log('Assessment completed:', answers);
        setIsAssessmentComplete(true);
    };
    
    // 📸 MULTIPLE PHOTO UPLOAD
    const handleMultiplePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setProfilePhotos(prev => [...prev, e.target?.result as string]);
                };
                reader.readAsDataURL(file);
            });
        }
    };
    
    // 💾 SAVE DRAFT FUNCTIONALITY
    const saveDraft = () => {
        localStorage.setItem('assessmentDraft', JSON.stringify({
            answers,
            currentStep,
            timestamp: Date.now()
        }));
        setIsDraftSaved(true);
        setTimeout(() => setIsDraftSaved(false), 2000);
    };
    
    // 📊 CALCULATE PERSONALITY INSIGHTS
    const calculatePersonalityInsights = () => {
        const insights = {
            personality: answers.personality || 'Not specified',
            communication: answers.communication || 'Not specified',
            values: answers.values || 'Not specified',
            lifestyle: answers.lifestyle || 'Not specified'
        };
        return insights;
    };
    
    // 🔗 VERIFY SOCIAL LINKS
    const verifySocialLinks = () => {
        setVerificationStatus(prev => ({
            ...prev,
            social: true
        }));
    };
    
    // 📤 EXPORT RESULTS
    const exportResults = () => {
        const data = {
            answers,
            insights: calculatePersonalityInsights(),
            completion: profileCompletion,
            timestamp: Date.now()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'assessment-results.json';
        a.click();
    };
    
    // 🎯 SKIP QUESTION FUNCTION
    const skipQuestion = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    if (isAssessmentComplete) {
        return (
                    <div className="p-4 sm:p-6">
            <div className="w-full">
                    {/* Profile Picture Section */}
                    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-white mb-6">Complete Your Profile</h1>
                            
                            {/* Profile Picture Upload */}
                            <div className="mb-8">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <div className="w-32 h-32 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 overflow-hidden">
                                        {profilePicture ? (
                                            <img 
                                                src={profilePicture} 
                                                alt="Profile" 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-4xl text-white">👤</span>
                                        )}
                                    </div>
                                    <label className="absolute bottom-0 right-0 bg-white/20 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                                        <span className="text-white text-lg">📷</span>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            onChange={handleProfilePictureUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                                <p className="text-white/80 text-sm">Click the camera icon to upload your photo</p>
                            </div>

                            {/* Assessment Results */}
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                <h2 className="text-2xl font-bold text-white mb-4">Assessment Complete! 🎉</h2>
                                <p className="text-white/90 mb-6">Your personality profile has been created. You can now update your profile details below.</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                                    <div>
                                        <h3 className="font-bold mb-2">Personality Type:</h3>
                                        <p>{answers.personality || 'Not specified'}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Relationship Goals:</h3>
                                        <p>{answers.relationship_type || 'Not specified'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 🎯 ENHANCED PROFILE DETAILS FORM */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                        
                        {/* 🎉 CELEBRATION BANNER FOR 100% COMPLETION - MOBILE RESPONSIVE */}
                        {profileCompletion === 100 && (
                            <div className="mb-8 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-2xl p-4 sm:p-6 shadow-2xl border border-green-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
                                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">🎉</span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-white truncate">Congratulations!</h3>
                                            <p className="text-green-100 text-sm sm:text-base">Your profile is 100% complete and ready for matching!</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                        <button className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base">
                                            View Profile
                                        </button>
                                        <button className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base">
                                            Start Matching
                                        </button>
                                    </div>
                                </div>
                                
                                {/* FLOATING CELEBRATION ELEMENTS */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute animate-bounce"
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                animationDelay: `${Math.random() * 2}s`,
                                                animationDuration: `${1 + Math.random()}s`
                                            }}
                                        >
                                            <span className="text-sm sm:text-lg">✨</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Profile Details</h2>
                            
                                                    {/* 🎯 ENHANCED PROFILE COMPLETION INDICATOR - MOBILE RESPONSIVE */}
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                            <div className="relative flex justify-center sm:justify-start">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                                    <span className="text-white font-bold text-sm sm:text-lg">{profileCompletion}%</span>
                                </div>
                                {profileCompletion === 100 && (
                                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                                        <span className="text-white text-xs sm:text-sm">🎉</span>
                                    </div>
                                )}
                            </div>
                            <div className="text-center sm:text-left">
                                <span className="text-base sm:text-lg font-bold text-gray-900">
                                    {profileCompletion === 100 ? 'Profile Complete!' : 'Profile Progress'}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    {profileCompletion === 100 
                                        ? 'Your profile is ready for matching!' 
                                        : `${12 - Object.keys(answers).length} questions remaining`
                                    }
                                </p>
                            </div>
                        </div>
                        </div>
                        
                        {/* 📸 MULTIPLE PHOTO GALLERY */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo Gallery</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                {[...Array(6)].map((_, index) => (
                                    <div key={index} className="relative">
                                        <div className="w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-pink-400 transition-all duration-300">
                                            {profilePhotos[index] ? (
                                                <img 
                                                    src={profilePhotos[index]} 
                                                    alt={`Photo ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            ) : (
                                                <div className="text-center">
                                                    <span className="text-3xl text-gray-400">📷</span>
                                                    <p className="text-xs text-gray-500 mt-1">Photo {index + 1}</p>
                                                </div>
                                            )}
                                        </div>
                                        {index === 0 && (
                                            <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                                Main
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <input 
                                type="file" 
                                multiple 
                                accept="image/*" 
                                onChange={handleMultiplePhotoUpload}
                                className="mt-4 w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                            />
                        </div>
                        
                        {/* 👤 BASIC INFORMATION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                                <input 
                                    type="number" 
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                                    placeholder="Your age"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                                    placeholder="City, State"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Occupation</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                                    placeholder="Your profession"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Education</label>
                                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300">
                                    <option>Select education level</option>
                                    <option>High School</option>
                                    <option>Some College</option>
                                    <option>Bachelor's Degree</option>
                                    <option>Master's Degree</option>
                                    <option>PhD</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
                                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300">
                                    <option>Select height</option>
                                    <option>Under 5'0"</option>
                                    <option>5'0" - 5'3"</option>
                                    <option>5'4" - 5'7"</option>
                                    <option>5'8" - 5'11"</option>
                                    <option>6'0" - 6'3"</option>
                                    <option>Over 6'3"</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* 📝 BIO SECTION */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                            <textarea 
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 resize-none"
                                rows={4}
                                placeholder="Tell us about yourself, your interests, and what you're looking for..."
                            />
                            <p className="text-xs text-gray-500 mt-2">Share your story, interests, and what makes you unique!</p>
                        </div>
                        
                                                            {/* 🔗 SOCIAL MEDIA LINKS - MOBILE RESPONSIVE */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media Links</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Instagram</label>
                                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                                    <input 
                                                        type="text" 
                                                        className="flex-1 px-3 sm:px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                                                        placeholder="@username"
                                                        value={socialLinks.instagram}
                                                        onChange={(e) => setSocialLinks(prev => ({...prev, instagram: e.target.value}))}
                                                    />
                                                    <button 
                                                        onClick={verifySocialLinks}
                                                        className="px-3 sm:px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base flex-shrink-0"
                                                    >
                                                        {verificationStatus.social ? '✅' : '🔗'}
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn</label>
                                                <input 
                                                    type="text" 
                                                    className="w-full px-3 sm:px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="linkedin.com/in/username"
                                                    value={socialLinks.linkedin}
                                                    onChange={(e) => setSocialLinks(prev => ({...prev, linkedin: e.target.value}))}
                                                />
                                            </div>
                                            
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter</label>
                                                <input 
                                                    type="text" 
                                                    className="w-full px-3 sm:px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="@username"
                                                    value={socialLinks.twitter}
                                                    onChange={(e) => setSocialLinks(prev => ({...prev, twitter: e.target.value}))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                        
                        {/* 🎯 PREFERENCES SECTION */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Looking for</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300">
                                        <option>Select preference</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Everyone</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age Range</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300">
                                        <option>Select age range</option>
                                        <option>18-25</option>
                                        <option>26-35</option>
                                        <option>36-45</option>
                                        <option>46-55</option>
                                        <option>56+</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Distance</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300">
                                        <option>Select distance</option>
                                        <option>Within 5 miles</option>
                                        <option>Within 10 miles</option>
                                        <option>Within 25 miles</option>
                                        <option>Within 50 miles</option>
                                        <option>Any distance</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Relationship Type</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300">
                                        <option>Select relationship type</option>
                                        <option>Serious Relationship</option>
                                        <option>Casual Dating</option>
                                        <option>Friendship</option>
                                        <option>Marriage</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        {/* 🎨 INTERESTS SECTION */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests & Hobbies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {['Travel', 'Music', 'Sports', 'Reading', 'Cooking', 'Photography', 'Gaming', 'Fitness', 'Art', 'Dancing', 'Movies', 'Nature'].map((interest) => (
                                    <label key={interest} className="flex items-center space-x-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500" />
                                        <span className="text-sm text-gray-700 group-hover:text-pink-600 transition-colors">{interest}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        {/* 📊 ENHANCED ASSESSMENT INSIGHTS */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Personality Insights</h3>
                                {profileCompletion === 100 && (
                                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                                        ✅ Complete Analysis
                                    </span>
                                )}
                            </div>
                            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-pink-200 relative overflow-hidden">
                                {profileCompletion === 100 && (
                                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                                )}
                                <div className="relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/50">
                                            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-xs sm:text-sm">🧠</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Your Personality</h4>
                                            </div>
                                            <p className="text-gray-700 text-xs sm:text-sm">{calculatePersonalityInsights().personality}</p>
                                        </div>
                                        
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/50">
                                            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-xs sm:text-sm">💬</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Communication Style</h4>
                                            </div>
                                            <p className="text-gray-700 text-xs sm:text-sm">{calculatePersonalityInsights().communication}</p>
                                        </div>
                                        
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/50">
                                            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-xs sm:text-sm">💎</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Core Values</h4>
                                            </div>
                                            <p className="text-gray-700 text-xs sm:text-sm">{calculatePersonalityInsights().values}</p>
                                        </div>
                                        
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/50">
                                            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-xs sm:text-sm">🌟</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Lifestyle</h4>
                                            </div>
                                            <p className="text-gray-700 text-xs sm:text-sm">{calculatePersonalityInsights().lifestyle}</p>
                                        </div>
                                    </div>
                                    
                                    {profileCompletion === 100 && (
                                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-200">
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <span className="text-xl sm:text-2xl">🎯</span>
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 text-sm sm:text-base">Matching Ready!</h5>
                                                    <p className="text-xs sm:text-sm text-gray-600">Your personality insights will help us find your perfect match.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* 🎯 ENHANCED ACTION BUTTONS - MOBILE RESPONSIVE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {profileCompletion === 100 ? (
                                <>
                                    <button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base">
                                        <span>🚀</span>
                                        <span className="truncate">Start Matching</span>
                                    </button>
                                    
                                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base">
                                        <span>👁️</span>
                                        <span className="truncate">View Profile</span>
                                    </button>
                                </>
                            ) : (
                                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                                    Save Profile
                                </button>
                            )}
                            
                            <button 
                                onClick={exportResults}
                                className="bg-white/20 backdrop-blur-sm text-gray-700 px-4 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border-2 border-gray-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                            >
                                <span>📤</span>
                                <span className="truncate">Export Results</span>
                            </button>
                            
                            <button 
                                onClick={() => {
                                    setIsAssessmentComplete(false);
                                    setCurrentStep(0);
                                    setAnswers({});
                                }}
                                className="bg-yellow-500/20 backdrop-blur-sm text-yellow-700 px-4 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500/30 transition-all duration-300 border-2 border-yellow-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                            >
                                <span>🔄</span>
                                <span className="truncate">Retake Assessment</span>
                            </button>
                        </div>
                        
                        {/* 🎉 COMPLETION MESSAGE - MOBILE RESPONSIVE */}
                        {profileCompletion === 100 && (
                            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-200">
                                <div className="text-center">
                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">🎉 Profile Complete!</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">You're all set! Your profile is now ready for the matching algorithm to find your perfect matches.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6">
            <div className="w-full">
                {/* 🎯 ENHANCED HEADER WITH CATEGORIES AND ANIMATIONS */}
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl border border-white/20 mb-8 relative overflow-hidden">
                    {/* 🎉 CONFETTI ANIMATION */}
                    {showConfetti && (
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute animate-bounce"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        animationDuration: `${1 + Math.random()}s`
                                    }}
                                >
                                    <span className="text-2xl">🎉</span>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <div className="text-center relative z-10">
                        <h1 className="text-3xl font-bold text-white mb-4">Personality Assessment</h1>
                        <p className="text-white/90 mb-6">Help us understand you better with these 12 questions</p>
                        
                        {/* 📊 ENHANCED PROGRESS BAR */}
                        <div className="w-full bg-white/20 rounded-full h-3 mb-6">
                            <div 
                                className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full transition-all duration-300 shadow-lg"
                                style={{width: `${((currentStep + 1) / questions.length) * 100}%`}}
                            ></div>
                        </div>
                        
                        {/* 🏷️ CATEGORY INDICATOR */}
                        <div className="flex justify-center items-center space-x-4 mb-4">
                            <span className="text-white/80 text-sm">Question {currentStep + 1} of {questions.length}</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
                                {questions[currentStep].category.charAt(0).toUpperCase() + questions[currentStep].category.slice(1)}
                            </span>
                        </div>
                        
                        {/* 💾 DRAFT SAVE STATUS */}
                        {isDraftSaved && (
                            <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-2 border border-green-300">
                                <span className="text-green-100 text-sm">✅ Draft saved successfully!</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* 🎯 ENHANCED QUESTION CARD WITH EXPLANATIONS */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{questions[currentStep].question}</h2>
                        
                        {/* 📝 QUESTION EXPLANATION */}
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200 mb-6">
                            <p className="text-gray-700 text-sm">
                                <span className="font-semibold">💡 Why we ask this:</span> {questions[currentStep].explanation}
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        {questions[currentStep].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(questions[currentStep].id, option)}
                                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                    answers[questions[currentStep].id] === option
                                        ? 'border-pink-500 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-700 font-semibold'
                                        : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-gray-700'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        answers[questions[currentStep].id] === option
                                            ? 'border-pink-500 bg-pink-500'
                                            : 'border-gray-300'
                                    }`}>
                                        {answers[questions[currentStep].id] === option && (
                                            <span className="text-white text-sm">✓</span>
                                        )}
                                    </div>
                                    <span className="text-lg">{option}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-8">
                        <div className="flex space-x-3">
                            <button
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    currentStep === 0
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/30 border-2 border-gray-300'
                                }`}
                            >
                                Previous
                            </button>
                            
                            {/* 🎯 SKIP BUTTON */}
                            <button
                                onClick={skipQuestion}
                                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-yellow-500/20 backdrop-blur-sm text-yellow-700 hover:bg-yellow-500/30 border-2 border-yellow-300"
                            >
                                Skip
                            </button>
                        </div>
                        
                        <div className="flex space-x-3">
                            {/* 💾 SAVE DRAFT BUTTON */}
                            <button
                                onClick={saveDraft}
                                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-green-500/20 backdrop-blur-sm text-green-700 hover:bg-green-500/30 border-2 border-green-300"
                            >
                                Save Draft
                            </button>
                            
                            <button
                                onClick={currentStep === questions.length - 1 ? handleComplete : handleNext}
                                disabled={!answers[questions[currentStep].id]}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    !answers[questions[currentStep].id]
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white hover:shadow-2xl transform hover:scale-105'
                                }`}
                            >
                                {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 