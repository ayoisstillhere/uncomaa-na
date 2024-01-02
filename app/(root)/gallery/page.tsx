import Hero from "@/components/shared/Hero";
import Image from "next/image";

const page = () => {
  const galleryImages = [
    '/assets/slides/slide1.jpeg',
    '/assets/slides/slide2.jpeg',
    '/assets/slides/slide3.jpeg',
    '/assets/slides/slide4.jpeg',
    '/assets/slides/slide5.jpeg',
    '/assets/slides/slide6.jpeg',
    '/assets/slides/slide7.jpeg',
    '/assets/slides/slide8.jpeg',
    '/assets/slides/slide9.jpeg',
    '/assets/slides/slide10.jpeg',
    '/assets/slides/slide11.jpeg',
  ];
  return (
    <div>
      <Hero text="Gallery" img="/assets/testHero.jpg" />
      <div className="container mx-auto my-8">
      <h1 className="text-6xl text-center pt-24 pb-12">Past Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24 max-sm:mx-10">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-sm sm:rounded-lg shadow-md">
            <Image
              src={image}
              alt={`Event ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-48 object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default page;
