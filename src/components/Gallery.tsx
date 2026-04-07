import React, { useState, useEffect, useCallback } from "react";
import bg from "../assets/GREEN-BGM.jpg";
import rainbow from "../assets/RAINBOW2.png";
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
  import.meta.glob("../assets/SPECIAL_DAYS_EVENTS/*.{png,jpg,jpeg}", {
    eager: true,
  })
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

  useEffect(() => {
    if (selectedGallery) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGallery]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? selectedGallery.images.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev === selectedGallery.images.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "Escape") {
        setSelectedGallery(null);
      }
    },
    [selectedGallery]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openGallery = (item: GalleryItem) => {
    setSelectedGallery(item);
    setCurrentIndex(0);
  };

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? selectedGallery!.images.length - 1 : prev - 1
    );

  const goNext = () =>
    setCurrentIndex((prev) =>
      prev === selectedGallery!.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div id="gallery" className="relative w-full overflow-hidden">

      {/* TOP SEPARATOR */}
      <img
        src={separator}
        alt=""
        className="absolute -top-4 sm:-top-8 md:-top-24 left-0 w-full z-20 pointer-events-none"
      />

      {/* BACKGROUND */}
      <div
        className="relative w-full py-16 sm:py-20 md:py-28"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* 🌈 DECOR — moved BEHIND */}
        <img
          src={rainbow}
          alt=""
          className="hidden sm:block absolute rotate-90 -left-16 -top-[5%] w-[220px] md:w-[320px] z-0"
        />
        <img
          src={rainbowCopy}
          alt=""
          className="hidden sm:block absolute rotate-180 -right-6 bottom-28 md:bottom-36 w-[140px] md:w-[200px] z-0"
        />
        <img
          src={flowerBlue}
          alt=""
          className="hidden sm:block absolute bottom-8 md:bottom-12 left-2 md:left-4 w-28 md:w-40 z-0"
        />

        {/* CONTENT WRAPPER — bring FRONT */}
        <div className="relative z-10">

          {/* TITLE */}
          <div className="text-center mb-8 sm:mb-10 px-4">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              GALLERY
            </h1>
          </div>

          {/* GRID */}
          <div className="px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openGallery(item)}
                  className="cursor-pointer flex justify-center"
                >
                  <div className="bg-white rounded-[24px] sm:rounded-[30px] p-3 sm:p-4 w-full shadow-md hover:scale-105 active:scale-95 transition-transform">
                    <div className="bg-pink-300 p-2 sm:p-3 rounded-[16px] sm:rounded-[20px]">
                      <div className="overflow-hidden rounded-[10px] sm:rounded-[12px]">
                        <img
                          src={item.images?.[0]}
                          alt={item.title}
                          className="w-full h-28 sm:h-36 md:h-40 object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h2 className="text-center font-serif mt-2 sm:mt-3 text-[#2f8f83] font-extrabold text-[11px] sm:text-sm md:text-base leading-tight">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL (unchanged) */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4"
          onClick={() => setSelectedGallery(null)}
        >
          <div
            className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl
                        rounded-t-3xl sm:rounded-3xl
                        max-h-[92dvh] sm:max-h-[90vh]
                        flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b">
              <h2 className="text-[#2f8f83] text-base sm:text-lg md:text-xl font-extrabold pr-4">
                {selectedGallery.title}
              </h2>
              <button onClick={() => setSelectedGallery(null)} className="text-2xl">✕</button>
            </div>

            <div className="relative flex items-center justify-center bg-gray-100"
                 style={{ height: "clamp(200px, 45vw, 420px)" }}>
              <img
                src={selectedGallery.images[currentIndex]}
                className="max-h-full max-w-full object-contain"
              />

              <button onClick={goPrev} className="absolute left-4">◀</button>
              <button onClick={goNext} className="absolute right-4">▶</button>
            </div>

            <div className="p-3 flex gap-2 overflow-x-auto">
              {selectedGallery.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrentIndex(i)}
                  className="w-16 h-16 object-cover rounded cursor-pointer"
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