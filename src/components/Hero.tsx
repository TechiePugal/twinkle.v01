import React from "react";
import girl from "../assets/GIRL.png";
import logo from "../assets/LOGO.png";
import bg from "../assets/GREEN-BGM.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbow3 from "../assets/RAINBOW2.png";
import rainbow2 from "../assets/RAINBOW3.png";
import cloudBlue from "../assets/blue-cloud-with-star.png";
import cloudYellow from "../assets/YELLOW-CLOUD.png";
import separator from "../assets/D1WHITE-SEPERATOR.png";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "600+", label: "Happy Kids" },
  { number: "8+", label: "Dedicated Educators" },
  { number: "100+", label: "No. of Activities" },
];

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden w-full">

      {/* ════════════════════════════════
          DESKTOP LAYOUT (hidden on mobile)
      ════════════════════════════════ */}
      <div className="hidden md:block relative min-h-screen w-full">

        {/* BACKGROUND */}
        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img src={rainbow} className="absolute -top-20 left-1/2 w-[820px] opacity-90 transform -translate-x-1/2 rotate-180" />
        <img src={rainbow2} className="absolute -bottom-10 -right-28 w-[300px]" />
        <img src={rainbow3} className="absolute -bottom-80 -left-40 w-[630px]" />

        {/* CLOUDS */}
        <img src={cloudBlue} className="absolute top-10 left-10 w-64" />
        <img src={cloudYellow} className="absolute top-20 right-20 w-64" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center">
          <img src={girl} alt="kid" className="w-[520px] md:w-[900px] right-10 z-10 relative top-44" />
          <div className="text-center text-white z-10 md:mr-30 mt-10 md:mt-48">
            <img src={logo} className="w-96 md:w-150 mx-auto mb-2" />
<p className="text-l md:text-l mb-2 font-bold tracking-wide">
  No. 34, Sri Nagar, Gobi. Behind Chakra Hospital
</p>
            <h1 className="text-xl md:text-3xl font-bold leading-snug font-serif tracking-wide">
              Where your little stars <br /> begin to shine
            </h1>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-30">
          <div className="grid grid-cols-4 gap-6 text-center  rounded-xl py-4">
            {stats.map((item, index) => (
              <div key={index} className="flex mt-5 items-center justify-center gap-2">
                <h2 className="text-4xl font-bold text-black">{item.number}</h2>
                <p className="text-red-500 font-semibold text-lg whitespace-nowrap">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP SEPARATOR */}
        <img
          src={separator}
          alt="separator"
          className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-screen max-w-none z-10"
        />
      </div>

      {/* ════════════════════════════════
          MOBILE LAYOUT (hidden on desktop)
      ════════════════════════════════ */}
      <div className="md:hidden relative w-full min-h-[550px]">

        {/* BACKGROUND */}
        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img src={rainbow} className="absolute -top-8 left-1/2 w-[420px] opacity-90 transform -translate-x-1/2 rotate-180" />
        <img src={rainbow2} className="absolute -right-10 bottom-0 w-[150px]" />
        <img src={rainbow3} className="absolute -bottom-40 -left-20 w-[320px]" />

        {/* CLOUDS */}
        <img src={cloudBlue} className="absolute top-10 left-2 w-24" />
        <img src={cloudYellow} className="absolute top-10 right-2 w-24" />

        {/* MOBILE CONTENT — all stacked, girl pushed down into green area */}
        <div className="relative flex flex-col items-center px-5 z-10">

          {/* Empty top space so girl sits below the rainbow arc */}
          <div className="h-36" />

          {/* Girl */}
          <img 
  src={girl} 
  alt="Happy kid" 
  className="absolute top-40 left-1/2 -translate-x-1/2 w-[70%] max-w-[260px] drop-shadow-xl"
/>
          {/* Logo */}
          <img src={logo} alt="Twinkle Preschool" className="w-44 drop-shadow mt-28" />

          {/* Address */}
<p className="text-white text-[7px] font-bold tracking-wide text-center mt-1">
  No. 34, Sri Nagar, Gobi. Behind Chakra Hospital
</p>

          {/* Tagline */}
          <h1 className="text-white text-[13px] text-base font-bold font-serif tracking-wide text-center leading-snug mt-0 mb-2">
            Where your little stars <br /> begin to shine
          </h1>
        </div>

        {/* MOBILE SEPARATOR + STATS OVERLAID ON IT */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="relative">
            <img src={separator} alt="" className="w-full block" />
            <div className="absolute inset-0 flex items-center justify-center px-2">
              <div className="grid grid-cols-4 w-full">
                {stats.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <span className="text-[13px] font-extrabold text-black leading-none">{item.number}</span>
                    <span className="text-red-500 font-semibold text-[8px] text-center leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;