"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const VideoCarousel = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change video every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [current]);

  useEffect(() => {
    // Pause the previous video when the current slide changes
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative">
      {/* <FaArrowAltCircleLeft
        className="left-arrow max-lg:hidden"
        onClick={prevSlide}
        style={{ color: "white" }}
      />
      <FaArrowAltCircleRight
        className="right-arrow max-lg:hidden"
        onClick={nextSlide}
        style={{ color: "white" }}
      /> */}
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
                <video
                  ref={videoRef}
                  src={slide}
                  className="video"
                  autoPlay
                  controls
                />
              </>
            )}
          </div>
        );
      })}
      <div className="absolute text-center justify-center inset-0 flex flex-col gap-8 items-center text-white md:text-5xl text-2xl font-bold px-4"></div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-4 w-4 rounded-full ${
              index === current
                ? "bg-white" // White when active
                : "bg-gray-400" // A shade of grey when inactive
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
