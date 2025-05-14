import Experience from '../components/cv/Exp';
import Education from '../components/cv/Education';
import Certifications from '../components/cv/Certifications';
import Skills from '../components/cv/Skills';
import Tools from '../components/cv/Tools';
import Languages from '../components/cv/Languages';

export default function CVPage() {
  return (
    <section className="bg-[#e9dccf] min-h-screen px-6 py-12">
<div className="flex flex-col items-center mb-12 relative">
  <div className="flex items-center gap-2 mt-20">
    <div className="w-5 h-5 bg-white" />
    <h1 className="text-4xl font-extrabold ">CV</h1>
  </div>

 <div className="w-full flex justify-center">
  <a
    href="https://44212e1e-5f5c-4b1e-bfaa-de24c8d5dd12.filesusr.com/ugd/f36aae_d52fb1099058420d93005755ab25cf66.pdf"
    download
    className="mt-12 bg-[#b7b5f5] text-white px-4 py-2 rounded-full shadow-xl text-sm hover:bg-[#a3a1e0] transition
      translate-x-0 md:translate-x-[300px]"
  >
    DOWNLOAD RESUME
  </a>
</div>

</div>
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Tools />
      <Languages />
    </section>
  );
}
