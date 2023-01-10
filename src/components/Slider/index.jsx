import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="h-[calc(100vh-80px)] w-[100vw] relative overflow-hidden">
      <div
        className="flex w-[300vw] h-[100%] transition-all duration-[1s] ease"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" className="sliderImage" />
        <img src={data[1]} alt="" className="sliderImage" />
        <img src={data[2]} alt="" className="sliderImage" />
      </div>
      <div className="absolute left-0 right-0 bottom-[100px] m-auto flex w-[fit-content] gap-[10px]">
        <div className="icon" onClick={prevSlide}>
          <IconContext.Provider value={{ className: "iconsSlider" }}>
            <GoChevronLeft />
          </IconContext.Provider>
        </div>
        <div className="icon" onClick={nextSlide}>
          <IconContext.Provider value={{ className: "iconsSlider" }}>
            <GoChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Slider;
