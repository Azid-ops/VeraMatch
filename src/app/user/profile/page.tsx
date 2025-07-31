'use client';

const Profile = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Profile</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">U</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-foreground">User Name</h2>
                        <p className="text-gray-600 dark:text-gray-400">user@example.com</p>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-foreground"
                            defaultValue="User Name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input 
                            type="email" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-foreground"
                            defaultValue="user@example.com"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone
                        </label>
                        <input 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-foreground"
                            defaultValue="+1 (555) 123-4567"
                        />
                    </div>
                </div>
                
                <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile; 