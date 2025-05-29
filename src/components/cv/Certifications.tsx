export default function Certifications() {
  const certifications = [
    'Python Track Certification | DataCamp | April 2025',
    'Python & SQL Bootcamp | Gate Training | Feb. 2025 – May 2025',
    'Data Analytics – Microsoft Power BI | GOMYCODE | Nov. 2024',
    'Agile Methods for IT Projects | UDEMY | Dec. 2020',
    'SCRUM Fundamentals | SCRUM STUDY | Oct. 2020',
  ];

  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
        CERTIFICATION
      </h2>

      <div className="bg-white shadow-2xl max-w-3xl mx-auto p-8">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start sm:text-[20px] text-[16px] font-medium">
              <span className="text-[#b7b5f5] sm:text-3xl text-lg font-bold mr-2 ml-4">+</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
