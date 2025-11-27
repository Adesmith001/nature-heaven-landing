import React from 'react';

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

                            <a
                                href="#footer"
                                className="inline-block px-8 py-4 bg-[#26D367] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                            >
                                Join the Waitlist
                            </a>
                        </div>

                        {/* Right Content - Phone Mockups */}
                        <div className="relative h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px] 3xl:h-[750px]">
                            <div className="flex items-end justify-end h-full -space-x-7">
                                {/* Phone 1 - Left */}
                                <div className="w-[50%] 3xl:w-[43%] relative z-20">
                                    <img
                                        src="/phone1.png"
                                        alt="Money Quest App - Edit Profile"
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Phone 2 - Right */}
                                <div className="w-[50%] 3xl:w-[43%] relative z-10">
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

                        <a
                            href="#footer"
                            className="inline-block px-8 py-4 bg-[#26D367] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                        >
                            Join the Waitlist
                        </a>
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
