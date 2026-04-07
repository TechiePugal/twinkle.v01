import React from "react";
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
    desc: "Modern activity-based curriculum and multi sensory learning that makes every lesson, fun and memorable.",
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

const WhyBest = () => {
  return (
    <div id="whywe" className="relative w-full overflow-hidden">

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

        {/* LEFT RAINBOW — hidden on very small screens */}
        <img
          src={rainbow}
          alt=""
          className="hidden sm:block absolute pointer-events-none rotate-90 opacity-90
                     -left-16 top-[30%] w-[160px]
                     md:-left-20 md:w-[240px]
                     lg:-left-28 lg:w-[300px]"
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
        />

        {/* BOTTOM RIGHT RAINBOW — hidden on very small screens */}
        <img
          src={rainbowCopy}
          alt=""
          className="hidden sm:block absolute pointer-events-none rotate-180 opacity-90
                     -right-6 bottom-28 w-[80px]
                     md:-right-8 md:bottom-32 md:w-[120px]
                     lg:-right-10 lg:w-[140px]"
        />

        {/* BALLOON — scaled nicely across breakpoints */}
        <img
          src={balloon}
          alt=""
          className="absolute pointer-events-none z-10
                     right-2 top-[48%] -translate-y-1/2 w-10
                     sm:right-3 sm:w-20
                     md:right-6 md:w-28
                     lg:right-20 lg:w-36"
        />

        {/* FLOWER BLUE — hidden on very small screens */}
        <img
          src={flowerBlue}
          alt=""
          className="hidden sm:block absolute pointer-events-none
                     bottom-8 left-4 w-20
                     md:bottom-10 md:left-10 md:w-28
                     lg:bottom-20 lg:left-14 lg:w-36"
        />

        {/* TITLE */}
<div className="relative z-10 px-5 sm:px-10 md:px-16 lg:px-20 mb-6 sm:mb-8 md:mb-10">
  <h1
    className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-[#3dbfb8] tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    WHY WE ARE THE BEST ?
  </h1>
</div>

        {/* CARDS GRID — 1 col mobile, 2 col tablet, 3 col desktop */}
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
                   w-[85%] sm:w-full   /* 👈 reduce width only in mobile */
                   shadow-lg hover:scale-[1.02] active:scale-[0.98]
                   transition-transform duration-300
                   flex flex-col items-center"
      >
        {/* ICON */}
        <div className="flex items-center justify-center w-full h-24 sm:h-28 md:h-32 mb-2">
          <img
            src={item.icon}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center w-full">
          <h2
            className="font-extrabold text-base sm:text-lg md:text-xl   /* 👈 increased */
                       text-yellow-300 text-center mb-1"
            style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
          >
            {item.title}
          </h2>

          <p
            className="text-white font-semibold text-sm sm:text-base md:text-lg   /* 👈 increased */
                       leading-relaxed text-justify"
            style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
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