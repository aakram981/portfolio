export default function Skills() {
  const skills = [
    'Data visualization',
    'Data analytics',
    'Data cleaning',
    'Machine Learning',
    'Dashboard development',
    'Predictive modeling',
    "Time Series Forecasting",
    "Finanacial analytics",
    "Web Scraping",
    "​Problem-Solving",
    "analytical thinking",
    "Teamwork"

  ];

  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
    SKILLS
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-16 max-w-4xl mx-auto px-8">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-white shadow-2xl px-6 py-6 text-center text-xl sm:text-3xl font-bold"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

  );
}

