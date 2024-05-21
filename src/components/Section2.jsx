// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { serviceSliderData } from "../utils/data";
import "tailwindcss/tailwind.css";
import MouseTracker from "./MouseTracker";
import ImageCarousel from "./ImageCarousel";

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < 3) {
          // Only scroll up to index 3 (4th slide)
          return prevIndex + 1;
        } else {
          return 0; // Reset to the first slide
        }
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate scroll position based on current index and visible slides
      const visibleSlides = 1; // Number of visible slides at a time
      const scrollPosition =
        (carouselRef.current.scrollWidth / serviceSliderData.length) *
        Math.min(currentIndex, serviceSliderData.length - visibleSlides); // Adjust for last 2 slides

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const progressPercentage =
    (currentIndex / (serviceSliderData.length - 3)) * 100;
  return (
    <div className="flex relative z-10 bg-[#222] flex-col items-center gap-14">
      <p className="text-center text-white text-5xl font-medium font-['GT Walsheim Trial'] leading-[56px] mt-40">
        Our Services
      </p>
      <div
        ref={carouselRef} // Add ref to the carousel container
        className="overflow-x-scroll no-scrollbar scroll-smooth flex gap-4 w-full snap-x snap-mandatory"
      >
        {serviceSliderData.map((item, index) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[30%] h-[380px]" // Make each item snappable and control width
          >
            <img
              src={item.url}
              alt={item.title || "Service"}
              className="w-full object-cover "
            />
          </div>
        ))}
      </div>
      <div className="relative w-full flex justify-center items-center mt-4">
        <span className="mr-2">1</span>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 h-1  bg-[#7D7D7D] relative">
          <div
            className="h-1  absolute bg-gray-200 transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="ml-2">3</span>
      </div>
    </div>
  );
};

export default Section2;
