import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <>
            <SEO
                title="Privacy Policy - Nature Haven"
                description="Privacy policy for Nature Haven. Learn how we protect your data and personal information."
                url="https://www.nurtureehaven.com/privacy-policy"
                type="website"
            />
            <div className="min-h-screen bg-[#F5EDE4] pt-24 pb-20">
                {/* Back Button */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-[#052F1B] hover:text-[#16A34A] transition-colors duration-300 font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#052F1B] mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-[#052F1B]/70">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {/* Introduction */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-4">
                                Introduction
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed text-lg">
                                At Nurture Haven, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and engage with our services.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Information We Collect
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#052F1B] mb-3">Personal Information</h3>
                                    <p className="text-[#052F1B]/80 leading-relaxed">
                                        We may collect personal information that you voluntarily provide to us, including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside mt-3 space-y-2 text-[#052F1B]/80">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Contact information</li>
                                        <li>Any other information you choose to provide</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#052F1B] mb-3">Automatically Collected Information</h3>
                                    <p className="text-[#052F1B]/80 leading-relaxed">
                                        When you visit our website, we automatically collect certain information about your device and visit, including:
                                    </p>
                                    <ul className="list-disc list-inside mt-3 space-y-2 text-[#052F1B]/80">
                                        <li>Browser type and version</li>
                                        <li>IP address</li>
                                        <li>Operating system</li>
                                        <li>Pages visited and time spent on pages</li>
                                        <li>Referring URL</li>
                                        <li>Device type and screen resolution</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                How We Use Your Information
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed mb-4">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-[#052F1B]/80">
                                <li>Providing and maintaining our services</li>
                                <li>Processing your requests and transactions</li>
                                <li>Sending promotional communications and updates (with your consent)</li>
                                <li>Responding to your inquiries and providing customer support</li>
                                <li>Analyzing website usage to improve our services</li>
                                <li>Detecting and preventing fraud and security incidents</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </section>

                        {/* Sharing Your Information */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Sharing Your Information
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-[#052F1B]/80">
                                <li>With service providers who assist us in operating our website</li>
                                <li>When required by law or to protect our rights</li>
                                <li>In connection with any merger, acquisition, or sale of assets</li>
                                <li>With your consent or at your direction</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Data Security
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Cookies and Tracking */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Cookies and Tracking Technologies
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                Our website may use cookies and similar tracking technologies to enhance your experience. These technologies help us understand how you use our site and personalize your experience. You can control cookies through your browser settings.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Children's Privacy
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                While our platform may feature educational content, we do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information and terminate the child's account.
                            </p>
                        </section>

                        {/* Third-Party Links */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Third-Party Links
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Your Rights
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-[#052F1B]/80">
                                <li>Right to access your personal information</li>
                                <li>Right to correct inaccurate information</li>
                                <li>Right to request deletion of your information</li>
                                <li>Right to opt-out of marketing communications</li>
                                <li>Right to data portability</li>
                            </ul>
                        </section>

                        {/* Changes to This Policy */}
                        <section className="bg-[#FCF5EB] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-[#052F1B] mb-6">
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-[#052F1B]/80 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-[#26D367] rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Contact Us
                            </h2>
                            <p className="text-white/90 leading-relaxed mb-6">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-white mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <a href="mailto:info@nurtureehaven.com" className="text-white/90 hover:text-white transition-colors duration-300">
                                            info@nurtureehaven.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
