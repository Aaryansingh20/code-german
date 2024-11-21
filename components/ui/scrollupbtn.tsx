"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function checks if the page has scrolled down and should show the button
  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);  // Show the button if scrolled more than 200px
    } else {
      setIsVisible(false); // Hide the button if less than 200px
    }
  };

  // Scrolls to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Smooth scrolling to top
    });
  };

  // Setting up event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-7 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: 'opacity 0.3s ease' }}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
