import Image from "next/image";

const HeroLogo = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <Image
            src="assets/unnLogo.svg"
            alt="UNN Logo"
            width={200}
            height={200}
          />
          <Image
            src="assets/medicalLogo.svg"
            alt="Medical Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center leading-relaxed px-4">University of Nigeria College of Medicine Alumni Association- North America (UNCOMAA-NA)</h1>
      </div>
    </div>
  );
};

export default HeroLogo;
