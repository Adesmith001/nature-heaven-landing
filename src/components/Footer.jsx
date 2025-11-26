import React, { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT URL
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxJLerJdWnB3w_gPrgfqf7-OiNx3BxgHJAcfZoy6EiPIMYjD54TbWIT4JWLZVxMHCp/exec';

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({ name: '', email: '' });
            alert('Thank you for joining the waitlist!');
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <footer id="footer" className="relative">
            {/* Main Footer Section */}
            <div className="bg-[#FCF5EB] py-12 px-6">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <img
                                src="/hero-section-logo.png"
                                alt="Nurture Haven Logo"
                                className="h-12 w-32"
                            />
                        </div>

                        {/* Social Media Section */}
                        <div className="space-y-4">
                            <h3 className="text-[#052F1B] font-semibold text-lg">
                                Contact us via our socials
                            </h3>
                            <div className="flex gap-3">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/nurture_haven/"
                                    className="w-10 h-10 bg-[#26D367] rounded-full flex items-center justify-center hover:bg-[#16A34A] transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href="https://x.com/nurture_haven"
                                    className="w-10 h-10 bg-[#26D367] rounded-full flex items-center justify-center hover:bg-[#16A34A] transition-colors duration-300"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-4">
                            <h3 className="text-[#052F1B] font-semibold text-lg">
                                Newsletter
                            </h3>
                            <p className="text-[#052F1B] text-sm leading-relaxed">
                                Subscribe to our MailChimp newsletter and stay up to date with all events coming straight in your mailbox.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-[#26D36799] rounded-full text-[#052F1B] placeholder-[#052F1B]/60 focus:outline-none focus:ring-2 focus:ring-[#26D367]"
                                />
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email address"
                                        required
                                        className="w-full px-4 py-3 bg-[#26D36799] rounded-full text-[#052F1B] placeholder-[#052F1B]/60 focus:outline-none focus:ring-2 focus:ring-[#26D367]"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
                                        aria-label="Subscribe"
                                    >
                                        {status === 'sending' ? (
                                            <div className="w-4 h-4 border-2 border-[#052F1B] border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <svg
                                                className="w-4 h-4 text-[#052F1B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#26D367] py-6 px-6">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-center">
                    <p className="text-white text-sm">
                        © 2025 Nurture Haven. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
