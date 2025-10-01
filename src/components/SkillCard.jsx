import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SkillCard = () => {
  const [skillText, setSkillText] = useState("Skills");
  const icons = ["Html", "Css", "Javascript", "React", "Firebase", "Tailwind"];
  return (
    <div className="grid-default-color grid-5">
      <div className="flex h-full w-full flex-col gap-8">
        <div className="z-10 flex w-1/2 flex-col">
          <p className="mt-2 mb-2 text-xl md:text-3xl">Tech Stack</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={skillText}
              className="mt-4 text-2xl md:text-4xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {skillText}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto overflow-y-hidden">
          {icons.map((icon) => (
            <div className="icon-group" key={icon}>
              <img
                src={`assets/logos/${icon}-logo.png`}
                alt={icon}
                onMouseEnter={() => setSkillText(icon)}
                onMouseLeave={() => setSkillText("Skills")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
