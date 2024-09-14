import { ArrowUpToLine } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollTrigger: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className="fixed bottom-4 right-7 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full border bg-black/50 hover:bg-black/95"
        >
          <ArrowUpToLine size={18} />
        </button>
      )}
    </div>
  );
};

export default ScrollTrigger;
