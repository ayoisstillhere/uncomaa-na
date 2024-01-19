import Hero from "@/components/shared/Hero";
import Image from "next/image";


const page = () => {
    return (
        <div>
          <Hero text="Partners" img="/assets/partners.jpeg" />
           <h1 className="text-6xl text-center mb-12 pt-12">Our Partners</h1>
            {/* <div className="flex flex-col lg:grid md:grid sm:grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2"> */}
            <div className="flex md:flex-row gap-4 flex-col mb-12 px-8 items-center">
              <div>
                <Image
                  src={"/assets/doziePartnerRG.jpeg"}
                  alt="Partner Image"
                  height={0}
                  width={500}
                />
              </div>
              <div className="flex flex-col gap-2">
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
                    <p className="text-sm text-red-900">Hospitals & Specialist Clinics</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold">Dr. Benjamin Anyanwu, <span className="text-[#1A4E31]">Executive Medical Director Regions Healthcare</span> </h1>
                  <p className="lg:max-w-[60%]">Global Health Volunteer. Triple Board Certified; General Neurology, Neurology and Neurosurgical Critical Care, Vascular Neurology.</p>
                </div>
              </div>
            </div>
          </div>
      );
}

export default page