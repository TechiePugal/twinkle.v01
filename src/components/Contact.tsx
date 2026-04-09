import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import bg from "../assets/GREEN-BGM.jpg";
import rainbowRight from "../assets/RAINBOW - Copy.png";
import aero from "../assets/AERO1.png";
import YellowFlower from "../assets/YELLOW-CLOUD.png";
import flower from "../assets/blue-cloud-with-star.png";
import separator from "../assets/WHITE-SEPERATOR.png";
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

/* ── keyframes ─────────────────────────────────────────────────── */
const animStyles = `
  @keyframes rainbowPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 0.45; }
  }
  @keyframes planeFly {
    0%   { transform: translateX(0px) translateY(0px) rotate(0deg); }
    25%  { transform: translateX(10px) translateY(-8px) rotate(-3deg); }
    75%  { transform: translateX(-6px) translateY(-3px) rotate(2deg); }
    100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes flowerFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%       { transform: translateY(-8px) rotate(6deg); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes inputFadeIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes socialPop {
    0%   { opacity: 0; transform: scale(0.7) translateX(20px); }
    70%  { transform: scale(1.06) translateX(-2px); }
    100% { opacity: 1; transform: scale(1) translateX(0); }
  }
  @keyframes mapFadeIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes btnPulse {
    0%, 100% { box-shadow: 0 4px 18px rgba(236,72,153,0.3); }
    50%       { box-shadow: 0 4px 28px rgba(236,72,153,0.6); }
  }
  @keyframes successBounce {
    0%   { transform: scale(0.8); opacity: 0; }
    60%  { transform: scale(1.08); }
    100% { transform: scale(1); opacity: 1; }
  }
`;

const ContactSection = () => {
  const [form, setForm] = useState({
    parent: "",
    phone: "",
    child: "",
    age: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* scroll trigger */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_yrpx1oh",
        "template_h08yphh",
        {
          parent_name: form.parent,
          phone: form.phone,
          child_name: form.child,
          age: form.age,
          message: form.message,
        },
        "jbGL1pEpXwgd2_XGN"
      )
      .then(() => {
        setSubmitted(true);
        setForm({ parent: "", phone: "", child: "", age: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong ❌");
      });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm";

  const socials = [
    { icon: <FaWhatsapp className="text-green-500 text-2xl" />, label: "75300 62559" },
    { icon: <FaYoutube className="text-red-600 text-2xl" />, label: "Twinkle kids creatives" },
    { icon: <FaInstagram className="text-pink-500 text-2xl" />, label: "Twinkle preschool gobi" },
    { icon: <FaFacebook className="text-blue-600 text-2xl" />, label: "Twinkle preschool gobi" },
  ];

  return (
    <div id="contact" className="relative w-full overflow-hidden" ref={sectionRef}>
      <style>{animStyles}</style>

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

      {/* DECOR — rainbows pulse */}
      <img
        src={rainbowRight}
        className="hidden sm:block absolute -left-6 top-20 w-20 md:w-32 opacity-90"
        style={{ animation: "rainbowPulse 6s ease-in-out infinite" }}
      />
      <img
        src={rainbowRight}
        className="hidden sm:block absolute right-0 -bottom-28 w-24 md:w-36 opacity-90 rotate-180"
        style={{ animation: "rainbowPulse 7s ease-in-out infinite 1s" }}
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16">

        {/* MOBILE DECOR */}
        <div className="flex lg:hidden justify-center items-center gap-6 mb-6">
          <img
            src={aero}
            className="w-24 sm:w-28"
            style={{ animation: "planeFly 4s ease-in-out infinite" }}
          />
          <img
            src={YellowFlower}
            className="w-14 sm:w-16"
            style={{ animation: "floatY 5s ease-in-out infinite 0.8s" }}
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] gap-6 lg:gap-4 items-start">

          {/* ── FORM — slide in from left ── */}
          <div
            className="flex flex-col gap-2 lg:gap-3 lg:mt-6 xl:mt-10"
            style={
              visible
                ? { animation: "fadeSlideLeft 0.9s ease-out both" }
                : { opacity: 0 }
            }
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-center lg:text-left">
              ADMISSION ENQUIRY
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* inputs stagger in */}
              {[
                { name: "parent", type: "text",  placeholder: "Parents Name",  required: true },
                { name: "phone",  type: "tel",   placeholder: "Phone number",  required: true },
                { name: "child",  type: "text",  placeholder: "Child Name",    required: true },
                { name: "age",    type: "text",  placeholder: "Age of Child",  required: true },
              ].map((field, i) => (
                <input
                  key={field.name}
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={inputClass}
                  style={
                    visible
                      ? { animation: `inputFadeIn 0.6s ease-out ${0.2 + i * 0.08}s both` }
                      : { opacity: 0 }
                  }
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className={`${inputClass} resize-none`}
                style={
                  visible
                    ? { animation: "inputFadeIn 0.6s ease-out 0.56s both" }
                    : { opacity: 0 }
                }
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500
                           text-white font-extrabold py-3 rounded-full shadow-lg
                           transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  animation: submitted
                    ? "successBounce 0.5s ease-out both"
                    : "btnPulse 3s ease-in-out infinite",
                }}
              >
                {submitted ? "✅ Enquiry Sent!" : "Submit Enquiry"}
              </button>
            </form>
          </div>

          {/* ── CENTER DECOR — plane flies, flower floats ── */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-2 gap-10">
            <img
              src={aero}
              className="w-40 xl:w-48"
              style={{ animation: "planeFly 4s ease-in-out infinite" }}
            />
            <img
              src={YellowFlower}
              className="w-24 xl:w-28"
              style={{ animation: "floatY 5s ease-in-out infinite 1s" }}
            />
          </div>

          {/* ── CONTACT — slide in from right ── */}
          <div
            className="flex flex-col gap-2 lg:gap-3 relative text-center lg:text-left"
            style={
              visible
                ? { animation: "fadeSlideRight 0.9s ease-out 0.2s both" }
                : { opacity: 0 }
            }
          >
            <div className="relative flex items-center justify-center lg:justify-between">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold">
                CONTACT
              </h2>
              <img
                src={flower}
                className="w-12 sm:w-44 absolute right-2 top-0 lg:static"
                style={{ animation: "flowerFloat 5s ease-in-out infinite 0.5s" }}
              />
            </div>

            <p
              className="text-white font-serif font-bold text-sm sm:text-base md:text-lg leading-relaxed"
              style={
                visible
                  ? { animation: "fadeSlideUp 0.7s ease-out 0.4s both" }
                  : { opacity: 0 }
              }
            >
              Twinkle Preschool<br />
              No. 34, Sri Nagar, Gobichettipalayam.<br />
              Behind Chakra hospital.<br />
              Ph : 95979 43221, 96777 20424
            </p>

            {/* social icons — staggered pop */}
            <div className="flex flex-col gap-3">
              {socials.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center lg:justify-start gap-3"
                  style={
                    visible
                      ? { animation: `socialPop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.45 + i * 0.1}s both` }
                      : { opacity: 0 }
                  }
                >
                  <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                  <span className="text-white font-serif font-bold text-sm sm:text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* map — fade in last */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 mt-1 w-full max-w-md mx-auto lg:mx-0"
              style={
                visible
                  ? { animation: "mapFadeIn 0.8s ease-out 0.9s both" }
                  : { opacity: 0 }
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.3693350646113!2d77.4232403!3d11.453245399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d1812068f81%3A0xfe99132eaf499166!2sTwinkle%20Pre%20School%20-%20Kids%20school!5e0!3m2!1sen!2sin!4v1775644367981!5m2!1sen!2sin"
                className="w-full h-40 sm:h-44 md:h-48"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="relative w-full mt-2 sm:mt-6">
        <img src={separator} className="w-full" />
      </div>
    </div>
  );
};

export default ContactSection;