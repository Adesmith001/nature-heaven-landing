import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-[#FCF5EB] overflow-hidden pt-24">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                        linear-gradient(to right, #26D367 1px, transparent 1px),
                        linear-gradient(to bottom, #26D367 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Diagonal Lines Pattern - Left Side */}
            <div className="absolute left-0 top-1/4 w-20 h-1/2 z-0 opacity-20 hidden md:block overflow-hidden">
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
            <div className="absolute right-0 top-1/4 w-20 h-1/2 z-0 opacity-20 hidden md:block overflow-hidden">
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
            <div className="absolute -bottom-20 left-0 w-100 h-100 pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    <img src="/coin3.png" alt="" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Decorative Coins - Bottom Center (Coin 2 & 1) */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-80 pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    {/* Large Coin Stack (Coin 2) */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[160px] h-[160px]">
                        <img src="/coin2.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    {/* Side Coin Stack (Coin 1) */}
                    <div className="absolute bottom-20 right-0 -translate-x-1/2 w-[120px] h-[120px]">
                        <img src="/coin1.png" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Decorative Coins - Right Side (Coin 4) */}
            <div className="absolute bottom-0 right-8 w-[200px] h-[200px] pointer-events-none hidden lg:block z-20">
                <div className="relative w-full h-full">
                    <div className="absolute bottom-17 right-40 w-full h-full">
                        <img src="/coin4.png" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-5 z-10">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    {/* Text Content - Top */}
                    <div className="space-y-6 mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#052F1B]">
                            Learn. Grow.
                            <br />
                            Thrive
                            <br />
                            <span className="text-[#0F3D2C]">Financially.</span>
                        </h1>

                        <p className="text-[16px] md:text-[18px] text-[#052F1B]">
                            From budgeting to investing, Nurture Haven empowers neurodivergent and
                            neurotypical children, teenagers and young adults with the tools and insights
                            to take control of their financial journey.
                        </p>
                    </div>

                    {/* Image Grid - Stacked */}
                    <div className="grid grid-rows-1 md:grid-cols-2 gap-6">
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                            <img src="/hero-section1.png" alt="Family" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                            <img src="/hero-section2.png" alt="Child" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                            <img src="/hero-section3.png" alt="Elderly" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                            <img src="/hero-section4.png" alt="Teen" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#052F1B]">
                            Learn. Grow.
                            <br />
                            Thrive
                            <br />
                            <span className="text-[#0F3D2C]">Financially.</span>
                        </h1>

                        <p className="text-[16px] md:text-[20px] text-[#052F1B] max-w-xl">
                            From budgeting to investing, Nurture Haven empowers neurodivergent and
                            neurotypical children, teenagers and young adults with the tools and insights
                            to take control of their financial journey.
                        </p>

                        {/* <div className="flex flex-wrap gap-4">
                            <a
                                href="#footer"
                                className="px-8 py-4 bg-[#26D367] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                            >
                                Join the Waitlist
                            </a>
                            <a 
                                href="#about"
                                className="px-8 py-4 bg-white text-[#052F1B] border-2 border-[#052F1B] rounded-xl font-semibold hover:bg-[#F5EDE4] transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div> */}
                    </div>

                    {/* Right Content - Image Collage (Desktop) */}
                    <div className="relative h-[600px]">
                        <div className="grid grid-cols-2 gap-6 h-full">
                            {/* Left Column */}
                            <div className="flex flex-col gap-6 h-full">
                                {/* Top Left - Family */}
                                <div className="h-[40%] rounded-3xl overflow-hidden">
                                    <img src="/hero-section1.png" alt="Family" className="w-full h-full object-cover" />
                                </div>
                                {/* Bottom Left - Teen */}
                                <div className="h-[35%] rounded-3xl overflow-hidden">
                                    <img src="/hero-section3.png" alt="Teen" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-6 h-full">
                                {/* Top Right - Elderly */}
                                <div className="h-[35%] rounded-3xl overflow-hidden">
                                    <img src="/hero-section2.png" alt="Elderly" className="w-full h-full object-cover" />
                                </div>
                                {/* Bottom Right - Child */}
                                <div className="h-[40%] rounded-3xl overflow-hidden">
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
