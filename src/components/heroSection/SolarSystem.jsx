import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const SolarSystem = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Planet data: name, size, color, orbit radius, orbit duration
    const planets = [
        { name: "Mercury", size: 8, color: "bg-gray-400", orbit: 60, duration: 20 },
        { name: "Venus", size: 12, color: "bg-yellow-200", orbit: 90, duration: 40 },
        { name: "Earth", size: 14, color: "bg-blue-400", orbit: 120, duration: 60 },
        { name: "Mars", size: 10, color: "bg-red-400", orbit: 150, duration: 80 },
        { name: "Jupiter", size: 24, color: "bg-amber-300", orbit: 200, duration: 120 },
        { name: "Saturn", size: 20, color: "bg-yellow-100", orbit: 250, duration: 160, rings: true },
        { name: "Uranus", size: 16, color: "bg-teal-200", orbit: 300, duration: 200 },
        { name: "Neptune", size: 16, color: "bg-blue-600", orbit: 350, duration: 240 }
    ];

    return (
        <motion.div
            className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
        >
            {/* Milky Way Background */}
            <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                animate={{
                    rotate: isHovered ? 360 : 0,
                    opacity: isHovered ? 0.8 : 0.6
                }}
                transition={{
                    rotate: { duration: 480, repeat: Infinity, ease: "linear" }
                }}
            >
                {/* Milky Way Core */}
                <div className="absolute left-1/2 top-1/2 w-[300px] h-[100px] -translate-x-1/2 -translate-y-1/2
                      bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-purple-900/30 blur-xl" />

                {/* Milky Way Stars */}
                {Array.from({ length: 300 }).map((_, i) => (
                    <motion.div
                        key={`mw-star-${i}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 2 + 0.5}px`,
                            height: `${Math.random() * 2 + 0.5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.3
                        }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity
                        }}
                    />
                ))}
            </motion.div>

            {/* Sun (Central Star) */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-gradient-to-br from-yellow-400 to-orange-500
                  shadow-lg shadow-yellow-500/30 z-10"
                animate={{
                    scale: isHovered ? [1, 1.1, 1] : 1,
                    boxShadow: isHovered
                        ? "0 0 60px rgba(255, 200, 50, 0.6)"
                        : "0 0 40px rgba(255, 200, 50, 0.4)"
                }}
                transition={{
                    scale: { duration: 5, repeat: Infinity },
                    boxShadow: { duration: 3 }
                }}
            >
                {/* Sun Corona */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-yellow-300/30"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0.3, 0.7]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity
                    }}
                />
            </motion.div>

            {/* Planets */}
            {planets.map((planet, i) => (
                <motion.div
                    key={planet.name}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     ${planet.color} rounded-full shadow-md z-10`}
                    style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                        x: `${planet.orbit}px`,
                        y: 0
                    }}
                    animate={{
                        rotate: 360,
                        x: `${planet.orbit * Math.cos(i * 0.78)}px`,
                        y: `${planet.orbit * Math.sin(i * 0.78)}px`
                    }}
                    transition={{
                        x: { duration: planet.duration, repeat: Infinity, ease: "linear" },
                        y: { duration: planet.duration, repeat: Infinity, ease: "linear" },
                        rotate: { duration: planet.duration/4, repeat: Infinity, ease: "linear" }
                    }}
                >
                    {/* Saturn's Rings */}
                    {planet.rings && (
                        <div className="absolute -inset-4 border-2 border-yellow-100/50 rounded-full" />
                    )}

                    {/* Planet Glow */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-white/20"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
            ))}

            {/* Orbital Paths */}
            {planets.map((planet) => (
                <motion.div
                    key={`orbit-${planet.name}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    border border-white/10 rounded-full pointer-events-none"
                    style={{
                        width: `${planet.orbit * 2}px`,
                        height: `${planet.orbit * 2}px`
                    }}
                />
            ))}

            {/* Interactive Glow */}
            <motion.div
                className="absolute -inset-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10
                  rounded-full blur-xl pointer-events-none"
                animate={{
                    opacity: isHovered ? 0.6 : 0.3,
                    scale: isHovered ? 1.05 : 1
                }}
            />

            {/* Floating Asteroids */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`asteroid-${i}`}
                    className="absolute bg-gray-500 rounded-full"
                    style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.7
                    }}
                    animate={{
                        x: `${Math.random() * 100 - 50}px`,
                        y: `${Math.random() * 100 - 50}px`,
                        rotate: 360
                    }}
                    transition={{
                        x: { duration: 50 + Math.random() * 100, repeat: Infinity, ease: "linear" },
                        y: { duration: 50 + Math.random() * 100, repeat: Infinity, ease: "linear" },
                        rotate: { duration: 20 + Math.random() * 40, repeat: Infinity, ease: "linear" }
                    }}
                />
            ))}
        </motion.div>
    );
};

export default SolarSystem;