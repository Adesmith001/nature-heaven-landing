import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const sections = [
    { id: 'data-protection', number: '01', title: 'Data Protection' },
    { id: 'consent', number: '02', title: 'Consent' },
    { id: 'data-collected', number: '03', title: 'Information We Collect' },
    { id: 'accuracy', number: '04', title: 'Accuracy of Information' },
    { id: 'third-parties', number: '05', title: 'Third Parties & Links' },
    { id: 'security', number: '06', title: 'Security' },
    { id: 'rights', number: '07', title: 'Your Rights' },
    { id: 'cookies', number: '08', title: 'Cookies' },
    { id: 'children', number: '09', title: "Children's Privacy" },
    { id: 'updates', number: '10', title: 'Policy Updates' },
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

const DataCard = ({ title, icon, items }) => (
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

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(null);

    const scrollTo = (id) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <SEO
                title="Privacy Policy - Nature Haven"
                description="Privacy policy for Nature Haven. Learn how we protect your data and personal information."
                url="https://www.nurtureehaven.com/privacy-policy"
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
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
                            Thank you for accessing the mobile and/or web application ("App") owned and operated by <strong className="text-[#052F1B] font-semibold">Nurture Haven Integrated Services Limited</strong> ("Company", "we", "our", or "us"). We respect your privacy and are committed to protecting your personal data in accordance with the <strong className="text-[#052F1B] font-semibold">Nigeria Data Protection Act 2023 (NDPA)</strong> and other applicable laws. To learn more, please read through this privacy policy below.
                        </p>
                        <p className="text-[#052F1B]/75 leading-relaxed text-base mb-6">
                            Our Privacy Policy explains the following; (i) how we make use of your personal information; (ii) the steps we have taken to secure your personal information; (iii) your options regarding the use of your personal information. By accessing or using the App, you consent to the collection and processing of your personal data as described in this Privacy Policy.
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

                        {/* 1. Data Protection */}
                        <SectionCard id="data-protection" number="01" title="Data Protection" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                Data Protection is a matter of trust and your privacy is important to us. We will only collect and use your personal information in accordance with this Privacy Policy and applicable data protection laws. We collect personal information only where it is necessary and relevant for:
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'Creating and managing your user account',
                                    'Delivering financial education content and learning modules',
                                    'Tracking learning progress and performance',
                                    'Improving user experience and communicating with you',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.
                            </Callout>
                        </SectionCard>

                        {/* 2. Consent */}
                        <SectionCard id="consent" number="02" title="Consent" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                Knowledge and consent are required for the collection, use or disclosure of personal information except where required or permitted by law. Providing us with your personal information is always your choice. However, failure to provide certain information may limit your ability to:
                            </p>
                            <ul className="space-y-2 mb-5">
                                {[
                                    'Register an account',
                                    'Access certain learning modules',
                                    'Receive personalized learning recommendations',
                                    'Participate in competitions, quizzes, or community features',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Callout>
                                By creating an account or using the App, you consent to the collection and use of your information as described in this Policy.
                            </Callout>
                        </SectionCard>

                        {/* 3. Information We Collect */}
                        <SectionCard id="data-collected" number="03" title="Information and Data We Collect" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-6">
                                We may collect and process the following categories of personal information:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <DataCard title="Account Information" items={[
                                    'Full name', 'Username', 'Email address', 'Date of Birth',
                                    'Mobile number (if provided)', 'Nationality', 'Location', 'Password (encrypted)',
                                ]} />
                                <DataCard title="Profile & Learning Information" items={[
                                    'Educational level or background (if voluntarily provided)',
                                    'Financial learning goals',
                                    'Quiz scores and performance data',
                                    'Course progress and completion history',
                                    'In-app activity and engagement metrics',
                                ]} />
                                <DataCard title="Technical Information" items={[
                                    'IP address', 'Device type', 'Operating system',
                                    'App version', 'Log data and usage statistics',
                                ]} />
                                <DataCard title="Payment Information (Where Applicable)" items={[
                                    'Billing and payment information necessary to process your subscription',
                                    'We do not store full payment card details on our servers',
                                ]} />
                            </div>
                            <div className="bg-[#F5EDE4] rounded-2xl p-5 mb-4">
                                <p className="text-sm font-semibold text-[#052F1B] mb-3">How we use your information</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        'Create and manage your account',
                                        'Deliver finance education content',
                                        'Personalise lessons and recommendations',
                                        'Track and display learning progress',
                                        'Improve course content and App functionality',
                                        'Process subscriptions and payments',
                                        'Send service-related communications',
                                        'Send newsletters or marketing communications (where consented)',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-[#052F1B]/75">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#26D367] shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Callout>
                                You may opt out of marketing communications at any time by clicking the "unsubscribe" link in our emails or adjusting your notification preferences in the App.
                            </Callout>
                        </SectionCard>

                        {/* 4. Accuracy */}
                        <SectionCard id="accuracy" number="04" title="Accuracy of Information" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm">
                                You agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your login credentials. We are not liable for unauthorized access resulting from your failure to safeguard your credentials.
                            </p>
                        </SectionCard>

                        {/* 5. Third Parties */}
                        <SectionCard id="third-parties" number="05" title="Third Parties and Links" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                We may share limited personal information with trusted third-party service providers for purposes such as cloud hosting services, payment processing, data analytics, customer support, and email delivery services. We may also disclose information to comply with legal obligations and to prevent fraud or misuse of the App. We may transfer our database containing personal information where the need arises.
                            </p>
                            <Callout variant="warning">
                                <strong>Important:</strong> Other than as set out in this Privacy Policy, we shall <strong>NOT</strong> sell or disclose your personal data to third parties without obtaining your prior consent unless this is necessary for the purposes set out in this Privacy Policy or unless we are required to do so by law.
                            </Callout>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mt-4">
                                We are not responsible for the content or privacy practices of other websites, including any personal or financial information collected by third-party payment processors. We encourage users to be aware of the privacy policies of other websites they visit. This Privacy Policy applies only to information collected by us.
                            </p>
                        </SectionCard>

                        {/* 6. Security */}
                        <SectionCard id="security" number="06" title="Security" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        }>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                                {[
                                    { label: 'Firewall-protected servers' },
                                    { label: 'SSL encryption in transit' },
                                    { label: 'Physical & electronic safeguards' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#F5EDE4] rounded-2xl px-4 py-4 flex items-center gap-3 text-sm text-[#052F1B]/80">
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                We have put in place appropriate technical and security measures to prevent unauthorized or unlawful access to or accidental loss of, destruction or damage to your personal information. When data is collected, your personal details are stored on a secure server which contains firewalls. We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software which encrypts information you input. Payments made through the site are processed by our payment agents. We undertake not to violate the privacy of card holders who transact with us. We verify and confirm that a risk assessment of the payment gateway has been conducted.
                            </p>
                            <Callout>
                                We maintain physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of your personal information. It is important for you to protect against unauthorized access to your password and to your computer. Be sure to sign off when you finish using a shared computer.
                            </Callout>
                        </SectionCard>

                        {/* 7. Rights */}
                        <SectionCard id="rights" number="07" title="Your Rights" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-5">
                                Subject to applicable law, you have the following rights:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                                <RightsBadge text="Request access to your personal data" />
                                <RightsBadge text="Request correction of inaccurate information for free" />
                                <RightsBadge text="Request deletion of your data" />
                                <RightsBadge text="Object to or restrict certain processing activities" />
                                <RightsBadge text="Withdraw consent for marketing communications" />
                                <RightsBadge text="Request data portability (where applicable)" />
                            </div>
                            <Callout>
                                To exercise any of these rights, you may contact us at info@nurtureehaven.com.
                            </Callout>
                        </SectionCard>

                        {/* 8. Cookies */}
                        <SectionCard id="cookies" number="08" title="Cookies" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-5">
                                Cookies are tiny text files which identify your computer to our server as a unique user when you visit certain pages and they are stored by your internet browser on your computer's hard drive. We only use cookies to:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                                {[
                                    { label: 'Authenticate users' },
                                    { label: 'Maintain session information' },
                                    { label: 'Remember user preferences' },
                                    { label: 'Analyze usage patterns' },
                                    { label: 'Improve user experience' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#F5EDE4] rounded-xl px-3 py-3 flex items-center gap-2 text-xs text-[#052F1B]/80 font-medium">
                                        <span>{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <Callout>
                                Cookies do not contain viruses and do not give us access to your device beyond what is necessary for App functionality. You may disable cookies through your browser settings; however, some features of the App may not function properly if cookies are disabled.
                            </Callout>
                        </SectionCard>

                        {/* 9. Children's Privacy */}
                        <SectionCard id="children" number="09" title="Children's Privacy" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm mb-4">
                                The App is accessible to users of all ages. However, in accordance with the Nigeria Data Protection Act 2023 (NDPA), personal data relating to a child (a person under the age of 18 years) is classified as <strong className="text-[#052F1B]">sensitive personal data</strong> and is subject to enhanced protection.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                                {[
                                    { label: 'Verifiable parental consent required where mandated by law' },
                                    { label: 'No knowing processing of child data without consent' },
                                    { label: 'Prompt deletion if consent not obtained' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#F5EDE4] rounded-xl px-4 py-4 text-sm text-[#052F1B]/80">
                                        <span className="text-lg block mb-2">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <Callout>
                                Parents or legal guardians who have concerns about the personal data of a child may contact us at (info@nurtureehaven.com), and we will address such concerns in accordance with applicable law.
                            </Callout>
                        </SectionCard>

                        {/* 10. Privacy Policy Updates */}
                        <SectionCard id="updates" number="10" title="Privacy Policy Updates" icon={
                            <svg className="w-5 h-5 text-[#052F1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        }>
                            <p className="text-[#052F1B]/75 leading-relaxed text-sm">
                                We may update our Privacy Policy to reflect changes to our information practices. If we do this and the changes are material, we will notify you by email to describe the changes, and we will indicate the date these terms were last revised at the bottom of the Privacy Policy.
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
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please reach out to us.
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

export default PrivacyPolicy;
