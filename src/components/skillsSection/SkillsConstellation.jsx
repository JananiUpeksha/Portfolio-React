import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStars = {
  Languages: [
    { name: "Java", x: 15, y: 30, size: 1.2, img: "java.png" },
    { name: "JavaScript", x: 25, y: 70, size: 1.5, img: "js.png" },
    { name: "TypeScript", x: 75, y: 40, size: 1.3, img: "ts.png" },
    { name: "Python", x: 85, y: 80, size: 1.4, img: "python.png" }
  ],
  WebDevelopment: [
    { name: "HTML", x: 10, y: 50, size: 1.6, img: "HTML.png" },
    { name: "CSS", x: 30, y: 20, size: 1.5, img: "CSS.png" },
    { name: "React", x: 70, y: 60, size: 1.8, img: "React.png" },
    { name: "Node.js", x: 50, y: 80, size: 1.4, img: "Node.js.png" }
  ],
  Frontend: [
    { name: "React", x: 20, y: 40, size: 1.7, img: "img.png" },
    { name: "Vue", x: 60, y: 30, size: 1.3, img: "https://via.placeholder.com/100" },
    { name: "Angular", x: 80, y: 70, size: 1.5, img: "https://via.placeholder.com/100" }
  ],
  DevOps: [
    { name: "Docker", x: 25, y: 60, size: 1.6, img: "Docker.png" },
    { name: "Kubernetes", x: 65, y: 40, size: 1.4, img: "Kubernatees.png" },
    { name: "AWS", x: 45, y: 20, size: 1.8, img: "CloudComputing.png" }
  ],
  Database: [
    { name: "MySQL", x: 35, y: 50, size: 1.3, img: "MySQL.png" },
    { name: "MongoDB", x: 75, y: 30, size: 1.5, img: "MongoDB.png" },
    { name: "Firebase", x: 55, y: 80, size: 1.4, img: "Firebase.png" }
  ],
  Tools: [
    { name: "GitHub", x: 15, y: 70, size: 1.7, img: "Github.png" },
    { name: "VS Code", x: 85, y: 50, size: 1.9, img: "VScode.png" },
    { name: "Figma", x: 40, y: 30, size: 1.5, img: "Figma.png" }
  ]
};

const SkillsConstellation = () => {
  const [currentCategory, setCurrentCategory] = useState("Languages");
  const [selectedTech, setSelectedTech] = useState(null);

  const gradientStyle = {
    background: `linear-gradient(135deg, #2a0a3a 0%, #1a0526 50%, #0d0213 100%)`,
    minHeight: '80vh',
    padding: '1.5rem'
  };

  const calculateLineEnd = (tech, partner, techPos) => {
    const dx = partner.x - tech.x;
    const dy = partner.y - tech.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const ratio = 2.5 / (distance * 0.8);

    if (techPos === 'start') {
      return {
        x: tech.x + dx * ratio,
        y: tech.y + dy * ratio
      };
    } else {
      return {
        x: partner.x - dx * ratio,
        y: partner.y - dy * ratio
      };
    }
  };

  return (
      <div style={gradientStyle}>
        <div className="relative mx-auto" style={{width: '80vw', height: '60vh'}}>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#f9f3d2] mb-10 pt-6"
              style={{fontFamily: "'Josefin Sans', sans-serif", textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
            My Tech Constellation
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {Object.keys(techStars).map(category => (
                <motion.button
                    key={category}
                    className={`px-4 py-1 rounded-full text-base font-medium ${
                        currentCategory === category
                            ? "bg-[#6a0dad] text-[#f9f3d2]"
                            : "bg-[#1e1e1e] text-[#978580]"
                    }`}
                    whileHover={{scale: 1.05, backgroundColor: "#7a4dff"}}
                    whileTap={{scale: 0.95}}
                    onClick={() => {
                      setCurrentCategory(category);
                      setSelectedTech(null);
                    }}
                >
                  {category}
                </motion.button>
            ))}
          </div>

          <div className="relative w-full" style={{height: 'calc(100% - 120px)'}}>
            <svg className="absolute w-full h-full" style={{zIndex: 20}}>
              {techStars[currentCategory].map((tech, i) => (
                  techStars[currentCategory].slice(i + 1).map(partner => {
                    const start = calculateLineEnd(tech, partner, 'start');
                    const end = calculateLineEnd(tech, partner, 'end');
                    return (
                        <line
                            key={`${tech.name}-${partner.name}`}
                            x1={`${start.x}%`}
                            y1={`${start.y}%`}
                            x2={`${end.x}%`}
                            y2={`${end.y}%`}
                            stroke="rgba(179, 136, 235, 0.4)"
                            strokeWidth="1.5"
                        />
                    );
                  })
              ))}
            </svg>

            {techStars[currentCategory].map(tech => (
                <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${tech.x}%`,
                      top: `${tech.y}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 30
                    }}
                    initial={{scale: 0}}
                    animate={{
                      scale: selectedTech === tech.name ? tech.size * 1.3 : tech.size,
                      filter: selectedTech === tech.name
                          ? `drop-shadow(0 0 15px rgba(179, 136, 235, 0.8))`
                          : `drop-shadow(0 0 6px rgba(179, 136, 235, 0.5))`
                    }}
                    transition={{type: "spring", stiffness: 300}}
                    onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)}
                >
                  <div className="relative">
                    <motion.img
                        src={tech.img}
                        alt={tech.name}
                        className="rounded-full object-cover"
                        style={{
                          width: '4.5rem',
                          height: '4.5rem'
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#1e1e1e] text-[#b388eb] px-2 py-0.5 rounded-full text-xs whitespace-nowrap"
                        animate={{
                          scale: selectedTech === tech.name ? 1.1 : 1,
                          opacity: selectedTech === tech.name ? 1 : 0.8
                        }}
                    >
                      {tech.name}
                    </motion.div>
                  </div>
                </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedTech && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#6a0dad] text-[#f9f3d2] px-4 py-2 rounded-full shadow-lg z-50 text-sm"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 20}}
                >
                  {selectedTech}
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
  );
};

export default SkillsConstellation;