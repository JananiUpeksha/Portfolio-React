import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({
                         name,
                         align,
                         image,
                         link,
                         description = "",
                         technologies = []
                       }) => {
  return (
      <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className={`flex w-full items-center gap-8 ${
              align === "left" ? "flex-row" : "flex-row-reverse"
          } justify-between flex-wrap`}
      >
        <div className={`flex-1 min-w-[300px] ${align === "left" ? "md:pr-8" : "md:pl-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">{name}</h2>

          {/* Project Description */}
          {description && (
              <p className="text-gray-300 mb-4">
                {description}
              </p>
          )}

          {/* Technology Tags */}
          {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-mono"
                    >
                {tech}
              </span>
                ))}
              </div>
          )}

          {/* Project Link */}
          <a
              href={link}
              className="inline-flex items-center gap-2 text-lg text-cyan-300 hover:text-purple-300 transition-all duration-300 group"
          >
            View Project
            <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Project Image */}
        <div className="flex-1 min-w-[300px] relative group">
          <div className="relative overflow-hidden rounded-xl border-2 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 group-hover:opacity-0 opacity-30 transition-opacity duration-500 z-10" />
            <img
                src={image}
                alt={name}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
  );
};

export default SingleProject;