import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 flex items-end">
          <img
            src="assets/coding-pov.png"
            alt="coding"
            className="absolute -top-[1rem] -right-[5rem] scale-[1.75] md:inset-y-10 md:scale-[3] lg:scale-[2] xl:left-50"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Azril Rojaan Fauzi</p>
            <p className="subtext">
              an Informatics student and Front-End Developer. I love building
              clean, interactive, and responsive websites.
            </p>
            <div className="sm:1/3 pointer-events-none absolute inset-x-0 -bottom-4 h-1/2" />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex h-full w-full items-center justify-center"
          >
            <p className="flex items-end text-5xl text-gray-500">HOBBY</p>
            <Card
              style={{ rotate: "10deg", top: "30%", left: "0%" }}
              text="CODING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "60%", left: "40%" }}
              text="GAMING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "30%", left: "70%" }}
              text="WORKOUT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "60%", left: "10%" }}
              image="assets/logos/react-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "30%", left: "70%" }}
              image="assets/logos/stardew-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "10%", left: "40%" }}
              image="assets/logos/valorant-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "80%" }}
              image="assets/logos/javascript-logo.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-full lg:w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I am based in Indonesia and available for remote opportunities.
            </p>
          </div>
          <figure className="absolute top-[30%] left-[10%] w-[30rem] lg:top-[10%] lg:left-[40%]">
            <img src="assets/logos/world-logo.png" alt="world" />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="headtext text-center">
              Wanna start a project with me?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
