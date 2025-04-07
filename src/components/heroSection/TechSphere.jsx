import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";
import { FiCpu, FiCode, FiServer, FiHexagon } from "react-icons/fi";

const TechSphere = () => {
    const [isHovered, setIsHovered] = useState(false);
    const techElements = [
        { icon: <FiCpu size={24} />, color: "text-cyan-400", size: "w-16 h-16" },
        { icon: <FiCode size={24} />, color: "text-purple-400", size: "w-14 h-14" },
        { icon: <FiServer size={24} />, color: "text-emerald-400", size: "w-20 h-20" },
        { icon: <FiHexagon size={24} />, color: "text-amber-400", size: "w-12 h-12" }
    ];

    return (
        <motion.div
            className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
        >
            {/* Core tech sphere */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/20
                  bg-gradient-to-br from-gray-900/80 to-gray-800/90
                  backdrop-blur-sm"
                animate={{
                    scale: isHovered ? 1.03 : 1,
                    boxShadow: isHovered
                        ? "0 0 40px rgba(59, 130, 246, 0.3)"
                        : "0 0 20px rgba(59, 130, 246, 0.1)"
                }}
            >
                {/* Hexagonal grid pattern */}
                <div className="absolute inset-0 opacity-30">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern
                            id="hexagons"
                            width="50"
                            height="43.4"
                            patternUnits="userSpaceOnUse"
                            patternTransform="scale(8)"
                        >
                            <polygon
                                points="25,0 50,14.4 50,43.1 25,57.5 0,43.1 0,14.4"
                                fill="none"
                                stroke="white"
                                strokeWidth="0.5"
                            />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                    </svg>
                </div>

                {/* Pulsing core energy */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-cyan-500/10 backdrop-blur-sm"
                    animate={{
                        width: isHovered ? ["60%", "70%", "60%"] : "50%",
                        height: isHovered ? ["60%", "70%", "60%"] : "50%",
                        opacity: isHovered ? [0.3, 0.5, 0.3] : 0.2
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity
                    }}
                />
            </motion.div>

            {/* Orbiting tech elements */}
            {techElements.map((tech, i) => {
                const angle = i * Math.PI/2;
                const radius = isHovered ? 120 : 100;
                const endX = 50 + Math.cos(angle) * 40;
                const endY = 50 + Math.sin(angle) * 40;

                return (
                    <motion.div
                        key={i}
                        className={`absolute ${tech.size} ${tech.color} flex items-center justify-center
                       rounded-full bg-black/20 border border-white/10 backdrop-blur-sm`}
                        initial={{
                            x: "50%",
                            y: "50%",
                            opacity: 0
                        }}
                        animate={{
                            x: `calc(50% + ${Math.cos(angle) * radius}px)`,
                            y: `calc(50% + ${Math.sin(angle) * radius}px)`,
                            opacity: 1,
                            rotate: isHovered ? 360 : 0
                        }}
                        transition={{
                            x: { type: "spring", stiffness: 50 },
                            y: { type: "spring", stiffness: 50 },
                            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 0.5 }
                        }}
                    >
                        {tech.icon}
                        {/* Connecting lines - now with proper initial values */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <motion.line
                                x1="50"
                                y1="50"
                                x2={isHovered ? endX : 50}
                                y2={isHovered ? endY : 50}
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeDasharray={isHovered ? "1, 0" : "0, 1"}
                                initial={{
                                    x2: 50,
                                    y2: 50,
                                    strokeDasharray: "0, 1"
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2
                                }}
                            />
                        </svg>
                    </motion.div>
                );
            })}

            {/* Data stream particles */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0
                    }}
                    animate={{
                        opacity: isHovered ? [0, 0.8, 0] : 0,
                        x: `${Math.random() * 100 - 50}px`,
                        y: `${Math.random() * 100 - 50}px`
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 5,
                        delay: Math.random() * 0.5
                    }}
                />
            ))}
        </motion.div>
    );
};

export default TechSphere;