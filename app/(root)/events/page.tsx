import Hero from "@/components/shared/Hero";
import { events } from "@/constants";

const page = () => {
  return (
    <div>
      <Hero text="Events" img="/assets/testHero.jpg" />
      <div className="container mx-auto mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 max-sm:mx-2">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
