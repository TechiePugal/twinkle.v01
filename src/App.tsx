import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/About";
import Class from "./components/Class";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-14 md:pt-3">
        <Hero />
        <Stats />
        <Class />
      </div>
    </>
  );
}
export default App;