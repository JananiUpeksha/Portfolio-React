import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const SpiralGalaxy = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] rotate-45"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
        >
            {/* Galaxy Core */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 blur-md"
                animate={{
                    scale: isHovered ? [1, 1.05, 1] : 1,
                    opacity: isHovered ? 0.9 : 0.7
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity
                }}
            />

            {/* Spiral Arms - Clockwise */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 origin-center"
                animate={{
                    rotate: isHovered ? 360 : 0
                }}
                transition={{
                    duration: 240,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {Array.from({ length: 200 }).map((_, i) => {
                    const angle = i / 15;
                    const distance = 20 + (i % 40);
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    const size = Math.random() * 3 + 1;

                    return (
                        <motion.div
                            key={`cw-star-${i}`}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${50 + x}%`,
                                top: `${50 + y}%`,
                                opacity: 0.8
                            }}
                            animate={{
                                opacity: [0.4, 0.9, 0.4],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: i * 0.02
                            }}
                        />
                    );
                })}
            </motion.div>

            {/* Spiral Arms - Counter-Clockwise */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 origin-center"
                animate={{
                    rotate: isHovered ? -360 : 0
                }}
                transition={{
                    duration: 300,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {Array.from({ length: 200 }).map((_, i) => {
                    const angle = i / 15;
                    const distance = 30 + (i % 50);
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    const size = Math.random() * 3 + 1;

                    return (
                        <motion.div
                            key={`ccw-star-${i}`}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${50 + x}%`,
                                top: `${50 + y}%`,
                                opacity: 0.8
                            }}
                            animate={{
                                opacity: [0.4, 0.9, 0.4],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: i * 0.02
                            }}
                        />
                    );
                })}
            </motion.div>

            {/* Dust Clouds */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2
                          bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-xl"
                animate={{
                    rotate: isHovered ? 2 : 0,
                    opacity: isHovered ? 0.4 : 0.3
                }}
            />

            {/* Interactive Glow */}
            <motion.div
                className="absolute -inset-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10
                          rounded-full blur-xl pointer-events-none"
                animate={{
                    opacity: isHovered ? 0.5 : 0.3,
                    scale: isHovered ? 1.05 : 1
                }}
            />
        </motion.div>
    );
};

export default SpiralGalaxy;