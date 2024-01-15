import Hero from "@/components/shared/Hero";

const Page = () => {
  return (
    <div>
      <Hero text="News" img="/assets/news.jpeg" />
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Recent News</h1>

        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-lg mb-4">
            The University of Nigeria has emerged as the leading academic institution in terms of its scholarly output among the 133 research institutions assessed by SciVal.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            SciVal is a prestigious organization that offers access to research performance data for over 24,300 research institutions and their affiliated scholars from across 234 countries globally.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            In its latest ranking report released in January 2024, SciVal revealed that the University of Nigeria generated a remarkable total of 7,025 scholarly outputs authored by 5,813 researchers to outperform other Nigerian universities.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Covering the period between 2020 and 2023, the ranking placed the University of Ibadan in second place with 6,978 scholarly outputs contributed by 4,732 authors.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Prof Charles Igwe, the Vice-Chancellor of the University of Nigeria, expressed his delight with the achievement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
