import { SquareArrowOutUpRight, X } from "lucide-react";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden backdrop-blur-sm">
      <motion.div
        className="from-midnight to-navy relative max-w-2xl border border-white/10 bg-gradient-to-l shadow-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="bg-midnight absolute top-5 right-5 cursor-pointer p-2 hover:bg-gray-500"
        >
          <X className="h-6 w-6" />
        </button>
        <img src={image} alt={title} className="w-full" />
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold text-white md:text-2xl">
            {title}
          </h5>
          <p className="mb-3 text-sm text-neutral-400 md:font-normal">
            {description}
          </p>
          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 text-sm font-normal text-neutral-400"
            >
              {subDesc}
            </p>
          ))}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  src={tag.path}
                  key={tag.id}
                  alt=""
                  className="hover-animation size-6 w-full md:size-9"
                />
              ))}
            </div>
            <a
              className="hover-animation inline-flex cursor-pointer items-center gap-1 font-medium"
              href={href}
              target="_blank"
            >
              View Project
              <SquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
