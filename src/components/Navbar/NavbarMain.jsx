import NavbarLogo from "./NavbarLogo.jsx";
import NavbarLinks from "./NavbarLinks.jsx";
import NavbarBtn from "./NavbarBtn.jsx";
import NavbarToggler from "./NavbarToggler.jsx";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavbarMain = () => {
    const menuOpen = useSelector((state) => state.menu.menuOpen);

    return (
        <motion.nav
            className="max-w-[1700px] mx-auto w-full px-4 mt-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Cosmic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.3
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Main Navbar Container */}
            <motion.div
                className="flex justify-between w-full max-w-[1600px] mx-auto items-center p-6 rounded-3xl relative z-10"
                style={{
                    background: 'rgba(10, 8, 28, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(168, 85, 247, 0.3)',
                    boxShadow: '0 0 30px rgba(103, 58, 183, 0.2)'
                }}
                whileHover={{
                    boxShadow: '0 0 40px rgba(103, 58, 183, 0.4)',
                    borderColor: 'rgba(168, 85, 247, 0.5)'
                }}
                transition={{ duration: 0.3 }}
            >
                <NavbarLogo />
                <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <div className="hidden lg:block">
                    <NavbarBtn />
                </div>
                <div className="lg:hidden">
                    <NavbarToggler />
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default NavbarMain;