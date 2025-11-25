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
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#052F1B] mb-6">
                        Money Quest
                    </h2>
                    <p className="text-lg md:text-xl text-[#052F1B] max-w-3xl mx-auto leading-relaxed">
                        Money Quest is a product of Nurture haven that makes financial learning easy and exciting. Through fun quests and daily challenges, you'll learn how to save, invest, and grow wealth confidently.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-[#26D367] text-white rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                        Join the Waitlist
                    </button>
                </div>

                {/* Avatars Grid - Desktop */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-0 items-center justify-items-center">
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
