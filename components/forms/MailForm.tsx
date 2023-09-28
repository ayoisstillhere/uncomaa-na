import Image from "next/image";

const MailForm = () => {
  return (
    <div className="md:px-20 px-8 md:grid md:grid-cols-2 gap-20 mb-20 mt-12 py-6">
      <div>
        <h1 className="font-bold text-3xl leading-normal mb-5">
          Welcome to the University of Nigeria College of Medicine Alumni
          Association- North America (UNCOMA-NA)
        </h1>
        <p className=" text-gray-500 text-sm mb-8">
          Working towards charitable, educational and scientific purposes, that
          help promote and foster the interests of The University of Nigeria
          College of Medicine.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            className="flex-grow border text-xs px-2"
            placeholder="Enter your email address"
          />
          <button className="bg-primary-green text-white px-4 py-2 text-sm rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative max-md:hidden rounded-2xl">
        <Image
          src="/assets/heroImg.jpg"
          alt="Hero Image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default MailForm;
