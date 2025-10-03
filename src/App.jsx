import Navigation from "./section/Navigation";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";

function App() {
  return (
    <div className="">
      <Navigation />
      <div className="container mx-auto max-w-7xl">
        <Hero />
        <About />
        <Projects />
        {/* <Experiences /> */}
        <section className="min-h-screen"></section>
      </div>
    </div>
  );
}

export default App;
