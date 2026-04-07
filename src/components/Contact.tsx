import React, { useState } from "react";
import bg from "../assets/GREEN-BGM.jpg";
import rainbowRight from "../assets/RAINBOW - Copy.png";
import aero from "../assets/AERO1.png";
import YellowFlower from "../assets/YELLOW-CLOUD.png";
import flower from "../assets/blue-cloud-with-star.png";
import separator from "../assets/WHITE-SEPERATOR.png";
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    parent: "",
    phone: "",
    child: "",
    age: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm";

  return (
    <div id="contact" className="relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
        }}
      />

      {/* DECOR — LEFT RAINBOW */}
      <img
        src={rainbowRight}
        alt=""
        className="hidden sm:block absolute -left-6 top-20 w-20 md:w-32 opacity-90 pointer-events-none"
      />

      {/* DECOR — RIGHT RAINBOW bottom */}
      <img
        src={rainbowRight}
        alt=""
        className="hidden sm:block absolute right-0 -bottom-28 w-24 md:w-36 opacity-90 rotate-180 pointer-events-none"
      />

      {/* ───────────── MAIN CONTENT ───────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16">

        {/* MOBILE: aero + flower at very top */}
        <div className="flex lg:hidden justify-center items-center gap-6 mb-6">
          <img src={aero} alt="aeroplane" className="w-24 sm:w-28 animate-bounce" />
          <img src={YellowFlower} alt="" className="w-14 sm:w-16 opacity-90" />
        </div>

        {/*
          Desktop  → 3 columns: [form] [aeroplane+flower] [contact]
          Mobile   → single column stacked
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] gap-6 items-start">

          {/* ══════════ COL 1 — FORM ══════════ */}
          <div className="flex flex-col gap-3">
            {/* Title centered */}
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-center"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              ADMISSION ENQUIRY
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input name="parent" value={form.parent} onChange={handleChange}
                type="text" placeholder="Parents Name" required className={inputClass} />
              <input name="phone" value={form.phone} onChange={handleChange}
                type="tel" placeholder="Phone number" required className={inputClass} />
              <input name="child" value={form.child} onChange={handleChange}
                type="text" placeholder="Child Name" required className={inputClass} />
              <input name="age" value={form.age} onChange={handleChange}
                type="text" placeholder="Age of Child" required className={inputClass} />
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Message" rows={4}
                className={`${inputClass} resize-none`} />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500
                           hover:from-pink-500 hover:to-pink-600
                           text-white font-extrabold py-3 rounded-full
                           shadow-lg transition-all duration-300
                           hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base mt-1"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {submitted ? "✅ Enquiry Sent!" : "Submit Enquiry 🚀"}
              </button>
            </form>
          </div>

          {/* ══════════ COL 2 — AEROPLANE top-center (desktop only) ══════════ */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-10 gap-14">
            <img
              src={aero}
              alt="aeroplane"
              className="w-40 xl:w-48 animate-bounce drop-shadow-lg"
            />
            <img
              src={YellowFlower}
              alt=""
              className="w-24 xl:w-28 opacity-100"
            />
          </div>

          {/* ══════════ COL 3 — CONTACT ══════════ */}
          <div className="flex flex-col gap-3 sm:gap-4">

            {/* Title + blue flower */}
            <div className="flex items-start justify-between gap-2">
              <h2
                className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                CONTACT US :
              </h2>
              <img src={flower} alt="" className="w-12 sm:w-14 flex-shrink-0" />
            </div>

            {/* Address */}
            <p
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              Twinkle Preschool<br />
              No. 34, Sri Nagar, Gobichettipalayam.<br />
              Behind Chakra hospital.<br />
              Ph : 95979 43221, 96777 20424
            </p>

            {/* Social icons */}
            <div className="flex flex-col gap-3">
              {[
                { icon: <FaWhatsapp className="text-green-500 text-2xl" />, label: "75300 62559" },
                { icon: <FaYoutube className="text-red-600 text-2xl" />, label: "Twinkle kids creatives" },
                { icon: <FaInstagram className="text-pink-500 text-2xl" />, label: "Twinkle preschool gobi" },
                { icon: <FaFacebook className="text-blue-600 text-2xl" />, label: "Twinkle preschool gobi" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className="bg-white p-2 rounded-full shadow flex-shrink-0
                                  group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span
                    className="text-white text-sm sm:text-base md:text-lg font-semibold"
                    style={{ fontFamily: "'Comic Sans MS', cursive" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 mt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.369262521315!2d77.4206653745255!3d11.453250646346154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d1812068f81%3A0xfe99132eaf499166!2sTwinkle%20Pre%20School%20-%20Kids%20school!5e0!3m2!1sen!2sin!4v1775494492853!5m2!1sen!2sin"
                className="w-full h-40 sm:h-44 md:h-48"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER SEPARATOR — image only, no text overlay */}
      <div className="relative w-full mt-2 sm:mt-6">
        <img src={separator} className="w-full" alt="" />
      </div>

    </div>
  );
};

export default ContactSection;