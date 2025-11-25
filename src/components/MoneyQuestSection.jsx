import React from 'react';

const MoneyQuestSection = () => {
    return (
        <section className="relative bg-[#D4ED6D] overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-6 pt-12">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#052F1B]">
                                Money
                                <br />
                                Quest
                            </h2>

                            <p className="text-lg md:text-xl text-[#052F1B] max-w-xl leading-relaxed">
                                Money Quest is a product of Nurture Haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                            </p>

                            <button className="px-8 py-4 bg-[#22C55E] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105">
                                Join the Waitlist
                            </button>
                        </div>

                        {/* Right Content - Phone Mockups */}
                        <div className="relative h-[700px] bottom-0">
                            <div className="relative w-full h-full">
                                {/* Phone 1 - Left/Front */}
                                <div className="absolute left-0 bottom-0 w-[45%] z-10">
                                    <img
                                        src="/phone1.png"
                                        alt="Money Quest App - Edit Profile"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                </div>

                                {/* Phone 2 - Right/Back */}
                                <div className="absolute right-0 bottom-0 w-[50%] z-20">
                                    <img
                                        src="/phone2.png"
                                        alt="Money Quest App - Welcome Screen"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="px-6 text-center">
                    {/* Content */}
                    <div className="space-y-6 mb-12 pt-10">
                        <h2 className="text-5xl md:text-6xl font-bold text-[#052F1B]">
                            Money
                            <br />
                            Quest
                        </h2>

                        <p className="text-lg text-[#052F1B] max-w-xl mx-auto leading-relaxed">
                            Money Quest is a product of Nurture Haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                        </p>

                        <button className="px-8 py-4 bg-[#22C55E] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105">
                            Join the Waitlist
                        </button>
                    </div>

                    {/* Phone Images - Stacked and touching bottom */}
                    <div className="relative h-[500px] max-w-md mx-auto">
                        {/* Phone 1 - Left/Front */}
                        <div className="absolute left-0 bottom-0 w-[48%] z-10">
                            <img
                                src="/phone1.png"
                                alt="Money Quest App - Edit Profile"
                                className="w-full h-auto drop-shadow-xl"
                            />
                        </div>

                        {/* Phone 2 - Right/Back */}
                        <div className="absolute right-0 bottom-0 w-[52%] z-20">
                            <img
                                src="/phone2.png"
                                alt="Money Quest App - Welcome Screen"
                                className="w-full h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoneyQuestSection;
