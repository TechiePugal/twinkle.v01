import React from "react";
import bg from "../assets/GREEN-BGM.jpg";
import rainbowRight from "../assets/RAINBOW - Copy.png";
import flower from "../assets/blue-cloud-with-star.png";
import aero from "../assets/AERO1.png";
import YellowFlower from "../assets/YELLOW-CLOUD.png";
// import separator from "../assets/separator.png";
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import separator from "../assets/WHITE-SEPERATOR.png";
const ContactSection = () => {
  return (
    <div id="contact" className="relative w-full py-16 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* LEFT RAINBOW */}
      <img
        src={rainbowRight}
        alt=""
        className="absolute -left-8 top-28 w-36 opacity-100"
      />

      {/* RIGHT RAINBOW */}
      <img
        src={rainbowRight}
        alt=""
        className="absolute right-0 -bottom-44 w-40 opacity-100 rotate-180 "
      />

      {/* FLOWER */}
      <img
        src={YellowFlower}
        alt=""
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* ================= LEFT FORM ================= */}
        <div className="ml-10">
          <h2 className="text-white text-2xl font-extrabold mb-6 "
              style={{ fontFamily: "'Fredoka', sans-serif" }}>
            ADMISSION ENQUIRY
          </h2>

          <div className="space-y-4">
            <input type="text" placeholder="Parents Name" className="w-full p-3 rounded-md bg-white outline-none"/>
            <input type="text" placeholder="Phone number" className="w-full p-3 rounded-md bg-white outline-none"/>
            <input type="text" placeholder="Child Name" className="w-full p-3 rounded-md bg-white outline-none"/>
            <input type="text" placeholder="Age of Child" className="w-full p-3 rounded-md bg-white outline-none"/>
            <textarea placeholder="Message" rows="4" className="w-full p-3 rounded-md bg-white outline-none"/>
          </div>
          <button
  className="w-full bg-gradient-to-r from-pink-400 to-pink-500
             hover:from-pink-500 hover:to-pink-600
             text-white font-extrabold py-3 rounded-full
             shadow-lg transition duration-300 hover:scale-105"
>
  Submit Enquiry 🚀
</button>
        </div>

        {/* ================= CENTER IMAGE ================= */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            src={aero}
            alt="aeroplane"
            className="w-40 md:w-52 animate-bounce"
          />
        </div>

        {/* ================= RIGHT CONTACT ================= */}
        <div>
          <h2 className="text-white text-3xl font-extrabold mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif" }}>
            CONTACT US :
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Twinkle Preschool <br />
            No. 34, Sri Nagar, Gobichettipalayam. <br />
            Behind Chakra hospital. <br />
            Ph : 95979 43221, 96777 20424
          </p>

          {/* SOCIAL */}
<div className="mt-6 space-y-4 text-white text-lg">

  <div className="flex items-center gap-3">
    <div className="bg-white p-2 rounded-full shadow">
      <FaWhatsapp className="text-green-500 text-2xl" />
    </div>
    <span>75300 62559</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white p-2 rounded-full shadow">
      <FaYoutube className="text-red-600 text-2xl" />
    </div>
    <span>Twinkle kids creatives</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white p-2 rounded-full shadow">
      <FaInstagram className="text-pink-500 text-2xl" />
    </div>
    <span>Twinkle preschool gobi</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white p-2 rounded-full shadow">
      <FaFacebook className="text-blue-600 text-2xl" />
    </div>
    <span>Twinkle preschool gobi</span>
  </div>

</div>

          {/* MAP PLACEHOLDER */}
<div className="mt-6 rounded-lg overflow-hidden shadow-md w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.369262521315!2d77.4206653745255!3d11.453250646346154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d1812068f81%3A0xfe99132eaf499166!2sTwinkle%20Pre%20School%20-%20Kids%20school!5e0!3m2!1sen!2sin!4v1775494492853!5m2!1sen!2sin"
    className="w-full h-40 md:h-52"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

      </div><div className="relative -bottom-36 w-full">
          <img src={separator} className="w-full" />

        </div>
    </div>
  );
};

export default ContactSection;