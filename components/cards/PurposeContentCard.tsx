import Image from "next/image";

interface Props {
  img: string;
  header: string;
  content: string;
}

const PurposeContentCard = ({ img, header, content }: Props) => {
  return (
    <div className="bg-white p-8 flex flex-col text-left gap-2 shadow-lg">
      <Image src={img} alt="mission" height={64} width={47} className="pb-2" />
      <h1 className="text-2xl font-bold">{header}</h1>
      <p className="text-[#757575] font-light text-base">{content}</p>
    </div>
  );
};

export default PurposeContentCard;
