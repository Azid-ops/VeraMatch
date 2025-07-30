'use client';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
                            VeraMatch
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Connecting hearts, one match at a time. Building meaningful relationships through trust and technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Support</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Safety Tips</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 VeraMatch. All rights reserved. Made with ❤️ for meaningful connections.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;