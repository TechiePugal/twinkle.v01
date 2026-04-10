import React, { useState, useEffect, useRef } from "react";

// CLASS IMAGES
import playgroup from "../assets/PIC1.png";
import prekg from "../assets/PIC2.png";
import juniorkg from "../assets/PIC3.png";
import seniorkg from "../assets/PIC4.png";

// DECOR IMAGES
import rainbow from "../assets/RAINBOW.png";
import star from "../assets/STAR.png";
import aero from "../assets/AERO2.png";
import flower from "../assets/blue-cloud-with-star.png";
import separator from "../assets/WHITE-SEPERATOR.png";

// BACKGROUND PATTERN
import bgPattern from "../assets/ORANGE-BGM.jpg";

const classes = [
  {
    title: "Playgroup",
    img: playgroup,
    desc: "A joyful introduction to school where little ones learn through play and fun activities. We focus on social skills, communication, and cognitive development.",
  },
  {
    title: "Pre kg",
    img: prekg,
    desc: "Children explore letters, numbers, colors, and shapes through engaging stories, songs, and hands-on activities guided by teachers.",
  },
  {
    title: "Junior kg",
    img: juniorkg,
    desc: "We strengthen literacy and numeracy skills with interactive lessons, helping children build confidence and creativity.",
  },
  {
    title: "Senior kg",
    img: seniorkg,
    desc: "Children build a strong foundation in reading, writing, and math, preparing confidently for primary school.",
  },
];

/* ── keyframes ─────────────────────────────────────────────────── */
const animStyles = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes floatYAlt {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes starSpin {
    0%   { transform: rotate(0deg) scale(1); }
    50%  { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }
  @keyframes planeFly {
    0%   { transform: translateX(0px) translateY(0px); }
    25%  { transform: translateX(10px) translateY(-6px); }
    75%  { transform: translateX(-5px) translateY(-2px); }
    100% { transform: translateX(0px) translateY(0px); }
  }
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.5; }
  }
  @keyframes titleDrop {
    from { opacity: 0; transform: translateY(-30px) scale(0.9); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes cardPopUp {
    0%   { opacity: 0; transform: translateY(50px) scale(0.85); }
    70%  { transform: translateY(-6px) scale(1.03); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes cardShine {
    0%   { box-shadow: 0 10px 30px rgba(0,0,0,0.12); }
    50%  { box-shadow: 0 16px 40px rgba(255,165,0,0.22); }
    100% { box-shadow: 0 10px 30px rgba(0,0,0,0.12); }
  }
`;

const Classes = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id="classes"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-12 sm:py-14 md:py-16"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{animStyles}</style>

      {/* AERO — flying loop */}
      <img
        src={aero}
        alt=""
        className="absolute pointer-events-none
                   -top-2 left-6 w-28
                   sm:top-8 sm:left-16 sm:w-36
                   md:top-4 md:left-32 md:w-52
                   lg:top-2 lg:left-44 lg:w-64"
          style={{ animation: "floatYSlow 6s ease-in-out infinite 1.5s" }}
      />

      {/* STAR — spinning */}
      <img
        src={star}
        alt=""
        className="absolute pointer-events-none
                   top-6 right-[28%] w-10
                   sm:top-8 sm:right-[30%] sm:w-14
                   md:top-8 md:right-[33%] md:w-20
                   lg:top-8 lg:right-[33%] lg:w-24"
        style={{ animation: "starSpin 8s linear infinite" }}
      />

      {/* FLOWER — floating */}
      <img
        src={flower}
        alt=""
        className="absolute pointer-events-none
                   top-10 right-3 w-14
                   sm:top-14 sm:right-8 sm:w-24
                   md:top-18 md:right-14 md:w-32
                   lg:top-20 lg:right-24 lg:w-40"
        style={{ animation: "floatY 5s ease-in-out infinite 0.8s" }}
      />

      {/* TITLE — drop in on scroll */}
      <h1
        className="relative font-serif font-bold z-10 text-center text-white font-bold tracking-wide
                   text-3xl mb-6
                   sm:text-4xl sm:mb-8
                   md:text-5xl md:mb-10
                   lg:text-6xl lg:mb-12"
        style={
          visible
            ? { animation: "titleDrop 0.8s cubic-bezier(0.34,1.56,0.64,1) both" }
            : { opacity: 0 }
        }
      >
        CLASSES
      </h1>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10
                      gap-4 sm:gap-5 md:gap-6 justify-items-center">
        {classes.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-[32px] sm:rounded-[40px] p-3
                       text-center shadow-xl
                       hover:scale-105 transition duration-300
                       flex flex-col items-center
                       w-[82%] sm:w-[88%] md:w-[240px] lg:w-[260px] xl:w-[280px]
                       min-h-[330px] sm:min-h-[350px] md:min-h-[370px]"
            style={
              visible
                ? {
                    animation: `cardPopUp 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.2 + index * 0.15}s both,
                                cardShine 4s ease-in-out ${1 + index * 0.3}s infinite`,
                  }
                : { opacity: 0 }
            }
          >
            {/* IMAGE — gentle float per card */}
            <div
              className="w-full aspect-square rounded-[24px] sm:rounded-[30px] -mb-10 -mt-9 flex items-center justify-center"
              style={{ animation: `floatYAlt ${4.5 + index * 0.4}s ease-in-out infinite ${index * 0.5}s` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain scale-110"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-orange-500 font-serif font-bold font-bold mb-1 text-base sm:text-lg">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-800 font-serif font-bold leading-relaxed text-justify
                          text-[14px] sm:text-[15px] md:text-base
                          w-full px-2 pb-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* RAINBOW — pulsing */}
      <img
        src={rainbow}
        alt=""
        className="absolute pointer-events-none opacity-90
                   -bottom-10 left-1/2 -translate-x-1/2 w-[500px]
                   sm:-bottom-14 sm:w-[700px]
                   md:-bottom-18 md:w-[900px]
                   lg:-bottom-20 lg:w-[1200px]"
        // style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
      />

      {/* SEPARATOR */}
      <img
        src={separator}
        alt=""
        className="absolute left-0 w-full h-auto z-20 pointer-events-none
                   -bottom-2
                   sm:-bottom-4
                   md:-bottom-10
                   lg:-bottom-20"
      />
    </div>
  );
};

export default Classes;