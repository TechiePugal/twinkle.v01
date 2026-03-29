import React from "react";
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

const About = () => {
  return (
    <div id="about" className="relative w-full overflow-hidden">

      {/* TOP SEPARATOR */}
      <img
        src={separator}
        alt="separator"
        className="w-full absolute -top-4 sm:-top-8 md:-top-16 left-0 z-20 pointer-events-none"
      />

      {/* BACKGROUND WRAPPER */}
      <div
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* ── RAINBOW TOP-LEFT ───────────────────────── */}
        <img
          src={rainbow}
          alt=""
          className="absolute rotate-180 opacity-90 pointer-events-none
                     -left-16 -top-4 w-[260px]
                     sm:-left-20 sm:top-0 sm:w-[420px]
                     md:-left-24 md:top-2 md:w-[580px]
                     lg:-left-28 lg:top-2 lg:w-[700px]"
        />

        {/* ── RAINBOW BOTTOM-LEFT ────────────────────── */}
        <img
          src={rainbow2}
          alt=""
          className="absolute rotate-90 pointer-events-none
                     -left-16 bottom-16 w-[180px]
                     sm:-left-24 sm:bottom-20 sm:w-[280px]
                     md:-left-32 md:bottom-24 md:w-[380px]
                     lg:-left-32 lg:bottom-28 lg:w-[400px]"
        />

        {/* ── RAINBOW BOTTOM-RIGHT ───────────────────── */}
        <img
          src={rainbow3}
          alt=""
          className="absolute rotate-180 pointer-events-none
                     -right-8 -bottom-4 w-[100px]
                     sm:-right-10 sm:-bottom-6 sm:w-[140px]
                     md:-right-16 md:-bottom-8 md:w-[180px]
                     lg:-right-20 lg:-bottom-10 lg:w-[200px]"
        />

        {/* ── FLOWER YELLOW (bottom-right) ───────────── */}
        <img
          src={flowerYellow}
          alt=""
          className="absolute pointer-events-none
                     bottom-6 right-6 w-16
                     sm:bottom-8 sm:right-16 sm:w-24
                     md:bottom-10 md:right-32 md:w-28
                     lg:bottom-10 lg:right-40 lg:w-36"
        />

        {/* ── FLOWER BLUE (top-right) ────────────────── */}
        <img
          src={flowerBlue}
          alt=""
          className="absolute pointer-events-none
                     top-24 right-4 w-16
                     sm:top-28 sm:right-10 sm:w-28
                     md:top-30 md:right-16 md:w-36
                     lg:top-32 lg:right-24 lg:w-48"
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
        />

        {/* ── STAR ──────────────────────────────────── */}
        <img
          src={star}
          alt=""
          className="absolute pointer-events-none
                     top-20 left-[10%] w-10
                     sm:top-20 sm:left-[12%] sm:w-14
                     md:top-16 md:left-[14%] md:w-16
                     lg:top-14 lg:left-[15%] lg:w-20"
        />

        {/* ════════════════════════════════════════════
            MOBILE LAYOUT  (hidden on md+)
        ════════════════════════════════════════════ */}
        <div className="relative flex flex-col items-center md:hidden z-10 pt-20 pb-10 px-5 gap-6">

          {/* Image */}
          <img
            src={Abtpic}
            alt="kids"
            className="w-[80%] max-w-[300px] sm:max-w-[360px] h-auto object-contain drop-shadow-xl"
          />

          {/* Text block — plane sits absolute above the heading */}
          <div className="relative text-white text-center w-full -mt-4 bg-black/20 rounded-2xl px-4 py-4">

            {/* Plane — absolute, above "ABOUT US" heading */}
            <img
              src={plane}
              alt=""
              className="absolute -top-8 left-4 w-20 pointer-events-none z-10"
            />

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide pt-8">
              ABOUT US
            </h1>
            <p className="mb-3 text-sm sm:text-base leading-relaxed text-justify">
              Twinkle Preschool is the leading kids school in Gobi with more
              than a decade of experience in the preschool industry. We believe
              every child is unique and full of potential. Our preschool
              provides a safe, happy, and nurturing environment where little
              minds grow through play, creativity, and exploration.
            </p>
            <p className="mb-3 text-sm sm:text-base leading-relaxed text-justify">
              Our mission is to support the overall development of every child —
              socially, emotionally, physically, and academically. We focus on
              building strong foundations for lifelong learning.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              We provide a secure, clean, and child-friendly campus where
              children feel comfortable and confident. Safety and happiness are
              our top priorities.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            DESKTOP LAYOUT  (hidden below md)
        ════════════════════════════════════════════ */}
        <div className="hidden md:flex items-center justify-center min-h-screen px-10 lg:px-20 z-10 relative">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-6xl mt-16 lg:mt-24">

            {/* LEFT — image */}
            <div className="flex justify-center items-center">
              <img
                src={Abtpic}
                alt="kids"
                className="w-[340px] lg:w-[420px] xl:w-[480px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* RIGHT — text */}
            <div className="text-white max-w-xl text-justify">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide">
                ABOUT US
              </h1>
              <p className="mb-4 text-base lg:text-lg leading-relaxed">
                Twinkle Preschool is the leading kids school in Gobi with more
                than a decade of experience in the preschool industry. We believe
                every child is unique and full of potential. Our preschool
                provides a safe, happy, and nurturing environment where little
                minds grow through play, creativity, and exploration.
              </p>
              <p className="mb-4 text-base lg:text-lg leading-relaxed">
                Our mission is to support the overall development of every child —
                socially, emotionally, physically, and academically. We focus on
                building strong foundations for lifelong learning.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
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