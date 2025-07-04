import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full max-w-8xl mx-auto h-64 sm:h-80 lg:h-[600px] overflow-hidden rounded-xl shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
