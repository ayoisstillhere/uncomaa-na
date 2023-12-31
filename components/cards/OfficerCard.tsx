import Image from "next/image";

interface Props {
  name: string;
  position: string;
  image: string;
  email: string;
}

const OfficerCard = ({ name, position, image, email }: Props) => {
  return (
    <div className="max-md:w-64 hover:scale-105 duration-300 shadow-lg rounded-xl overflow-hidden mb-6">
      <div className="relative h-44">
        <Image src={image} alt={position} fill className="object-cover" />
      </div>
      <div className="bg-white text-black flex flex-col pt-4 pb-6 px-8 gap-6">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-xl">{name}</h4>
          <h3 className="font-normal text-[#3B3F5C] text-base">
            {position}
          </h3>
        </div>

        <button className="bg-secondary-blue text-white w-full py-4 font-bold rounded-md">
          Contact
        </button>
      </div>
    </div>
  );
};

export default OfficerCard;
