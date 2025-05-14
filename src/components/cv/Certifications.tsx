export default function Certifications() {
  const certifications = [
    'Presenter Certificate (International Conference on Multiple Criteria Decision Making "MCDM 2024")',
    'Google Data Analytics Professional Certificate',
    'Python for Data Science, AI & Development: IBM',
    'Data Science tools: IBM',
    'Six Sigma Yellow Belt',
    'Scrum Fundamentals SFC™',
  ];

  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
        CERTIFICATION
      </h2>

      <div className="bg-white shadow-2xl max-w-3xl mx-auto p-8">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start sm:text-[24px] text-[18px] font-bold">
              <span className="text-[#b7b5f5] sm:text-3xl text-md font-bold mr-2 ml-4">+</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
