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
    </>
  );
}
export default App;