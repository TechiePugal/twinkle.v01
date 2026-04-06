import React, { useState } from "react";
import bg from "../assets/yellow bgm.jpg";
import rainbow from "../assets/RAINBOW.png";
import rainbowCopy from "../assets/RAINBOW - Copy.png";
import flowerBlue from "../assets/blue-cloud-with-star.png";
import plane from "../assets/AERO1.png";
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

  const nextSlide = () => {
    if (index < reviews.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full overflow-hidden font-sans">
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* TITLE */}
        <div className="text-center pt-10 sm:pt-14 md:pt-16 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#3dbfb8] tracking-wide">
            OUR HAPPY PARENTS
          </h1>
        </div>

        {/* SLIDER */}
        <div className="relative px-3 sm:px-6 md:px-14 lg:px-20 pb-12">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 
                       bg-[#f4a0c0] text-white 
                       w-8 h-8 sm:w-10 sm:h-10 
                       rounded-full shadow-lg flex items-center justify-center 
                       hover:scale-110 transition"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 
                       bg-[#f4a0c0] text-white 
                       w-8 h-8 sm:w-10 sm:h-10 
                       rounded-full shadow-lg flex items-center justify-center 
                       hover:scale-110 transition"
          >
            ›
          </button>

<div className="overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${index * 100}%)`,
    }}
  >
    {reviews.map((review, i) => (
      <div
        key={i}
        className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2 sm:p-3"
      >
        <div
          className="bg-[#f4a0c0] rounded-3xl shadow-xl 
                     h-[260px] sm:h-[280px] md:h-[320px] lg:h-[340px]
                     flex flex-col p-4 sm:p-5 md:p-6"
        >
          {/* NAME */}
          <h2
            className="font-extrabold text-sm sm:text-base md:text-lg mb-2 text-yellow-200 text-center"
            style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
          >
            {review.name}
          </h2>

          {/* TEXT (SCROLL WITHOUT SCROLLBAR) */}
          <div className="flex-1 overflow-y-auto scrollbar-hide pr-1 relative">
            <p
              className="text-black text-sm sm:text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
            >
              {review.text}
            </p>

            {/* Fade Effect (Premium Look) */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#f4a0c0] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> </div>

        {/* BOTTOM DESIGN */}
        <div className="relative h-[180px] sm:h-[200px] md:h-[220px]">

          <img
            src={rainbow}
            className="absolute -bottom-40 sm:-bottom-48 md:-bottom-64 left-1/2 -translate-x-1/2 w-[80%] md:w-[70%]"
          />

          <div className="absolute text-white bottom-2 sm:bottom-4 
                          text-lg sm:text-xl md:text-2xl 
                          left-1/2 -translate-x-1/2 text-center font-extrabold">
            GOVERNMENT <br /> APPROVED <br /> PRESCHOOL
          </div>

          <img
            src={flowerBlue}
            className="absolute bottom-2 left-2 sm:left-4 w-12 sm:w-16"
          />

          <img
            src={plane}
            className="absolute bottom-6 right-6 sm:right-16 md:right-32 
                       w-20 sm:w-28 md:w-36"
          />

          <img
            src={rainbowCopy}
            className="absolute bottom-16 right-0 w-12 sm:w-16 rotate-180"
          />
        </div>

        {/* FOOTER */}
        <div className="relative mt-6 sm:mt-10 md:mt-14">
          <img src={separator} className="w-full" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-sm sm:text-lg md:text-2xl font-extrabold text-center leading-snug">
              <span className="text-black">
                WORLD RECORD HOLDER{" "}
              </span>
              <span className="text-[#3dbfb8]">
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