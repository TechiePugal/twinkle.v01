const GalleryModal = ({ images, onClose }) => {
  const [activeImg, setActiveImg] = React.useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      {/* MAIN MODAL */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl w-[95%] md:w-[85%] lg:w-[75%] max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <h2 className="text-white text-lg font-bold tracking-wide">
            Gallery Preview
          </h2>

          <button
            onClick={onClose}
            className="text-white text-2xl hover:rotate-90 transition duration-300"
          >
            ✕
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="p-4 overflow-y-auto max-h-[75vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImg(img)}
              className="overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={img}
                alt=""
                className="w-full h-40 object-cover rounded-xl
                           group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>

      {/* FULL IMAGE VIEW */}
      {activeImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]">

          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <img
            src={activeImg}
            alt=""
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};