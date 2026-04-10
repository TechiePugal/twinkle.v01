import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/yellow bgm.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbowCopy from "../assets/RAINBOW - Copy.png";
import flowerBlue from "../assets/blue-cloud-with-star.png";
import plane from "../assets/HELICOPTER.png";
import separator from "../assets/WHITE-SEPERATOR.png";

const reviews = [
  {
    name: "Sruthi Rajkumar",
    text: "Twinkle School in Gobi is nothing short of extraordinary. The commitment of the teachers, the personalized attention, and the vibrant learning environment have brought out the very best in my child. Their holistic approach not only nurtures academic excellence but also builds confidence, creativity, and character. It is a rare institution where children truly thrive, and I feel grateful to have chosen it. Twinkle School is an absolute gem and a must-experience for every parent.",
  },
  {
    name: "Shankari Surya",
    text: "Best school in and around Gobichettipalayam. The management ensures appropriate child-friendly facilities, age-appropriate classrooms, safe play toys, outdoor play areas, and individual care. It has unique teaching methodologies. Self-designed mats by the Correspondent Sir enhance fine motor skills among children, helping in their critical thinking.",
  },
  {
    name: "Anna Poorni",
    text: "My 3 kids are studying in this school. Very friendly environment with more activities apart from studies. Staff are very nice and knowledgeable. All updates and activities are shared daily on WhatsApp with photos. Happy to see our kids enjoying and becoming more knowledgeable. Thanks to Sir and all staff. One of the best schools in Gobi. Highly recommended.",
  },
  {
    name: "Meenambal Venu",
    text: "Awesome kids school in Gobi. They take very good care of kids and are very parent-friendly. I have never seen this level of activity-based learning, even in Coimbatore. The kid-to-teacher ratio is very good. Please watch 'Twinkle Kids Creatives' YouTube channel to understand better. I highly recommend this school.",
  },
  {
    name: "Bharani Kapil",
    text: "One of the best preschools in Gobichettipalayam. Your hard work and dedication shine through in everything you do. My kid loves this school a lot and enjoys coming every day. Thank you for your kindness and patience. Thanks to the Principal Sir for creating such a wonderful environment. Special mention to class teacher Maheshwari ma'am for her love and care.",
  },
  {
    name: "Rubinikumar",
    text: "Teaching methodology is very creative. Parent-friendly management with a safe and encouraging environment for kids. My child loves going to school. Best play-way method I have ever seen. A government-approved preschool in our area with an integrated approach. Everyone must try this school.",
  },
];

/* ── keyframes ─────────────────────────────────────────────────── */
const animStyles = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes helicopterFly {
    0%   { transform: translateX(0px) translateY(0px) rotate(0deg); }
    25%  { transform: translateX(-8px) translateY(-6px) rotate(-2deg); }
    75%  { transform: translateX(6px) translateY(-3px) rotate(2deg); }
    100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
  }
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.5; }
  }
  @keyframes titlePopIn {
    0%   { opacity: 0; transform: scale(0.7) translateY(-16px); }
    70%  { transform: scale(1.06) translateY(3px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes cardFadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dotPulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.4); }
  }
  @keyframes badgeGlow {
    0%, 100% { text-shadow: 0 0 0px transparent; }
    50%       { text-shadow: 0 0 12px rgba(61,191,184,0.7); }
  }
  @keyframes recordSlideUp {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
`;

const HappyParents = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const sectionRef = useRef(null);
  const footerRef = useRef(null);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount);

  React.useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      setIndex((prev) => Math.min(prev, reviews.length - count));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* intersection observers */
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

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFooterVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxIndex = reviews.length - visibleCount;
  const nextSlide = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div id="testimonials" className="relative w-full overflow-hidden font-sans" ref={sectionRef}>
      <style>{animStyles}</style>

      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
        }}
      >

        {/* TITLE */}
        <div className="text-center pt-10 sm:pt-14 md:pt-16 pb-6 px-4">
          <h1
            className="inline-block bg-[#3dbfb8] text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold font-serif tracking-wide leading-tight px-4 py-2 rounded-3xl"
            style={
              visible
                ? { animation: "titlePopIn 0.8s cubic-bezier(0.34,1.56,0.64,1) both" }
                : { opacity: 0 }
            }
          >
            OUR HAPPY PARENTS
          </h1>
        </div>

        {/* SLIDER */}
        <div className="relative px-8 sm:px-10 md:px-14 lg:px-20 pb-10">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20
                       bg-[#3dbfb8] text-white
                       w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                       rounded-full shadow-lg flex items-center justify-center
                       text-lg sm:text-xl
                       hover:scale-110 active:scale-95 transition"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20
                       bg-[#3dbfb8] text-white
                       w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                       rounded-full shadow-lg flex items-center justify-center
                       text-lg sm:text-xl
                       hover:scale-110 active:scale-95 transition"
          >
            ›
          </button>

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 p-2 sm:p-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className="bg-[#f4a0c0] rounded-3xl shadow-xl flex flex-col p-4 sm:p-5 md:p-6 h-full"
                    style={{
                      height: "320px",
                      animation: visible
                        ? `cardFadeIn 0.6s ease-out ${0.1 + i * 0.08}s both`
                        : "none",
                      opacity: visible ? undefined : 0,
                    }}
                  >
                    {/* NAME */}
                    <h2 className="font-extrabold font-serif text-sm sm:text-base md:text-lg mb-2 text-yellow-200 text-center">
                      {review.name}
                    </h2>

                    {/* TEXT */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide pr-1 relative">
                      <p className="text-black font-serif font-bold text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                        {review.text}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#f4a0c0] to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-300
                  ${i === index ? "bg-[#3dbfb8] w-4 h-2" : "bg-[#f4a0c0] w-2 h-2"}`}
                style={
                  i === index
                    ? { animation: "dotPulse 1.5s ease-in-out infinite" }
                    : {}
                }
              />
            ))}
          </div>
        </div>

        {/* BOTTOM DESIGN */}
        <div className="relative h-[140px] sm:h-[180px] md:h-[220px]">

          <img
            src={rainbow}
            className="absolute -bottom-20 sm:-bottom-36 md:-bottom-56 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%]"
            alt=""
            // style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
          />

          <div
            className="absolute text-white -bottom-2 sm:bottom-4
                        text-[10px] sm:text-lg md:text-2xl
                        left-1/2 -translate-x-1/2 text-center font-serif font-extrabold whitespace-nowrap leading-tight"
            style={
              visible
                ? { animation: "recordSlideUp 0.9s ease-out 0.3s both" }
                : { opacity: 0 }
            }
          >
            GOVERNMENT <br />
            <span
              className="text-[#3dbfb8]"
              style={{ animation: "badgeGlow 3s ease-in-out infinite 1s" }}
            >
              APPROVED <br /> PRESCHOOL
            </span>
          </div>

          {/* FLOWER — floating */}
          <img
            src={flowerBlue}
            className="absolute bottom-2 left-2 sm:left-4 w-10 sm:w-14 md:w-40"
            alt=""
            style={{ animation: "floatY 5s ease-in-out infinite" }}
          />

          {/* HELICOPTER — flying */}
          <img
            src={plane}
            className="absolute bottom-4 right-4 sm:right-12 md:right-28 w-36 sm:w-24 md:w-36"
            alt=""
          style={{ animation: "floatYSlow 6s ease-in-out infinite 1.5s" }}
          />

          {/* RAINBOW COPY — pulse */}
          <img
            src={rainbowCopy}
            className="absolute bottom-12 sm:bottom-14 right-0 w-10 sm:w-24 rotate-180"
            alt=""
            // style={{ animation: "rainbowPulse 7s ease-in-out infinite 0.5s" }}
          />
        </div>

        {/* FOOTER */}
        <div className="relative mt-4 sm:mt-8 md:mt-12" ref={footerRef}>
          <img src={separator} className="w-full" alt="" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p
              className="text-[9px] sm:text-xs md:text-base lg:text-2xl font-black text-center whitespace-nowrap"
              style={
                footerVisible
                  ? { animation: "cardFadeIn 0.8s ease-out both" }
                  : { opacity: 0 }
              }
            >
              <span className="text-black mr-1 sm:mr-2 font-black">
                WORLD RECORD HOLDER
              </span>
              <span
                className="text-[#3dbfb8] font-black"
                style={{ animation: "badgeGlow 3s ease-in-out infinite 0.5s" }}
              >
                IN INTERNATIONAL BOOK OF RECORDS
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HappyParents;