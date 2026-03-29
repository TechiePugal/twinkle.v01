import React from "react";
import girl from "../assets/GIRL.png";
import logo from "../assets/LOGO.png";
import bg from "../assets/GREEN-BGM.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbow3 from "../assets/RAINBOW2.png";
import rainbow2 from "../assets/RAINBOW3.png";
import cloudBlue from "../assets/blue-cloud-with-star.png";
import cloudYellow from "../assets/YELLOW-CLOUD.png";
import separator from "../assets/WHITE-SEPERATOR.png";
const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "600+", label: "Happy Kids" },
  { number: "8+", label: "Dedicated Educators" },
  { number: "100+", label: "No. of Activities" },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen w-full">

      {/* BACKGROUND */}
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="bg"
      />

      {/* RAINBOWS */}
      <img
  src={rainbow}
  className="absolute -top-20 left-1/2 w-[800px] opacity-90 transform -translate-x-1/2 rotate-180"
/>
<img
  src={rainbow2}
  className="absolute -bottom-10 -right-28 w-[300px]"
/>

<img
  src={rainbow3}
  className="absolute -bottom-80 -left-40 w-[630px] rotate-"
/>

      {/* CLOUDS */}
      <img src={cloudBlue} className="absolute top-10 left-10 w-64" />
      <img src={cloudYellow} className="absolute top-20 right-20 w-64" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center">

<img
  src={girl}
  alt="kid"
  className="w-[320px] md:w-[580px] right-10 z-10 relative top-28 "
/>

        {/* RIGHT CONTENT */}
<div className="text-center text-white z-10 md:mr-30 mt-10 md:mt-32">
  <img src={logo} className="w-68 md:w-150 mx-auto mb-2" />

  <p className="text-base md:text-lg mb-4 font-medium tracking-wide">
    No. 34, Sri Nagar, Gobi. Behind Chakra Hospital
  </p>

  <h1 className="text-3xl md:text-5xl font-bold leading-snug font-serif tracking-wide">
    Where your little stars <br />
    begin to shine
  </h1>
</div>
      </div>
      <div>
        
        
      </div>
      {/* BOTTOM SEPARATOR */}
{/* SEPARATOR */}
{/* STATS SECTION */}
{/* STATS SECTION */}
{/* STATS SECTION */}
{/* STATS SECTION */}
<div className="absolute bottom-13 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-30">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-sm bg-white/20 rounded-xl py-4">

    {stats.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-center gap-2"
      >
        {/* NUMBER */}
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          {item.number}
        </h2>

        {/* LABEL */}
        <p className="text-red-500 font-semibold text-sm md:text-lg whitespace-nowrap">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</div>

{/* SEPARATOR */}
<img
  src={separator}
  alt="separator"
  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-screen max-w-none z-10"
/>
    </div>
    
  );
};

export default Hero;