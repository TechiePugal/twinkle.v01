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
             bg-[length:250%_100%] md:bg-[length:100%_100%]"
  style={{
    backgroundImage: `url(${separator})`,
    backgroundPosition: "center",
  }}

>
  <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between md:py-4">
        {/* LOGO */}
        <a href="#home">
          <img src={logo} alt="Twinkle Preschool" className="h-12 mb-2 w-auto" />
        </a>

        {/* DESKTOP LINKS */}
<ul className="hidden md:flex items-center gap-9">
  {navLinks.map((link) => (
    <li key={link.label}>
      <a
        href={link.href}
        className="text-gray-800 font-bold text-base tracking-wide
                   px-4 py-2 rounded-md
                   transition-all duration-300
                   hover:bg-red-500 hover:text-white"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Three bars — animate to X when open */}
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center
              ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300
              ${isOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
     <div
  className={`md:hidden absolute top-full right-0 w-[70%] bg-white shadow-xl rounded-bl-2xl
    transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
>
        <ul className="flex flex-col border-t border-white/30 px-5 py-3 gap-1" style={{ backgroundColor: "transparent" }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-gray-800 font-semibold text-base
                           tracking-wide border-b border-gray-100 last:border-0
                           hover:text-orange-500 hover:pl-4 transition-all duration-200"
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