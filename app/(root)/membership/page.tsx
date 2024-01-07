import MemberClassCard from "@/components/cards/MemberClassCard";
import Hero from "@/components/shared/Hero";
import { membershipClasses } from "@/constants";

const page = () => {
  return (
    <div>
      <Hero text="Membership" img="/assets/testHero.jpg" />
      <div className="bg-bg-light-green text-center py-16 px-4">
        <h1 className="font-bold text-3xl">UNCOMAA-NA Membership</h1>
        <h6 className="text-[#646464] text-sm">
          Working together to promote and foster the interests of The University
          of Nigeria College of Medicine
        </h6>
        {/* <div className="lg:grid lg:grid-cols-2 xl:grid-cols-2 gap-4 md:flex md:flex-wrap justify-center lg:px-32 md:px-20 ">
          {membershipClasses.map((membershipClass, index) => (
            <MemberClassCard
              key={index}
              title={membershipClass.title}
              description={membershipClass.description}
              imageSrc={membershipClass.imageSrc}
            />
          ))}
        </div> */}
        <div className="flex items-center justify-center mt-4">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">UNCOMAA-USA Alumni Association</h1>
        <p className="text-gray-600 mb-4">
          UNCOMAA-USA is a 501-3c organization. Annual dues and any donations made to UNCOMAA-USA are tax deductible.
        </p>
        <p className="text-gray-600 mb-4">Please Zelle $200 membership dues, and other charitable funds to:</p>
        <p className="text-primary-green font-semibold mb-4">❗️❗️uncomaa@gmail.com❗️❗️</p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default page;
