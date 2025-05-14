export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
        EDUCATION
      </h2>

      <div className="space-y-10">
        <EducationCard
          year="2023 – 2024"
          title="Tunis Business School - University of Tunis"
          degree="Master of Science (MS), Business analytics: Data analytics"
          location="Tunis - Tunisia"
          content={[
            "- During my first year as a master's student, I achieved the top rank in my cohort, securing the first position.",
            "- In my Master's program, I focused on applying analytical techniques and tools in business contexts: analyzing and interpreting large data sets to make informed business decisions and solve complex business problems.",
            "Skills: Machine Learning, Deep Learning, Statistical Modeling, Data Visualization.",
            "Tools: Python, R Studio, Power BI, Microsoft Excel."
          ]}
        />
        <EducationCard
          year="2019 – 2022"
          title="IHEC"
          degree="Bachelor's degree in Management Sciences - Financial Analytics"
          location="Sousse - Tunisia"
          content={[
            "I am a HEC graduate, having successfully completed my studies with Honors.",
            "Throughout this demanding program, my coursework revolved around a diverse array of subjects, including Mathematics, Statistics, Econometrics, Financial Analysis, Actuarial Studies, Risk Measurement, Financial Engineering, Business Decision Making, and Game Theory."
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
