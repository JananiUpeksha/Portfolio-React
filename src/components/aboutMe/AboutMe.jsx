import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState("intro");
    const [hoveredTech, setHoveredTech] = useState(null);

    const techStack = [
        { name: "React", color: "text-blue-400" },
        { name: "Node.js", color: "text-green-400" },
        { name: "Docker", color: "text-blue-500" },
        { name: "TypeScript", color: "text-blue-600" },
        { name: "MongoDB", color: "text-green-500" },
        { name: "GraphQL", color: "text-pink-500" },
        { name: "AWS", color: "text-yellow-400", bg: "bg-yellow-900/70" },
        { name: "Python", color: "text-cyan-300", bg: "bg-cyan-900/70" },
        { name: "JavaScript", color: "text-yellow-300", bg: "bg-yellow-800/70" },
        { name: "Express", color: "text-gray-300", bg: "bg-gray-700/70" },
        { name: "Redux", color: "text-purple-400", bg: "bg-purple-900/70" },
        { name: "Next.js", color: "text-white", bg: "bg-gray-800/70" },
        { name: "Kubernetes", color: "text-blue-200", bg: "bg-blue-700/70" },
        { name: "Firebase", color: "text-orange-300", bg: "bg-orange-800/70" },
        { name: "Tailwind", color: "text-cyan-200", bg: "bg-cyan-800/70" },
        { name: "Git", color: "text-red-400", bg: "bg-red-900/70" },
        { name: "PostgreSQL", color: "text-blue-200", bg: "bg-blue-800/70" },
        { name: "Jest", color: "text-red-300", bg: "bg-red-800/70" }
    ];

    const content = {
        intro: {
            title: "The Developer",
            text: "I'm Janani Upeksha Perera, a passionate Software Engineer who crafts digital experiences with purpose. My journey in tech is driven by curiosity and a relentless pursuit of elegant solutions to complex problems.",
        },
        approach: {
            title: "My Philosophy",
            text: "I believe in code that tells a story - clean, maintainable, and human-readable. My development process balances technical excellence with user empathy, creating solutions that are as intuitive as they are powerful.",
        },
        interests: {
            title: "Beyond Code",
            text: "When not immersed in programming, I explore the intersection of technology and creativity through digital art, contribute to open-source projects, and mentor aspiring developers in my community.",
        },
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col justify-center items-center p-8 relative overflow-hidden">
            {/* Floating tech bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                            opacity: 0.2,
                        }}
                        animate={{
                            x: Math.random() * 100 - 50 + (hoveredTech === index ? 10 : 0),
                            y: Math.random() * 100 - 50 + (hoveredTech === index ? 10 : 0),
                            scale: hoveredTech === index ? 1.2 : 1,
                            opacity: hoveredTech === index ? 0.8 : 0.3,
                        }}
                        transition={{ type: "spring", damping: 10 }}
                        className={`absolute ${tech.color} text-2xl font-mono`}
                        style={{
                            top: `${15 + (index % 6) * 15}%`,
                            left: `${10 + (index % 8) * 10}%`,
                        }}
                        onMouseEnter={() => setHoveredTech(index)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        {tech.name}
                    </motion.div>
                ))}
            </div>

            {/* Enhanced "/about-me" title with glow effect */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 px-4 text-center relative z-20"
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: `
                        0 0 15px rgba(34, 211, 238, 0.8),
                        0 0 30px rgba(34, 211, 238, 0.5),
                        0 0 45px rgba(196, 181, 253, 0.3),
                        0 4px 8px rgba(0,0,0,0.8)
                    `,
                }}
            >
                /about-me
                <motion.span
                    className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20 -z-10"
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.h1>

            <div className="max-w-4xl w-full bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-gray-700 z-10">
                {/* Tab navigation */}
                <div className="flex mb-8 border-b border-gray-700">
                    {Object.keys(content).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 font-medium text-lg transition-all ${
                                activeTab === tab
                                    ? "text-cyan-300 border-b-2 border-cyan-300"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {content[tab].title}
                        </button>
                    ))}
                </div>

                {/* Content area */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
                >
                    {content[activeTab].text}
                </motion.div>

                {/* Signature */}
                <div className="flex justify-end">
                    <div className="font-cursive text-cyan-300 text-3xl">— Janani</div>
                </div>
            </div>

            {/* Interactive buttons */}
            <div className="mt-12 flex gap-6 z-10">
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg flex items-center gap-2"
                >
                    <span>Let's Connect</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.a>

                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-medium bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full shadow-lg flex items-center gap-2 hover:bg-cyan-400 hover:bg-opacity-10 transition-colors"
                >
                    <span>Explore Work</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.a>
            </div>
        </div>
    );
};

export default AboutMe;