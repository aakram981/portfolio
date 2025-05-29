export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
        EDUCATION
      </h2>

      <div className="space-y-10">
        <EducationCard
          year="2018 – 2020"
          title="International School of Management of Sousse"
          degree="Master’s Degree in Innovation Project Management"
          location="Sousse – Tunisia"
          content={[
            "-Graduation project: Optimization of a warehouse using the Japanese 5S method.",
            "-Final year project: Development of a dropshipping platform for olive-based products in Tunisia."
          ]}
        />
        <EducationCard
          year="2015 – 2018"
          title="Private University of Sousse"
          degree="Bachelor’s Degree in Financial Management"
          location="Sousse – Tunisia"
          content={[
            "-Completed a solid academic background in finance, accounting, and management principles."
          ]}
        />
      </div>
    </div>
  );
}

type EducationCardProps = {
  year: string;
  title: string;
  degree: string;
  location: string;
  content: string[];
};

function EducationCard({ year, title, degree, location, content }: EducationCardProps) {
  return (
    <div className="bg-white shadow-2xl w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 text-left">
        <p className="text-xl font-bold text-[#b7b5f5]">{year}</p>
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-sm mt-2">{degree}</p>
        <p className="text-sm mt-2">{location}</p>
      </div>

      <div className="w-full md:w-2/3 text-sm sm:text-base text-gray-800 leading-6 space-y-3 text-justify">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
