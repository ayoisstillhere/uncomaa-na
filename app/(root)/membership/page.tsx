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
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-2 gap-4 md:flex md:flex-wrap justify-center lg:px-32 md:px-20 ">
          {membershipClasses.map((membershipClass, index) => (
            <MemberClassCard
              key={index}
              title={membershipClass.title}
              description={membershipClass.description}
              imageSrc={membershipClass.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
