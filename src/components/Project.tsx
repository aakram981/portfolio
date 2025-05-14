import p1 from '../images/p1.png';
import p112 from '../images/p1-2.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p32 from '../images/p3-2.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p52 from '../images/p5-2.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';
import p9 from '../images/p9.png';
import p10 from '../images/p10.png';
import p11 from '../images/p11.png';
import p12 from '../images/p12.png';
import p13 from '../images/p13.png';
import p14 from '../images/p14.png';
import p15 from '../images/p15.png';
const projects = [
  {
    title: "Real Estate Analytics Dashboard",
    description: `The Real Estate Analytics dashboard offers a data-driven view of market trends and performance. It uses a star schema with a central 'Transactions' fact table linked to four dimension tables: 'Agents', 'Customers', 'Properties', and 'Location'. The dashboard includes an overview page and six detailed sections: Transaction Analysis, Property Insights, Agent Performance, Demographics, Time Analysis, and Location Insights.`,
    images: [p1, p112],
    link: "https://github.com/ebtihel17/Real-Estate-Analytics"
  },
  {
    title: "E-Payment Analytics Dashboards",
    description: `The E-Payment Analytics dashboards provide a detailed view of financial and sales performance. They include a summary of transaction trends, analysis of payment methods, user demographics, and fraud detection metrics.`,
    images: [p2],
    link: "https://github.com/ebtihel17/E-Payment-Analytics"
  },
  {
    title: "Loan Approval Prediction",
    description: `The Loan Approval Prediction App is a web application designed to predict the approval of loan applications based on user-provided information. Built using Streamlit, it leverages a pre-trained Random Forest model to assess various inputs such as applicant income, loan amount, credit history, and personal details. After processing the inputs, the app provides an instant prediction on whether the loan will be approved or rejected, along with the probability of the decision.`,
    images: [p3, p32],
    link: "https://github.com/ebtihel17/Loan-prediction"
  },
  {
    title: "Personal Finance Planner",
    description: `The Personal Finance Planner aims to assist users in effectively managing their personal finances and budgets. It features budget tracking, expense categorization using machine learning algorithms and visualizations of spending patterns over time.`,
    images: [p4],
    link: "https://github.com/ebtihel17/Personnal-Finance-Planner"
  },
  {
    title: "Enhancing AHP Consistency Through Genetic Algorithm and Artificial Neural Networks",
    description: `Developed a hybrid decision-making model integrating Genetic Algorithms (GA) and Artificial Neural Networks (ANN) to enhance Analytic Hierarchy Process (AHP) consistency. Improved convergence and decision reliability were demonstrated using financial data from top tech companies. The model outperformed traditional methods in computational efficiency and solution quality.`,
    images: [p5, p52],
  },
  {
    title: "Tesla stock price prediction using LSTM model",
    description:
      "Using machine learning techniques, I've developed an LSTM (Long Short-Term Memory) model trained on historical data to forecast the future performance of Tesla's stock price.",
    images: [p6],
    link: "https://github.com/ebtihel17/-Tesla-stock-price-prediction-using-LSTM-model-"
  },
  {
    title: "Web Scraping House Rental Prices",
    description:
      "Web-Scraping and Analyzing House Rental Prices: Unlocking the Rental Market Insights",
    images: [p7],
    link: "https://github.com/ebtihel17/-Web-Scraping-House-Rental-Prices"
  },
  {
    title: "Credit Card Customer Churn Prediction Python",
    description:
      "I've developed a predictive model that can help businesses identify potential churners and take proactive measures to retain their valuable customers.",
    images: [p8],
    link: "https://github.com/ebtihel17/Credit-Card-Customer-Churn-Prediction-Python-"
  },
  {
    title: "Customer Segmentation Using K-Means Clustering",
    description:
      "This project aims to implement K-Means clustering, a popular unsupervised machine learning technique, to segment customers into distinct groups for targeted marketing",
    images: [p9],
    link: "https://github.com/ebtihel17/Customer-Segmentation-Using-K-Means-Clustering"
  },
  {
    title: "HR Dashboard",
    description:
      "An HR Dashboard that empowers smarter decision-making by providing actionable insights about the workforce",
    images: [p10],
    link: "https://github.com/ebtihel17/HR-Dashboard-"
  },
  {
    title: "RFM Analysis in Python",
    description:
      "RFM (Recency, Frequency, Monetary) Analysis is a powerful technique that allows you to segment your customers based on their transaction history.",
    images: [p11],
    link: "https://github.com/ebtihel17/-RFM-Analysis-in-Python-"
  },
  {
    title: "Gold Price Prediction",
    description:
      "I built a Gold Price Prediction model providing valuable insights to analyze and predict the upcoming prices of gold using Machine Learning's Random Forest Regressor.",
    images: [p12],
    link: "https://github.com/ebtihel17/Gold-Price-Prediction"
  },
  {
    title: "Call Center Analytics Dashboard",
    description:
      "A visual representation of key performance indicators (KPIs) and metrics relevant to the performance and efficiency of a call center. It serves as a centralized tool for monitoring, analyzing, and interpreting data related to call center operations.",
    images: [p13],
    link: "https://github.com/ebtihel17/Call-Center-Analytics"
  },
  {
    title: "Customer Churn Dashboard",
    description:
      "A visual representation of key metrics and insights related to customer attrition within a business.",
    images: [p14],
    link: "https://github.com/ebtihel17/Customer-Chrun-Analytics"
  },
  {
    title: "HR Dashboard",
    description:
      "An HR Dashboard that empowers smarter decision-making by providing actionable insights about the workforce",
    images: [p15],
    link: "https://github.com/ebtihel17/HR-Analytics"
  },
];

export default function Projects() {
  return (
    <section className="bg-[#e6d9cc] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-40 relative w-fit mx-auto">
          <span className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#bcb8f4]" />
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 text-justify">{project.description}</p>
                 {project.link && index !== 4 && (
                <a
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-6 px-5 py-1 bg-[#bcb8f4] text-white shadow-sm transition rounded-sm mx-auto block w-fit text-center"
                >
                 Read More
               </a>
                )}

              </div>

              <div className="flex flex-col gap-4 w-full md:w-[300px]">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={typeof img === "string" ? img : img}
                    alt={`${project.title} img ${i + 1}`}
                    className="rounded shadow-md"
                  />
                ))}
              </div>
              
            </div>
          ))}
        </div>
<div className="mt-16 flex justify-center">
  <a
    href="https://github.com/ebtihel17?tab=repositories"
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
