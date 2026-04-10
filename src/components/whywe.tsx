import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/yellow bgm.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbowCopy from "../assets/RAINBOW - Copy.png";
import flowerBlue from "../assets/blue-cloud-with-star.png";
import balloon from "../assets/BALOON.png";
import separator from "../assets/DWHITE-SEPERATOR.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const features = [
  {
    icon: icon1,
    title: "Kids Teacher ratio",
    desc: "Strictly maintaining less kids per teacher ratio. So that our qualified, caring teachers provide individual attention to kids.",
  },
  {
    icon: icon2,
    title: "Activity based learning",
    desc: "Modern activity based curriculum and multi sensory learning that makes every lesson, fun and memorable.",
  },
  {
    icon: icon3,
    title: "Well equipped infrastructure",
    desc: "Modern colorful ventilated classrooms. Safe and spacious play area with non toxic toys and exclusive enchanting kids garden.",
  },
  {
    icon: icon4,
    title: "Media Exclusivity",
    desc: "Exclusive Social media to showcase our kids celebrations, games and creative talents & abilities.",
  },
  {
    icon: icon5,
    title: "Parent Updates",
    desc: "Photos and activity updates sent to parents via WhatsApp group regularly.",
  },
  {
    icon: icon6,
    title: "Safety & Hygiene",
    desc: "CCTV cameras, safe premises, and trained staff to ensure your child's safety and hygiene at all times.",
  },
];

/* ── keyframes ─────────────────────────────────────────────────── */
const animStyles = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
  }
  @keyframes balloonFloat {
    0%, 100% { transform: translateY(-50%) translateX(0px); }
    33%       { transform: translateY(-56%) translateX(-6px); }
    66%       { transform: translateY(-46%) translateX(4px); }
  }
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.5; }
  }
  @keyframes rainbowPulseCenter {
    0%, 100% { opacity: 0.8; }
    50%       { opacity: 0.4; }
  }
  @keyframes titleBounceIn {
    0%   { opacity: 0; transform: scale(0.6) translateY(-20px); }
    70%  { transform: scale(1.08) translateY(4px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes cardSlideUp {
    from { opacity: 0; transform: translateY(50px) scale(0.9); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes iconWiggle {
    0%, 100% { transform: rotate(0deg); }
    20%       { transform: rotate(-8deg); }
    40%       { transform: rotate(8deg); }
    60%       { transform: rotate(-4deg); }
    80%       { transform: rotate(4deg); }
  }
  @keyframes cardGlow {
    0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
    50%       { box-shadow: 0 8px 32px rgba(61,191,184,0.45); }
  }
`;

const WhyBest = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <div id="whywe" className="relative w-full overflow-hidden" ref={sectionRef}>
      <style>{animStyles}</style>

      {/* TOP SEPARATOR */}
      <img
        src={separator}
        alt=""
        className="absolute -top-4 sm:-top-8 md:-top-12 left-0 w-full z-20 pointer-events-none"
      />

      {/* BACKGROUND */}
      <div
        className="relative w-full py-16 sm:py-20 md:py-28"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
        }}
      >

        {/* LEFT RAINBOW */}
        <img
          src={rainbow}
          alt=""
          className="hidden sm:block absolute pointer-events-none rotate-90 opacity-90
                     -left-16 top-[30%] w-[160px]
                     md:-left-20 md:w-[240px]
                     lg:-left-28 lg:w-[300px]"
          // style={{ animation: "rainbowPulse 7s ease-in-out infinite" }}
        />

        {/* TOP CENTER RAINBOW */}
        <img
          src={rainbow}
          alt=""
          className="absolute pointer-events-none rotate-180 opacity-80
                     -top-10 left-1/2 -translate-x-1/2 w-[200px]
                     sm:-top-14 sm:w-[320px]
                     md:-top-16 md:w-[460px]
                     lg:w-[600px]"
          // style={{ animation: "rainbowPulseCenter 5s ease-in-out infinite 0.5s" }}
        />

        {/* BOTTOM RIGHT RAINBOW */}
        <img
          src={rainbowCopy}
          alt=""
          className="hidden sm:block absolute pointer-events-none rotate-180 opacity-90
                     -right-6 bottom-28 w-[80px]
                     md:-right-8 md:bottom-32 md:w-[120px]
                     lg:-right-10 lg:w-[140px]"
          // style={{ animation: "rainbowPulse 6s ease-in-out infinite 1s" }}
        />

        {/* BALLOON — drifting float */}
        <img
          src={balloon}
          alt=""
          className="absolute pointer-events-none z-10
                     right-2 top-[48%] -translate-y-1/2 w-10
                     sm:right-3 sm:w-20
                     md:right-6 md:w-28
                     lg:right-20 lg:w-36"
          style={{ animation: "balloonFloat 5s ease-in-out infinite" }}
        />

        {/* FLOWER BLUE — floating */}
        <img
          src={flowerBlue}
          alt=""
          className="hidden sm:block absolute pointer-events-none
                     bottom-8 left-4 w-20
                     md:bottom-10 md:left-10 md:w-28
                     lg:bottom-20 lg:left-14 lg:w-36"
          style={{ animation: "floatY 5s ease-in-out infinite 1.2s" }}
        />

        {/* TITLE — bounce in on scroll */}
        <div className="relative z-10 px-5 sm:px-10 md:px-16 lg:px-20 mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
          <h1
            className="inline-block bg-[#f472b6] text-white text-sm font-serif font-bold sm:text-lg md:text-2xl lg:text-3xl font-black tracking-wide px-4 py-2 rounded-3xl"
            style={
              visible
                ? { animation: "titleBounceIn 0.8s cubic-bezier(0.34,1.56,0.64,1) both" }
                : { opacity: 0 }
            }
          >
            WHY WE ARE THE BEST ?
          </h1>
        </div>

        {/* CARDS GRID */}
        <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
          <div
            className="max-w-5xl mx-auto
                       grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                       gap-5 sm:gap-6 md:gap-7 justify-items-center"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#3dbfb8] rounded-2xl sm:rounded-3xl p-3 sm:p-4
                           w-[85%] sm:w-full
                           shadow-lg hover:scale-[1.02] active:scale-[0.98]
                           transition-transform duration-300
                           flex flex-col items-center"
                style={
                  visible
                    ? {
                        animation: `cardSlideUp 0.7s ease-out ${0.15 + index * 0.1}s both,
                                    cardGlow 4s ease-in-out ${1 + index * 0.2}s infinite`,
                      }
                    : { opacity: 0 }
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* ICON — wiggle on hover */}
                <div
                  className="flex items-center justify-center w-full h-24 sm:h-28 md:h-32 mb-2"
                  style={
                    hoveredIndex === index
                      ? { animation: "iconWiggle 0.6s ease-in-out" }
                      : {}
                  }
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col items-center w-full">
                  <h2
                    className="font-extrabold text-base sm:text-lg md:text-xl
                               text-yellow-300 text-center mb-1 font-serif font-bold"
                  >
                    {item.title}
                  </h2>

                  <p
                    className="text-white font-semibold text-sm sm:text-base md:text-lg
                               leading-relaxed text-justify font-serif font-bold"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyBest;