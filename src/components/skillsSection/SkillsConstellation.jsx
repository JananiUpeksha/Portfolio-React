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
  Interest: [
    { name: "Docker", x: 15, y: 30, size: 1.6, img: "Docker.png" },
    { name: "Kubernetes", x: 85, y: 30, size: 1.4, img: "Kubernetes.png" },
    { name: "AWS", x: 50, y: 15, size: 1.8, img: "aws.png" },
    { name: "C#", x: 20, y: 70, size: 1.3, img: "csharp.png" },
    { name: ".Net", x: 80, y: 70, size: 1.5, img: "dotnet.png" },
    { name: "Angular", x: 35, y: 50, size: 1.7, img: "angular.png" },
    { name: "Next.js", x: 65, y: 50, size: 1.7, img: "nextjs.png" }
  ],
  Database: [
    { name: "MySQL", x: 35, y: 50, size: 1.3, img: "MySQL.png" },
    { name: "MongoDB", x: 75, y: 30, size: 1.5, img: "MongoDB.png" },
    { name: "Firebase", x: 55, y: 80, size: 1.4, img: "Firebase.png" }
  ],
  Backend: [
    { name: "Node.js", x: 20, y: 30, size: 1.6, img: "Node.js.png" },
    { name: "Express.js", x: 40, y: 70, size: 1.4, img: "express.png" },
    { name: "Spring Boot", x: 70, y: 40, size: 1.5, img: "springboot.png" },
  ],
  Tools: [
    { name: "GitHub", x: 15, y: 20, size: 1.7, img: "Github.png" },
    { name: "VS Code", x: 85, y: 20, size: 1.9, img: "vs.png" },
    { name: "IntelliJ IDEA", x: 25, y: 50, size: 1.6, img: "intellij.png" },
    { name: "Figma", x: 15, y: 80, size: 1.5, img: "Figma.png" },
    { name: "Linux", x: 50, y: 70, size: 1.4, img: "linux.png" },
    { name: "Windows", x: 85, y: 80, size: 1.3, img: "windows.png" },
    { name: "Postman", x: 40, y: 30, size: 1.4, img: "postman.png" },
    { name: "WebStorm", x: 60, y: 30, size: 1.6, img: "ws.png" }
  ]

};

// Rest of your component code remains the same...

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
          <h1 className="text-4xl md:text-5xl font-medium text-center text-[#f9f3d2] mb-12 pt-8
                tracking-tight bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400
                animate-text-shimmer bg-[length:200%_100%]"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                letterSpacing: '-0.05em',
                lineHeight: '1.1'
              }}>
    <span className="drop-shadow-[0_5px_5px_rgba(255,215,0,0.3)]">
        My Tech Constellation
    </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
            {Object.keys(techStars).map((category) => (
                <motion.button
                    key={category}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide 
        ${currentCategory === category
                        ? "text-white"
                        : "text-[#b4b4b4] hover:text-white"
                    } overflow-hidden z-10 transition-all duration-300`}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 12px rgba(122, 77, 255, 0.3)"
                    }}
                    whileTap={{scale: 0.98}}
                    onClick={() => {
                      setCurrentCategory(category);
                      setSelectedTech(null);
                    }}
                    initial={false}
                >
                  {currentCategory === category && (
                      <motion.span
                          layoutId="activeCategory"
                          className="absolute inset-0 bg-gradient-to-r from-[#7a4dff] to-[#6a0dad] rounded-full z-[-1]"
                          transition={{type: "spring", bounce: 0.3, duration: 0.6}}
                      />
                  )}
                  {currentCategory !== category && (
                      <motion.span
                          className="absolute inset-0 bg-[#2a2a2a] rounded-full z-[-1] border border-[#3a3a3a]"
                          whileHover={{backgroundColor: "#3a3a3a"}}
                      />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
        {category}
                    {currentCategory === category && (
                        <motion.span
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{type: "spring", delay: 0.2}}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    )}
      </span>
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