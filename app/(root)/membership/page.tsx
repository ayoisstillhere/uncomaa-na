import MembershipForm from "@/components/forms/MembershipForm";
import Hero from "@/components/shared/Hero";

const MembershipPage = () => {
  return (
    <div className="bg-bg-light-green">
      <Hero text="Membership" img="/assets/testHero.jpg" />
      <div className="text-center py-16 px-4">
        <h1 className="font-bold text-3xl">UNCOMAA-NA Membership</h1>
        <h6 className="text-[#646464] text-sm">
          Working together to promote and foster the interests of The University
          of Nigeria College of Medicine
        </h6>

        <section className="my-12 mx-auto max-w-2xl">
          <p className="text-[#646464]">
            As a member of UNCOMAA-NA, you enjoy various benefits, including networking opportunities,
            access to exclusive events, and the satisfaction of supporting the College of Medicine's
            initiatives.
          </p>

          <div className="flex items-center justify-center mt-4">
          <div className="bg-white p-8 rounded shadow-md w-96 text-center">
            <h1 className="text-2xl font-bold mb-4">UNCOMAA-USA Alumni Association</h1>
            <p className="text-gray-600 mb-4">
              UNCOMAA-USA is a 501(c)(3) organization. Annual dues and any donations made to UNCOMAA-USA are tax deductible.
            </p>
            <p className="text-gray-600 mb-4">Please Zelle $200 membership dues, and other charitable funds to:</p>
            <p className="text-primary-green font-semibold mb-4">❗️❗️ uncomaa@gmail.com ❗️❗️</p>
          </div>
        </div>

          {/* How to Join */}
          <section className="my-12">
            <h2 className="font-bold text-2xl mb-4">How to Join</h2>
            <p className="text-[#646464]">
              To become a member, simply follow these steps:
              <ol className="list-decimal pl-6 mt-2 text-left">
                <li>Complete the online registration form.</li>
                <li>Submit the annual membership dues through Zelle.</li>
                <li>Stay connected and enjoy the benefits of being part of our alumni association!</li>
              </ol>
            </p>
          </section>
        </section>
         {/* Membership Form */}
      <section className="my-12 mx-auto max-w-2xl">
        <MembershipForm />
      </section>
      </div>
    </div>
  );
};

export default MembershipPage;




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
        {/* Membership Benefits */}