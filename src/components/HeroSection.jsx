import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-[#FCF5EB] overflow-hidden pt-17 xl:pt-10 2xl:pt-20 flex items-center">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 hidden md:block">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                        linear-gradient(to right, #26D367 1px, transparent 1px),
                        linear-gradient(to bottom, #26D367 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
                ></div>
            </div>

            {/* Diagonal Lines Pattern - Left Side */}
            <div className="absolute left-0 top-1/4 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 3xl:w-36 h-1/2 z-0 opacity-20 hidden md:block overflow-hidden">
                <div className="h-full w-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        #26D367 20px,
                        #26D367 22px
                    )`
                }}></div>
            </div>

            {/* Diagonal Lines Pattern - Right Side */}
            <div className="absolute right-0 top-1/4 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 3xl:w-36 h-1/2 z-0 opacity-20 hidden md:block overflow-hidden">
                <div className="h-full w-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        #26D367 20px,
                        #26D367 22px
                    )`
                }}></div>
            </div>

            {/* Decorative Coins - Bottom Left (Coin 3) */}
            <div className="absolute bottom-0 md:-bottom-8 lg:-bottom-12 xl:-bottom-16 2xl:bottom-0 -left-20 w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-96 3xl:w-40 h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 3xl:h-40 pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    <img src="/coin3.png" alt="Decorative coin" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Decorative Coins - Bottom Center (Coin 2 & 1) */}
            <div className="absolute -bottom-16 lg:-bottom-20 xl:-bottom-24 2xl:-bottom-28 left-1/2 -translate-x-1/2 w-80 lg:w-96 xl:w-md 2xl:w-lg 3xl:w-[36rem] h-64 lg:h-80 xl:h-96 2xl:h-112 3xl:h-[32rem] pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    {/* Large Coin Stack (Coin 2) */}
                    <div className="absolute bottom-16 lg:bottom-20 xl:bottom-24 2xl:bottom-28 left-1/2 -translate-x-1/2 w-32 lg:w-40 xl:w-44 2xl:w-48 3xl:w-52 h-32 lg:h-40 xl:h-44 2xl:h-48 3xl:h-52">
                        <img src="/coin2.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    {/* Side Coin Stack (Coin 1) */}
                    <div className="absolute bottom-16 lg:bottom-20 xl:bottom-24 2xl:bottom-28 right-0 -translate-x-1/2 w-24 lg:w-[120px] xl:w-32 2xl:w-36 3xl:w-40 h-24 lg:h-[120px] xl:h-32 2xl:h-36 3xl:h-40">
                        <img src="/coin1.png" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Decorative Coins - Right Side (Coin 4) */}
            <div className="absolute bottom-0 -right-10 w-36 lg:w-44 xl:w-52 2xl:w-60 3xl:w-72 h-36 lg:h-44 xl:h-52 2xl:h-60 3xl:h-72 pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    <div className="absolute bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-24 right-16 lg:right-36 xl:right-40 2xl:right-44 3xl:right-48 w-full h-full">
                        <img src="/coin4.png" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-10 2xl:py-24 z-10">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    {/* Text Content - Top */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
                        <h1 className="text-[64px] sm:text-4xl md:text-[95px] font-bold text-[#052F1B] leading-none">
                            Learn. Grow.
                            <br />
                            Thrive
                            <br />
                            <span className="text-[#0F3D2C]">Financially.</span>
                        </h1>

                        <p className="text-[11px] sm:text-base md:text-lg text-[#052F1B] leading-relaxed">
                            From budgeting to investing, Nurture Haven empowers neurodivergent and
                            neurotypical children, teenagers and young adults with the tools and insights
                            to take control of their financial journey.
                        </p>
                    </div>

                    {/* Image Grid with Coins - Stacked */}
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
                            <div className="w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden">
                                <img src="/hero-section1.png" alt="Family" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden">
                                <img src="/hero-section2.png" alt="Child" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden">
                                <img src="/hero-section3.png" alt="Elderly" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden">
                                <img src="/hero-section4.png" alt="Teen" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Decorative Coins - Bottom */}
                        <div className="relative w-full h-32 sm:h-40 md:h-48 -mt-4">

                            {/* Coin Stacks - Right (with gap) */}
                            <div className="absolute -right-4 sm:-right-6 md:-right-8 bottom-0 flex items-end -space-x-4">
                                {/* Coin Stack - Center (coin2) */}
                                <div className="relative z-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32">
                                    <img src="/coin2.png" alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Coin Stack - Right (coin1) */}
                                <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32">
                                    <img src="/coin1.png" alt="" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            {/* Coin Stack - Left */}
                            <div className="absolute -left-18 -mb-9 sm:-left-6 md:-left-16 bottom-0 w-86 sm:w-48 md:w-96 md:-mb-12 h-40 sm:h-48 md:h-56">
                                <img src="/coin3.png" alt="" className="w-full h-full object-contain" />
                            </div>


                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 items-start">
                    {/* Left Content */}
                    <div className="space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8 3xl:space-y-10 -mt-5">
                        <h1 className="text-[110px] font-bold text-[#052F1B] leading-none">
                            Learn. Grow.
                            <br />
                            Thrive
                            <br />
                            <span className="text-[#0F3D2C]">Financially.</span>
                        </h1>

                        <p className="text-[22px] text-[#052F1B] max-w-xl xl:max-w-2xl 2xl:max-w-3xl leading-relaxed">
                            From budgeting to investing, Nurture Haven empowers neurodivergent and
                            neurotypical children, teenagers and young adults with the tools and insights
                            to take control of their financial journey.
                        </p>
                    </div>

                    {/* Right Content - Image Collage (Desktop) */}
                    <div className="relative h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px] 3xl:h-[750px]">
                        <div className="grid grid-cols-2 gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8 h-full">
                            {/* Left Column */}
                            <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8 h-full">
                                {/* Top Left - Family */}
                                <div className="h-[40%] rounded-2xl lg:rounded-3xl xl:rounded-[1.75rem] 2xl:rounded-4xl overflow-hidden">
                                    <img src="/hero-section1.png" alt="Family" className="w-full h-full object-cover" />
                                </div>
                                {/* Bottom Left - Teen */}
                                <div className="h-[35%] rounded-2xl lg:rounded-3xl xl:rounded-[1.75rem] 2xl:rounded-4xl overflow-hidden">
                                    <img src="/hero-section3.png" alt="Teen" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8 h-full">
                                {/* Top Right - Elderly */}
                                <div className="h-[35%] rounded-2xl lg:rounded-3xl xl:rounded-[1.75rem] 2xl:rounded-4xl overflow-hidden">
                                    <img src="/hero-section2.png" alt="Elderly" className="w-full h-full object-cover" />
                                </div>
                                {/* Bottom Right - Child */}
                                <div className="h-[40%] rounded-2xl lg:rounded-3xl xl:rounded-[1.75rem] 2xl:rounded-4xl overflow-hidden">
                                    <img src="/hero-section4.png" alt="Child" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
