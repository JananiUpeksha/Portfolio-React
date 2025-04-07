import HeroText from "./HeroText";
import { motion } from "framer-motion";
import React from "react";
import NavbarMain from "../Navbar/NavbarMain.jsx";
import SpiralGalaxy from "./SpiralGalaxy.jsx";
import { useNavigate } from "react-router-dom";

const HeroMain = () => {
    const navigate = useNavigate();

    const handleViewWorkClick = () => {
        navigate("/home/janani/WebstormProjects/Portfolio/src/components/projectsSection/ProjectsMain.jsx");
    };

    return (
        <div  className="relative">
            {/* Navbar positioned absolutely at the top */}
            <div className="absolute top-0 left-0 w-full z-50">
                <NavbarMain />
            </div>

            {/* Hero section with adjusted padding */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
                {/* Enhanced starry night background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* More visible twinkling stars */}
                    {Array.from({ length: 100 }).map((_, i) => {
                        const size = Math.random() * 1.5 + 0.5;
                        const opacity = Math.random() * 0.5 + 0.3;
                        return (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    opacity: opacity
                                }}
                                animate={{
                                    opacity: [opacity * 0.7, opacity * 1.3, opacity * 0.7],
                                    scale: [1, 1.5, 1]
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        );
                    })}

                    {/* More prominent shooting stars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={`shooting-${i}`}
                            className="absolute bg-gradient-to-r from-transparent via-white to-transparent h-px"
                            style={{
                                width: `${100 + Math.random() * 100}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 90 - 45}deg)`,
                                opacity: 0
                            }}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                x: [`${Math.random() * 400 - 200}px`, `${Math.random() * 400 + 200}px`],
                                y: [`${Math.random() * 400 - 200}px`, `${Math.random() * 400 + 200}px`]
                            }}
                            transition={{
                                duration: 1 + Math.random() * 2,
                                repeat: Infinity,
                                repeatDelay: 5 + Math.random() * 15,
                                ease: "linear"
                            }}
                        />
                    ))}

                    {/* Floating tech circles with more visibility */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-xl"
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Content container */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-24 relative z-10">
                    <HeroText onViewWorkClick={handleViewWorkClick} />
                    <SpiralGalaxy />
                </div>

                {/* More visible scan line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"
                    initial={{ y: 0 }}
                    animate={{ y: "100vh" }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </section>
        </div>
    );
};

export default HeroMain;