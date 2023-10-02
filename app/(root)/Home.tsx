import MailForn from "@/components/forms/MailForm";
import Hero from "@/components/shared/Hero";
import Carousel from "@/components/shared/Carousel";

export default function Home() {
  return (
    <>
      <Hero
        text="
      Empowering Alumni Excellence, Connecting the Future of Medicine."
        img="/assets/heroImg.jpg"
        typed={true}
      />
      <Carousel />
      <MailForn />
    </>
  );
}
