import MailForn from "@/components/forms/MailForm";
import Hero from "@/components/shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        text="
      Empowering Alumni Excellence, Connecting the Future of Medicine."
        img="/assets/heroImg.jpg"
        typed={true}
      />
      <MailForn />
    </>
  );
}
