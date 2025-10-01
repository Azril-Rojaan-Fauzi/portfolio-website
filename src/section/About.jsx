import AboutCard from "../components/AboutCard";
import HobbyCard from "../components/HobbyCard";
import TimeZoneCard from "../components/TimeZoneCard";
import ContactCard from "../components/ContactCard";
import SkillCard from "../components/SkillCard";

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading" id="about">
        About Me
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <AboutCard />

        {/* Grid 2 */}
        <HobbyCard />

        {/* Grid 3 */}
        <TimeZoneCard />

        {/* Grid 4 */}
        <ContactCard />

        {/* Grid 5 */}
        <SkillCard />
      </div>
    </section>
  );
};

export default About;
