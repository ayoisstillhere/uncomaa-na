"use client";

import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative">
      <FaArrowAltCircleLeft
        className="left-arrow max-lg:hidden"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow max-lg:hidden"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current ? "slide active relative" : "slide relative"
            }
            key={index}
          >
            {index === current && (
              <>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <img src={slide} alt="travel image" className="image" />
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
