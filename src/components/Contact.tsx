import React, { useState, ChangeEvent, FormEvent } from "react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

      {/* DECOR */}
      <img
        src={rainbowRight}
        className="hidden sm:block absolute -left-6 top-20 w-20 md:w-32 opacity-90"
      />
      <img
        src={rainbowRight}
        className="hidden sm:block absolute right-0 -bottom-28 w-24 md:w-36 opacity-90 rotate-180"
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16">

        {/* MOBILE TOP DECOR */}
        <div className="flex lg:hidden justify-center items-center gap-6 mb-6">
          <img src={aero} className="w-24 sm:w-28" />
          <img src={YellowFlower} className="w-14 sm:w-16" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] gap-6 lg:gap-4 items-start">

          {/* FORM */}
         <div className="flex flex-col gap-2 lg:gap-3 lg:mt-6 xl:mt-10">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-center lg:text-left">
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
                           text-white font-extrabold py-3 rounded-full shadow-lg
                           transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {submitted ? "✅ Enquiry Sent!" : "Submit Enquiry "}
              </button>
            </form>
          </div>

          {/* CENTER DECOR */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-2 gap-10">
            <img src={aero} className="w-40 xl:w-48" />
            <img src={YellowFlower} className="w-24 xl:w-28" />
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-2 lg:gap-3 relative text-center lg:text-left">

            {/* HEADER */}
            <div className="relative flex items-center justify-center lg:justify-between">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold lg:text-left">
                CONTACT
              </h2>

              <img
                src={flower}
                className="w-12 sm:w-44 absolute right-2 top-0 lg:static"
              />
            </div>

            {/* ADDRESS */}
            <p className="text-white font-serif font-bold text-sm sm:text-base md:text-lg leading-relaxed">
              Twinkle Preschool<br />
              No. 34, Sri Nagar, Gobichettipalayam.<br />
              Behind Chakra hospital.<br />
              Ph : 95979 43221, 96777 20424
            </p>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3">
              {[
                { icon: <FaWhatsapp className="text-green-500 text-2xl" />, label: "75300 62559" },
                { icon: <FaYoutube className="text-red-600 text-2xl" />, label: "Twinkle kids creatives" },
                { icon: <FaInstagram className="text-pink-500 text-2xl" />, label: "Twinkle preschool gobi" },
                { icon: <FaFacebook className="text-blue-600 text-2xl" />, label: "Twinkle preschool gobi" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                  <span className="text-white font-serif font-bold text-sm sm:text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 mt-1 w-full max-w-md mx-auto lg:mx-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="w-full h-40 sm:h-44 md:h-48"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM SEPARATOR */}
      <div className="relative w-full mt-2 sm:mt-6">
        <img src={separator} className="w-full" />
      </div>

    </div>
  );
};

export default ContactSection;