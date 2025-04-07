import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Talk-Pal Chat Application",
    description: "A real-time messaging platform with end-to-end encryption and user authentication",
    align: "right",
    image: "talkpal.jpeg",
    link: "https://github.com/JananiUpeksha/ChatApp",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"]
  },
  {
    name: "Flower Inventory System",
    description: "Inventory management solution for florists with stock tracking and order management",
    align: "left",
    image: "flower.jpeg",
    link: "https://github.com/JananiUpeksha/NodeBackend",
    technologies: ["Node.js", "Express", "MySQL", "React","Prizma-ORM","JWT"]
  },
  {
    name: "HarvestPro Crop System",
    description: "Agricultural management platform for tracking crops and predicting yields",
    align: "right",
    image: "crop.jpeg",
    link: "https://github.com/JananiUpeksha/CropSystem-Backend",
    technologies: ["Spring Boot","JWT" ,"JS","CSS", "MySQL"]
  },
  {
    name: "Retail POS System",
    description: "Point of Sale system with inventory management and sales reporting",
    align: "left",
    image: "03.png",
    link: "https://github.com/JananiUpeksha/Poss-Spring-Backend",
    technologies: ["Spring", "MySQL","JS","CSS"]
  },
  {
    name: "Retail POS System",
    description: "Point of Sale system with inventory management and sales reporting",
    align: "right",
    image: "01.png",
    link: "https://github.com/JananiUpeksha/JavaEE-Backend",
    technologies: ["JavaEE", "MySQL","JS","CSS"]
  },
  {
    name: "Library MNG System",
    description: "Library MNG System including crud operations for books and users and book transaction",
    align: "left",
    image: "02.png",
    link: "https://github.com/JananiUpeksha/BookWorm",
    technologies: ["Java", "MySQL", "Hibernate"]
  }
];

const CosmicBackground = () => {
  return (
      <div  id="project" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Nebula Layer */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-violet-900/10"
            animate={{
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity
            }}
        />

        {/* Far Stars (small, subtle) */}
        {Array.from({ length: 200 }).map((_, i) => (
            <motion.div
                key={`far-star-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${Math.random() * 1 + 0.3}px`,
                  height: `${Math.random() * 1 + 0.3}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
            />
        ))}

        {/* Milky Way Core */}
        <motion.div
            className="absolute left-1/2 top-1/2 w-[800px] h-[500px] -translate-x-1/2 -translate-y-1/2
                  bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-purple-900/20
                  blur-3xl"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 240,
              repeat: Infinity,
              ease: "linear"
            }}
        />

        {/* Spiral Arms */}
        {[1, 2, 3].map((arm) => (
            <motion.div
                key={`arm-${arm}`}
                className="absolute left-1/2 top-1/2 w-[1200px] h-[800px] -translate-x-1/2 -translate-y-1/2 origin-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 300 + arm * 120,
                  repeat: Infinity,
                  ease: "linear"
                }}
            >
              {Array.from({ length: 80 }).map((_, i) => (
                  <motion.div
                      key={`arm-star-${arm}-${i}`}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: `${Math.random() * 2 + 0.5}px`,
                        height: `${Math.random() * 2 + 0.5}px`,
                        left: `${50 + Math.cos(i/10) * 40}%`,
                        top: `${50 + Math.sin(i/10) * 30}%`,
                        opacity: 0.5
                      }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                  />
              ))}
            </motion.div>
        ))}

        {/* Closer Stars (brighter) */}
        {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
                key={`close-star-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${Math.random() * 2 + 0.5}px`,
                  height: `${Math.random() * 2 + 0.5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.7
                }}
                animate={{
                  opacity: [0.4, 0.9, 0.4],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
            />
        ))}
      </div>
  );
};

const ProjectsMain = () => {
  return (
      <section
          id="projects"
          className="relative bg-gradient-to-b from-gray-900 to-violet-900 py-20 min-h-screen overflow-hidden"
      >
        <CosmicBackground />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <motion.div
              variants={fadeIn("top", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="text-5xl font-bold text-center text-white mb-4">
              My <span className="text-violet-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Each project represents unique challenges solved with innovative solutions
            </p>
          </motion.div>

          <div className="flex flex-col gap-24 max-w-[900px] mx-auto mt-12">
            {projects.map((project, index) => (
                <SingleProject
                    key={index}
                    name={project.name}
                    description={project.description}
                    align={project.align}
                    image={project.image}
                    link={project.link}
                    technologies={project.technologies}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default ProjectsMain;