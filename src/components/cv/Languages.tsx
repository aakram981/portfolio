export default function Languages() {
  const languages = ['Arabic', 'English', 'French'];

  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-10 mt-20">
        LANGUAGE
      </h2>

      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl text-center font-bold text-2xl py-3"
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
}
