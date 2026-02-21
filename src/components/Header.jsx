import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Dimming Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
            
            <header className="fixed top-0 left-0 right-0 z-99 bg-[#FCF5EB] backdrop-blur-sm">
            <div className="w-full px-0 sm:px-0 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-4 z-10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <img src="/hero-section-logo.png" alt="Nature Haven Logo" className="w-32 h-12" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="https://blog.nurtureehaven.com/" target="_blank" rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-[#052F1B] text-white rounded-lg font-medium hover:bg-[#16A34A] transition-all duration-300 hover:shadow-lg hover:shadow-[#22C55E]/20"
                        >
                            Blog
                        </a>
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
                    <nav className="md:hidden mt-4 pt-4 px-2 border-t border-[#E5D5C4] flex flex-col gap-3 animate-fadeIn">
                        <Link
                            to="/"
                            className="text-[#0F3D2C] font-medium hover:text-[#22C55E] transition-colors duration-300 py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <a
                            href="https://blog.nurtureehaven.com/" target="_blank" rel="noopener noreferrer"
                            className="text-[#0F3D2C] font-medium hover:text-[#22C55E] transition-colors duration-300 py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </a>
                        <a
                            href="#about"
                            className="text-[#0F3D2C] font-medium hover:text-[#22C55E] transition-colors duration-300 py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                    </nav>
                )}
            </div>
        </header>
        </>
    );
};

export default Header;
