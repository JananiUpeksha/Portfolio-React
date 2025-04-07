import { motion } from "framer-motion";

const NavbarLinks = () => {
    const navItems = [
        { name: "About Me", id: "aboutme" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "project" },
        { name: "Contact", id: "contact" },
    ];

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ul className="navbar-links cosmic-nav">
            {navItems.map((item, index) => (
                <motion.li
                    key={index}
                    className="nav-item-group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button
                        onClick={() => handleScroll(item.id)}
                        className="cosmic-nav-button"
                    >
                        {item.name}

                        <motion.div
                            className="cosmic-underline"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />

                        <div className="star-container">
                            {[...Array(3)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="floating-star"
                                    style={{
                                        width: `${Math.random() * 2 + 1}px`,
                                        height: `${Math.random() * 2 + 1}px`,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        opacity: [0, 0.8, 0],
                                        x: [0, (Math.random() - 0.5) * 20],
                                        y: [0, (Math.random() - 0.5) * 20]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.2,
                                        repeat: Infinity
                                    }}
                                />
                            ))}
                        </div>
                    </button>
                </motion.li>
            ))}
        </ul>
    );
};

export default NavbarLinks;

