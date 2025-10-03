import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../data/projects";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);
  const springX = useSpring(imageX, { damping: 10, stiffness: 50 });
  const springY = useSpring(imageY, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    imageX.set(e.clientX + 20);
    imageY.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="c-space relative mt-20 min-h-fit md:mt-30"
      id="projects"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          src={preview}
          alt=""
          className="pointer-events-none fixed top-0 left-0 z-50 h-56 w-80 object-cover shadow-lg"
          style={{ x: springX, y: springY }}
        />
      )}
      <div className="flex-wrap items-center justify-center space-y-14 py-10 sm:flex sm:space-y-0">
        <p className="text-heading">Coming Soon</p>
      </div>
    </section>
  );
};

export default Projects;
