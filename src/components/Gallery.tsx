import React, { useState } from "react";
import bg from "../assets/GREEN-BGM.jpg";
import rainbow from "../assets/RAINBOW21.png";
import rainbowCopy from "../assets/RAINBOW - Copy.png";
import flowerBlue from "../assets/blue-cloud-with-star.png";
import separator from "../assets/DWHITE-SEPERATOR.png";

/* ================= IMAGE IMPORT ================= */

const CELEBRATION = Object.values(
  import.meta.glob("../assets/CELEBRATION/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

const CLASS_ACTIVITY = Object.values(
  import.meta.glob("../assets/CLASS-ACTIVITY/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

const CO_CURRICULAR = Object.values(
  import.meta.glob("../assets/CO-CURRICULAR/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

const FIELD_TRIP = Object.values(
  import.meta.glob("../assets/FIELD-TRIP/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

const SPORTS_DAY = Object.values(
  import.meta.glob("../assets/SPORTS_DAY/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

const SPECIAL_DAYS_EVENTS = Object.values(
  import.meta.glob("../assets/SPECIAL_DAYS_EVENTS/*.{png,jpg,jpeg}", { eager: true })
).map((mod: any) => mod.default);

/* ================= DATA ================= */

type GalleryItem = {
  title: string;
  images: string[];
};

const features: GalleryItem[] = [
  { title: "CLASSROOM ACTIVITIES", images: CLASS_ACTIVITY },
  { title: "CELEBRATIONS", images: CELEBRATION },
  { title: "FIELD TRIP", images: FIELD_TRIP },
  { title: "SPECIAL DAYS & EVENTS", images: SPECIAL_DAYS_EVENTS },
  { title: "CO CURRICULAR", images: CO_CURRICULAR },
  { title: "SPORTS DAY", images: SPORTS_DAY },
];

const GallerySection = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="gallery" className="relative w-full overflow-hidden">

      {/* TOP SEPARATOR */}
      <img
        src={separator}
        alt=""
        className="absolute -top-24 left-0 w-full z-20 pointer-events-none"
      />

      {/* BACKGROUND */}
      <div
        className="relative w-full py-20 sm:py-24 md:py-28"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DECOR */}
        <img src={rainbow} alt="" className="absolute rotate-90 -left-16 -top-[5%] w-[320px]" />
        <img src={rainbowCopy} alt="" className="absolute rotate-180 -right-6 bottom-36 w-[200px]" />
        <img src={flowerBlue} alt="" className="absolute bottom-12 left-4 w-40" />

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Fredoka', sans-serif" }}>
            GALLERY
          </h1>
        </div>

        {/* GRID */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedGallery(item);
                  setCurrentIndex(0);
                }}
                className="cursor-pointer flex justify-center"
              >
                <div className="bg-white rounded-[30px] p-4 w-full max-w-[300px] shadow-md hover:scale-105 transition">

                  <div className="bg-pink-300 p-3 rounded-[20px]">
                    <div className="overflow-hidden rounded-[12px]">
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-center mt-3 text-[#2f8f83] font-extrabold"
                      style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* ================= POPUP WITH SLIDER ================= */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="bg-white rounded-3xl w-[95%] md:w-[85%] lg:w-[75%] max-h-[90vh] overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-[#2f8f83] text-lg md:text-xl font-extrabold"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                {selectedGallery.title}
              </h2>

              <button onClick={() => setSelectedGallery(null)}
                      className="text-gray-700 text-2xl">
                ✕
              </button>
            </div>

            {/* MAIN IMAGE */}
            <div className="relative flex items-center justify-center bg-gray-100 h-[300px] md:h-[400px]">

              <img
                src={selectedGallery.images[currentIndex]}
                alt=""
                className="max-h-full max-w-full object-contain rounded-xl"
              />

              {/* LEFT */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0
                      ? selectedGallery.images.length - 1
                      : currentIndex - 1
                  )
                }
                className="absolute left-4 bg-white p-2 rounded-full shadow"
              >
                ⬅️
              </button>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === selectedGallery.images.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
                className="absolute right-4 bg-white p-2 rounded-full shadow"
              >
                ➡️
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="p-4 flex gap-3 overflow-x-auto">
              {selectedGallery.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setCurrentIndex(i)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    currentIndex === i ? "border-pink-400" : "border-transparent"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default GallerySection;