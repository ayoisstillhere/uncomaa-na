import Hero from "@/components/shared/Hero";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Hero text="Partners" img="/assets/partners.jpeg" />
      <h1 className="text-6xl text-center mb-12 pt-12">Our Partners</h1>
      {/* <div className="flex flex-col lg:grid md:grid sm:grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2"> */}

      <div className="flex md:flex-row gap-4 flex-col mb-12 px-8 items-start">
        <div>
          <Image
            src={"/assets/obinnaPartnerZion.jpeg"}
            alt="Partner Image"
            height={0}
            width={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={"/assets/zionLogo.jpeg"}
              alt="Partner Image"
              height={0}
              width={350}
              className="rounded-sm"
            />
          </div>
          <div className="h-2"></div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Obinna Egbo, MD FHM FAAP,{" "}
              <span className="text-[#1A4E31]">
                President and founder of Zion Medical Group
              </span>{" "}
            </h1>
            <p className="lg:max-w-[60%]">
              {/* Global Health Volunteer. Triple Board Certified; General
              Neurology, Neurology and Neurosurgical Critical Care, Vascular
              Neurology. */}
              Obinna Egbo, MD FHM FAAP, obtained his degree at the University of
              Nigeria College of Medical Sciences and Dentistry in 1994.
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row gap-4 flex-col mb-12 px-8 items-start">
        <div>
          <Image
            src={"/assets/doziePartnerRG.jpeg"}
            alt="Partner Image"
            height={0}
            width={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-4"></div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={"/assets/regionsHealthCareLogo.png"}
              alt="Partner Image"
              height={0}
              width={120}
              className="rounded-sm"
            />
            <div className="text-3xl font-bold text-[#1A4E31]">
              <h1>REGIONS</h1>
              <h1>HEALTHCARE</h1>
              <p className="text-sm text-red-900">
                Hospitals & Specialist Clinics
              </p>
            </div>
          </div>
          <div className="h-2"></div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Dr. Benjamin Anyanwu,{" "}
              <span className="text-[#1A4E31]">
                Executive Medical Director Regions Healthcare
              </span>{" "}
            </h1>
            <p className="lg:max-w-[60%]">
              Global Health Volunteer. Triple Board Certified; General
              Neurology, Neurology and Neurosurgical Critical Care, Vascular
              Neurology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
