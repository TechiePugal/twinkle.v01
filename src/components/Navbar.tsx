import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import separator from "../assets/DWHITE-SEPERATOR.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-no-repeat
                 bg-[length:250%_100%] md:bg-[length:100%_100%]
                 transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${separator})`,
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between md:py-4 transition-all duration-300">
        
        {/* LOGO */}
        <a href="#home" className="transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Twinkle Preschool" className="h-12 mb-2 w-auto" />
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label} className="transition-all duration-300">
              <a
                href={link.href}
                className="text-gray-800 font-bold text-base tracking-wide
                           px-4 py-2 rounded-md
                           transition-all duration-300 ease-out
                           hover:bg-[#5BAF9C] transition-colors duration-300 hover:text-white
                           hover:scale-110 hover:-translate-y-0.5 active:scale-95"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none transition-all duration-300"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-400 ease-in-out
              ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-400 ease-in-out
              ${isOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-400 ease-in-out
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU (SMOOTH) */}
      <div
        className={`md:hidden absolute top-full right-0 w-[75%]
        backdrop-blur-md bg-white/80 shadow-2xl rounded-bl-2xl
        transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top-right
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
<ul className="flex flex-col px-5 py-4 gap-2">
  {navLinks.map((link, index) => (
    <li
      key={link.label}
      className={`transition-all duration-500 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <a
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block py-3 px-3 text-gray-800 font-semibold text-base
                   tracking-wide rounded-md
                   transition-all duration-300 ease-out
                   hover:bg-[#5BAF9C] hover:text-white
                   hover:scale-105 hover:translate-x-1 active:scale-95"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>
      </div>
    </nav>
  );
};

export default Navbar;