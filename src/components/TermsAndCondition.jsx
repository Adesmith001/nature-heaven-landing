import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const sections = [
    { id: 'acceptance', number: '01', title: 'Acceptance of Terms' },
    { id: 'use-of-app', number: '02', title: 'Use of the App' },
    { id: 'accounts', number: '03', title: 'User Accounts' },
    { id: 'subscriptions', number: '04', title: 'Subscriptions & Payments' },
    { id: 'intellectual-property', number: '05', title: 'Intellectual Property' },
    { id: 'prohibited', number: '06', title: 'Prohibited Conduct' },
    { id: 'disclaimers', number: '07', title: 'Disclaimers' },
    { id: 'liability', number: '08', title: 'Limitation of Liability' },
    { id: 'termination', number: '09', title: 'Termination' },
    { id: 'governing-law', number: '10', title: 'Governing Law' },
    { id: 'changes', number: '11', title: 'Changes to Terms' },
];

const SectionCard = ({ id, number, title, icon, children }) => (
    <section id={id} className="bg-white rounded-3xl shadow-sm border border-[#052F1B]/5 overflow-hidden">
        <div className="flex items-center gap-4 px-8 pt-8 pb-5 border-b border-[#052F1B]/5">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#052F1B]/5 shrink-0">
                {icon}
            </div>
            <div className="flex items-baseline gap-3">
                <span className="text-xs font-bold tracking-widest text-[#26D367] uppercase">{number}</span>
                <h2 className="text-xl font-bold text-[#052F1B]">{title}</h2>
            </div>
        </div>
        <div className="px-8 py-6">{children}</div>
    </section>
);

const InfoCard = ({ title, icon, items }) => (
    <div className="bg-[#F5EDE4] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">{icon}</span>
            <h3 className="font-semibold text-[#052F1B] text-base">{title}</h3>
        </div>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const RightsBadge = ({ text }) => (
    <div className="flex items-center gap-2 bg-[#F5EDE4] rounded-xl px-4 py-3">
        <svg className="w-4 h-4 text-[#26D367] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-[#052F1B]/80">{text}</span>
    </div>
);

const Callout = ({ children, variant = 'info' }) => {
    const styles = {
        info: 'bg-[#26D367]/10 border-[#26D367]/30 text-[#052F1B]',
        warning: 'bg-amber-50 border-amber-200 text-amber-900',
    };
    return (
        <div className={`rounded-xl border px-5 py-4 text-sm leading-relaxed ${styles[variant]}`}>
            {children}
        </div>
    );
};

const TermsAndCondition = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(null);

    const scrollTo = (id) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <SEO
                title="Terms and Conditions - Nurture Haven"
                description="Terms and Conditions for Nurture Haven. Read our terms of use, subscription policies, and user obligations."
                url="https://www.nurtureehaven.com/termsandcondition"
                type="website"
            />
            <div className="min-h-screen bg-[#F5EDE4]">

                {/* Hero Banner */}
                <div className="bg-[#052F1B] pt-28 pb-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-medium text-sm mb-10"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </button>
                        <div className="flex items-start gap-5">
                            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-[#26D367]/15 shrink-0 mt-1">
                                <svg className="w-7 h-7 text-[#26D367]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
                                <p className="text-white/50 text-sm">
                                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12">

                    {/* Introduction */}
                    <div className="bg-white rounded-3xl shadow-sm border border-[#052F1B]/5 p-8 mb-8">
                        <p className="text-[#052F1B]/75 leading-relaxed text-base mb-4">
                            Welcome to <strong className="text-[#052F1B] font-semibold">Nurture Haven Integrated Services Limited</strong> ("Company", "we", "our", or "us"). By accessing or using our mobile and/or web application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully before using the App.
                        </p>
                        <p className="text-[#052F1B]/75 leading-relaxed text-base mb-6">
                            These Terms govern your access to and use of the App, including all content, features, and services offered. If you do not agree to these Terms, you may not access or use the App.
                        </p>
                        {/* Quick Nav */}
                        <div className="border-t border-[#052F1B]/5 pt-6">
                            <p className="text-xs font-semibold tracking-widest text-[#052F1B]/40 uppercase mb-3">Jump to section</p>
                            <div className="flex flex-wrap gap-2">
                                {sections.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => scrollTo(s.id)}
                                        className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 cursor-pointer ${activeSection === s.id
                                            ? 'bg-[#052F1B] text-white border-[#052F1B]'
                                            : 'bg-transparent text-[#052F1B]/70 border-[#052F1B]/20 hover:border-[#052F1B]/50 hover:text-[#052F1B]'
                                            }`}
                                    >
                                        {s.number} {s.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-6">

                        {/* 1. Acceptance of Terms */}
                        <SectionCard id="acceptance" number="01" title="Acceptance of Terms" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                By creating an account, downloading, installing, or otherwise using the App, you confirm that you:
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'Are at least 13 years of age, or have obtained verifiable parental or guardian consent if under 18',
                                    'Have read, understood, and agree to be bound by these Terms',
                                    'Have the legal capacity to enter into a binding agreement',
                                    'Will comply with all applicable laws and regulations while using the App',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                We reserve the right to update or modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms.
                            </Callout>
                        </SectionCard>

                        {/* 2. Use of the App */}
                        <SectionCard id="use-of-app" number="02" title="Use of the App" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                Nurture Haven grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the App solely for your personal, non-commercial educational purposes, subject to these Terms.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                                <InfoCard title="Permitted Uses" items={[
                                    'Access financial literacy content and learning modules',
                                    'Complete quizzes, challenges, and courses',
                                    'Track your personal learning progress',
                                    'Participate in in-app community features',
                                ]} />
                                <InfoCard title="Restrictions" items={[
                                    'You may not sublicense, sell, or transfer your account',
                                    'You may not use the App for commercial purposes',
                                    'You may not reverse-engineer or copy App content',
                                    'You may not use the App to distribute unauthorised materials',
                                ]} />
                            </div>
                            <Callout>
                                The content provided in the App is for educational purposes only and does not constitute financial, investment, legal, or tax advice.
                            </Callout>
                        </SectionCard>

                        {/* 3. User Accounts */}
                        <SectionCard id="accounts" number="03" title="User Accounts" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-5">
                                To access certain features you must register for an account. You are responsible for:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                                <RightsBadge text="Providing accurate and truthful registration information" />
                                <RightsBadge text="Maintaining the confidentiality of your password" />
                                <RightsBadge text="All activity that occurs under your account" />
                                <RightsBadge text="Notifying us immediately of any unauthorised access" />
                                <RightsBadge text="Keeping your profile information up to date" />
                                <RightsBadge text="Not sharing your account credentials with others" />
                            </div>
                            <Callout variant="warning">
                                <strong>Important:</strong> We are not liable for any loss or damage arising from your failure to safeguard your account credentials. You must notify us immediately at info@nurtureehaven.com if you suspect any unauthorised use of your account.
                            </Callout>
                        </SectionCard>

                        {/* 4. Subscriptions & Payments */}
                        <SectionCard id="subscriptions" number="04" title="Subscriptions & Payments" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-6">
                                Certain features of the App may require a paid subscription. The following terms apply to all subscription plans:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <InfoCard title="Billing" items={[
                                    'Subscriptions are billed on the plan selected (monthly or annual)',
                                    'All fees are quoted in the applicable currency at checkout',
                                    'Payments are processed through our secure third-party payment providers',
                                    'You authorise us to charge your payment method for recurring fees',
                                ]} />
                                <InfoCard title="Cancellation & Refunds" items={[
                                    'You may cancel your subscription at any time from your account settings',
                                    'Cancellation takes effect at the end of the current billing period',
                                    'We do not offer refunds for partial billing periods unless required by law',
                                    'Refund requests will be considered on a case-by-case basis',
                                ]} />
                            </div>
                            <Callout>
                                We reserve the right to change subscription pricing with reasonable notice. Continued use after a price change constitutes acceptance of the new pricing.
                            </Callout>
                        </SectionCard>

                        {/* 5. Intellectual Property */}
                        <SectionCard id="intellectual-property" number="05" title="Intellectual Property" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                All content, materials, trademarks, logos, and intellectual property available through the App are the exclusive property of <strong className="text-[#052F1B] font-semibold">Nurture Haven Integrated Services Limited</strong> or its licensors.
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'All course materials, videos, graphics, and text are protected by copyright law',
                                    'You may not reproduce, distribute, or create derivative works from our content',
                                    'You may not use our trademarks or branding without prior written consent',
                                    'User-generated content remains your property; you grant us a licence to display it within the App',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                Any unauthorised use of our intellectual property may result in account termination and/or legal action.
                            </Callout>
                        </SectionCard>

                        {/* 6. Prohibited Conduct */}
                        <SectionCard id="prohibited" number="06" title="Prohibited Conduct" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-5">
                                You agree not to engage in any of the following while using the App:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                                <InfoCard title="Content Violations" items={[
                                    'Posting false, misleading, or defamatory content',
                                    'Uploading harmful, offensive, or illegal material',
                                    'Impersonating another person or entity',
                                    'Sharing content that violates third-party rights',
                                ]} />
                                <InfoCard title="Technical Violations" items={[
                                    'Attempting to hack, disrupt, or overload the App',
                                    'Using automated bots or scraping tools',
                                    'Circumventing security or access controls',
                                    'Introducing viruses or malicious code',
                                ]} />
                            </div>
                            <Callout variant="warning">
                                Violation of these prohibitions may result in immediate suspension or termination of your account without notice, and may be reported to appropriate authorities.
                            </Callout>
                        </SectionCard>

                        {/* 7. Disclaimers */}
                        <SectionCard id="disclaimers" number="07" title="Disclaimers" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                The App and all content are provided on an <strong className="text-[#052F1B]">"as is"</strong> and <strong className="text-[#052F1B]">"as available"</strong> basis without warranties of any kind, either express or implied. We do not warrant that:
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'The App will be uninterrupted, error-free, or secure at all times',
                                    'Any defects or errors will be corrected immediately',
                                    'The content is complete, accurate, or up to date at all times',
                                    'The App will meet your specific requirements or expectations',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                All content is for general educational purposes only and does not constitute professional financial advice. Always consult a qualified financial adviser before making financial decisions.
                            </Callout>
                        </SectionCard>

                        {/* 8. Limitation of Liability */}
                        <SectionCard id="liability" number="08" title="Limitation of Liability" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                To the maximum extent permitted by applicable law, Nurture Haven Integrated Services Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                                {[
                                    { label: 'Your use of or inability to use the App' },
                                    { label: 'Unauthorised access to your account or data' },
                                    { label: 'Financial decisions based on App content' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#F5EDE4] rounded-2xl px-4 py-4 flex items-center gap-3 text-sm text-[#052F1B]/80">
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <Callout variant="warning">
                                Our total cumulative liability arising out of or in connection with these Terms shall not exceed the amount paid by you in the twelve (12) months preceding the event giving rise to the claim.
                            </Callout>
                        </SectionCard>

                        {/* 9. Termination */}
                        <SectionCard id="termination" number="09" title="Termination" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                Either party may terminate the agreement at any time:
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'You may delete your account at any time through the App settings',
                                    'We may suspend or terminate your account immediately for violation of these Terms',
                                    'We may discontinue the App or any feature with reasonable notice where possible',
                                    'Upon termination, your right to use the App ceases immediately',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                Upon termination, we may retain certain data as required by law or for legitimate business purposes. Refer to our Privacy Policy for details on data retention.
                            </Callout>
                        </SectionCard>

                        {/* 10. Governing Law */}
                        <SectionCard id="governing-law" number="10" title="Governing Law" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-[#052F1B]">Federal Republic of Nigeria</strong>. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
                            </p>
                            <Callout>
                                We encourage users to contact us directly at info@nurtureehaven.com to resolve any disputes amicably before pursuing formal legal action.
                            </Callout>
                        </SectionCard>

                        {/* 11. Changes to Terms */}
                        <SectionCard id="changes" number="11" title="Changes to Terms" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm">
                                We reserve the right to modify or replace these Terms at any time. If changes are material, we will notify you by email or through a prominent notice in the App at least 14 days before the changes take effect. Your continued use of the App after the effective date of any changes constitutes your acceptance of the updated Terms.
                            </p>
                        </SectionCard>

                        {/* Contact Us */}
                        <section className="bg-[#052F1B] rounded-3xl overflow-hidden">
                            <div className="px-8 py-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#26D367]/20 shrink-0">
                                        <svg className="w-5 h-5 text-[#26D367]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Contact Us</h2>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    If you have any questions, concerns, or requests regarding these Terms and Conditions, please reach out to us.
                                </p>
                                <a
                                    href="mailto:info@nurtureehaven.com"
                                    className="inline-flex items-center gap-2 bg-[#26D367] text-[#052F1B] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#26D367]/90 transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@nurtureehaven.com
                                </a>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndCondition;
