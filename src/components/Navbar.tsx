import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import separator from "../assets/DWHITE-SEPERATOR.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Why Us", href: "#whywe" },
  {label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-no-repeat
                 bg-[length:250%_100%] md:bg-[length:100%_100%]
                 transition-all duration-500"
      style={{
        backgroundImage: `url(${separator})`,
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between md:py-4">

        {/* LOGO */}
        <a href="#home" className="hover:scale-105 transition">
          <img src={logo} alt="Twinkle Preschool" className="h-12 mb-2" />
        </a>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-800 font-bold text-base tracking-wide
                           px-4 py-2 rounded-md
                           hover:bg-[#5BAF9C] hover:text-white
                           transition-all duration-300 hover:scale-110"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`w-6 h-[2px] bg-gray-800 rounded transition-all duration-300
              ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-[2px] bg-gray-800 rounded transition-all duration-300
              ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-[2px] bg-gray-800 rounded transition-all duration-300
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* 🔥 MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* MENU PANEL */}
        <div
          className={`absolute top-0 right-0 w-[80%] h-full bg-white
          shadow-2xl p-6 flex flex-col
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >

          {/* CLOSE */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-gray-800
                             px-4 py-3 rounded-lg
                             hover:bg-[#5BAF9C] hover:text-white
                             transition-all duration-300 active:scale-95"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;