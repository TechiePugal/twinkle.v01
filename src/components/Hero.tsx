import React, { useState, useEffect } from "react";
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
  const [loaded, setLoaded] = useState(false);

  // ✅ trigger animation on mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id="home" className="relative overflow-hidden w-full">

      {/* DESKTOP */}
      <div className="hidden md:block relative min-h-screen w-full">

        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img src={rainbow} className="absolute -top-20 left-1/2 w-[820px] opacity-90 transform -translate-x-1/2 rotate-180" />
        <img src={rainbow2} className="absolute -bottom-10 -right-28 w-[300px]" />
        <img src={rainbow3} className="absolute -bottom-80 -left-40 w-[630px]" />

        {/* CLOUDS */}
        <img src={cloudBlue} className="absolute top-10 left-10 w-64" />
        <img src={cloudYellow} className="absolute top-20 right-20 w-64" />

        {/* CONTENT (animated) */}
        <div
          className={`relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <img src={girl} alt="kid" className="w-[520px] md:w-[900px] right-10 z-10 relative top-44" />

          <div className="text-center text-white z-10 md:mr-32 mt-10 md:mt-48">
            <img src={logo} className="w-96 md:w-150 mx-auto mb-2" />

            <h1 className="text-xl md:text-3xl font-bold leading-snug font-serif tracking-wide">
              Where your little stars <br /> begin to shine
            </h1>
          </div>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 left-0 w-full z-30">
          <img src={separator} alt="separator" className="w-full block -mb-32" />

          <div className="absolute inset-0 flex items-center justify-center px-6 translate-y-4">
            <div className="grid grid-cols-4 w-full max-w-6xl text-center">
              {stats.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <h2 className="text-3xl font-bold text-black">{item.number}</h2>
                  <p className="text-red-500 font-semibold text-base whitespace-nowrap">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative w-full min-h-[550px]">

        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img src={rainbow} className="absolute -top-8 left-1/2 w-[420px] opacity-90 transform -translate-x-1/2 rotate-180" />
        <img src={rainbow2} className="absolute -right-10 bottom-0 w-[150px]" />
        <img src={rainbow3} className="absolute -bottom-40 -left-20 w-[320px]" />

        {/* CLOUDS */}
        <img src={cloudBlue} className="absolute top-10 left-2 w-24" />
        <img src={cloudYellow} className="absolute top-10 right-2 w-24" />

        {/* CONTENT (animated) */}
        <div
          className={`relative flex flex-col items-center px-5 z-10
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="h-36" />

          <img
            src={girl}
            alt="Happy kid"
            className="absolute top-36 left-1/2 -translate-x-1/2 w-[70%] max-w-[260px] drop-shadow-xl"
          />

          <img src={logo} alt="Twinkle Preschool" className="w-44 drop-shadow mt-28" />


          <h1 className="text-white text-[13px] font-bold font-serif tracking-wide text-center leading-snug mt-0 mb-2">
            Where your little stars <br /> begin to shine
          </h1>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="relative">
            <img src={separator} alt="" className="w-full block" />
            <div className="absolute inset-0 flex items-center justify-center px-2">
              <div className="grid grid-cols-4 w-full">
                {stats.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <span className="text-[13px] font-extrabold text-black">{item.number}</span>
                    <span className="text-red-500 font-semibold text-[8px] text-center">
                      {item.label}
                    </span>
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