import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

const MemberClassCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 m-4">
      <div className="relative h-44 w-full mb-2">
        <Image src={imageSrc} alt="Member Class Image" fill className="object-cover"/>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MemberClassCard;
