import MemberClassCard from "@/components/cards/MemberClassCard";
import Hero from "@/components/shared/Hero";

const page = () => {
  return (
    <div>
      <Hero text="Membership" img="/assets/testHero.jpg" />
      <div className="bg-bg-light-green text-center py-16">
        <h1 className="font-bold text-3xl">UCOMA-NA Membership</h1>
        <h6 className="text-[#646464] text-sm">
          Working together to promote and foster the interests of The University
          of Nigeria College of Medicine
        </h6>
        <div className="lg:grid lg:grid-cols-2 flex flex-col">
          <MemberClassCard />
        </div>
      </div>
    </div>
  );
};

export default page;
