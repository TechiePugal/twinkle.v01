import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/About";
import Class from "./components/Class";
import Whywe from "./components/whywe";
import HappyParents from "./components/HappyParents";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-14 md:pt-3">
        <Hero />
        <Stats />
        <Class />
        <Whywe />
        <HappyParents />
        <Gallery />
        <Contact />
      </div>

      {/* ✅ FLOATING BUTTONS */}
<div className="fixed bottom-4 md:bottom-12 lg:bottom-16 xl:bottom-20 right-4 z-50 flex flex-col gap-3">

        {/* WhatsApp */}
        <a
          href="https://wa.me/917530062559"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@twinklekidscreatives1438"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube"
            className="w-6 h-6"
          />
        </a>

      </div>
    </>
  );
}

export default App;