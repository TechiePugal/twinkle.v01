import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/ORANGE-BGM.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbow2 from "../assets/RAINBOW.png";
import rainbow3 from "../assets/RAINBOW - Copy.png";
import flowerYellow from "../assets/YELLOW-CLOUD.png";
import flowerBlue from "../assets/blue-cloud-with-star.png";
import plane from "../assets/AERO1.png";
import star from "../assets/STAR.png";
import separator from "../assets/DWHITE-SEPERATOR.png";
import Abtpic from "../assets/about-us-image.png";

/* ── keyframes ─────────────────────────────────────────────────── */
const animStyles = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
  }
  @keyframes floatYSlow {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-9px); }
  }
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.55; }
  }
  @keyframes starSpin {
    0%   { transform: rotate(0deg) scale(1); }
    50%  { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(1); }
  }
  @keyframes planeFly {
    0%   { transform: translateX(0px) translateY(0px); }
    30%  { transform: translateX(8px) translateY(-5px); }
    60%  { transform: translateX(-4px) translateY(-2px); }
    100% { transform: translateX(0px) translateY(0px); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes paraFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes glassGlow {
    0%, 100% { box-shadow: 0 0 0px rgba(255,255,255,0); }
    50%       { box-shadow: 0 0 18px rgba(255,255,255,0.18); }
  }
`;

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="about" className="relative w-full overflow-hidden" ref={sectionRef}>
      <style>{animStyles}</style>

      {/* TOP SEPARATOR */}
      <img
        src={separator}
        alt="separator"
        className="w-full absolute -top-4 sm:-top-8 md:-top-16 left-0 z-20 pointer-events-none"
      />

      {/* BACKGROUND WRAPPER */}
      <div className="relative w-full min-h-screen">

        {/* BACKGROUND IMAGE */}
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* ── RAINBOW TOP-LEFT ───────────────────────── */}
        <img
          src={rainbow}
          alt=""
          className="absolute rotate-180 opacity-90 pointer-events-none
                     -left-16 -top-4 w-[260px]
                     sm:-left-20 sm:top-0 sm:w-[420px]
                     md:-left-24 md:top-2 md:w-[580px]
                     lg:-left-28 lg:top-2 lg:w-[700px]"
          // style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
        />

        {/* ── RAINBOW BOTTOM-RIGHT ───────────────────── */}
        <img
          src={rainbow3}
          alt=""
          className="absolute rotate-180 pointer-events-none
                     -right-8 -bottom-4 w-[100px]
                     sm:-right-10 sm:-bottom-6 sm:w-[140px]
                     md:-right-16 md:-bottom-8 md:w-[180px]
                     lg:-right-20 lg:-bottom-10 lg:w-[180px]"
          // style={{ animation: "rainbowPulse 7s ease-in-out infinite 1s" }}
        />

        {/* ── FLOWER YELLOW (bottom-right) — floating ── */}
        <img
          src={flowerYellow}
          alt=""
          className="absolute pointer-events-none
                     bottom-6 right-6 w-16
                     sm:bottom-8 sm:right-16 sm:w-24
                     md:bottom-10 md:right-32 md:w-28
                     lg:bottom-1 lg:right-25 lg:w-36"
          style={{ animation: "floatY 5s ease-in-out infinite" }}
        />

        {/* ── FLOWER BLUE (top-right) — floating ────── */}
        <img
          src={flowerBlue}
          alt=""
          className="absolute pointer-events-none
                     top-24 right-4 w-16
                     sm:top-28 sm:right-10 sm:w-28
                     md:top-30 md:right-16 md:w-36
                     lg:top-32 lg:right-24 lg:w-48"
          style={{ animation: "floatYSlow 6s ease-in-out infinite 1.5s" }}
        />

        {/* ── PLANE — desktop only ───────────────────── */}
        <img
          src={plane}
          alt=""
          className="absolute pointer-events-none z-20 hidden md:block
                     -bottom-2 left-[37%] w-24
                     sm:-bottom-1 sm:left-[39%] sm:w-36
                     md:-bottom-1 md:left-[33%] md:w-40
                     lg:bottom-2 lg:left-[35%] lg:w-44"
          style={{ animation: "floatYSlow 6s ease-in-out infinite 1.5s" }}
        />

        {/* ── STAR — spinning ───────────────────────── */}
        <img
          src={star}
          alt=""
          className="absolute pointer-events-none
                     top-20 left-[10%] w-10
                     sm:top-20 sm:left-[12%] sm:w-14
                     md:top-16 md:left-[14%] md:w-16
                     lg:top-14 lg:left-[15%] lg:w-20"
          style={{ animation: "starSpin 8s linear infinite" }}
        />

        {/* ════════════════════════════════════════════
            MOBILE LAYOUT
        ════════════════════════════════════════════ */}
        <div className="relative flex flex-col items-center md:hidden z-10 pt-20 pb-10 px-5 gap-6">

          {/* Image — slide up */}
          <img
            src={Abtpic}
            alt="kids"
            className="w-[80%] max-w-[300px] sm:max-w-[360px] h-auto object-contain drop-shadow-xl"
            style={
              visible
                ? { animation: "fadeSlideUp 0.9s ease-out both" }
                : { opacity: 0 }
            }
          />

          {/* Text block */}
          <div className="relative text-white text-center w-full -mt-4 rounded-2xl px-4 py-4">

            {/* Plane — mobile */}
            <img
              src={plane}
              alt=""
              className="absolute -top-8 left-4 w-20 pointer-events-none z-10"
              style={{ animation: "planeFly 4s ease-in-out infinite" }}
            />

            <div
              className="bg-gray-500/20 rounded-xl p-4"
              style={{ animation: visible ? "glassGlow 4s ease-in-out 1s infinite" : "none" }}
            >
              <h1
                className="text-3xl sm:text-4xl font-serif font-bold mb-2 tracking-wide pt-0"
                style={
                  visible
                    ? { animation: "fadeSlideUp 0.8s ease-out 0.2s both" }
                    : { opacity: 0 }
                }
              >
                ABOUT US
              </h1>

              <p
                className="mb-3 font-serif font-bold text-sm sm:text-base leading-relaxed text-justify"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.4s both" }
                    : { opacity: 0 }
                }
              >
                Twinkle Preschool is the leading kids school in Gobi with more
                than a decade of experience in the preschool industry. We believe
                every child is unique and full of potential. Our preschool
                provides a safe, happy, and nurturing environment where little
                minds grow through play, creativity, and exploration.
              </p>

              <p
                className="mb-3 text-sm font-serif font-bold sm:text-base leading-relaxed text-justify"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.55s both" }
                    : { opacity: 0 }
                }
              >
                Our mission is to support the overall development of every child —
                socially, emotionally, physically, and academically. We focus on
                building strong foundations for lifelong learning.
              </p>

              <p
                className="text-sm font-serif font-bold sm:text-base leading-relaxed text-justify"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.7s both" }
                    : { opacity: 0 }
                }
              >
                We provide a secure, clean, and child-friendly campus where
                children feel comfortable and confident. Safety and happiness are
                our top priorities.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            DESKTOP LAYOUT
        ════════════════════════════════════════════ */}
        <div className="hidden md:flex items-center justify-start min-h-screen px-10 lg:px-20 z-10 relative">

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl mt-12 lg:mt-24 ml-[-35px]">

            {/* LEFT — image, slide in from left */}
            <div
              className="flex justify-center items-center"
              style={
                visible
                  ? { animation: "fadeSlideLeft 1s ease-out both" }
                  : { opacity: 0 }
              }
            >
              <img
                src={Abtpic}
                alt="kids"
                className="w-[340px] lg:w-[420px] xl:w-[480px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* RIGHT — text block, slide in from right */}
            <div
              className="text-white max-w-xl mr-10 text-justify p-6 bg-gray-500/20 rounded-xl"
              style={
                visible
                  ? {
                      animation:
                        "fadeSlideRight 1s ease-out 0.2s both, glassGlow 4s ease-in-out 1.2s infinite",
                    }
                  : { opacity: 0 }
              }
            >
              <h1
                className="text-4xl text-white text-center lg:text-5xl font-serif font-bold mb-6 tracking-wider font-[Comic_Sans_MS]"
                style={
                  visible
                    ? { animation: "fadeSlideUp 0.8s ease-out 0.4s both" }
                    : { opacity: 0 }
                }
              >
                ABOUT US
              </h1>

              <p
                className="mb-4 text-base lg:text-lg leading-relaxed font-serif font-bold tracking-wide"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.55s both" }
                    : { opacity: 0 }
                }
              >
                Twinkle Preschool is the leading kids school in Gobi with more
                than a decade of experience in the preschool industry. We believe
                every child is unique and full of potential. Our preschool
                provides a safe, happy, and nurturing environment where little
                minds grow through play, creativity, and exploration.
              </p>

              <p
                className="mb-4 text-base lg:text-lg font-serif font-bold leading-relaxed"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.7s both" }
                    : { opacity: 0 }
                }
              >
                Our mission is to support the overall development of every child —
                socially, emotionally, physically, and academically. We focus on
                building strong foundations for lifelong learning.
              </p>

              <p
                className="text-base lg:text-lg font-serif font-bold leading-relaxed"
                style={
                  visible
                    ? { animation: "paraFadeUp 0.8s ease-out 0.85s both" }
                    : { opacity: 0 }
                }
              >
                We provide a secure, clean, and child-friendly campus where
                children feel comfortable and confident. Safety and happiness are
                our top priorities.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;