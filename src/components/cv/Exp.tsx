export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-20">
        EXPERIENCE
      </h2>

      <div className="space-y-10">

        <ExperienceCard
          year="2024"
          title="Business Analyst / Product Owner"
          company="Fidness"
          location="Tunis"
          description={[
            "- Prepared FRD documents and maintained detailed project documentation.",
            "- Created and prioritized project backlogs in Jira, aligning with Agile methodologies.",
            "- Managed workflows and sprint activities for efficient task tracking and delivery.",
            "- Ensured clear communication between stakeholders and IT teams.",
          ]}
        />

        <ExperienceCard
          year="2024"
          title="Data Science Intern"
          company="ScreenFlex"
          location="Tunis"
          description={[
            "During my internship, I developed a desktop application using Electron and Python to detect faces, track entries/exits, and predict demographic details (age, gender) in real-time from video streams:",
            "- Implemented face and person detection using YOLO and DeepSORT, with demographic analysis via DeepFace.",
            "- Used Electron to create the app interface, with HTML/CSS/JavaScript for frontend design and real-time data visualization via Chart.js.",
            "- Integrated Python for video processing and SQLite for storing demographic data and entry/exit counts."
          ]}
        />

        <ExperienceCard
          year="2024"
          title="Data Science Intern"
          company="Tradly"
          location="USA - Remote"
          description={[
            "During my internship, I developed an algorithmic trading system using machine learning for advanced pattern recognition across different asset classes:",
            "- Building a computer vision model to scan market data, detect technical patterns such as Head and Shoulders, Triangles, and Flag, and generate trading signals upon identifying opportunities, incorporating robust risk management strategies.",
            "- Creating an LSTM model for stock market price forecasting.",
            "- Implementing real-time extraction and visualization of market data.",
            "- Building a Dash app to visualize historical data and the detected patterns, providing valuable insights for trading decisions."
          ]}
        />

        <ExperienceCard
          year="2023"
          title="Data Science Intern"
          company="INTERNSAVY"
          location="Tunis"
          description={[
            "During my internship, I had the opportunity to work on a diverse range of projects that allowed me to apply my skills in data analysis and machine learning:",
            "- Mall customer segmentation: hierarchical clustering",
            "- Customer Segmentation Using K-Means Clustering",
            "- Graduate Admission Prediction"
          ]}
        />

        <ExperienceCard
          year="2023"
          title="Data Analyst Intern"
          company="CodeClause"
          location="Tunis"
          description={[
            "During my internship, I undertook a challenging and insightful project focused on Gold Price Prediction.",
            "Leveraging advanced data analytics and machine learning techniques, I developed models to forecast gold prices"
          ]}
        />

        <ExperienceCard
          year="2022"
          title="Insurance Analyst"
          company="GAT ASSURANCES"
          location="Sousse - Tunisia"
          description={[
            "This experience has allowed me to acquire skills in:",
            "- Providing information and advice to clients",
            "- Managing insurance contracts and claims file"
          ]}
        />

        <ExperienceCard
          year="2021"
          title="Banking Analyst"
          company="BIAT BANK"
          location="Sousse - Tunisia"
          description={[
            "Through this internship, I had the opportunity to discover how a banking agency operates. Specifically, I carried out and assisted in in counter operations, management of means of payment, remittance of checks and bills, etc."
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
