import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="c-space flex min-h-screen items-start justify-center overflow-hidden">
      <HeroText />
      <ParallaxBackground />
    </section>
  );
};

export default Hero;
