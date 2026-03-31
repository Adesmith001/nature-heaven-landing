import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const storeLinks = [
    {
        name: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.expo.moneyquest',
        icon: FaGooglePlay,
        label: 'GET IT ON',
    },
    {
        name: 'App Store',
        href: 'https://apps.apple.com/us/app/moneyquest-by-nurture-haven/id6756646195',
        icon: FaApple,
        label: 'Download on the',
    },
];

const StoreButtons = ({ centered = false }) => (
    <div className={`space-y-3 ${centered ? 'flex flex-col items-center' : ''}`}>
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] text-[#052F1B]/70 ${centered ? 'text-center' : ''}`}>
            Download Money Quest
        </p>

        <div className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
            {storeLinks.map(({ name, href, icon, label }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Download Money Quest on ${name}`}
                    className="inline-flex items-center gap-3 rounded-2xl border border-[#052F1B]/12 bg-[#052F1B] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#031c10] hover:shadow-[0_18px_40px_rgba(5,47,27,0.18)]"
                >
                    {React.createElement(icon, { className: 'text-2xl shrink-0' })}
                    <span className="flex flex-col leading-tight">
                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                            {label}
                        </span>
                        <span className="text-base font-semibold">{name}</span>
                    </span>
                </a>
            ))}
        </div>
    </div>
);

const MoneyQuestSection = () => {
    return (
        <section id="about" className="relative bg-[#D4ED6D] overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-10 pb-0">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 items-center">
                        {/* Left Content */}
                        <div className="space-y-5">
                            <h2 className="text-[80px] lg:text-[90px] xl:text-[100px] 2xl:text-[110px] font-bold text-[#052F1B] leading-none">
                                Money
                                <br />
                                Quest
                            </h2>

                            <p className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#052F1B] max-w-xl xl:max-w-2xl 2xl:max-w-3xl leading-relaxed">
                                Money Quest is a product of Nurture Haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                            </p>

                           

                            <StoreButtons />
                        </div>

                        {/* Right Content - Phone Mockups */}
                        <div className="relative h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px] 3xl:h-[750px]">
                            <div className="flex items-end justify-end h-full -space-x-7">
                                {/* Phone 1 - Left */}
                                <div className="w-[47%] relative z-20">
                                    <img
                                        src="/phone1.png"
                                        alt="Money Quest App - Edit Profile"
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Phone 2 - Right */}
                                <div className="w-[47%] relative z-10">
                                    <img
                                        src="/phone2.png"
                                        alt="Money Quest App - Welcome Screen"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="px-4 sm:px-6 text-center pt-12 sm:pt-16 md:pt-20 pb-0">
                    {/* Content */}
                    <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
                        <h2 className="text-[82px] sm:text-[80px] md:text-[96px] font-bold text-[#052F1B] leading-none">
                            Money
                            <br />
                            Quest
                        </h2>

                        <p className="text-base sm:text-lg text-[#052F1B] leading-relaxed max-w-lg mx-auto">
                            Money Quest is a product of Nurture Haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                        </p>

                        <StoreButtons centered />
                    </div>

                    {/* Phone Images - Overlapping with specific positioning */}
                    <div className="relative w-full max-w-lg mx-auto aspect-[0.85]">
                        {/* Phone 2 - Right (Back/Higher) */}
                        <div className="absolute right-0 bottom-0 w-[60%] z-10">
                            <img
                                src="/phone2.png"
                                alt="Money Quest App - Welcome Screen"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Phone 1 - Left (Front/Lower) */}
                        <div className="absolute left-0 bottom-0 w-[60%] z-20">
                            <img
                                src="/phone1.png"
                                alt="Money Quest App - Edit Profile"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoneyQuestSection;
