import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#26D367] hover:bg-[#16A34A] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#22C55E]/20"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
