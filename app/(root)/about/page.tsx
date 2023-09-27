import OfficerCard from "@/components/cards/OfficerCard";
import PurposeContentCard from "@/components/cards/PurposeContentCard";
import Hero from "@/components/shared/Hero";
import { currentOfficerDetails } from "@/constants";
import Image from "next/image";

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
      {/* <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
            <p className="text-gray-700 mb-6">
              The University of Nigeria College of Medicine Alumni Association -
              North America (UNCOMAA-NA) is established exclusively for
              charitable, educational, and scientific purposes. Our mission is
              to promote and foster the interests of The University of Nigeria
              College of Medicine.
            </p>
            <ul className="list-disc ml-8 mb-6">
              <li>
                To promote unique professional and social interests of the
                Alumni members.
              </li>
              <li>
                To maintain the dignity of the Alumnus physician in relation to
                patients, to Nigerians, and to the international community.
              </li>
              <li>
                To promote, develop, and maintain high standard and quality of
                training for the students at the Alma Mata.
              </li>
              <li>
                To perpetuate the best tradition of medicine and to maintain
                high ethical standards among the members.
              </li>
              <li>
                To promote the health and well-being of the Nigerian community
                at home and abroad.
              </li>
              <li>
                To encourage research on the health problems affecting Nigerians
                wherever they live.
              </li>
              <li>
                To do all things necessary, suitable, and proper for the
                accomplishment of any or all the aforesaid purposes.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">
              Membership Classifications
            </h2>
            <ul className="list-disc ml-8">
              <li>Practicing Physicians</li>
              <li>Student Members</li>
              <li>The Associate Members</li>
              <li>Honorary Members</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-100 text-black py-24">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-10">Our Officers</h1>
        </div>
        <div className="px-20">
          <div className="mx-auto max-w-screen-lg">
            {" "}
            <div className="flex flex-col items-center justify-center lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-12">
              {currentOfficerDetails.map((officer) => (
                <OfficerCard
                  key={officer.name}
                  name={officer.name}
                  position={officer.position}
                  image={officer.image}
                  email={officer.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
