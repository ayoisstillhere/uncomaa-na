"use client";

import Image from "next/image";
import React from "react";
import Typed from "react-typed";

interface Props {
  text: string;
  img: string;
  typed?: boolean;
}

const Hero = ({ text, img, typed }: Props) => {
  return (
    <div className="relative h-screen bg-black">
      <Image src={img} alt="About us" fill className="object-cover" />
      <div className="absolute text-center justify-center flex-col items-center inset-0 bg-black opacity-70"></div>
      {typed ? (
        <div className="absolute md:px-28 px-4 inset-0 flex items-center text-white md:text-5xl text-2xl font-bold max-w-4xl">
          <h1>
            Empowering Alumni Excellence,
            <Typed
              className=" text-gray-400"
              strings={[" Connecting the Future of Medicine"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h1>
        </div>
      ) : (
        <div className="absolute px-20 inset-0 flex text-center justify-center flex-col items-center text-white md:text-5xl text-5xl font-bold">
          {text}
        </div>
      )}
    </div>
  );
};

export default Hero;
