import ExPresidentCard from "@/components/cards/ExPresidentCard";
import OfficerCard from "@/components/cards/OfficerCard";
import PurposeContentCard from "@/components/cards/PurposeContentCard";
import Hero from "@/components/shared/Hero";
import {
  currentOfficerDetails,
  exPresidentsDetails,
  founders,
} from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Hero
        text="Shaping Medicine's Legacy, United in Alumni Pride."
        img="/assets/about.jpeg"
      />
      <div className="w-full bg-white lg:px-20 md: px-8 py-24">
        <h1 className="text-6xl text-center">Our Purpose</h1>
        <div className="md:grid grid-cols-3 mt-12 lg:gap-8 md:gap-4 flex flex-col gap-5">
          <PurposeContentCard
            img="/assets/mission.png"
            header="Mission"
            content="This chapter exists for charitable, educational, and scientific goals,
          primarily dedicated to advancing The University of Nigeria College of
          Medicine. It aims to promote alumni interests, uphold medical ethics,
          maintain high training standards, and serve the Nigerian community's
          health. Encouraging research and taking necessary actions to fulfill
          these purposes are central to its mission."
          />
          <PurposeContentCard
            img="/assets/dignity.png"
            header="Ethics & Alumni Focus"
            content="The chapter emphasizes maintaining the dignity of alumni physicians, both with patients and in the broader community. It nurtures alumni interests, upholds medical ethics, and sustains high-quality training."
          />
          <PurposeContentCard
            img="/assets/health.png"
            header="Health & Research Advancement"
            content="Dedicated to improving Nigerian health, this chapter also encourages research addressing health issues affecting Nigerians, no matter their location. It's committed to promoting health and research, contributing to the welfare of Nigeria's domestic and global communities."
          />
        </div>
      </div>

      <div className="bg-gray-100 text-black py-24">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-10">Founding Members</h1>
        </div>
        <div className="sm:px-16 lg:mx-56">
          <div className="mx-auto max-w-screen-lg">
            {" "}
            <div className="flex flex-col items-center justify-center lg:grid md:grid sm:grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-x-6">
              {founders.map((officer) => (
                <ExPresidentCard
                  key={officer.name}
                  name={officer.name}
                  image={officer.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-10">Our Ex-Presidents</h1>
        </div>
        <div className="px-20 sm:px-16">
          <div className="mx-auto max-w-screen-lg">
            {" "}
            <div className="flex flex-col items-center justify-center lg:grid md:grid sm:grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-6">
              {exPresidentsDetails.map((officer) => (
                <ExPresidentCard
                  key={officer.name}
                  name={officer.name}
                  image={officer.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-10">Our Current Officers</h1>
        </div>
        <div className="px-20">
          <div className="mx-auto max-w-screen-lg">
            {" "}
            <div className="flex flex-col items-center justify-center lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-12">
              {currentOfficerDetails.map((officer) => (
                <Link href={"/contact"}>
                  <OfficerCard
                    key={officer.name}
                    name={officer.name}
                    position={officer.position}
                    image={officer.image}
                    email={officer.email}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
