import { useEffect, useState } from 'react';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import profil from '../images/profil.png';
import { Link } from 'react-router-dom';

export default function About() {
  const [text, setText] = useState('');
  const fullText = "Myy name is Ebtihel,\nI am a Business & Data Analyst";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-[1000px] bg-[#e9dccf]" />
        <div className="w-full bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 py-12 mb-8 
      flex flex-col md:flex-row items-center md:items-end justify-between md:gap-x-8 sm:mt-[45px] mt-0 space-y-12 md:space-y-0">

        <div className="bg-[#f7efe7] shadow-xl ml-0 sm:ml-40 p-6 w-full h-auto md:w-[38%] max-w-sm flex flex-col items-center justify-center">
          <img
            src={profil}
            alt="Ebtihel Kantaoui"
            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-md"
          />

          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-black leading-tight text-center sm:mb-6 mb-2">
            Ebtihel <br /> Kantaoui
          </h2>

          <div className="w-12 border-t-2 border-gray-500 my-2" />

          <p className="tracking-[0.3em] text-center text-black text-md sm:text-md sm:mt-6 mt-2 sm:mb-16 mb-4">
            BUSINESS & DATA <br /> ANALYST
          </p>

          <div className="bg-white w-full py-4 flex justify-center space-x-6 shadow-md">
            <a href="https://www.linkedin.com/in/ebtihel-kantaoui-04737b197/">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/ebtihel17">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013316658415">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ebtihel.knt/">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black mb-4">Hello</h1>
            <div className="whitespace-pre-line text-xl sm:text-2xl font-semibold text-black mb-4 min-h-[64px]">
              {text}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
  <Link
    to="/cv"
    className="w-32 bg-[#b7b5f5] text-white text-sm px-4 py-1.5 rounded-full shadow-md text-center hover:opacity-90 transition"
  >
    CV
  </Link>
  <Link
    to="/projects"
    className="font-semibold w-32 border-2 border-black text-black text-sm px-4 py-1.5 rounded-full text-center hover:bg-gray-100 transition"
  >
    PROJECTS
  </Link>
</div>

          <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed text-justify max-w-full md:max-w-[520px]">
            {[
              "I graduated from Tunis Business School with a Master of Science degree in Business Analytics. I successfully completed my first year in the Master's program with distinction, earning the honor of being the top student in my class, and I finished my second year as the second in my class.",
              "I am deeply passionate about leveraging data-driven insights to enable well-informed business decision-making. Throughout my academic journey, I have actively engaged in numerous data analytics projects, employing a wide range of analytical techniques and modeling approaches to craft efficient solutions for various complex problems.",
              "I'm an art and literature lover.",
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-3 h-3 bg-black mt-2 flex-shrink-0 rounded-sm" />
                <p className="text-gray-800 text-justify">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
