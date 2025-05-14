import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = ["About", "CV", "Projects", "Contact"];

  return (
    <header className="w-full bg-white border-t-4 fixed top-0 left-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 h-28 sm:h-36 flex items-center justify-between">
       <div className="flex items-center sm:space-x-16 space-x-5 pl-4">
  <Link
    to="/"
    className="flex flex-col sm:flex-row sm:items-end sm:space-x-8 hover:opacity-90 transition"
  >
    <div className="flex items-center space-x-2">
      <span className="w-4 h-4 bg-[#eee6dd] block rounded-sm shadow-sm sm:mb-8 mb-6" />
      
      <div className="text-black font-bold text-lg sm:text-2xl leading-tight text-center sm:text-left">
        <div>Ebtihel</div>
        <div>Kantaoui</div>
      </div>
    </div>

    <span className="text-sm sm:text-[17px] text-black mb-0 sm:mb-6">
      / Business & Data Analyst
    </span>
  </Link>
</div>


        <nav className="hidden md:flex text-sm sm:text-base mb-0 sm:mb-6">
          {links.map((link) => {
            const path = `/${link.toLowerCase() === "about" ? "" : link.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={link}
                to={path}
                className={`text-gray-700 font-normal uppercase px-4 py-2 transition-colors duration-200 ${
                  isActive ? "bg-[#eee6dd]" : "hover:bg-[#eee6dd]"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
          {links.map((link) => {
            const path = `/${link.toLowerCase() === "about" ? "" : link.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={link}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block text-gray-700 font-medium uppercase px-4 py-2 transition-colors duration-200 ${
                  isActive ? "bg-[#eee6dd]" : "hover:bg-[#eee6dd]"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
