import { Fragment, useRef, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const skills = [
    { name: "Communication", emoji: "💬", color: "#3B82F6" },
    { name: "Problem Solving", emoji: "🧩", color: "#10B981" },
    { name: "Teamwork", emoji: "👥", color: "#F59E0B" },
    { name: "Adaptability", emoji: "🔄", color: "#8B5CF6" },
    { name: "Leadership", emoji: "🌟", color: "#EC4899" },
    { name: "Creativity", emoji: "🎨", color: "#6366F1" },
    { name: "Time Management", emoji: "⏱️", color: "#F97316" },
    { name: "Collaboration", emoji: "🤝", color: "#06B6D4" },
    { name: "Critical Thinking", emoji: "🧠", color: "#84CC16" },
    { name: "Empathy", emoji: "❤️", color: "#EF4444" },
    { name: "Conflict Resolution", emoji: "⚖️", color: "#22C55E" },
];

const SoftSkills = () => {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerWidth = container.scrollWidth;
        const contentWidth = container.firstChild.scrollWidth;

        // Double the content to create seamless loop
        const animation = controls.start({
            x: -contentWidth,
            transition: {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        });

        // Reset position when halfway through
        const checkPosition = () => {
            const currentX = parseInt(container.style.transform.split('(')[1]?.split('px')[0] || '0');
            if (currentX <= -contentWidth) {
                controls.set({ x: 0 });
            }
        };

        const interval = setInterval(checkPosition, 1000/60); // 60fps check

        return () => clearInterval(interval);
    }, [controls]);

    return (
        <div className="relative w-full overflow-hidden py-12">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-10"
                        style={{
                            background: `conic-gradient(from 90deg, #8B5CF6, #EC4899, #F59E0B, #8B5CF6)`,
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Main scrolling skills - now with doubled content */}
            <div className="relative z-10 overflow-hidden">
                <motion.div
                    ref={containerRef}
                    className="flex"
                    animate={controls}
                    style={{ whiteSpace: "nowrap" }}
                >
                    <div className="flex flex-nowrap gap-12 py-4">
                        {[...skills, ...skills].map((skill, idx) => (
                            <motion.div
                                key={`${skill.name}-${idx}`}
                                className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm bg-white/10"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: `${skill.color}20`,
                                    boxShadow: `0 0 20px ${skill.color}80`
                                }}
                                onHoverStart={() => setHoveredSkill(skill)}
                                onHoverEnd={() => setHoveredSkill(null)}
                            >
                <span
                    className="text-3xl mr-3"
                    style={{ filter: `drop-shadow(0 0 4px ${skill.color})` }}
                >
                  {skill.emoji}
                </span>
                                <span className="text-white font-bold text-lg uppercase tracking-wider">
                  {skill.name}
                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Hover effect */}
            <AnimatePresence>
                {hoveredSkill && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div
                            className="text-8xl"
                            style={{
                                color: hoveredSkill.color,
                                filter: `drop-shadow(0 0 12px ${hoveredSkill.color})`
                            }}
                        >
                            {hoveredSkill.emoji}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SoftSkills;