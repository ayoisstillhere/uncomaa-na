import MailForn from "@/components/forms/MailForm";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import type { Metadata } from "next";
import Carousel from "@/components/shared/Carousel";
import { slides } from "@/constants";
import HeroLogo from "@/components/shared/HeroLogo";

export const metadata: Metadata = {
  title:
    "University of Nigeria College of Medicine Alumni Association- North America (UNCOMA-NA)",
  description:
    "Supporting healthcare, education, and research for alumni of the University of Nigeria College of Medicine.",
};

export default function Home() {
  return (
    <>
      {/* <Hero
        text="
      Empowering Alumni Excellence, Connecting the Future of Medicine."
        img="/assets/heroImg.jpg"
        typed={true}
      /> */}
      {/* <Carousel slides={slides} /> */}
      <HeroLogo />
      <MailForn />
    </>
  );
}
