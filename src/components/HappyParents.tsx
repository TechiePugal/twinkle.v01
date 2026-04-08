import React, { useState } from "react";
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

const HappyParents = () => {
  const [index, setIndex] = useState(0);

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

  const maxIndex = reviews.length - visibleCount;

  const nextSlide = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div id="testimonials" className="relative w-full overflow-hidden font-sans">
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
  <h1 className="inline-block bg-[#3dbfb8] text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold font-serif tracking-wide leading-tight px-4 py-2 rounded-3xl">
    OUR HAPPY PARENTS
  </h1>
</div>

        {/* SLIDER */}
        <div className="relative px-8 sm:px-10 md:px-14 lg:px-20 pb-10">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20
                       bg-[#f4a0c0] text-white
                       w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                       rounded-full shadow-lg flex items-center justify-center
                       text-lg sm:text-xl
                       hover:scale-110 active:scale-95 transition
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            disabled={index >= maxIndex}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20
                       bg-[#f4a0c0] text-white
                       w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                       rounded-full shadow-lg flex items-center justify-center
                       text-lg sm:text-xl
                       hover:scale-110 active:scale-95 transition
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 p-2 sm:p-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className="bg-[#f4a0c0] rounded-3xl shadow-xl
                               flex flex-col p-4 sm:p-5 md:p-6 h-full"
                    style={{ height: "320px" }}  // ✅ fixed equal height
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
                  ${i === index
                    ? "bg-[#3dbfb8] w-4 h-2"
                    : "bg-[#f4a0c0] w-2 h-2"
                  }`}
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
          />

<div className="absolute text-white -bottom-2 sm:bottom-4
                text-[10px] sm:text-lg md:text-2xl
                left-1/2 -translate-x-1/2 text-center font-serif font-extrabold whitespace-nowrap leading-tight">
  GOVERNMENT <br />
  <span className="text-[#3dbfb8]">APPROVED <br /> PRESCHOOL</span>
</div>
          <img
            src={flowerBlue}
            className="absolute bottom-2 left-2 sm:left-4 w-10 sm:w-14 md:w-40"
            alt=""
          />

          <img
            src={plane}
            className="absolute bottom-4 right-4 sm:right-12 md:right-28
                       w-16 sm:w-24 md:w-36"
            alt=""
          />

          <img
            src={rainbowCopy}
            className="absolute bottom-12 sm:bottom-14 right-0 w-10 sm:w-24 rotate-180"
            alt=""
          />
        </div>

        {/* FOOTER */}
        <div className="relative mt-4 sm:mt-8 md:mt-12">
          <img src={separator} className="w-full" alt="" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
  <p className="text-[9px] sm:text-xs md:text-base lg:text-2xl font-black text-center whitespace-nowrap">
    
    <span className="text-black mr-1 sm:mr-2 font-black">
      WORLD RECORD HOLDER
    </span>

    <span className="text-[#3dbfb8] font-black">
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