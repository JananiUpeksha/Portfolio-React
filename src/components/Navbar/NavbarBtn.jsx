import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarBtn = () => {
    const navigate = useNavigate();

    const handleHireMeClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <motion.button
            onClick={handleHireMeClick}
            className="px-6 py-3 rounded-full text-lg font-medium font-body flex items-center gap-2
                      bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900
                      border border-purple-400/30 hover:border-purple-200/50
                      transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(129,140,248,0.3)]
                      relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Cosmic particles */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(5)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            x: [0, (Math.random() - 0.5) * 50],
                            y: [0, (Math.random() - 0.5) * 50]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            repeatDelay: 3
                        }}
                    />
                ))}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/10 group-hover:bg-purple-400/20 transition-all duration-500" />

            <div className="relative z-10 text-white flex items-center gap-2">
                <span>Hire Me</span>
                <motion.div
                    animate={{
                        x: [0, 4, 0],
                        y: [0, 4, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                >
                    <LuArrowDownRight className="text-purple-300" />
                </motion.div>
            </div>
        </motion.button>
    );
};

export default NavbarBtn;