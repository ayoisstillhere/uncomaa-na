import Hero from "@/components/shared/Hero";

const page = () => {
  return (
    <div>
      <Hero text="Contact us" img="/assets/contact.jpeg" />
      <div className="flex items-center justify-center my-10">
        <div className="bg-white p-8 rounded shadow-md max-w-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or feedback, please feel free to contact
            us using the email below:
          </p>
          <a
            href="mailto:uncomaa@gmail.com"
            className="block bg-secondary-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Email: uncomaa@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
