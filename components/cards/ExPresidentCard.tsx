import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

const ExPresidentCard = ({ name, image }: Props) => {

    return (
      <div className="max-md:w-64 hover:scale-105 duration-300 shadow-lg overflow-hidden mb-6">
        <div className="relative h-44">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="bg-white text-black flex flex-col pt-4 pb-6 pl-2 gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-xs">{name}</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExPresidentCard;
  