import useTypeEffect from "../hooks/useTypeEffect";
import { motion } from "motion/react";

const HeroText = () => {
  const { currentText } = useTypeEffect();
  const variantsAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 flex h-screen flex-col items-center justify-center text-center">
      <motion.h1
        variants={variantsAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="text-4xl font-medium"
      >
        Hi, I'm Azril
      </motion.h1>
      <div className="flex flex-col items-center">
        <motion.p
          className="text-4xl font-bold text-neutral-300 md:text-5xl"
          variants={variantsAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Web Developer
        </motion.p>
        <motion.div
          variants={variantsAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <p className="text-2xl font-black text-white md:text-4xl">
            {currentText}
          </p>
        </motion.div>
        <motion.p
          variants={variantsAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
          className="mt-2 text-2xl font-medium text-neutral-400"
        >
          Crafting Modern & Creative Web Solutions
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
