import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const PopupForm = () => {
  const [show, setShow] = useState(true);

  const [form, setForm] = useState({
    parent: "",
    phone: "",
    child: "",
    age: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yrpx1oh", // 🔁 replace
        "template_h08yphh", // 🔁 replace
        {
          parent_name: form.parent,
          phone: form.phone,
          child_name: form.child,
          age: form.age,
          message: form.message,
        },
        "jbGL1pEpXwgd2_XGN" // 🔁 replace
      )
      .then(() => {
        setSubmitted(true);
        setForm({
          parent: "",
          phone: "",
          child: "",
          age: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
          setShow(false); // auto close after submit
        }, 2000);
      })
      .catch(() => alert("Something went wrong ❌"));
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 mt-14">

      {/* MODAL */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-5 relative animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* HEADING */}
        <h2 className="text-center text-lg sm:text-xl font-extrabold text-pink-500 mb-2">
          🌟 Grow Your Child with Us!
        </h2>

        <p className="text-center text-sm text-gray-500 mb-4">
          Give your child a bright and joyful learning journey ✨
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            name="parent"
            value={form.parent}
            onChange={handleChange}
            placeholder="Parent Name"
            required
            className="input"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="input"
          />

          <input
            name="child"
            value={form.child}
            onChange={handleChange}
            placeholder="Child Name"
            required
            className="input"
          />

          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Child Age"
            required
            className="input"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={3}
            className="input resize-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-full font-bold shadow-md hover:scale-105 transition"
          >
            {submitted ? "✅ Sent!" : "Enroll Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;