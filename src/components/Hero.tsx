import React, { useState, useEffect, useRef } from "react";
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

/* ── inline keyframe styles ─────────────────────────────────────── */
const animStyles = `
  @keyframes floatCloud {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
  }
  @keyframes floatCloudR {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.65; }
  }
  @keyframes girlBounce {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes logoShimmer {
    0%   { filter: brightness(1); }
    50%  { filter: brightness(1.15) drop-shadow(0 0 12px rgba(255,255,255,0.6)); }
    100% { filter: brightness(1); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes statPop {
    0%   { opacity: 0; transform: scale(0.6) translateY(16px); }
    70%  { transform: scale(1.08) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 1;   transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.85); }
  }
`;

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  /* trigger stat animation when stats section enters viewport */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="home" className="relative overflow-hidden w-full">
      <style>{animStyles}</style>

      {/* ═══════════════ DESKTOP ═══════════════ */}
      <div className="hidden md:block relative min-h-screen w-full">

        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img
          src={rainbow}
          className="absolute -top-20 left-1/2 w-[820px] opacity-90 transform -translate-x-1/2 rotate-180"
          // style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
        />
        <img
          src={rainbow2}
          className="absolute -bottom-10 -right-28 w-[300px]"
          // style={{ animation: "rainbowPulse 7s ease-in-out infinite 1s" }}
        />
        <img
          src={rainbow3}
          className="absolute -bottom-80 -left-40 w-[630px]"
          // style={{ animation: "rainbowPulse 8s ease-in-out infinite 0.5s" }}
        />

        {/* CLOUDS — floating */}
        <img
          src={cloudBlue}
          className="absolute top-10 left-10 w-64"
          style={{ animation: "floatCloud 5s ease-in-out infinite" }}
        />
        <img
          src={cloudYellow}
          className="absolute top-20 right-20 w-64"
          style={{ animation: "floatCloudR 6s ease-in-out infinite 1.5s" }}
        />

        {/* CONTENT */}
        <div
          className={`relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Girl — slide in from left + gentle bounce loop */}
          <img
            src={girl}
            alt="kid"
            className="w-[520px] md:w-[900px] right-10 z-10 relative top-44"
            style={
              loaded
                ? {
                    animation:
                      "fadeSlideLeft 0.9s ease-out both, girlBounce 4s ease-in-out 1s infinite",
                  }
                : { opacity: 0 }
            }
          />

          {/* Text block — slide in from right */}
          <div
            className="text-center text-white z-10 md:mr-32 mt-10 md:mt-48"
            style={
              loaded
                ? { animation: "fadeSlideRight 1s ease-out 0.3s both" }
                : { opacity: 0 }
            }
          >
            {/* Logo — shimmer loop */}
            <img
              src={logo}
              className="w-96 md:w-150 mx-auto mb-2"
              style={{ animation: "logoShimmer 4s ease-in-out 1.2s infinite" }}
            />

            <h1
              className="text-xl md:text-3xl font-bold leading-snug font-serif tracking-wide"
              style={
                loaded
                  ? { animation: "fadeSlideUp 0.9s ease-out 0.6s both" }
                  : { opacity: 0 }
              }
            >
              Where your little stars <br /> begin to shine
            </h1>
          </div>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 left-0 w-full z-30" ref={statsRef}>
          <img src={separator} alt="separator" className="w-full block -mb-32" />

          <div className="absolute inset-0 flex items-center justify-center px-6 translate-y-4">
            <div className="grid grid-cols-4 w-full max-w-6xl text-center">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2"
                  style={
                    statsVisible
                      ? {
                          animation: `statPop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.12}s both`,
                        }
                      : { opacity: 0 }
                  }
                >
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

      {/* ═══════════════ MOBILE ═══════════════ */}
      <div className="md:hidden relative w-full min-h-[550px]">

        <img src={bg} className="absolute inset-0 w-full h-full object-cover" alt="" />

        {/* RAINBOWS */}
        <img
          src={rainbow}
          className="absolute -top-8 left-1/2 w-[420px] opacity-100 transform -translate-x-1/2 rotate-180"
          // style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
        />
        <img
          src={rainbow2}
          className="absolute -right-10 bottom-0 w-[150px]"
          // style={{ animation: "rainbowPulse 7s ease-in-out infinite 1s" }}
        />
        <img
          src={rainbow3}
          className="absolute -bottom-40 -left-20 w-[320px]"
          // style={{ animation: "rainbowPulse 8s ease-in-out infinite 0.5s" }}
        />

        {/* CLOUDS */}
        <img
          src={cloudBlue}
          className="absolute top-10 left-2 w-24"
          style={{ animation: "floatCloud 5s ease-in-out infinite" }}
        />
        <img
          src={cloudYellow}
          className="absolute top-10 right-2 w-24"
          style={{ animation: "floatCloudR 6s ease-in-out infinite 1.5s" }}
        />

        {/* CONTENT */}
        <div
          className={`relative flex flex-col items-center px-5 z-10
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="h-36" />

          <img
            src={girl}
            alt="Happy kid"
            className="absolute top-36  -translate-x-1/2 w-[70%] max-w-[260px] drop-shadow-xl"
            style={
              loaded
                ? {
                    animation:
                      "fadeSlideUp 0.9s ease-out 0.2s both, girlBounce 4s ease-in-out 1.2s infinite",
                  }
                : { opacity: 0 }
            }
          />

          <img
            src={logo}
            alt="Twinkle Preschool"
            className="w-44 drop-shadow mt-28"
            style={{
              animation: "fadeSlideUp 0.8s ease-out 0.5s both, logoShimmer 4s ease-in-out 1.5s infinite",
            }}
          />

          <h1
            className="text-white text-[13px] font-bold font-serif tracking-wide text-center leading-snug mt-0 mb-2"
            style={
              loaded
                ? { animation: "fadeSlideUp 0.8s ease-out 0.7s both" }
                : { opacity: 0 }
            }
          >
            Where your little stars <br /> begin to shine
          </h1>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 left-0 w-full z-10" ref={undefined}>
          <div className="relative">
            <img src={separator} alt="" className="w-full block" />
            <div className="absolute inset-0 flex items-center justify-center px-2">
              <div className="grid grid-cols-4 w-full">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                    style={
                      loaded
                        ? {
                            animation: `statPop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.8 + index * 0.12}s both`,
                          }
                        : { opacity: 0 }
                    }
                  >
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