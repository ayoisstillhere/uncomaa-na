import Image from "next/image";
import React from "react";

interface Props {
  text: string;
  img: string;
}

const Hero = ({ text, img }: Props) => {
  return (
    <div className=" h-screen bg-black ">
      <Image src={img} alt="About us" fill className="object-cover" />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute px-20 inset-0 flex items-center  text-white text-5xl font-bold max-w-4xl">
        {text}
      </div>
    </div>
  );
};

export default Hero;
