import OfficerCard from "@/components/cards/OfficerCard";
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
      <div className="bg-gray-100 py-10">
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
      </div>
      <div className="bg-white text-black py-10">
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
