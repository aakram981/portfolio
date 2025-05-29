export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-20">
        EXPERIENCE
      </h2>

      <div className="space-y-10">

        <ExperienceCard
         year="2020 – 2024"
          title="Founder & Project Manager"
          company="Shanfara – Crowdfunding Platform"
          location="Tunisia"
          description={[
            "-Created and managed the crowdfunding platform Shanfara.",
            "-Increased online visibility by 30% in 6 months using digital marketing strategies.",
            "-Monitored KPIs, coordinated a cross-functional team, and managed stakeholder communication."
          ]}
        />

        <ExperienceCard
          year="Oct. 2021 – Feb. 2022"
          title="Sales Manager"
          company="BYZACIA – Olive Oil Production"
          location="Tunisia"
          description={[
            "-Explored new market opportunities for olive oil products.",
            "-Created performance reports to measure sales impact and support decision-making."
          ]}
        />

        <ExperienceCard
         year="Jul. 2019 – Oct. 2019"
          title="Green Projects Coordinator"
          company="Governorate of Mahdia – AFDD"
          location="Tunisia"
          description={[
            "-Organized workshops and supervised green projects.",
            "-Ensured alignment of initiatives with sustainability goals."
          ]}
        />
      </div>
    </div>
  );
}

type ExperienceCardProps = {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
};

function ExperienceCard({ year, title, company, location, description }: ExperienceCardProps) {
  return (
    <div className="bg-white shadow-2xl w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 text-left">
        <p className="text-xl font-bold text-[#b7b5f5]">{year}</p>
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-sm mt-2">{company}</p>
        <p className="text-sm mt-2">{location}</p>
      </div>

      <div className="w-full md:w-2/3 text-md text-gray-800 leading-6 space-y-2">
        {description.map((line, index) => (
          <p key={index} className="text-justify">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
