import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/id/237/300/200",
  "https://picsum.photos/id/132/300/200",
  "https://picsum.photos/id/121/300/200",
  "https://picsum.photos/id/125/300/200",
  "https://picsum.photos/id/140/300/200",
];
const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const selectSlide = (index: number) => {
    setCurrentIndex(index);
    setShowThumbnails(true);
    window.setTimeout(() => setShowThumbnails(false), 5000);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center gap-0.5 mb-2 transition-opacity duration-300 ">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => selectSlide(index)}
            className={`w-[10rem] h-[5rem] mt-[2rem] cursor-pointer rounded-lg 
                border-2 ${currentIndex === index ? "border-amber-400" : "border-transparent"}`}
          >
            <img src={image} className="w-full h-full object-cover rounded" />
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <motion.div
          className="flex"
          initial={{ x: "-100%" }}
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <img src={image} className="w-[45%] rounded-lg"/>
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 transition-opacity duration-300 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 transition-opacity duration-300 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousal;
