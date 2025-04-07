/*
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
        >
            {/!* Subtle cosmic glow *!/}
            <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                animate={{
                    background: isHovered
                        ? "radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%)"
                }}
            >
                {/!* Constellation connection points *!/}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: "2px",
                            height: "2px",
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 80 + 10}%`,
                        }}
                        animate={{
                            opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3,
                            scale: isHovered ? [1, 1.5, 1] : 1
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </motion.div>

            {/!* Portrait container *!/}
            <div className="relative z-10 w-full h-full group">
                {/!* Image with elegant transition *!/}
                <motion.img
                    src="/self.png"
                    alt="Professional Portrait"
                    className="w-full h-full object-cover rounded-full
                   border border-white/30 hover:border-cyan-400/50
                   grayscale-[85%] hover:grayscale-0
                   contrast-105 hover:contrast-110
                   transition-all duration-500 ease-out"
                    style={{
                        boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)"
                    }}
                    animate={{
                        scale: isHovered ? 1.02 : 1,
                        filter: isHovered
                            ? "brightness(1.05) drop-shadow(0 0 12px rgba(59, 130, 246, 0.2))"
                            : "brightness(1)"
                    }}
                />

                {/!* Subtle tech halo *!/}
                <motion.div
                    className="absolute -inset-4 rounded-full border-2 border-transparent pointer-events-none"
                    animate={{
                        borderColor: isHovered
                            ? "rgba(59, 130, 246, 0.3)"
                            : "rgba(255, 255, 255, 0.1)",
                        opacity: isHovered ? 1 : 0.7
                    }}
                    transition={{
                        duration: 0.5
                    }}
                />
            </div>

            {/!* Floating data points (discrete tech elements) *!/}
            <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2
                 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
            >
                {["React", "Node", "AI", "Cloud"].map((tech, i) => (
                    <motion.span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-gray-900/80 backdrop-blur-sm
                      text-cyan-300 rounded-full border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            transition: { delay: i * 0.1 + 0.3 }
                        }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HeroPic;*/
