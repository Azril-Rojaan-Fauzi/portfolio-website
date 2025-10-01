import Navigation from "./section/Navigation";
import Hero from "./section/Hero";
import About from "./section/About";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <About />
      <section className="min-h-screen"></section>
    </div>
  );
}

export default App;
