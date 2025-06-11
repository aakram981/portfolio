import ServiceRevenue from "../images/service_and_revenue.jpg";
import RBID1 from "../images/RBID1.png";
import RBID2 from "../images/RBID2.png";
import RBID3 from "../images/RBID3.png";
import RBID4 from "../images/RBID4.png";

const projects = [
  {
    title: "Performance Dashboard – Service & Revenue Analytics",
    description: `This comprehensive Power BI dashboard analyzes both service hours and financial performance across departments, countries, and regions. It includes multiple views: workload distribution, total revenue, average revenue per client, and regional performance breakdown. Filters allow dynamic interaction by service, department, and quarter, providing actionable insights for business decisions.`,
    images: [ServiceRevenue],
    videos: [
      `${process.env.PUBLIC_URL}/videos/PD4.mp4`,
      `${process.env.PUBLIC_URL}/videos/PD2.mp4`,
      `${process.env.PUBLIC_URL}/videos/PD3.mp4`,
    ],
    link: "https://www.linkedin.com/in/akram-brahem-36b203258/",
  },
  {
  title: "Restaurant Business Intelligence Dashboard",
  description: `This Power BI dashboard suite provides a 360° view of restaurant operations. It includes multiple sections: client segmentation, employee performance, restaurant location analytics, and revenue insights by cuisine type. Key KPIs include client satisfaction, average age, staff performance, and sales volume. All dashboards are fully interactive and designed for managerial decision-making.`,
  images: [RBID1, RBID2, RBID3, RBID4],
  link: "https://github.com/aakram981/projet-_restaurent-"
}
];

export default function Projects() {
  return (
    <section className="bg-[#e6d9cc] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-40 relative w-fit mx-auto">
          <span className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#bcb8f4]" />
          Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="space-y-8">
              <div className="bg-white shadow-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 text-justify">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-5 py-1 bg-[#bcb8f4] text-white shadow-sm transition rounded-sm mx-auto block w-fit text-center"
                  >
                    Read More
                  </a>
                )}

                {project.images.length > 0 && (
                  <div className="flex flex-col gap-4 mt-6">
                    {project.images.map((img, i) => (
                      <img
                        key={`img-${i}`}
                        src={typeof img === "string" ? img : img}
                        alt={`${project.title} img ${i + 1}`}
                        className="rounded shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>

              {project.videos &&
                project.videos.map((videoSrc, i) => (
                  <div
                    key={`vid-${i}`}
                    className="bg-white shadow-2xl p-4 md:p-6 max-w-3xl mx-auto"
                  >
                    <video
                      controls
                      className="rounded shadow-md w-full h-auto"
                      src={videoSrc}
                    />
                  </div>
                ))}

            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/aakram981?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-2 hover:border hover:border-black hover:text-black hover:bg-white bg-[#bcb8f4] text-white transition rounded-sm shadow-sm"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
