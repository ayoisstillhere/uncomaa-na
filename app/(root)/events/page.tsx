import Hero from "@/components/shared/Hero";
import VideoCarousel from "@/components/shared/VideoCarousel";
import { events, eventVids } from "@/constants";
import previousEvents from "@/constants/"; // Assuming you have a separate file for previous events

const page = () => {
  return (
    <div>
      <Hero text="Events" img="/assets/events.jpeg" />
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

        <h1 className="text-3xl font-bold mb-4 max-sm:mx-2 mt-8">
          Previous Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previousEvents.slice(0, 3).map((previousEvent, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={previousEvent.imageUrl}
                alt={previousEvent.title}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">
                {previousEvent.title}
              </h2>
              <p className="text-gray-600">{previousEvent.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-4 max-sm:mx-2 mt-8">
          Videos From Previous Events
        </h1>
        <div className="mt-12"></div>
        <VideoCarousel slides={eventVids} className="max-sm:mx-2" />
        <div className="mt-12"></div>
      </div>
    </div>
  );
};

export default page;
