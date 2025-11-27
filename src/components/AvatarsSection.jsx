import React from 'react';

const AvatarsSection = () => {
    const avatars = [
        { id: 1, path: '/avatar1.png', alt: 'Avatar 1', rotation: '-rotate-6' },
        { id: 2, path: '/avatar2.png', alt: 'Avatar 2', rotation: 'rotate-3' },
        { id: 3, path: '/avatar3.png', alt: 'Avatar 3', rotation: '-rotate-2' },
        { id: 4, path: '/avatar4.png', alt: 'Avatar 4', rotation: 'rotate-6' },
        { id: 5, path: '/avatar5.png', alt: 'Avatar 5', rotation: '-rotate-3' },
        { id: 6, path: '/avatar6.png', alt: 'Avatar 6', rotation: 'rotate-2' },
    ];

    return (
        <section className="relative bg-[#FCF5EB] py-20 px-6">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[82px] md:text-[100px] lg:text-[120px] font-bold text-[#052F1B] mb-6 leading-none">
                        Money Quest
                    </h2>
                    <p className="text-lg lg:text-[20px] md:text-xl text-[#052F1B] max-w-3xl mx-auto leading-relaxed">
                        Money Quest is a product of Nurture haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                    </p>
                    <a
                        href="#footer"
                        className="inline-block mt-8 px-8 py-4 bg-[#26D367] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                    >
                        Join the Waitlist
                    </a>
                </div>

                {/* Avatars Grid - Desktop */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 -gap-12 items-center justify-items-center">
                    {avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            className={`bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full aspect-square flex items-center justify-center ${avatar.rotation}`}
                        >
                            <img
                                src={avatar.path}
                                alt={avatar.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Avatars Grid - Mobile (2 columns) */}
                <div className="grid grid-cols-2 md:hidden gap-6">
                    {avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            className={`bg-white rounded-lg p-4 shadow-lg w-full aspect-square flex items-center justify-center ${avatar.rotation}`}
                        >
                            <img
                                src={avatar.path}
                                alt={avatar.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvatarsSection;
