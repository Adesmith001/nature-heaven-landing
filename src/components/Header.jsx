import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FCF5EB] backdrop-blur-sm">
            <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-4 z-10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/hero-section-logo.png" alt="Nature Haven Logo" className="w-36 h-16" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#about"
                            className="px-6 py-2.5 bg-[#052F1B] text-white rounded-lg font-medium hover:bg-[#16A34A] transition-all duration-300 hover:shadow-lg hover:shadow-[#22C55E]/20"
                        >
                            About Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[#0F3D2C] hover:bg-[#E5D5C4] rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pt-4 border-t border-[#E5D5C4] flex flex-col gap-3 animate-fadeIn">
                        <a
                            href="#home"
                            className="text-[#0F3D2C] font-medium hover:text-[#22C55E] transition-colors duration-300 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="px-6 py-2.5 bg-[#0F3D2C] text-white rounded-lg font-medium hover:bg-[#16A34A] transition-all duration-300 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
