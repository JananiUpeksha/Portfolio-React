import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const CosmicFlow = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
        >
            {/* Spiral Galaxy Base */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                animate={{
                    rotate: isHovered ? 5 : 0,
                    opacity: isHovered ? 0.9 : 0.7
                }}
                transition={{
                    rotate: { type: "spring", stiffness: 30 }
                }}
            >
                {/* Galaxy Core */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2
                              rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 blur-md"
                    animate={{
                        scale: isHovered ? [1, 1.05, 1] : 1
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity
                    }}
                />

                {/* Spiral Arms (asymmetric) */}
                {[1, 2].map((arm) => (
                    <motion.div
                        key={arm}
                        className={`absolute left-1/2 top-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 
                                  origin-center ${arm === 2 ? 'scale-x-[-1]' : ''}`}
                        animate={{
                            rotate: isHovered ? 360 : 0
                        }}
                        transition={{
                            duration: 240 + arm * 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Spiral Arm Stars */}
                        {Array.from({ length: 80 }).map((_, i) => {
                            const angle = i / 12;
                            const distance = 50 + (i % 20);
                            const x = Math.cos(angle) * distance * (arm === 2 ? 0.9 : 1);
                            const y = Math.sin(angle) * distance * (arm === 2 ? 1.1 : 1);

                            return (
                                <motion.div
                                    key={`arm-${arm}-star-${i}`}
                                    className="absolute bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 3 + 1}px`,
                                        height: `${Math.random() * 3 + 1}px`,
                                        left: `${50 + x}%`,
                                        top: `${50 + y}%`,
                                        opacity: 0.6
                                    }}
                                    animate={{
                                        opacity: [0.4, 0.8, 0.4],
                                        scale: [1, 1.3, 1]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 4,
                                        repeat: Infinity,
                                        delay: i * 0.05
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                ))}

                {/* Dust Clouds (asymmetric) */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-[500px] h-[350px] -translate-x-1/2 -translate-y-1/2
                              bg-gradient-to-br from-purple-900/10 to-blue-900/10 blur-xl"
                    style={{
                        clipPath: 'path("M250,175 q-100,-80 -200,0 q100,80 200,0 z")'
                    }}
                    animate={{
                        rotate: isHovered ? 2 : 0,
                        opacity: isHovered ? 0.4 : 0.3
                    }}
                />
            </motion.div>

            {/* Solar System */}
            <div className="relative z-10 w-full h-full">
                {/* Sun */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2
                              rounded-full bg-gradient-to-br from-yellow-400 to-orange-500
                              shadow-lg shadow-yellow-500/30"
                    animate={{
                        scale: isHovered ? [1, 1.05, 1] : 1,
                        boxShadow: isHovered
                            ? "0 0 50px rgba(255, 200, 50, 0.7)"
                            : "0 0 30px rgba(255, 200, 50, 0.5)"
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity
                    }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-yellow-300/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 0.3, 0.6]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity
                        }}
                    />
                </motion.div>

                {/* Planets (sample - Earth) */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2
                              rounded-full bg-gradient-to-br from-blue-400 to-green-400 shadow-md"
                    style={{
                        x: "120px",
                        y: 0
                    }}
                    animate={{
                        rotate: 360,
                        x: "120px * Math.cos(0.5)",
                        y: "120px * Math.sin(0.5)"
                    }}
                    transition={{
                        x: { duration: 60, repeat: Infinity, ease: "linear" },
                        y: { duration: 60, repeat: Infinity, ease: "linear" },
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                    }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border border-white/20"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
            </div>

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

export default CosmicFlow;