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
        className="relative w-full py-20 sm:py-24 md:py-28"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* LEFT RAINBOW */}
        <img
          src={rainbow}
          alt=""
          className="absolute pointer-events-none rotate-90 opacity-90
                     -left-16 top-[30%] w-[120px]
                     sm:-left-16 sm:w-[220px]
                     md:-left-24 md:w-[300px]
                     lg:-left-32 lg:w-[320px]"
        />

        {/* TOP CENTER RAINBOW */}
        <img
          src={rainbow}
          alt=""
          className="absolute pointer-events-none rotate-180 opacity-80
                     -top-16 left-1/2 -translate-x-1/2 w-[240px]
                     sm:w-[360px]
                     md:w-[520px]
                     lg:w-[650px]"
        />

        {/* BOTTOM RIGHT RAINBOW */}
        <img
          src={rainbowCopy}
          alt=""
          className="absolute pointer-events-none rotate-180 opacity-90
                     -right-6 bottom-36 w-[60px]
                     sm:-right-8 sm:w-[110px]
                     md:-right-10 md:w-[140px]
                     lg:-right-12 lg:w-[130px]"
        />

        {/* BALLOON */}
        <img
          src={balloon}
          alt=""
          className="absolute pointer-events-none z-10
                     right-10 top-[50%] -translate-y-1/2 w-12
                     sm:right-4 sm:w-24
                     md:right-6 md:w-32
                     lg:right-24 lg:w-38"
        />

        {/* FLOWER BLUE */}
        <img
          src={flowerBlue}
          alt=""
          className="absolute pointer-events-none
                     bottom-12 left-4 w-20
                     sm:bottom-10 sm:left-8 sm:w-28
                     md:bottom-12 md:left-12 md:w-32
                     lg:bottom-24 lg:left-16 lg:w-36"
        />

        {/* TITLE */}
<div className="relative z-10 px-5 sm:px-10 md:px-16 lg:px-12 mb-6 sm:mb-8 md:mb-10">
  <h1
    className="text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3dbfb8] tracking-wide"
    style={{ fontFamily: "'Fredoka', sans-serif" }}
  >
    WHY WE ARE THE BEST ?
  </h1>
</div>

        {/* CARDS GRID */}
<div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
  <div className="max-w-5xl mx-auto
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-8 sm:gap-9 md:gap-8 items-stretch">

    {features.map((item, index) => (
      <div
        key={index}
        className="bg-[#3dbfb8] rounded-2xl sm:rounded-3xl p-2.5
                   shadow-lg hover:scale-[1.02] transition-transform duration-300
                   flex flex-col"
      >
        <div
          className="rounded-xl sm:rounded-2xl mb-2 sm:mb-3 overflow-hidden flex items-center justify-center"
          style={{ height: "120px" }}
        >
<div className="w-52 h-52:w-52 sm:h-52 md:w-64 md:h-64 flex items-center justify-center">
  <img
    src={item.icon}
    alt={item.title}
    className="w-full h-full object-contain"
  />
</div>
        </div>

        <h2
          className="font-extrabold text-sm sm:text-base md:text-lg mb-2 text-yellow-300 text-center"
          style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
        >
          {item.title}
        </h2>

        <p
          className="text-white font-extrabold text-sm sm:text-base md:text-l m-2 leading-relaxed flex-grow text-justify"
          style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
        >
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* BOTTOM SEPARATOR */}
      {/* <img
        src={separator}
        alt=""
        className="absolute -bottom-4 sm:-bottom-8 md:-bottom-12 left-0 w-full z-20 pointer-events-none rotate-180"
      /> */}
    </div>
  );
};

export default WhyBest;